import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

export default function Testimonials() {
  return (
    <>
      <section id="programs" className="py-12">
        <div className="container mx-auto flex justify-center">
          <div className="w-full max-w-lg">
            <h2 className="text-4xl font-bold mb-12 text-center">
              <span className="text-indigo-600">Full-Length </span>
              Workout Programs
            </h2>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-white p-10 rounded-lg shadow-md">
                  <div className="mb-8">
                    <img
                      src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-10651-fb-booty-round-3-4-weeks-of-fun-and-intense-lower-body-training-b234.jpg"
                      alt="FB Booty Round 3"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    42 Min/Day • 4 Weeks
                  </h4>
                  <p className="text-gray-600">
                    FB Booty Round 3: 4 Weeks of Fun and Intense Lower Body
                    Training Build Strength in Your Glutes, Quads, and
                    Hamstrings
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white p-10 rounded-lg shadow-md">
                  <div className="mb-8">
                    <img
                      src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-10355-fb-jumpstart-4-weeks-of-lifting-hiit-cardio-and-stretching-b034.jpg"
                      alt="FB Jumpstart"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    34 Min/Day • 4 Weeks
                  </h4>
                  <p className="text-gray-600">
                    FB Jumpstart - 4 Weeks of Lifting, HIIT, Cardio,
                    <br /> and Stretching Progressive Workout Length and
                    Intensity.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white p-10 rounded-lg shadow-md">
                  <div className="mb-8">
                    <img
                      src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-10721-fb-abs-round-3-4-weeks-of-intense-core-training-95d1.jpg"
                      alt="FB Abs Round 3"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    34 Min/Day • 4 Weeks
                  </h4>
                  <p className="text-gray-600">
                    FB Abs Round 3: 4 Weeks of Intense Core Training Intensive
                    Core Program for Strength and Mobility.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white p-10 rounded-lg shadow-md">
                  <div className="mb-8">
                    <img
                      src="https://d18zdz9g6n5za7.cloudfront.net/plan/640/640-10194-4-week-fb-strong-round-3-build-muscle-increase-strength-and-feel-great-b642.jpg"
                      alt="FB Strong Round 3"
                      className="w-full rounded-lg"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">
                    40 Min/Day • 4 Weeks
                  </h4>
                  <p className="text-gray-600">
                    4 Week FB Strong: Round 3 - Build Muscle, Increase Strength,
                    and Feel Great You Choose: 35 Minutes or 50 Minutes a Day
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
