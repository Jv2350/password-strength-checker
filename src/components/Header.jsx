import { motion } from "framer-motion";

export const Header = () => {
  return (
    <>
      {/* Navbar */}
      <header className="bg-blue-600 text-white px-6 py-1 flex justify-between items-center text-sm flex-shrink-0">
        <span className="font-semibold text-sm">PasswordMonster</span>
        <span className="text-xs opacity-80">info@passwordmonster.com</span>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 py-1.5 text-center flex-shrink-0">
        <h1 className="text-lg font-bold text-white">
          How Secure is Your Password?
        </h1>
      </section>
    </>
  );
};
