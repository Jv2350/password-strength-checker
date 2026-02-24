export const validatePassword = (password) => {
  return {
    hasLower: /[a-z]/.test(password),
    hasUpper: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSymbol: /[!@#$%^&*]/.test(password),
  };
};

export const getStrengthColor = (level, isEmpty = false) => {
  if (isEmpty) return "focus:ring-blue-300";

  const normalized = level ? level.toLowerCase() : "";
  if (normalized.includes("weak")) return "focus:ring-red-400";
  if (normalized.includes("medium")) return "focus:ring-yellow-400";
  if (normalized.includes("strong")) return "focus:ring-blue-500";
  if (normalized.includes("elite") || normalized.includes("unbreakable"))
    return "focus:ring-purple-500";

  return "focus:ring-blue-300";
};

export const getStrengthSegmentColor = (
  segment,
  currentLevel,
  isEmpty = false,
) => {
  if (isEmpty) return "bg-gray-200";

  const segNorm = segment.toLowerCase();
  const curNorm = currentLevel ? currentLevel.toLowerCase() : "";

  // match based on inclusion rather than exact equality
  if (segNorm.includes("weak") && curNorm.includes("weak"))
    return "bg-red-500 text-white";
  if (segNorm.includes("medium") && curNorm.includes("medium"))
    return "bg-yellow-400 text-black";
  if (segNorm.includes("strong") && curNorm.includes("strong"))
    return "bg-blue-600 text-white";
  if (
    (segNorm.includes("elite") || segNorm.includes("unbreakable")) &&
    (curNorm.includes("elite") || curNorm.includes("unbreakable"))
  )
    return "bg-purple-500 text-white";

  return "bg-gray-200 text-gray-400";
};
