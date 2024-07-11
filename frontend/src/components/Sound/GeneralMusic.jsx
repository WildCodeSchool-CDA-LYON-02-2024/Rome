import { useRef, useEffect } from "react";
import bird from "/sound/bird.mp3"; 
import bgmusic from "/sound/bgmusic.mp3"; 

const GeneralMusic = () => {
  const audioRef1 = useRef(null); 
  const audioRef2 = useRef(null);

  useEffect(() => {
    const audioElement1 = audioRef1.current;
    const audioElement2 = audioRef2.current;

    audioElement1.volume = 0.5;  // Réglez le volume de la musique de fond
    audioElement1.play().catch((error) => {
      console.error("Failed to play background music:", error);
    });

    audioElement2.volume = 0.3;  // Réglez le volume de l'effet sonore
    audioElement2.play().catch((error) => {
      console.error("Failed to play sound effect:", error);
    });

    return () => {
      audioElement1.pause();
      audioElement2.pause();
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef1} src={bgmusic} autoPlay loop />
      <audio ref={audioRef2} src={bird} autoPlay loop />
    </div>
  );
};

export default GeneralMusic;
