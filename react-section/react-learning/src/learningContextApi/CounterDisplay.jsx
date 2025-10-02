import { useCounter } from "./context/counter/CounterContext";

const CounterDisplay = () => {
  const { count, setCount } = useCounter();

  return (
    <div className="flex flex-col items-center justify-center py-8 mt-20 bg-gray-200 space-y-4">
      <h1 className="text-3xl font-bold text-blue-600">Context API Counter</h1>

      <p className="text-2xl font-semibold text-gray-800">Count: {count}</p>

      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-green-500 text-white  cursor-pointer rounded hover:bg-green-600 transition"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white cursor-pointer rounded hover:bg-red-600 transition"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
      </div>
      <button
        className="px-4 py-2 bg-gray-500 text-white cursor-pointer rounded hover:bg-gray-600 transition"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterDisplay;
