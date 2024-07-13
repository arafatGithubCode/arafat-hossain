import Slider from "react-slick";
import ReactPlayer from "react-player";
import { videoProperties } from "../constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="z-[100] video-slider">
      <Slider {...settings}>
        {videoProperties.map((videoObj) => {
          return (
            <div key={videoObj.id} className="aspect-video">
              <ReactPlayer
                url={videoObj.src}
                pip={true}
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
