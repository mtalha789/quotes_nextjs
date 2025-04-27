import { motion } from "framer-motion";

interface Quote {
  quote: string;
  author: string;
}

export default function QuoteItem({
  quote,
  onRemove,
}: {
  quote: Quote;
  onRemove: () => void;
}) {
  return (
    <motion.blockquote
      className="bg-gray-100 p-6 rounded shadow flex flex-col gap-4"
      whileHover={{ border: "1px solid #ccc" }}
    >
      <p className="text-lg text-gray-700 font-light">
        <span className="font-bold">&ldquo;</span>
        {quote.quote}
        <span className="font-bold">&rdquo;</span>
      </p>
      <div className="flex justify-between px-3 align-center">
        <p className="text-sm font-medium text-blue-500">{quote.author}</p>
        <button
          onClick={onRemove}
          className="bg-red-600 text-white px-4 py-2 rounded self-end"
        >
          X
        </button>
      </div>
    </motion.blockquote>
  );
}
