export async function checkBreach(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-1", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
    .toUpperCase();

  const prefix = hash.slice(0, 5);
  const suffix = hash.slice(5);

  const response = await fetch(
    `https://api.pwnedpasswords.com/range/${prefix}`,
  );
  const text = await response.text();

  const lines = text.split("\n");
  for (const line of lines) {
    const [hashSuffix, count] = line.split(":");
    if (hashSuffix.trim() === suffix) {
      return parseInt(count.trim());
    }
  }
  return 0;
}
