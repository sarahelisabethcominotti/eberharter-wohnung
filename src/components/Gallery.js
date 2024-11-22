import React, { useContext } from "react";
import { ImagesContext, ToggleContext } from "../App";

function Gallery() {
  const images = useContext(ImagesContext);
  const isChecked = useContext(ToggleContext)

  return (
    <section id="gallery" className="title-left">
      <h2>{isChecked.isChecked ? "Gallery" : "Galerie"}</h2>
        {images.map((image) => (
            <img src={image.image.url} alt={image.altEnglish}></img>
        ))}
    </section>
  );
}

export default Gallery;
