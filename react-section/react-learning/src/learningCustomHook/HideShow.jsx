import useToggle from "./hooks/useToggle"

const HideShow = () => {
  const [isVisible, toggle] = useToggle();

  return (
    <div className="flex flex-col items-center justify-center mt-12 bg-gray-300 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Custom Hook: useToggle Example
      </h1>

      {isVisible && (
        <p className="text-lg text-gray-700 mb-4">Hello ji kya haal chall 😎</p>
      )}

      <button
        onClick={toggle}
        className="px-6 py-2 bg-blue-500 cursor-pointer text-white rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default HideShow;
