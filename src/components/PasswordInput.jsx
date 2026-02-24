import { motion } from "framer-motion";
import { FaCheck, FaRegCopy } from "react-icons/fa6";
import { getStrengthColor } from "../utils/passwordValidator";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

export const PasswordInput = ({
  password,
  setPassword,
  showPassword,
  setShowPassword,
  data,
}) => {
  const { copied, copy } = useCopyToClipboard();

  return (
    <>
      <div className="flex items-center gap-2 text-xs mb-2">
        <input
          id="showpass"
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <label htmlFor="showpass">Show password</label>
      </div>

      <div className="relative">
        <motion.input
          aria-label="Password input"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          animate={{
            boxShadow:
              password && data
                ? data.level === "Strong"
                  ? "0 0 20px rgba(59, 130, 246, 0.3)"
                  : data.level === "Medium"
                    ? "0 0 20px rgba(234, 179, 8, 0.3)"
                    : "0 0 20px rgba(239, 68, 68, 0.3)"
                : "0 0 0px rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3 }}
          className={`w-full border rounded px-4 py-3 outline-none transition-all duration-200 focus:ring-2 ${getStrengthColor(
            data?.level,
            !data,
          )}`}
        />

        <motion.button
          aria-label="Copy password"
          onClick={() => copy(password)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-3 top-3 text-gray-500 hover:text-blue-600 transition"
        >
          {copied ? <FaCheck /> : <FaRegCopy />}
        </motion.button>
      </div>
    </>
  );
};
