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
    <motion.li
      className="bg-white p-4 rounded shadow flex justify-between items-center"
      whileHover={{ scale: 1.05 }}
    >
      <p>{quote.quote} - <strong>{quote.author}</strong></p>
      <button
        onClick={onRemove}
        className="bg-red-500 text-white px-2 py-1 rounded ml-4"
      >
        X
      </button>
    </motion.li>
  );
}
