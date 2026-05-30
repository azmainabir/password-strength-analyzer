import { usePasswordAnalysis } from "./hooks/usePasswordAnalysis";
import PasswordInput from "./components/PasswordInput";
import StrengthMeter from "./components/StrengthMeter";
import BreachChecker from "./components/BreachChecker";
import PasswordGenerator from "./components/PasswordGenerator";

export default function App() {
  const { password, setPassword, analysis, breachCount, breachLoading } =
    usePasswordAnalysis();

  return (
    <div
      className="min-h-screen bg-black flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at top, #0d1f0d 0%, #000000 70%)",
      }}
    >
      {/* Hacker grid lines */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#00ff41 1px, transparent 1px), linear-gradient(90deg, #00ff41 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="w-full max-w-md rounded-2xl p-6 space-y-5 relative"
        style={{
          background: "rgba(0, 20, 0, 0.85)",
          border: "1px solid #00ff41",
          boxShadow:
            "0 0 30px rgba(0,255,65,0.15), inset 0 0 30px rgba(0,255,65,0.03)",
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1
              className="text-xl font-bold"
              style={{ color: "#00ff41", fontFamily: "monospace" }}
            >
              &gt; PASSWORD_ANALYZER
            </h1>
            <p className="text-xs mt-0.5" style={{ color: "#00aa2a" }}>
              // your password never leaves your device
            </p>
          </div>
          <div
            className="text-xs px-2 py-1 rounded"
            style={{
              color: "#00ff41",
              border: "1px solid #00ff41",
              fontFamily: "monospace",
            }}
          >
            v1.0.0
          </div>
        </div>

        {/* Input */}
        <PasswordInput value={password} onChange={setPassword} />

        {/* Analysis results */}
        {analysis && (
          <div className="space-y-4">
            <StrengthMeter score={analysis.score} />

            <div className="grid grid-cols-2 gap-3">
              <div
                className="p-3 rounded-xl"
                style={{
                  background: "rgba(0,255,65,0.05)",
                  border: "1px solid #00ff4133",
                }}
              >
                <p
                  className="text-xs mb-1"
                  style={{ color: "#00aa2a", fontFamily: "monospace" }}
                >
                  // entropy
                </p>
                <p
                  className="text-lg font-bold"
                  style={{ color: "#00ff41", fontFamily: "monospace" }}
                >
                  {analysis.entropy}
                  <span
                    className="text-xs font-normal ml-1"
                    style={{ color: "#00aa2a" }}
                  >
                    bits
                  </span>
                </p>
              </div>
              <div
                className="p-3 rounded-xl"
                style={{
                  background: "rgba(0,255,65,0.05)",
                  border: "1px solid #00ff4133",
                }}
              >
                <p
                  className="text-xs mb-1"
                  style={{ color: "#00aa2a", fontFamily: "monospace" }}
                >
                  // crack_time
                </p>
                <p
                  className="text-sm font-bold leading-tight"
                  style={{ color: "#00ff41", fontFamily: "monospace" }}
                >
                  {analysis.crackTime}
                </p>
              </div>
            </div>

            {(analysis.warning || analysis.suggestions.length > 0) && (
              <div
                className="p-3 rounded-xl"
                style={{
                  background: "rgba(255,170,0,0.05)",
                  border: "1px solid #ffaa0044",
                }}
              >
                {analysis.warning && (
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: "#ffaa00", fontFamily: "monospace" }}
                  >
                    ⚠ {analysis.warning}
                  </p>
                )}
                {analysis.suggestions.map((s, i) => (
                  <p
                    key={i}
                    className="text-xs"
                    style={{ color: "#cc8800", fontFamily: "monospace" }}
                  >
                    → {s}
                  </p>
                ))}
              </div>
            )}

            <BreachChecker count={breachCount} loading={breachLoading} />
          </div>
        )}

        {/* Generator */}
        <PasswordGenerator onUse={setPassword} />

        {/* Footer */}
        <p
          className="text-xs text-center pt-2"
          style={{
            color: "#005514",
            borderTop: "1px solid #00ff4122",
            fontFamily: "monospace",
          }}
        >
          developed_by: Azmain Tahmid Abir
        </p>
      </div>
    </div>
  );
}
