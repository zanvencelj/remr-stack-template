const ProgressBar = ({ step } ) => {
  return (
    <div className="w-full bg-gray-300 h-2 rounded-full mb-4">
      <div className="bg-green-500 h-2 rounded-full" style={{ width: `${(step / 6) * 100}%` }}></div>
    </div>
  );
};

export default ProgressBar;
