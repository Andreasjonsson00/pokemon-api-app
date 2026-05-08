const toastStyles = {
  success: "border-blue-300 bg-blue-600 text-white",
  remove: "border-red-300 bg-red-500 text-white",
};

const Toast = ({ toast }) => {
  if (!toast) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed right-4 top-32 z-50 w-[calc(100%-2rem)] max-w-sm sm:right-6 sm:top-36">
      <div
        className={`rounded-lg border px-4 py-3 text-left text-xs shadow-xl ${toastStyles[toast.tone]}`}
      >
        {toast.message}
      </div>
    </div>
  );
};

export default Toast;
