import React from "react";
import heroImg from "../assets/img/model1-removebg-preview.png";

const Hero = () => {
  return (
    <section id="#">
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              data-aos-duration="1000"
              data-aos="fade-up"
            >
              Exercise is the key to a{" "}
              <span className="text-indigo-600">Healthy</span> Lifestyle
            </h2>
            <p
              className="text-lg text-gray-700 leading-relaxed mb-6"
              data-aos-duration="1100"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Regular exercise is a crucial component of a healthy lifestyle.
              <br />
              It has numerous benefits for physical and mental health, including
              reducing the risk of chronic diseases, improving cardiovascular
              function, enhancing mood, reducing stress, and promoting better
              sleep.
            </p>

            <div
              className="flex gap-8"
              data-aos-duration="1200"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <button className="bg-indigo-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-indigo-700 transition duration-300">
                Get Started
              </button>
              <button className="flex items-center gap-2 text-gray-700 font-semibold hover:text-indigo-600 transition duration-300">
                <span className="bg-white text-indigo-600 p-2 rounded-full shadow-md">
                  <i className="ri-play-fill text-2xl"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>

          <div className="relative md:w-1/2">
            <div className="relative flex items-center justify-center">
              <div className="w-96 h-96 rounded-full border-8 border-gray-200">
                <div className="w-80 h-80 rounded-full border-8 border-indigo-300">
                  <div className="w-72 h-72 rounded-full bg-indigo-600 relative">
                    <img
                      src={heroImg}
                      alt="Hero"
                      className="absolute top-[-10%] left-[-13%] w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="absolute top-[52%] left-[-11%] bg-white p-4 rounded-md shadow-lg text-center"
              data-aos-duration="1100"
              data-aos="fade-right"
            >
              <h5 className="text-sm font-semibold text-indigo-600 mb-2">
                Heart Rate
              </h5>
              <span className="bg-indigo-300 text-red-500 p-2 rounded-md inline-flex items-center justify-center mb-2">
                <i className="ri-heart-pulse-fill text-xl"></i>
              </span>
              <h6 className="text-sm font-semibold text-indigo-600">100 BPM</h6>
            </div>

            <div
              className="absolute top-[345px] right-[-10px] bg-white p-5 rounded-md shadow-lg text-center"
              data-aos-duration="1100"
              data-aos="fade-up"
            >
              <span className="bg-indigo-600 text-white p-4 rounded-full inline-flex items-center justify-center mb-4">
                <i className="ri-map-pin-2-fill text-2xl"></i>
              </span>
              <h5 className="text-sm text-gray-700">
                Find our gym centers near you
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
