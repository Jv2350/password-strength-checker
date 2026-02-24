import { motion } from "framer-motion";
import { STRENGTH_COLORS, EMPTY_STATE } from "../constants/colors";

export const StrengthSegments = ({ data }) => {
  const isEmpty = !data;
  const level = data?.level || "";
  const entropy = data?.entropy || 0;

  // percent bar based on entropy, cap at 100
  const percent = isEmpty ? 0 : Math.min(100, (entropy / 60) * 100);

  // choose colors from constants or fallback
  const colors = isEmpty
    ? EMPTY_STATE
    : STRENGTH_COLORS[level] || STRENGTH_COLORS.Weak;

  return (
    <div className="w-full bg-gray-200 rounded-full h-6 mt-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
        transition={{ duration: 0.3 }}
        className={`${colors.bg} h-full flex items-center justify-center text-xs font-semibold ${colors.text}`}
      >
        {isEmpty ? "" : level}
      </motion.div>
    </div>
  );
};
