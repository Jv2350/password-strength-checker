import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLightbulb } from "react-icons/fa6";
import { ALL_TIPS, CONTEXTUAL_TIPS } from "../constants/tips";

export const LiveTips = ({ data, password }) => {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % ALL_TIPS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const displayTip = data
    ? CONTEXTUAL_TIPS[data.level][tipIndex % CONTEXTUAL_TIPS[data.level].length]
    : ALL_TIPS[tipIndex];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tipIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="flex items-center gap-3 p-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100 mt-2"
      >
        <div className="text-base flex-shrink-0">
          <FaLightbulb className="text-yellow-500" />
        </div>
        <p className="text-xs text-gray-700 font-medium">{displayTip}</p>
      </motion.div>
    </AnimatePresence>
  );
};
