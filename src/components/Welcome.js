import React, { useContext } from "react";
import { ImagesContext } from "../App";

function Welcome() {
  const images = useContext(ImagesContext);

  const homeImage = images[0];
  // console.log(images);
  return (
    <section
      id="welcome"
      style={
        homeImage
          ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url(${homeImage.image.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat' }
          : {}
      }
    >
      <h1>Welcome to Apartment Eberharter</h1>
    </section>
  );
}

export default Welcome;
