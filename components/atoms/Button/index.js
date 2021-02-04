export default function Button({ text, secondary, primary }) {
  return (
    <button
      className={`inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg shadow hover:shadow-md ${
        (secondary && 'bg-gray-400 hover:bg-gray-600') ||
        (primary && 'bg-green-800 hover:bg-green-900')
      }`}>
      {text}
    </button>
  );
}
