import React, { useContext } from "react";
import { ImagesContext, ToggleContext } from "../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
function Gallery() {
  const images = useContext(ImagesContext);
  const isChecked = useContext(ToggleContext);

  return (
    <section id="gallery" className="title-left">
      <h2>{isChecked.isChecked ? "Gallery" : "Galerie"}</h2>
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.image.url} alt={image.altEnglish} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Gallery;
