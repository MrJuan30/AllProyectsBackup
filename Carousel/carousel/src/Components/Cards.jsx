import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Cards = ({ info }) => {
  const images = [];

  for (let index = 0; index < info?.data.length; index++) {
    images.push({ original: `${info?.data[index].images.jpg.image_url}` });
  }

  console.log(info);
  return (
    <div>
      <h1>CARD</h1>
      <ImageGallery items={images} />;
    </div>
  );
};

export default Cards;
