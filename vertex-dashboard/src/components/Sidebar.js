import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Activity, 
  Briefcase 
} from 'lucide-react';

const Sidebar = () => {

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-gray-900 text-white z-50">
        <div className="flex justify-around items-center py-2">
          <button className="flex flex-col items-center">
            <LayoutDashboard className="w-6 h-6 text-gray-400" />
            <span className="text-xs mt-1 text-gray-400">Dashboard</span>
          </button>
          <button className="flex flex-col items-center">
            <BarChart2 className="w-6 h-6 text-white" />
            <span className="text-xs mt-1 text-white">Analytics</span>
          </button>
          <button className="flex flex-col items-center">
            <Users className="w-6 h-6 text-gray-400" />
            <span className="text-xs mt-1 text-gray-400">Connect</span>
          </button>
          <button className="flex flex-col items-center">
            <Activity className="w-6 h-6 text-gray-400" />
            <span className="text-xs mt-1 text-gray-400">Activity</span>
          </button>
          <button className="flex flex-col items-center">
            <Briefcase className="w-6 h-6 text-gray-400" />
            <span className="text-xs mt-1 text-gray-400">Dealroom</span>
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden sm:block h-screen w-64 bg-black text-white p-5 flex flex-col">
        <div className="flex items-center mb-6">
          <img
            src="https://carnewschina.com/wp-content/uploads/2022/04/photo_2022-04-12_15-41-55.jpg"
            alt="Company Logo"
            className="w-10 h-10 mr-3 rounded-full"
          />
          <h1 className="text-xl font-bold">Vertxlabs, Inc</h1>
        </div>

        <div className="flex items-center -mb-8">
          <img
            src="https://static.toiimg.com/thumb/msid-88325619,imgsize-48632,width-900,height-1200,resizemode-6/88325619.jpg"
            alt="Profile"
            className="w-10 h-10 mr-2 rounded-full"
          />
        </div>

        <nav className="flex-1 ml-5">
          <ul>
            {[
              "Dashboard",
              "Analytics",
              "Connect",
              "Dealroom",
              "Profile",
              "Settings",
            ].map((item, index) => (
              <li
                key={index}
                className={`mb-4 cursor-pointer text-base pl-12 ${
                  item === "Analytics"
                    ? "font-bold text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;