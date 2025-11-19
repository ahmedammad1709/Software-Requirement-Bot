import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const location = useLocation();
  const { resolvedTheme, setTheme } = useTheme();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-glass bg-glass-bg border-b border-glass-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="/logo.png"
              alt="Software Requirement Bot logo"
              className="h-8 w-auto rounded-lg shadow-glow group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Software Requirement Bot
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/chat"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/chat")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Chat
            </Link>
            <Link
              to="/summary"
              className={`text-sm font-medium transition-colors duration-300 ${
                isActive("/summary")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Summary
            </Link>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <img src="/logo.png" alt="Logo" className="h-6 w-6" />
                  Software Requirement Bot
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <Link to="/" className="block text-sm font-medium text-foreground">Home</Link>
                <Link to="/chat" className="block text-sm font-medium text-foreground">Chat</Link>
                <Link to="/summary" className="block text-sm font-medium text-foreground">Summary</Link>
                <button
                  aria-label="Toggle theme"
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="mt-2 p-2 rounded-lg bg-muted w-full text-sm"
                >
                  {resolvedTheme === "dark" ? "Switch to Light" : "Switch to Dark"}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
