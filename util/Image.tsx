const Image = ({
  src,
  fallback,
  type = "image/webp",
  alt,
}: {
  src: string;
  fallback: string;
  alt: string;
  type?: string;
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  );
};

export default Image;
