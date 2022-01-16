import React, { FC, MouseEvent } from "react";

export const Img: FC<{
  src: string;
  alt: string;
}> = ({ src, alt = 'Соответствующее изображение' }) => {
  return (
    <img src={src} alt={alt} />
  )
}