import { motion } from "framer-motion";
import { validatePassword } from "../utils/passwordValidator";
import { FaHashtag, FaAsterisk } from "react-icons/fa6";
import { RxLetterCaseLowercase, RxLetterCaseUppercase } from "react-icons/rx";

export const PasswordIndicators = ({ password }) => {
  const { hasLower, hasUpper, hasNumber, hasSymbol } =
    validatePassword(password);

  const indicators = [
    { icon: <RxLetterCaseLowercase />, label: "Lower case", check: hasLower },
    { icon: <RxLetterCaseUppercase />, label: "Upper case", check: hasUpper },
    { icon: <FaHashtag />, label: "Numbers", check: hasNumber },
    { icon: <FaAsterisk />, label: "Symbols", check: hasSymbol },
  ];

  return (
    <motion.div
      className="flex flex-wrap gap-2 mt-2 text-xs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      {indicators.map((item, idx) => (
        <motion.span
          key={item.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
          className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs transition-all duration-300 ${
            item.check
              ? "text-green-600 bg-green-50"
              : "text-gray-400 bg-gray-50"
          }`}
        >
          <span className="text-lg">{item.icon}</span>
          {item.label}
        </motion.span>
      ))}
    </motion.div>
  );
};
