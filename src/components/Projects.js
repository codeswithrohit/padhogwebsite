/* eslint-disable @next/next/no-img-element */
import { content } from "../data/Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-blue-100" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="font-Inria text-5xl font-bold" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="md:text-4xl text-3xl !leading-relaxed font-Paprika" data-aos="fade-down">
            We offer
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src="https://raw.githubusercontent.com/Sridhar-C-25/react_portfolio_2/main/src/assets/images/Projects/person.png"
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            
              <SwiperSlide
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src="https://i.pinimg.com/236x/fa/44/2d/fa442d3d5f5cc68bdcd516282c15e26d.jpg"alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Computer Science Engineering</h5>
                  <button className="font-bold text-gray self-end">
                  Available Soon...
                  </button>
                </div>
                
              </SwiperSlide>
              <SwiperSlide
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src="https://uploads.sarvgyan.com/2014/06/electrical-engineering-image.jpg"alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Electrical Engineering</h5>
                  <button className="font-bold text-gray self-end">
                  Available Soon...
                  </button>
                </div>
                
              </SwiperSlide>
              <SwiperSlide
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src="https://www.iimtindia.net/Blog/wp-content/uploads/2021/06/Mechanical-Engineering-1-1.jpg"alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Mechanical Engineering</h5>
                  <button className="font-bold text-gray self-end">
                  Available Soon...
                  </button>
                </div>
                
              </SwiperSlide>
              <SwiperSlide
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src="https://www.sist.in/ademtart/2014/07/Electronics-communication.jpg"alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Electronics Communication Engineering</h5>
                  <button className="font-bold text-gray self-end">
                  Available Soon...
                  </button>
                </div>
                
              </SwiperSlide>
              <SwiperSlide
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src="https://www.accurate.in/engg/img/page/civil-engineering-branch.jpg"alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">Civil Engineering</h5>
                  <button className="font-bold text-gray self-end">
                    Available Soon...
                  </button>
                </div>
                
              </SwiperSlide>
           
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;