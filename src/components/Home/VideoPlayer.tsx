const VideoPlayer = ({
  src,
  poster,
  className
}: {
  src: string;
  poster: string;
  className?: string;
}) => {
  return (
    <video
      src={src}
      autoPlay
      // controls
      muted
      loop
      poster={poster}
      className={className && className}
    />
  );
};

export default VideoPlayer;
