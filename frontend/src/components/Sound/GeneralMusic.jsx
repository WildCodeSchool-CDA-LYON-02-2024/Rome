import React, { useRef, useEffect } from 'react';
import bird from "/sound/bird.mp3";

const GeneralMusic = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.play().catch((error) => {
      console.error("Failed to play audio:", error);
    });
    return () => {
      audioElement.pause();
    };
  }, []);

  return (
    <audio ref={audioRef} src={bird} autoPlay loop />
  );
};

export default GeneralMusic;
