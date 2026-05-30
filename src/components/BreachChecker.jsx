export default function BreachChecker({ count, loading }) {
  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span
          className="animate-spin inline-block w-3 h-3 border-2 
                         border-gray-400 border-t-transparent rounded-full"
        />
        Checking breach databases...
      </div>
    );
  }

  if (count === null) return null;

  if (count === 0) {
    return (
      <p className="text-sm text-green-600 dark:text-green-400 font-medium">
        ✓ Not found in any known data breaches
      </p>
    );
  }

  return (
    <p className="text-sm text-red-500 font-medium">
      ✗ Found {count.toLocaleString()} times in real data breaches — avoid this
      password
    </p>
  );
}
