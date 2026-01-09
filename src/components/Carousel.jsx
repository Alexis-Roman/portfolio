import React from "react";
import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Carousel = ({ items }) => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <ReactCarousel
      responsive={responsive}
      infinite={true}
      showDots={true}
      arrows={true}
      swipeable={true}
      draggable={true}
      containerClass="carousel-container"
      itemClass="px-2"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-full h-40 rounded-lg overflow-hidden cursor-pointer group"
        >
          {/* Thumbnail */}
          <div className="w-full h-full bg-blue-300 flex items-center justify-center text-white font-bold">
            {item}
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 text-center">
            <h3 className="font-bold text-lg">{item}</h3>
            <p className="text-sm">Short description or tech stack here.</p>
          </div>
        </div>
      ))}
    </ReactCarousel>
  );
};

export default Carousel;
