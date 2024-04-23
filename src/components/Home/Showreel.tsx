const Showreel = ({ src }: { src: string }) => {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      controls
      // className="absolute top-0 z-0"
    />
  );
};

export default Showreel;
