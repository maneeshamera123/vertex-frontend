import React from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import ReactCountryFlag from "react-country-flag";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const data = [
  { country: "India", code: "IN", color: "#9333ea", percentage: 40, coordinates: [78.9629, 20.5937] },
  { country: "USA", code: "US", color: "#f97316", percentage: 25, coordinates: [-95.7129, 37.0902] },
  { country: "Canada", code: "CA", color: "#facc15", percentage: 10, coordinates: [-106.3468, 56.1304] },
  { country: "UAE", code: "AE", color: "#22c55e", percentage: 7, coordinates: [53.8478, 23.4241] },
  { country: "Germany", code: "DE", color: "#3b82f6", percentage: 8, coordinates: [10.4515, 51.1657] },
  { country: "Australia", code: "AU", color: "#ef4444", percentage: 6, coordinates: [133.7751, -25.2744] },
  { country: "Brazil", code: "BR", color: "#ec4899", percentage: 4, coordinates: [-51.9253, -14.235] },
];

const Demographics = () => {
  return (
    <div className="bg-black text-white p-4 sm:p-6 rounded-lg shadow-lg w-full border border-white/20">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Demographics</h2>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 h-auto sm:h-72">
        <div className="w-full sm:w-2/3 relative">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 100 }}
            className="w-full h-48 sm:h-full"
            style={{ backgroundColor: "black" }}
          >
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="black"
                    stroke="#444"
                    strokeWidth={0.5}
                  />
                ))
              }
            </Geographies>
            {data.map((item, index) => (
              <Marker key={index} coordinates={item.coordinates}>
                <circle r={8} fill={item.color} stroke="white" strokeWidth={1.5} />
              </Marker>
            ))}
          </ComposableMap>
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex gap-2 flex-wrap text-xs">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="uppercase">{item.country}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-1/3 space-y-3 sm:space-y-4 flex flex-col">
          <div className="flex flex-col space-y-3 sm:space-y-4 flex-1">
            {data.map((item, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3">
                <ReactCountryFlag
                  countryCode={item.code}
                  svg
                  style={{ width: "1.2em", height: "0.8em" }}
                  className="sm:w-[1.5em] sm:h-[1em]"
                  title={item.country}
                />
                <span className="w-16 sm:w-20 uppercase text-xs sm:text-sm">{item.country}</span>
                <div className="flex-1 h-2 bg-gray-700 rounded overflow-hidden">
                  <div
                    className="h-2 rounded transition-all duration-1000"
                    style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
                  />
                </div>
                <span className="w-10 sm:w-12 text-right text-xs sm:text-sm">{item.percentage}%</span>
              </div>
            ))}
          </div>
          <div className="text-right">
            <button className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
              View all countries →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demographics;