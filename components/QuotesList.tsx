"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import QuoteItem from "./QuoteItem";
import axios from "axios";

interface Quote {
    quote: string;
    author: string;
}

export default function QuotesList({ initialQuotes }: { initialQuotes: Quote[] }) {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [quotes, setQuotes] = useState<Quote[]>(initialQuotes);

    if (!user) {
        router.push("/");
        return null;
    }

    const fetchMoreQuotes = async () => {
        try {
            const res = await axios.get<Quote[]>("/api/quotes");
            setQuotes((prev) => [...prev, ...res.data]);
        } catch (error) {
            console.error("Error fetching quotes", error);
        }
    };


    const removeQuote = (index: number) => {
        setQuotes((prev) => prev.filter((_, i) => i !== index));
    };

    const clearQuotes = () => {
        setQuotes([]);
    };

    return (
        <div className="p-10">
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-bold font-serif">Inspirational Quotes</h1>
                <button
                    className="bg-red-600 text-white py-2 px-4 rounded"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>

            <ul className="space-y-4">
                {quotes.map((quote, index) => (
                    <QuoteItem
                        key={index}
                        quote={quote}
                        onRemove={() => removeQuote(index)}
                    />
                ))}
            </ul>

            <div className="flex gap-4 mt-8">
                <button
                    onClick={fetchMoreQuotes}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Fetch More
                </button>
                <button
                    onClick={clearQuotes}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    Clear All
                </button>
            </div>
        </div>
    );
}
