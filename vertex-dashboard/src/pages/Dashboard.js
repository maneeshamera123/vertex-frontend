import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import OverviewCard from "../components/OverviewCard";
import InsightsCard from "../components/InsightsCard";
import Demographics from "../components/DemographicsCard";

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-black min-h-screen">
      <Sidebar />
      <div className="flex-1 pb-16 sm:pb-0">
        <Navbar />
        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="sm:col-span-2">
            <OverviewCard />
          </div>
          <InsightsCard />
          <div className="col-span-1 sm:col-span-3">
            <Demographics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;