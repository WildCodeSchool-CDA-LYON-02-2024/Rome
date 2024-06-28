const Music = new Audio('/sons/music.mp3');

export const playBackgroundMusic = () => {
  audio.loop = true;
  audio.play();
};

export const stopBackgroundMusic = () => {
  audio.pause();
};