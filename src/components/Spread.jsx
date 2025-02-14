import React from "react";

const Spread = () => {
  return (
    <section className="bg-black text-teal-100">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic mb-8">
          Spread the word
        </h1>

        <p className="w-[400px] text-xl mb-12">
          With your help, we can reach more people and let them know about our
          cause. We have designs you can share on social media or print to
          distribute in your community.
        </p>
        <div className="flex flex-wrap items-end gap-6">
            <div className="flex flex-col items-center">
             <div className="">
                <img
                  src="/src/img/flyer.jpg"
                  alt="Flyer mockup on tiled floor"
                  className="object-cover w-[150px] h-[200px] mb-4"
                />
              </div>
              <button className="border-2 border-teal-100 text-teal-100 py-2 px-6 rounded-full text-xl">
                Download flyer
              </button>
            </div>
            <div className="flex flex-col items-center">
             <div className="">
                <img
                  src="/src/img/poster.jpg"
                  alt="Flyer mockup on tiled floor"
                  className="object-cover  w-[100px] h-[180px] mb-4"
                />
              </div>
              <button className="border-2 border-teal-100 text-teal-100 py-2 px-6 rounded-full text-xl">
                Download social media story
              </button>
            </div>
            <div className="flex flex-col items-center">
             <div className="">
                <img
                  src="/src/img/socialMedia.jpg"
                  alt="Flyer mockup on tiled floor"
                  className="object-cover w-[150px] h-[100px] mb-4"
                />
              </div>
              <button className="border-2 border-teal-100 text-teal-100 py-2 px-6 rounded-full text-xl">
                Download flyer
              </button>
            </div>
            <div className="bg-pink-100 text-black p-6 rounded-xl max-w-md">
              <h2 className="mb-4">
                <span className="font-bold text-lg">Tip:</span>  To <span className="font-bold text-lg">embed customizable templates spreading the word about
                your cause</span>  follow these
                instructions:
              </h2>
              <ul className="space-y-3 list-inside">
                <li className="list-disc">
                  Create new social media or print templates you&#39;d like people
                  to use to spread the word about your cause.
                </li>
                <li className="list-disc">
                  <span className="text-purple-600 font-medium">Share</span>
                  your design by selecting
                  <span className="text-purple-600 font-medium">
                     Template Link
                  </span>
                  , and also export as an image by selecting
                  <span className="text-purple-600 font-medium"> Download</span>.
                </li>
                <li className="list-disc">Add the link to the Download boxes below.</li>
                <li className="list-disc">Add the image of the template to the mockup!</li>
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Spread;
