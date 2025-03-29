
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Github, ExternalLink } from 'lucide-react';
import gameScreenshot from '../assets/dots-and-boxes.png';

const GameShowcase = () => {
  const { user } = useAuth();

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-game-dark">
              Play <span className="text-game-primary">Dots & Boxes</span> Today!
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              A classic paper-and-pencil game for two players, now available as a JavaFX desktop application. 
              Challenge your friends or test your skills against the computer!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {user ? (
                <Link to="/dashboard" className="btn-download flex items-center justify-center">
                  Download Now
                </Link>
              ) : (
                <Link to="/login" className="btn-download flex items-center justify-center">
                  Login to Download
                </Link>
              )}
              <a 
                href="https://github.com/Kavi7605/dotsandboxes/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Github size={20} />
                <span>View on GitHub</span>
              </a>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h3 className="font-semibold text-game-dark mb-2">Game Features:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-game-primary mr-2"></span>
                  Single & Multiplayer Modes
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-game-primary mr-2"></span>
                  Customizable Grid Size
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-game-primary mr-2"></span>
                  Score Tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-game-primary mr-2"></span>
                  Beautiful UI
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-game-primary mr-2"></span>
                  Works on All Platforms
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-game-primary mr-2"></span>
                  Easy Installation
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-3xl opacity-30"></div>
            <div className="relative animate-float">
              <img 
                src={gameScreenshot} 
                alt="Dots and Boxes Game" 
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-3 -right-3 bg-white p-2 rounded-lg shadow-lg">
                <ExternalLink className="text-game-primary" size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;
