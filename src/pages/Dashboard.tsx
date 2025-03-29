
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DownloadButton from '@/components/DownloadButton';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info, Github, FileText, Terminal } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8 text-game-dark">Welcome to Your Dashboard</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Download Dots & Boxes</CardTitle>
                  <CardDescription>
                    Ready to play? Download the game and start having fun!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Alert className="bg-blue-50 border-blue-200">
                    <Info className="h-4 w-4 text-blue-500" />
                    <AlertDescription className="text-blue-700">
                      This will download the game source code. Follow the installation instructions below.
                    </AlertDescription>
                  </Alert>
                  
                  <div className="flex flex-col items-center py-6">
                    <div className="mb-8">
                      <DownloadButton />
                    </div>
                    <p className="text-gray-500 text-sm">
                      Version 1.0.0 | Last updated: June 2023
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Account Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-500">Name</p>
                      <p className="font-medium">{user.name || 'User'}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Account Status</p>
                      <div className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                        <p className="font-medium text-green-600">Active</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-game-dark">Installation Instructions</h2>
          <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 mb-10">
            <ol className="space-y-6">
              <li className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full game-gradient flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Extract the downloaded ZIP file</h3>
                  <p className="text-gray-600">
                    Extract the contents of the ZIP file to a folder on your computer.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full game-gradient flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ensure Java is installed</h3>
                  <p className="text-gray-600">
                    Make sure you have Java Development Kit (JDK) 8 or later installed on your computer.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full game-gradient flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Build with Maven</h3>
                  <p className="text-gray-600">
                    Open a terminal or command prompt, navigate to the extracted folder, and run:
                  </p>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded mt-2 font-mono text-sm">
                    mvn clean install
                  </div>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 h-8 w-8 rounded-full game-gradient flex items-center justify-center mr-3">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Run the application</h3>
                  <p className="text-gray-600">
                    After building, run the application with:
                  </p>
                  <div className="bg-gray-900 text-gray-100 p-3 rounded mt-2 font-mono text-sm">
                    java -jar target/dotsandboxes-1.0.jar
                  </div>
                </div>
              </li>
            </ol>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-game-dark">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="animate-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center mb-4 text-game-primary">
                  <Github size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Source Code</h3>
                <p className="text-gray-600 mb-4">
                  View or contribute to the project on GitHub.
                </p>
                <a 
                  href="https://github.com/Kavi7605/dotsandboxes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-game-primary font-medium hover:underline"
                >
                  Visit Repository
                </a>
              </CardContent>
            </Card>
            
            <Card className="animate-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center mb-4 text-game-primary">
                  <FileText size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Read the game documentation and learn the rules.
                </p>
                <a 
                  href="https://github.com/Kavi7605/dotsandboxes/wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-game-primary font-medium hover:underline"
                >
                  View Documentation
                </a>
              </CardContent>
            </Card>
            
            <Card className="animate-hover">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 flex items-center justify-center mb-4 text-game-primary">
                  <Terminal size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">Report Issues</h3>
                <p className="text-gray-600 mb-4">
                  Found a bug? Report it on the GitHub issues page.
                </p>
                <a 
                  href="https://github.com/Kavi7605/dotsandboxes/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-game-primary font-medium hover:underline"
                >
                  Report Issues
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
