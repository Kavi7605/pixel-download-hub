
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-10 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full game-gradient flex items-center justify-center">
                <span className="text-white font-bold text-lg">D&B</span>
              </div>
              <span className="font-bold text-xl text-game-dark">Dots & Boxes</span>
            </div>
            <p className="text-gray-600 mb-4">
              A classic paper-and-pencil game reimagined as a beautiful desktop application.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Kavi7605/dotsandboxes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-game-primary"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:info@dotsandboxes.com" 
                className="text-gray-500 hover:text-game-primary"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-game-primary"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-game-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-game-primary">Home</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-game-primary">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-600 hover:text-game-primary">Sign Up</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-game-primary">Dashboard</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-game-dark">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com/Kavi7605/dotsandboxes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-game-primary"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Kavi7605/dotsandboxes/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-game-primary"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Kavi7605/dotsandboxes/wiki" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-game-primary"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Dots & Boxes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
