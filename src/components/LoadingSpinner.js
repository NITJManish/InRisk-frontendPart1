export default function LoadingSpinner() {
    return (
      <div className="flex justify-center items-center mt-8">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="ml-4 text-blue-500 font-semibold">Loading...</p>
      </div>
    );
  }
  