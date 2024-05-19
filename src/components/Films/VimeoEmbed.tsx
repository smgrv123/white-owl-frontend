const VimeoEmbed = ({ vimeoEmbedId, title }: { vimeoEmbedId: string; title?: string }) => (
  <iframe
    className='w-80 h-52 sm:w-[960px] sm:h-[637px]'
    src={`https://player.vimeo.com/video/${vimeoEmbedId}`}
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
    title={title && title}
  />
);

export default VimeoEmbed;
