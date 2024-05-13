const VimeoEmbed = ({ vimeoEmbedId, title }: { vimeoEmbedId: string; title?: string }) => (
  <iframe
    width={960}
    height={637}
    src={`https://player.vimeo.com/video/${vimeoEmbedId}`}
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
    title={title && title}
  />
);

export default VimeoEmbed;
