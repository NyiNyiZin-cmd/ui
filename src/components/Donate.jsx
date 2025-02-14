import React from "react";

const Donate = () => {
  return (
    <section className="bg-[url(img/3.jpg)] bg-cover bg-center w-full h-auto">
      <div className="container mx-auto md:px-10 lg:px-12 px-4 md:py-20 py-10 flex items-center justify-center h-full">
        <div className="md:h-[500px] lg:h-[600px] h-auto w-full bg-teal-100 border rounded-4xl">
          <h1 className="text-center md:text-5xl lg:text-6xl text-3xl italic mt-8 lg:mt-12 mb-12">
            Donate here
          </h1>
          <div className="relative md:h-[350px] lg:h-[400px] h-auto  bg-teal-50 mx-4 md:mx-16 rounded-2xl">
            <div className="flex flex-wrap p-8 lg:p-10 gap-4 lg:gap-6">
              <div className="relative md:w-[70%] w-full h-auto bg-teal-200 rounded-2xl p-10 flex flex-col">
                <h1 className="text-2xl lg:text-3xl text-teal-800 font-bold">
                  Unity Outreach Network
                </h1>
                <div className="flex md:flex-row flex-col md:justify-between mt-6 lg:mt-8">
                  <p className="text-2xl lg:text-3xl text-teal-800 font-bold">$0 raised</p>
                  <p className="text-2xl lg:text-3xl text-teal-600 font-bold">
                    of $2,500 goal
                  </p>
                </div>
                <div className="w-full my-4 lg:my-6">
                  <div className="w-full bg-gray-100 rounded-full h-2.5 lg:h-3">
                    <div
                      className="bg-blue-300 h-2.5 lg:h-3 rounded-full"
                      style={{ width: "5%" }}
                    ></div>
                  </div>
                </div>
                <button className="w-full text-white bg-indigo-500 border-0 py-2 lg:py-3 px-8 rounded text-lg lg:text-xl mt-auto hover:bg-indigo-600">
                  Donate
                </button>
                <div className="md:absolute relative md:-right-30 md:bottom-4 mt-4 w-[120px] lg:w-[140px] bg-white p-2  text-sm lg:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
              </div>
              <div className="md:w-[25%] w-full h-[100px] lg:h-[120px] bg-teal-200 rounded-2xl flex justify-center items-center hover:bg-teal-300 transition-colors cursor-pointer">
                <div className="text-pink-500 w-16 h-16 lg:w-20 lg:h-20 hover:text-pink-600 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="absolute bottom-0 w-full bg-black text-white text-center p-2 lg:p-3 rounded-b-2xl lg:text-lg">
              Delete this placeholder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
