const VideoPlayer = ({ src, className }: { src: string; className?: string }) => {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      // ! change the poster for the showreel
      poster='https://wallpapercave.com/wp/JTpVKUS.jpg'
      className={className && className}
    />
  );
};

export default VideoPlayer;
