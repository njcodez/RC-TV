'use client'
import React, { useState } from 'react';
import Navbar from '../_components/Navbar';
import VideoPlayer from '../_components/VideoPlayer';
import MoreToWatchCard from '../_components/MoreToWatch';
import EmployeeCard from '../_components/Employee';
import moreToWatchVideos from '../_components/data/Employee';
import employeeData from '../_components/data/MoreToWatch';

const App: React.FC = () => {

  const [videoUrl, setVideoUrl] = useState<string>('https://www.youtube.com/embed/kqGj31bQQQ0');
  const updateVideoUrl = (newUrl: string) => {
    setVideoUrl(newUrl);
  };

  return (
    <div className="bg-cover bg-fixed bg-center min-h-screen" style={{ backgroundImage: "url('/header.png')" }}> 
      <Navbar onNavLinkClick={updateVideoUrl} />
      <div className="container mx-auto px-4 py-8 mt-12">
        <VideoPlayer url={videoUrl} /> 
        <h2 className="text-white text-2xl mb-4 mt-8 font-bold pl-4 border-l-4 border-purple-600">More to Watch</h2>
        
        <div className="flex overflow-x-scroll scrollbar-hide p-4">
          {employeeData.map((video, index) => (
            <MoreToWatchCard key={index} {...video} />
          ))}
        </div>

        <h2 className="text-white text-2xl mb-4 mt-8 font-bold pl-4 border-l-4 border-purple-600">About Us</h2> 
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0.1"> 
          {moreToWatchVideos.map((employee, index) => (
            <EmployeeCard key={index} {...employee} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
