import { useState, useRef, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ChevronDown } from "lucide-react";
import { visitorsData, connectionsData, interactionsData, impressionsData } from "../utils/dataSets";

const metrics = ["Visitors", "Connections", "Interactions", "Impressions"];
const timeRanges = ["Today", "Yesterday", "Last 7 days", "Last 30 days"];
const addOptions = ["Connections", "Interactions", "Impressions"];

export default function OverviewCard() {
  const [selectedMetric, setSelectedMetric] = useState("Visitors");
  const [selectedTimeRange, setSelectedTimeRange] = useState("Last 30 days");
  const [showMetricDropdown, setShowMetricDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);
  const [addButtonText, setAddButtonText] = useState("+Add");

  const metricRef = useRef(null);
  const timeRef = useRef(null);
  const addRef = useRef(null);

  const dataMap = {
    Visitors: visitorsData,
    Connections: connectionsData,
    Interactions: interactionsData,
    Impressions: impressionsData,
  };

  const currentData = dataMap[selectedMetric][selectedTimeRange];
  const totalValue = currentData.reduce((sum, item) => sum + item.value, 0);
  const maxValue = Math.max(...currentData.map((item) => item.value));
  const yAxisMax = Math.ceil(maxValue / 100) * 100;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        metricRef.current &&
        !metricRef.current.contains(event.target) &&
        timeRef.current &&
        !timeRef.current.contains(event.target) &&
        addRef.current &&
        !addRef.current.contains(event.target)
      ) {
        setShowMetricDropdown(false);
        setShowTimeDropdown(false);
        setShowAddDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleAddSelection = (option) => {
    setSelectedMetric(option);
    setAddButtonText(`${option}`);
    setShowAddDropdown(false);
  };

  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg w-full border border-white/20">
      <h2 className="text-lg sm:text-xl font-bold mb-3">Overview</h2>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 relative space-y-2 sm:space-y-0">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="relative" ref={metricRef}>
            <button
              className="flex items-center bg-gray-800 px-2 sm:px-3 py-1 rounded-lg text-xs"
              onClick={() => setShowMetricDropdown(!showMetricDropdown)}
            >
              {selectedMetric}
              <ChevronDown className="w-3 h-3 ml-1 sm:ml-2 text-pink-500" />
            </button>
            {showMetricDropdown && (
              <div className="absolute left-0 top-full mt-1 w-28 sm:w-32 bg-gray-900 shadow-lg rounded-lg p-2 z-10">
                {metrics.map((metric) => (
                  <button
                    key={metric}
                    onClick={() => {
                      setSelectedMetric(metric);
                      setShowMetricDropdown(false);
                    }}
                    className={`block text-left w-full px-2 py-1 text-xs rounded hover:bg-gray-700 ${
                      selectedMetric === metric ? "bg-gray-700" : ""
                    }`}
                  >
                    {metric}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative" ref={timeRef}>
            <button
              className="flex items-center bg-gray-800 px-2 sm:px-3 py-1 rounded-lg text-xs"
              onClick={() => setShowTimeDropdown(!showTimeDropdown)}
            >
              {selectedTimeRange}
              <ChevronDown className="w-3 h-3 ml-1 sm:ml-2" />
            </button>
            {showTimeDropdown && (
              <div className="absolute left-0 top-full mt-1 w-32 sm:w-36 bg-gray-900 shadow-lg rounded-lg p-2 z-10">
                {timeRanges.map((range) => (
                  <button
                    key={range}
                    onClick={() => {
                      setSelectedTimeRange(range);
                      setShowTimeDropdown(false);
                    }}
                    className={`block text-left w-full px-2 py-1 text-xs rounded hover:bg-gray-700 ${
                      selectedTimeRange === range ? "bg-gray-700" : ""
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative" ref={addRef}>
            <button
              className="flex items-center bg-gray-800 px-2 sm:px-3 py-1 rounded-lg text-xs"
              onClick={() => setShowAddDropdown(!showAddDropdown)}
            >
              {addButtonText}
            </button>
            {showAddDropdown && (
              <div className="absolute left-0 top-full mt-1 w-28 sm:w-32 bg-gray-900 shadow-lg rounded-lg p-2 z-10">
                {addOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAddSelection(option)}
                    className="block text-left w-full px-2 py-1 text-xs rounded hover:bg-gray-700"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="text-xl sm:text-2xl font-bold inline-flex items-center gap-2">
        {totalValue.toLocaleString()}
        <div className="flex flex-col items-center leading-tight">
          <span className="text-green-400 text-xs">+469%</span>
          <span className="text-gray-400 text-xs">(897)</span>
        </div>
      </div>

      <div className="mt-2">
        <ResponsiveContainer width="100%" height={120} className="sm:h-[150px]">
          <LineChart data={currentData}>
            <XAxis dataKey="name" stroke="#666" tick={{ fontSize: 10 }} />
            <YAxis
              stroke="#666"
              tick={{ fontSize: 10 }}
              tickCount={5}
              domain={[0, yAxisMax]}
              tickLine={false}
            />
            <Line type="linear" dataKey="value" stroke="white" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}