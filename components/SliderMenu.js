import React from "react";
import Carousel from "react-slick";

function SliderMenu() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-full h-40">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="10000">
              <img
                src="https://image.freepik.com/free-vector/online-shopping-banner_82574-3393.jpg"
                className="h-60 w-40"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-interval="2000">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d7dfad107187879.5fa16aecd773f.jpg"
                className=" w-40 h-60"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://previews.123rf.com/images/dvolkovkir1980/dvolkovkir19801905/dvolkovkir1980190500019/122403777-order-online-concept-design-online-shopping-banner-mobile-app-templates-concept-vector-illustration-.jpg"
                className="h-60 w-40"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SliderMenu;
