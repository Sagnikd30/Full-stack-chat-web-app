import { Link, useNavigate } from "react-router-dom";
import { MessageSquare, Settings, UserCircle, LogOut } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <header className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-all">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-lg font-bold">Chatty</h1>
          </Link>

          {/* Right: Menu */}
          <div className="flex items-center gap-6">
            <Link to="/settings" title="Settings">
              <Settings className="w-5 h-5 text-base-content hover:text-primary transition" />
            </Link>

            {authUser ? (
              <>
                <Link to="/profile" title="Profile">
                  <UserCircle className="w-5 h-5 text-base-content hover:text-primary transition" />
                </Link>
                <button
                  onClick={handleLogout}
                  title="Logout"
                  className="hover:text-error transition text-base-content"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
