import React, { useRef, useEffect } from "react";
import bird from "/sound/bird.mp3";        // Effet sonore additionnel
import bgmusic from "/sound/bgmusic.mp3";  // Musique de fond principale

const GeneralMusic = () => {
  const audioRef1 = useRef(null); // Référence pour la musique de fond principale
  const audioRef2 = useRef(null); // Référence pour l'effet sonore additionnel

  useEffect(() => {
    const audioElement1 = audioRef1.current;
    const audioElement2 = audioRef2.current;

    // Configure la musique de fond principale
    audioElement1.volume = 0.5;  // Réglez le volume de la musique de fond
    audioElement1.play().catch((error) => {
      console.error("Failed to play background music:", error);
    });

    // Configure l'effet sonore additionnel
    audioElement2.volume = 0.3;  // Réglez le volume de l'effet sonore
    audioElement2.play().catch((error) => {
      console.error("Failed to play sound effect:", error);
    });

    // Nettoyage des effets lors du démontage du composant
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
