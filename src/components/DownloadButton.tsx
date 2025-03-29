
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const DownloadButton: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a download link for the repository zip
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://github.com/Kavi7605/dotsandboxes/archive/refs/heads/main.zip';
    downloadLink.setAttribute('download', 'dotsandboxes.zip');
    document.body.appendChild(downloadLink);
    
    // Simulate download progress with toast
    toast.loading('Downloading Dots and Boxes...', {
      duration: 2000,
    });
    
    // Trigger the download
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Set a timeout to simulate download completion
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadComplete(true);
      toast.success('Download complete! Enjoy playing Dots and Boxes!');
      
      // Reset the button after 3 seconds
      setTimeout(() => {
        setDownloadComplete(false);
      }, 3000);
    }, 2000);
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`btn-download text-lg px-8 py-4 ${
        downloadComplete 
          ? 'bg-green-600 hover:bg-green-700' 
          : ''
      }`}
    >
      {isDownloading ? (
        <>
          <svg 
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Downloading...
        </>
      ) : downloadComplete ? (
        <>
          <CheckCircle className="mr-2" />
          Downloaded!
        </>
      ) : (
        <>
          <Download className="mr-2" />
          Download Dots & Boxes
        </>
      )}
    </Button>
  );
};

export default DownloadButton;
