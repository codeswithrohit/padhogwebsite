/* eslint-disable @next/next/no-img-element */
// import content
import { useEffect } from "react";
import { content } from "../data/Content";
import Typed from 'react-typed'
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="fade-down"
          data-aos-delay="200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-blue-100 bottom-0 -z-10"
        >
          
          <div className="animated-typing rotate-90 absolute top-[30%] right-[-15%]  font-Poppins lg:text-2xl text-xl font-extrabold text-white ">
          <Typed
          strings={['Engineering Notes', 'Class 10 Notes' , 'Class 12 Notes']}
          typeSpeed={150}
          backSpeed={100}
          loop
          /></div>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5 " data-aos="fade-down">
          
          <h2 className="text-blue-400  text-4xl font-mono " >Padho Chahein Kahi Pe!</h2>
          <h2 className="text-blue-400  text-4xl font-mono " >Notes Milega Yahi Pe!</h2>
          
          <br />
          
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5
            ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3 className="text-4xl font-serif font-bold " >{content.count}</h3>
                <p className="text-sm font-mono font-semibold ">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src="home1.png"
            data-aos="slide-up"
            alt="..."
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;