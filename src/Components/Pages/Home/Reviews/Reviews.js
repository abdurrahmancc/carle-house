import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Reviews.css";
import man_1 from "../../../../img/man/man-1.png";
import man_2 from "../../../../img/man/man-2.png";
import man_3 from "../../../../img/man/man-3.png";
import man_4 from "../../../../img/man/man-4.png";
import man_5 from "../../../../img/man/man-5.png";
import man_6 from "../../../../img/man/man-6.png";
import man_7 from "../../../../img/man/man-7.png";
import man_8 from "../../../../img/man/man-8.png";
import man_9 from "../../../../img/man/man-9.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Reviews = () => {
  return (
    <div className="mb-5 mx-5">
      <h4 className="text-center text-decoration-underline fs-2 mb-3 blue-color fw-bold  underline">
        CLIENT <span className="orangeColor text-decoration-underline">REVIEW</span>
      </h4>
      <div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="pb-5 text-center">
            {" "}
            <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 ">
              <div className="col">
                <div className="card shadow mx-auto w-100 h-100">
                  <img src={man_1} className="img-size" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Liam</h5>
                    <p className="card-text">
                      Welcome to the Volkswagen Multivan, the German car maker's biggest and most
                      sophisticated MPV, and a world away from the simple VW Type 2 once favoured by
                      the likes of Jerry Garcia.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow mx-auto w-100 h-100">
                  <img src={man_2} className="img-size" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Noah</h5>
                    <p className="card-text">
                      The first-generation Kia Niro might not have looked particularly revolutionary
                      you might even argue that it looked a little ​​humdrum but it was one of the
                      first SUVs to democratise electric power.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow mx-auto w-100 h-100">
                  <img src={man_3} className="img-size" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Oliver</h5>
                    <p className="card-text">
                      If you fancy an estate car with a swanky premium badge, the Audi A4 Avant
                      really should be on your shortlist.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-5 text-center">
            {" "}
            <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 ">
              <div className="col">
                <div className="card shadow mx-auto w-100 h-100">
                  <img src={man_4} className="img-size" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">William</h5>
                    <p className="card-text">
                      If you fancy an estate car with a swanky premium badge, the Audi A4 Avant
                      really should be on your shortlist.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow mx-auto w-100 h-100">
                  <img src={man_5} className="img-size" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">James</h5>
                    <p className="card-text">
                      If you fancy an estate car with a swanky premium badge, the Audi A4 Avant
                      really should be on your shortlist.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow mx-auto w-100 h-100">
                  <img src={man_6} className="img-size" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Benjamin</h5>
                    <p className="card-text">
                      If you fancy an estate car with a swanky premium badge, the Audi A4 Avant
                      really should be on your shortlist.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-5 text-center">
            {" "}
            <div className="row g-3 row-cols-1 row-cols-sm-2 row-cols-md-3 ">
              <div className="col">
                <div className="card shadow  mx-auto w-100 h-100">
                  <img src={man_7} className="img-size" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Lucas</h5>
                    <p className="card-text">
                      If you fancy an estate car with a swanky premium badge, the Audi A4 Avant
                      really should be on your shortlist.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow mx-auto w-100 h-100">
                  <img src={man_8} className="img-size" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Alexander </h5>
                    <p className="card-text">
                      If you fancy an estate car with a swanky premium badge, the Audi A4 Avant
                      really should be on your shortlist.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow mx-auto w-100 h-100">
                  <img src={man_9} className="img-size" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Jackson </h5>
                    <p className="card-text">
                      If you fancy an estate car with a swanky premium badge, the Audi A4 Avant
                      really should be on your shortlist.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
