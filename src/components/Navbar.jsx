import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Home, Info } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md shadow-lg rounded-full px-6 py-2 z-50 border border-[#B6F2DF]/50">
      <div className="flex items-center justify-center space-x-6">
        <NavLink to="/">
          {({ isActive }) => (
            <Button
              variant={isActive ? "default" : "ghost"}
              className={`flex items-center space-x-2 ${
                isActive
                  ? "bg-[#00B3AB] text-white hover:bg-[#00B3AB]/90"
                  : "text-gray-700 hover:text-[#00B3AB]"
              }`}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Button>
          )}
        </NavLink>

        <NavLink to="/about">
          {({ isActive }) => (
            <Button
              variant={isActive ? "default" : "ghost"}
              className={`flex items-center space-x-2 ${
                isActive
                  ? "bg-[#00B3AB] text-white hover:bg-[#00B3AB]/90"
                  : "text-gray-700 hover:text-[#00B3AB]"
              }`}
            >
              <Info className="w-5 h-5" />
              <span>About</span>
            </Button>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
