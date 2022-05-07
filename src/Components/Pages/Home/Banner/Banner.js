import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../../img/baner/car.jpg";
import img2 from "../../../../img/baner/revo_bg.jpg";
import img3 from "../../../../img/baner/banner-1.jpg";
import animate from "../../../../img/baner/animate.gif";
import banner4 from "../../../../img/baner/banner-4.webp";
import banner5 from "../../../../img/baner/banner-5.webp";
import video from "../../../../img/baner/video.mp4";
import video2 from "../../../../img/baner/video2.mp4";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={500000}>
          <video
            style={{ height: "100vh", objectFit: "cover" }}
            className="videoTag w-100"
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
          </video>
          <Carousel.Caption className="d-flex  flex-column align-items-center mb-md-5"></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500000}>
          <video
            style={{ height: "100vh", objectFit: "cover" }}
            className="videoTag w-100"
            autoPlay
            loop
            muted
          >
            <source src={video2} type="video/mp4" />
          </video>
          <Carousel.Caption className="d-flex  flex-column align-items-center mb-md-5"></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500000}>
          <img
            style={{ height: "100vh" }}
            className="d-block w-100"
            src={banner4}
            alt="First slide"
          />
          <Carousel.Caption className="d-flex  flex-column align-items-center mb-md-5"></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500000}>
          <img
            style={{ height: "100vh" }}
            className="d-block w-100"
            src={animate}
            alt="First slide"
          />
          <Carousel.Caption className="d-flex  flex-column align-items-center mb-md-5"></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500000}>
          <img style={{ height: "100vh" }} className="d-block w-100" src={img3} alt="First slide" />
          <Carousel.Caption className="d-flex  flex-column align-items-center mb-md-5">
            <p className="bg-transparents bannerText-1 px-4 py-3 fw-bold mb-md-4">
              EVERYONE WILL ENVY YOUR!
            </p>
            <p className=" bg-transparents px-4 bannerText-2 py-3 primaryColor fw-bold mb-md-5">
              AMAZING EXPLODED VIEWS OF CLASSIC CARS
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500000}>
          <img style={{ height: "100vh" }} className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption className="d-flex  flex-column align-items-center mb-md-5">
            <p className="bg-transparents bannerText-1 px-4 py-3 fw-bold mb-md-4">
              EVERYONE WILL ENVY YOUR!
            </p>
            <p className=" bg-transparents px-4 bannerText-2 py-3 primaryColor fw-bold mb-md-5">
              AMAZING EXPLODED VIEWS OF CLASSIC CARS
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500000}>
          <img style={{ height: "100vh" }} className="d-block w-100" src={img2} alt="Third slide" />
          <Carousel.Caption>
            <div className="mb-5">
              <h3 className="primaryColor fs-1 px-4 py-3 fw-bold mb-md-3">
                BEST SERVICES YOU CAN COUNT ON!
              </h3>
              <p className="  px-4 pb-3   spacing mb-md-5">
                Running car services is now easier than ever with Carle. Start car business today
                with <br />
                full function for ideal Car services and shop design.
              </p>
              <div className="row">
                <div className="col-6 d-flex justify-content-end">
                  <button className=" px-4  py-2 learn-more fw-bolder">LEARN MORE</button>
                </div>
                <div className="col-6 d-flex justify-content-start">
                  <button className=" px-4  bgPrimaryColor py-2  offers fw-bolder">
                    VIEW SPECIAL OFFERS
                  </button>
                </div>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
