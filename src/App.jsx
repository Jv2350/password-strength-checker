import { useState } from "react";

export default function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(null);

  const checkPassword = async (value) => {
    setPassword(value);

    const API = import.meta.env.DEV ? "http://localhost:8000" : "";

    const res = await fetch(`${API}/api/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: value }),
    });

    const data = await res.json();
    setStrength(data);
  };

  const getColor = () => {
    if (!strength) return "gray";
    if (strength.level === "Weak") return "red";
    if (strength.level === "Medium") return "orange";
    return "green";
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h2>Password Strength Checker 🔐</h2>

      <input
        type="password"
        placeholder="Enter password..."
        value={password}
        onChange={(e) => checkPassword(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      {strength && (
        <div style={{ marginTop: "20px" }}>
          <div
            style={{
              height: "10px",
              width: `${strength.score * 25}%`,
              backgroundColor: getColor(),
              transition: "0.3s",
            }}
          />
          <p>{strength.level}</p>
        </div>
      )}
    </div>
  );
}
