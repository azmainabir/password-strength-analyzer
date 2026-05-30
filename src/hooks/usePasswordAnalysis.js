import { useState, useEffect, useRef } from "react";
import zxcvbn from "zxcvbn";
import { calculateEntropy } from "../utils/entropy";
import { checkBreach } from "../utils/hibp";

export function usePasswordAnalysis() {
  const [password, setPassword] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [breachCount, setBreachCount] = useState(null);
  const [breachLoading, setBreachLoading] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (!password) {
      setAnalysis(null);
      setBreachCount(null);
      return;
    }

    const result = zxcvbn(password);
    setAnalysis({
      score: result.score,
      entropy: calculateEntropy(password),
      crackTime: result.crack_times_display.offline_slow_hashing_1e4_per_second,
      warning: result.feedback.warning,
      suggestions: result.feedback.suggestions,
    });

    clearTimeout(debounceRef.current);
    setBreachLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const count = await checkBreach(password);
        setBreachCount(count);
      } catch (e) {
        setBreachCount(null);
      } finally {
        setBreachLoading(false);
      }
    }, 600);

    return () => clearTimeout(debounceRef.current);
  }, [password]);

  return { password, setPassword, analysis, breachCount, breachLoading };
}
