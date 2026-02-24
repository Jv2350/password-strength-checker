export const generateSecurePasswords = (count = 3, length = 16) => {
  const chars = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  };

  const all = chars.lower + chars.upper + chars.numbers + chars.symbols;

  return Array(count)
    .fill()
    .map(() => {
      let pwd = "";
      for (let i = 0; i < length; i++) {
        pwd += all.charAt(Math.floor(Math.random() * all.length));
      }
      return pwd;
    });
};
