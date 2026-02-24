import { motion } from "framer-motion";
import { FaCheck, FaRegCopy } from "react-icons/fa6";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

export const SuggestionPill = ({ password, index }) => {
  const { copied, copy } = useCopyToClipboard();

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className="flex items-center justify-between p-2 bg-gray-100 rounded-lg border border-gray-200 group hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 cursor-pointer"
    >
      <code className="text-xs font-mono text-gray-700 group-hover:text-purple-600 transition-colors truncate">
        {password}
      </code>
      <button
        onClick={() => copy(password)}
        className="ml-2 p-1 text-gray-400 hover:text-purple-600 transition-all duration-200 group-hover:scale-110 flex-shrink-0"
        aria-label="Copy password"
      >
        {copied ? <FaCheck /> : <FaRegCopy />}
      </button>
    </motion.div>
  );
};
