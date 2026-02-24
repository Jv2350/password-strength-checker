import { useState } from "react";

export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copy = async (text) => {
    if (!text) return;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
      return true;
    } catch (error) {
      console.error("Failed to copy:", error);
      return false;
    }
  };

  return { copied, copy };
};
