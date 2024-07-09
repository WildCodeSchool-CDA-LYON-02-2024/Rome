import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import button2 from "/sound/button2.mp3";

const ButtonSound = ({ playSound, text, className, navigateTo }) => {
  const [redirect, setRedirect] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        navigate(navigateTo); // Correctly navigate to the given path
      }, 500); // 0.5 seconds delay

      return () => clearTimeout(timer);
    }
  }, [redirect, navigate, navigateTo]); // Added navigateTo to dependency array

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setRedirect(true);
    if (playSound) {
      playSound();
    }
  };

  return (
    <>
      <audio ref={audioRef} src={button2} />
      <button className={className} onClick={handlePlaySound}>
        {text}
      </button>
    </>
  );
};

export default ButtonSound;
