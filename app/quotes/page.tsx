import QuotesList from "@/components/QuotesList";

interface Quote {
    quote: string;
    author: string;
}

async function fetchQuotes(): Promise<Quote[]> {
    const apiKey = process.env.QUOTES_API_KEY;

    if (!apiKey) {
        throw new Error("QUOTES_API_KEY not set in environment");
    }
    console.log(apiKey);
    
    const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: { "X-Api-Key": apiKey },
        cache: "no-store",
    });

    if (res.status !== 200) {
        throw new Error("Failed to fetch quotes");
    }

    const data = await res.json();
    return data;
}

export default async function QuotesPage() {
    try {
        const quotes = await fetchQuotes();
        return (
            <div className="min-h-screen bg-gray-100 p-6">
                <QuotesList initialQuotes={quotes} />
            </div>
        );
    } catch (error) {
        return (
            <div className="min-h-screen bg-gray-100 p-6">
                <p className="text-red-500">Error: {(error as Error).message}</p>
            </div>
        )
    } 

}
