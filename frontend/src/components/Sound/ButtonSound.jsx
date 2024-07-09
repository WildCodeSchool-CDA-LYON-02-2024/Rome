import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import button2 from "/sound/button2.mp3";

const ButtonSound = ({ playSound, text, className, navigateTo, onClick }) => {
  const [redirect, setRedirect] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (redirect) {
      const timer = setTimeout(() => {
        navigate(navigateTo); 
      }, 300); // 0.3 seconds delay

      return () => clearTimeout(timer);
    }
  }, [redirect, navigate, navigateTo]);

  const handlePlaySound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setRedirect(true);
    if (playSound) {
      playSound();
    }
    if (onClick) {
      onClick();
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
