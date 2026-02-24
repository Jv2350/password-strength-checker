import { motion } from "framer-motion";
import { getStrengthSegmentColor } from "../utils/passwordValidator";

export const StrengthSegments = ({ data }) => {
  const segments = ["Weak", "Medium", "Strong"];
  const isEmpty = !data;

  return (
    <div className="grid grid-cols-3 gap-1.5 mt-2">
      {segments.map((s, idx) => (
        <motion.div
          key={s}
          initial={{ opacity: 0, y: -10 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: data?.level === s ? 1.05 : 1,
            boxShadow:
              data?.level === s ? "0 8px 16px rgba(0,0,0,0.1)" : "none",
          }}
          transition={{ delay: idx * 0.1, duration: 0.3 }}
          whileHover={{ y: -2 }}
          className={`h-9 flex items-center justify-center font-semibold text-sm rounded cursor-default select-none ${getStrengthSegmentColor(
            s,
            data?.level,
            isEmpty,
          )} transition-all duration-300`}
        >
          {s}
        </motion.div>
      ))}
    </div>
  );
};
