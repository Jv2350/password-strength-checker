import { motion } from "framer-motion";

export const CrackTime = ({ data, loading }) => {
  return (
    <motion.div
      className="text-center mt-2 min-h-[45px] flex flex-col justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {loading ? (
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-xs text-gray-400 flex items-center justify-center gap-2"
        >
          <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
          Analyzing…
        </motion.p>
      ) : (
        data && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-500 text-sm mb-1">Time to crack:</p>
            <motion.p
              key={data.crack_time}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
            >
              {data.crack_time}
            </motion.p>
          </motion.div>
        )
      )}
    </motion.div>
  );
};
