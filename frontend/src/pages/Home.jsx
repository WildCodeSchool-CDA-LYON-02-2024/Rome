import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import ceasar from "/videos/ceasar.mp4";
import ceasar2 from "/videos/ceasar2.mp4";
import ceasar3 from "/videos/ceasar3.mp4";
import ceasar4 from "/videos/ceasar4.mp4";
import ceasar5 from "/videos/ceasar5.mp4";
import intro from "/sons/intro.mp3";
import button from "/sons/button.mp3";
import button2 from "/sons/button2.mp3";

function Home() {
  const videos = [ceasar, ceasar2, ceasar3, ceasar4, ceasar5];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const audioRef1 = useRef(null);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        navigate("/user/login");
      }, 500); // 0.5 seconds delay

      return () => clearTimeout(timer);
    }
  }, [redirect, navigate]);

  const handleEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePlaySound1 = () => {
    if (audioRef1.current) {
      audioRef1.current.play();
    }
    setRedirect(true);
  };

  return (
    <div className="background-video-container">
      <audio ref={audioRef} src={intro} />
      <audio ref={audioRef1} src={button2} />
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
        <button onClick={handlePlaySound1} className="homeButton">
          Commencez votre aventure
        </button>
      </div>
    </div>
  );
}

export default Home;
