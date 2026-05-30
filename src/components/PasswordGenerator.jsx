import { useState } from "react";

const CHARSET =
  "abcdefghijklmnopqrstuvwxyz" +
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
  "0123456789" +
  "!@#$%^&*()_+-=[]{}";

function generatePassword(length) {
  return Array.from(
    crypto.getRandomValues(new Uint8Array(length)),
    (byte) => CHARSET[byte % CHARSET.length],
  ).join("");
}

export default function PasswordGenerator({ onUse }) {
  const [length, setLength] = useState(16);
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  function handleGenerate() {
    setGenerated(generatePassword(length));
    setCopied(false);
  }

  function handleCopy() {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className="p-4 rounded-xl"
      style={{
        background: "rgba(0,255,65,0.03)",
        border: "1px solid #00ff4122",
      }}
    >
      <p
        className="text-sm font-bold mb-3"
        style={{ color: "#00ff41", fontFamily: "monospace" }}
      >
        &gt; password_generator
      </p>

      <div className="flex items-center gap-3 mb-3">
        <label
          className="text-xs"
          style={{ color: "#00aa2a", fontFamily: "monospace" }}
        >
          length: {length}
        </label>
        <input
          type="range"
          min="8"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="flex-1"
          style={{ accentColor: "#00ff41" }}
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleGenerate}
          className="px-3 py-2 rounded-lg text-sm font-bold transition"
          style={{
            background: "#00ff41",
            color: "#000",
            fontFamily: "monospace",
          }}
        >
          [generate]
        </button>

        {generated && (
          <>
            <code
              className="flex-1 px-3 py-2 rounded-lg text-xs overflow-x-auto whitespace-nowrap"
              style={{
                background: "rgba(0,0,0,0.5)",
                color: "#00ff41",
                border: "1px solid #00ff4133",
                fontFamily: "monospace",
              }}
            >
              {generated}
            </code>
            <button
              onClick={handleCopy}
              className="px-3 py-2 rounded-lg text-xs transition"
              style={{
                border: "1px solid #00ff41",
                color: "#00ff41",
                fontFamily: "monospace",
              }}
            >
              {copied ? "copied!" : "[copy]"}
            </button>
            <button
              onClick={() => onUse(generated)}
              className="px-3 py-2 rounded-lg text-xs font-bold transition"
              style={{
                background: "rgba(0,255,65,0.15)",
                color: "#00ff41",
                border: "1px solid #00ff41",
                fontFamily: "monospace",
              }}
            >
              [use]
            </button>
          </>
        )}
      </div>
    </div>
  );
}
