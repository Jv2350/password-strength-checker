import { useState } from "react";
import { usePasswordAnalysis } from "./hooks/usePasswordAnalysis";
import { Header } from "./components/Header";
import { PasswordInput } from "./components/PasswordInput";
import { StrengthSegments } from "./components/StrengthSegments";
import { PasswordIndicators } from "./components/PasswordIndicators";
import { CrackTime } from "./components/CrackTime";
import { LiveTips } from "./components/LiveTips";
import { Review } from "./components/Review";
import { PasswordGenerator } from "./components/PasswordGenerator";

export default function App() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { data, loading } = usePasswordAnalysis(password);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Header & Hero */}
      <Header />

      {/* Main Content - Scrollable */}
      <main className="flex-1 max-w-2xl w-full mx-auto bg-white shadow-sm rounded-t-2xl p-3 overflow-y-auto">
        <h2 className="text-base font-semibold">Take the Password Test</h2>

        <p className="text-xs text-gray-500 mt-0.5 mb-2">
          Tip: It's often better to have longer passwords than shorter, more
          complex ones.
        </p>

        {/* Password Input Section */}
        <PasswordInput
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          data={data}
        />

        {/* Strength Segments */}
        <StrengthSegments data={data} />

        {/* Password Indicators */}
        <PasswordIndicators password={password} />

        {/* Crack Time Display */}
        <CrackTime data={data} loading={loading} />

        {/* Live Tips */}
        {password && <LiveTips data={data} password={password} />}

        {/* Review Section */}
        <Review data={data} />

        {/* Password Generator */}
        <PasswordGenerator />

        {/* Privacy Notice */}
        <p className="mt-3 text-xs text-center text-gray-400">
          Your passwords are never stored. Even if they were, we have no idea
          who you are!
        </p>
      </main>
    </div>
  );
}
