import React from "react";

const Hope = () => {
  return (
    <div>
      <section className="bg-[url(img/1.jpg)] bg-cover bg-center w-full h-full">
        <div className="container px-5 py-5 mx-auto text-teal-100">
          <div className="flex flex-wrap p-4">
            <div className="py-4 sm:w-1/4 w-1/2">
              <p className="leading-relaxed text-sm">Users</p>
              <h2 className="text-xl sm:text-2xl ">
                May 7, 2030
              </h2>
            </div>
            <div className="py-4 sm:w-1/4 w-1/2">
              <p className="leading-relaxed text-sm">Check-in starts</p>
              <h2 className="text-xl sm:text-2xl ">
                5:30 PM
              </h2>
            </div>
            <div className="py-4 sm:w-1/4 w-1/2">
              <p className="leading-relaxed text-sm">Event begins at</p>
              <h2 className="text-xl sm:text-2xl ">
                6:00 PM
              </h2>
            </div>
            <div className="py-4 sm:w-1/4 w-1/2">
              <p className="leading-relaxed text-sm">See you there</p>
              <h2 className="text-xl sm:text-2xl ">
                Liberty Events Plaza
              </h2>
            </div>        
          </div>

          <div className="p-4 mt-30">
            <p className="py-5">Unity Qutreach Network</p>
            <h1 className="text-7xl italic">Gala of Hope</h1>
            <div className="py-5 flex flex-wrap justify-between align-center items-center">
                <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 <br />Quisquam, quae</p>
                <button className="border-2 border-teal-100 text-teal-100 py-2 px-6 rounded-full">Register to Attend</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hope;
