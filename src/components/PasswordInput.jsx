import { useState } from "react";

export default function PasswordInput({ value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="enter_password_to_analyze..."
        className="w-full px-4 py-3 pr-16 rounded-xl text-base transition outline-none"
        style={{
          background: "rgba(0,255,65,0.05)",
          border: "1px solid #00ff41",
          color: "#00ff41",
          fontFamily: "monospace",
          caretColor: "#00ff41",
        }}
        autoComplete="new-password"
      />
      <button
        onClick={() => setShow((s) => !s)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs transition"
        style={{ color: "#00aa2a", fontFamily: "monospace" }}
        type="button"
      >
        {show ? "[hide]" : "[show]"}
      </button>
    </div>
  );
}
