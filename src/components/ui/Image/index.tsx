import React from "react";

interface ImageProps {
  alt?: string;
  source: string;
  width?: number;
  height?: number;
  customClass?: string;
  styles?: React.CSSProperties;
}
const Image: React.FC<ImageProps> = ({
  alt,
  width,
  height,
  source,
  styles,
  customClass = "",
}) => {
  return (
    <img
      alt={alt}
      src={source}
      style={styles}
      width={width}
      height={height}
      className={`${customClass}`}
    />
  );
};

export default Image;
