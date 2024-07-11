import { useEffect, useState, useRef } from "react";
import "./Home.css";
import ceasar from "/videos/ceasar.mp4";
import ceasar2 from "/videos/ceasar2.mp4";
import ceasar3 from "/videos/ceasar3.mp4";
import ceasar4 from "/videos/ceasar4.mp4";
import ceasar5 from "/videos/ceasar5.mp4";
import intro from "/sound/music.mp3";
import ButtonSound from "../components/Sound/ButtonSound";

function Home() {
  const videos = [ceasar, ceasar2, ceasar3, ceasar4, ceasar5];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const handleEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="background-video-container">
      <audio ref={audioRef} src={intro} loop />{" "}
      <video
        ref={videoRef}
        autoPlay
        loop={false}
        muted
        className="background-video"
        onEnded={handleEnded}
        key={videos[currentVideoIndex]}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Rome Antique</h1>
        <ButtonSound
          text="Commencez votre aventure"
          className="homeButton"
          navigateTo="/user/login"
        />
      </div>
    </div>
  );
}

export default Home;
