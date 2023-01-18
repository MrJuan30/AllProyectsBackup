import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Cards from "./Cards";

const Carousel = () => {
  const [SeasonAnimes, setSeasonAnimes] = useState();
  useEffect(() => {
    let URL = "https://api.jikan.moe/v4/seasons/now";
    axios
      .get(URL)
      .then((res) => setSeasonAnimes(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>HOME</h1>
        <Cards info={SeasonAnimes}/>
    </div>
  );
};

export default Carousel;
