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

  const colors = {
    Weak: "focus:ring-red-400",
    Medium: "focus:ring-yellow-400",
    Strong: "focus:ring-blue-500",
  };

  return colors[level] || "focus:ring-blue-300";
};

export const getStrengthSegmentColor = (
  segment,
  currentLevel,
  isEmpty = false,
) => {
  if (isEmpty) return "bg-gray-200";

  if (segment === "Weak" && currentLevel === "Weak")
    return "bg-red-500 text-white";
  if (segment === "Medium" && currentLevel === "Medium")
    return "bg-yellow-400 text-black";
  if (segment === "Strong" && currentLevel === "Strong")
    return "bg-blue-600 text-white";

  return "bg-gray-200 text-gray-400";
};
