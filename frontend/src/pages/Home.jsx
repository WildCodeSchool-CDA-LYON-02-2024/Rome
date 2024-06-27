import React, { useState, useRef } from "react";
import "./Home.css";
import ceasar from "../../public/videos/ceasar.mp4";
import ceasar2 from "../../public/videos/ceasar2.mp4";
import ceasar3 from "../../public/videos/ceasar3.mp4";
import ceasar4 from "../../public/videos/ceasar4.mp4";
import ceasar5 from "../../public/videos/ceasar5.mp4";

function Home() {
  const videos = [ceasar, ceasar2, ceasar3, ceasar4, ceasar5];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const handleEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="background-video-container">
      <video
        ref={videoRef}
        autoPlay
        loop={false}
        muted
        className="background-video"
        onEnded={handleEnded}
        key={videos[currentVideoIndex]} // Remount the video element to reset play state
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Rome Antique</h1>
        <button className="homeButton">Commencez votre aventure </button>
      </div>
    </div>
  );
}

export default Home;
