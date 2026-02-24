import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWandMagic } from "react-icons/fa6";
import { generateSecurePasswords } from "../utils/passwordGenerator";
import { SuggestionPill } from "./SuggestionPill";

export const PasswordGenerator = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const generatePasswords = () => {
    const newSuggestions = generateSecurePasswords(3, 16);
    setSuggestions(newSuggestions);
    setExpanded(true);
  };

  return (
    <div className="mt-3">
      <button
        onClick={generatePasswords}
        className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm rounded-lg hover:shadow-lg transition-all duration-300 group overflow-hidden relative"
      >
        <span className="relative z-10 flex items-center gap-2">
          <FaWandMagic className="group-hover:rotate-12 transition-transform duration-300" />
          Generate Suggestions
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-2 space-y-1"
          >
            {suggestions.map((pwd, idx) => (
              <SuggestionPill key={idx} password={pwd} index={idx} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
