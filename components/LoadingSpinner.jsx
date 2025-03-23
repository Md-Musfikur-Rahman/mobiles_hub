const LoadingSpinner = ({
  size = "h-12 w-12",
  color = "border-purple-500",
}) => {
  return (
    <div className="w-4/5 mx-auto my-4 py-8 flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 ${color} ${size}`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
