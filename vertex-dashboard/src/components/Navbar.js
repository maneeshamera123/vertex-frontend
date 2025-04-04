import { useState, useRef, useEffect } from 'react';
import { MoreVertical, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="bg-black text-white p-5 z-50">
      {/* Mobile Navbar */}
      <div className="flex sm:hidden items-center justify-between">
        <div className="flex space-x-6">
          <button className="text-white font-bold text-sm">Overview</button>
          <button className="text-gray-400 hover:text-white text-sm">Demographics</button>
        </div>
        <div className="relative" ref={menuRef}>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <MoreVertical className="w-6 h-6 text-white" />
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-40 bg-gray-900 rounded-lg shadow-lg p-2 z-50">
              <button
                className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Activity
              </button>
              <button
                className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Log out
              </button>
              <button
                className="block w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                More
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex flex-col">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-base sm:text-lg font-semibold">Analytics</span>
          </div>
          <div className="flex space-x-6">
            <button className="text-gray-400 hover:text-white text-sm sm:text-base">Activity</button>
            <button className="text-gray-400 hover:text-white text-sm sm:text-base">Log out</button>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="flex space-x-6">
            <button className="text-white font-bold text-sm sm:text-base">Overview</button>
            <button className="text-gray-400 hover:text-white text-sm sm:text-base">Demographics</button>
          </div>
          <div>
            <button className="text-gray-400 hover:text-white text-sm sm:text-base">More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;