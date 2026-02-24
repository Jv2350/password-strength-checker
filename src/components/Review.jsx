import { motion } from "framer-motion";

export const Review = ({ data }) => {
  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="mt-2 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-100"
    >
      <div className="flex gap-2 items-start">
        <span className="text-lg mt-1">
          {data.level === "Weak" ? "⚠️" : data.level === "Medium" ? "✨" : "🎉"}
        </span>
        <p className="text-xs text-gray-700 leading-relaxed">
          {data.breached
            ? "Review: Oh dear, using that password is like leaving your front door wide open. Your password is very weak because it contains a common password."
            : "Review: Good job. Your password shows resistance against common brute-force attacks."}
        </p>
      </div>
    </motion.div>
  );
};
