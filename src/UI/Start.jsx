import React from "react";
import trainer from "../assets/img/trainer.png";

const Start = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-[-100px]">
          <div className="w-full md:w-1/2">
            <img
              src={trainer}
              alt="Trainer"
              className="w-full"
              data-aos-duration="1500"
              data-aos="fade-left"
            />
          </div>

          <div
            className="w-full md:w-1/2"
            data-aos-duration="1100"
            data-aos="fade-right"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to make <span className="text-indigo-600">Change?</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Remember, it's important to start slowly and gradually increase
              the intensity and duration of your exercise routine. Consult us as
              your healthcare provider before starting any new exercise program.
              Good luck, and enjoy the journey with us towards a healthier you!
            </p>
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-indigo-700 transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
