import React, { useContext } from "react";
import { ImagesContext } from "../App";

function Gallery() {
  const images = useContext(ImagesContext);

  return (
    <section id="gallery" className="title-left">
      <h2>Gallery</h2>
        {images.map((image) => (
            <img src={image.image.url} alt={image.altEnglish}></img>
        ))}
    </section>
  );
}

export default Gallery;
