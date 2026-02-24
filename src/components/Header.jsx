import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa6";

export const Header = () => {
  return (
    <>
      {/* Navbar */}
      <header className="bg-blue-600 text-white px-6 py-1 flex justify-between items-center text-sm flex-shrink-0">
        <span className="font-semibold text-sm flex items-center gap-1">
          <FaLock /> <span>SecureVault</span>
        </span>
        <span className="text-xs opacity-80">support@securevault.app</span>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 py-1 text-center flex-shrink-0">
        <h1 className="text-base font-semibold text-white">
          Password Strength Analyzer
        </h1>
      </section>
    </>
  );
};
