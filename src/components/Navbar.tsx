
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Menu, X, LogIn, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full game-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">D&B</span>
            </div>
            <span className="font-bold text-xl text-game-dark">Dots & Boxes</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-game-primary font-medium">
              Home
            </Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-game-primary font-medium">
                  Dashboard
                </Link>
                <Button 
                  variant="ghost" 
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-game-primary font-medium"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </Button>
              </>
            ) : (
              <>
                <Link 
                  to="/login"
                  className="text-gray-700 hover:text-game-primary font-medium flex items-center space-x-1"
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </Link>
                <Button 
                  onClick={() => navigate('/signup')}
                  className="btn-primary flex items-center space-x-1"
                >
                  <User size={18} />
                  <span>Sign Up</span>
                </Button>
              </>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-3">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-game-primary font-medium py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="block text-gray-700 hover:text-game-primary font-medium py-2"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="w-full text-left flex items-center space-x-1 text-gray-700 hover:text-game-primary font-medium py-2"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login"
                  className="block text-gray-700 hover:text-game-primary font-medium py-2 flex items-center space-x-1"
                  onClick={toggleMenu}
                >
                  <LogIn size={18} />
                  <span>Login</span>
                </Link>
                <Link 
                  to="/signup"
                  className="block text-gray-700 hover:text-game-primary font-medium py-2 flex items-center space-x-1"
                  onClick={toggleMenu}
                >
                  <User size={18} />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
