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
      autoPlay
      // controls
      muted
      loop
      poster={poster}
      preload='metadata'
      playsInline
      className={className && className}
    >
      <source src={src} type='video/mp4' />
      <track kind='captions' />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
