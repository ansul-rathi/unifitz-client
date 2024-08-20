import React from "react";

const Pricing = () => {
  return (
    <section id="membership" className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Premium <span className="text-indigo-600">Subscription</span> Plan
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Health & Fitness is a popular nutrition and exercise tracking app
            that offers a premium subscription service.
            <br />
            The premium version includes advanced nutrient tracking, customized
            goals and advice, and exclusive content.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div
            className="shadow-lg rounded-lg w-full md:w-1/3 bg-white p-6"
            data-aos-duration="1500"
            data-aos="fade-up"
          >
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">Regular Member</h2>
              <h2 className="text-2xl font-bold">
                $9.99 <span className="text-sm text-gray-600">/month</span>
              </h2>
            </div>

            <div className="text-center">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 text-gray-600">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill text-indigo-600"></i>
                  </span>
                  Unlimited access to the App
                </li>
                <li className="flex items-center gap-4 text-gray-600">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill text-indigo-600"></i>
                  </span>
                  Customer support
                </li>
                <li className="flex items-center gap-4 text-gray-600">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill text-indigo-600"></i>
                  </span>
                  Personal trainer
                </li>
                <li className="flex items-center gap-4 text-gray-600">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill text-indigo-600"></i>
                  </span>
                  Personal Nutritionist
                </li>
                <li className="flex items-center gap-4 text-gray-600">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill text-indigo-600"></i>
                  </span>
                  Demo online classes
                </li>
              </ul>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="shadow-lg rounded-lg w-full md:w-1/3 bg-white p-6 bg-indigo-600 text-white"
            data-aos-duration="1500"
            data-aos="fade-up"
          >
            <div className="border-b border-indigo-300 pb-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">Gold Member</h2>
              <h2 className="text-2xl font-bold">
                $79.99 <span className="text-sm text-indigo-300">/year</span>
              </h2>
            </div>

            <div className="text-center">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited access to the App
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal Nutritionist
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Free online classes
                </li>
                <li className="flex items-center gap-4">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Free access to our gym centers
                </li>
              </ul>
              <button className="bg-white text-indigo-600 py-2 px-4 rounded-md shadow-md hover:bg-gray-100 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="shadow-lg rounded-lg w-full md:w-1/3 bg-white p-6"
            data-aos-duration="1500"
            data-aos="fade-up"
          >
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-xl font-semibold mb-2">Standard Member</h2>
              <h2 className="text-2xl font-bold">
                $49.99 <span className="text-sm text-gray-600">/year</span>
              </h2>
            </div>

            <div className="text-center">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-4 text-gray-600">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill text-indigo-600"></i>
                  </span>
                  Unlimited access to the App
                </li>
                <li className="flex items-center gap-4 text-gray-600">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill text-indigo-600"></i>
                  </span>
                  Customer support
                </li>
                <li className="flex items-center gap-4 text-gray-600">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill text-indigo-600"></i>
                  </span>
                  Personal trainer
                </li>
                <li className="flex items-center gap-4 text-gray-600">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill text-indigo-600"></i>
                  </span>
                  Personal Nutritionist
                </li>
                <li className="flex items-center gap-4 text-gray-600">
                  <span>
                    <i className="ri-checkbox-blank-circle-fill text-indigo-600"></i>
                  </span>
                  Free online classes
                </li>
              </ul>
              <button className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 transition duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
