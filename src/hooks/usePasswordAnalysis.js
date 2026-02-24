import { useState, useEffect, useRef } from "react";

export const usePasswordAnalysis = (password) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (!password) {
      setData(null);
      return;
    }

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      const API = import.meta.env.DEV ? "http://localhost:8000" : "";

      setLoading(true);

      try {
        const res = await fetch(`${API}/api/check`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        });

        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error analyzing password:", error);
      } finally {
        setLoading(false);
      }
    }, 0);

    return () => clearTimeout(debounceRef.current);
  }, [password]);

  return { data, loading };
};
