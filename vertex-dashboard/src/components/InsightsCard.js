const InsightsCard = () => {
  return (
    <div className="text-white p-4 rounded-lg shadow-lg border border-white/20 flex flex-col">
      <h2 className="text-lg sm:text-xl font-bold mb-3">Insights</h2>
      <div className="space-y-4 flex-grow">
        <div>
          <p className="text-sm sm:text-base font-medium">Founders</p>
          <div className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mt-0.5">
            7.4K
            <div className="flex flex-col items-center leading-tight">
              <span className="text-green-400 text-xs">+469%</span>
              <span className="text-gray-400 text-xs">(897)</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm sm:text-base font-medium">Investors</p>
          <div className="text-2xl sm:text-3xl font-bold flex items-center gap-2 mt-0.5">
            6.09K
            <div className="flex flex-col items-center leading-tight">
              <span className="text-green-400 text-xs">+469%</span>
              <span className="text-gray-400 text-xs">(897)</span>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-4 sm:mt-auto mx-auto bg-gray-800 px-3 py-1.5 rounded-lg text-xs">
        View Detailed Insight ➝
      </button>
    </div>
  );
};

export default InsightsCard;