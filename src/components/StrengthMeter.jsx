const LEVELS = [
  { label: "Very weak", color: "bg-red-500" },
  { label: "Weak", color: "bg-orange-500" },
  { label: "Fair", color: "bg-yellow-400" },
  { label: "Strong", color: "bg-lime-500" },
  { label: "Very strong", color: "bg-green-500" },
];

export default function StrengthMeter({ score }) {
  const level = LEVELS[score];

  return (
    <div className="w-full">
      <div className="flex gap-1 mb-1">
        {LEVELS.map((l, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-all duration-500 ${
              i <= score ? l.color : "bg-gray-200 dark:bg-gray-700"
            }`}
          />
        ))}
      </div>
      <p
        className={`text-sm font-medium transition-colors duration-300 ${
          score <= 1
            ? "text-red-500"
            : score === 2
              ? "text-yellow-500"
              : "text-green-500"
        }`}
      >
        {level.label}
      </p>
    </div>
  );
}
