/* eslint-disable @next/next/no-img-element */
import { content } from "../data/Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Testimonials } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section>
      <div className="md:container px-5 pt-14">
        <h2 className="font-Inria text-5xl font-bold" data-aos="fade-down">
          {Testimonials.title}
        </h2>
       
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Testimonials.testimonials_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-blue-100 mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src="https://raw.githubusercontent.com/Sridhar-C-25/react_portfolio_2/main/src/assets/images/Testimonials/avatar1.png" alt="..." className="h-24" />
                <div>
                  <p className="sm:text-base text-sm">{content.review}</p>
                  <br />
                  <h6 className="font-Paprika font-bold text-[#253D57] leading-8">{content.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;