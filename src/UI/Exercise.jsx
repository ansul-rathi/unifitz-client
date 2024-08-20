import React from "react";
import lunges from "../assets/img/lunges.png";
import yoga from "../assets/img/yoga-pose.png";
import ex from "../assets/img/extended.png";

const Exercise = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Benefits of <span className="text-indigo-600">Exercise</span>
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Exercise is essential for maintaining a healthy body and mind,
          <br /> and can improve quality of life in numerous ways.
        </p>
      </div>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg flex flex-wrap items-center justify-between p-20">
        <div
          className="flex items-center gap-4 w-full md:w-1/3 p-4"
          data-aos-duration="1500"
          data-aos="zoom-in"
        >
          <span className="flex-shrink-0 w-16 h-16 flex items-center justify-center p-2 rounded bg-white">
            <img
              src={lunges}
              alt="Healthy Life"
              className="w-full h-full object-cover"
            />
          </span>
          <div className="text-left">
            <h4 className="text-xl font-semibold text-white">Healthy Life</h4>
            <p className="text-white text-opacity-80">
              Living a healthy life involves taking care of both your physical
              and mental health.
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 w-full md:w-1/3 p-4"
          data-aos-duration="1500"
          data-aos="zoom-in"
        >
          <span className="flex-shrink-0 w-16 h-16 flex items-center justify-center p-2 rounded bg-white">
            <img
              src={yoga}
              alt="Increased Flexibility"
              className="w-full h-full object-cover"
            />
          </span>
          <div className="text-left">
            <h4 className="text-xl font-semibold text-white">
              Increased Flexibility
            </h4>
            <p className="text-white text-opacity-80">
              Increased flexibility is an important aspect of physical fitness
              that can offer a range of benefits.
            </p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 w-full md:w-1/3 p-4"
          data-aos-duration="1500"
          data-aos="zoom-in"
        >
          <span className="flex-shrink-0 w-16 h-16 flex items-center justify-center p-2 rounded bg-white">
            <img
              src={ex}
              alt="Reducing Blood Pressure"
              className="w-full h-full object-cover"
            />
          </span>
          <div className="text-left">
            <h4 className="text-xl font-semibold text-white">
              Reducing Blood Pressure
            </h4>
            <p className="text-white text-opacity-80">
              Regular physical activity can help lower blood pressure and
              improve overall cardiovascular health.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercise;
