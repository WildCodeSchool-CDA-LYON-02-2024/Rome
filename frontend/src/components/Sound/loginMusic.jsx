import React, { useRef, useEffect } from 'react';
import music from "/sound/intro.mp3";

const LoginMusic = () => {
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
    <audio ref={audioRef} src={music} autoPlay loop />
  );
};

export default LoginMusic;
