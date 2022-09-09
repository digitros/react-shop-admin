export default function Pagination({ offset, setOffset }) {
  const handlePrev = () => {
    if (offset <= 5) return;
    setOffset(offset - 5);
  };

  const handleNext = () => {
    setOffset(offset + 5);
  };

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between">
        <button onClick={handlePrev} className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Previous
        </button>
        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">
          Page: {offset / 5}
        </a>
        <button onClick={handleNext} className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
}
