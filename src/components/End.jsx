import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import { FaRegEye, FaLink } from "react-icons/fa6";
import { GoShare } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";

const End = () => {
  return (
    <section className=" bg-pink-50">
      <header className="bg-pink-100 p-6 ">
        <div className="container mx-auto flex items-center gap-4 px-6 ">
          <div className="bg-white p-2 rounded-lg h-20 w-20">
            <svg viewBox="0 0 24 24" fill="pink">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <div>
            <h2 className="text-sm font-medium text-gray-600">HOW TO:</h2>
            <h1 className="text-3xl font-semibold text-gray-800">
              Embed fundraising into your Canva creations
            </h1>
          </div>
        </div>
      </header>
      <div className="container mx-auto">
        <main className="max-w-7xl mx-auto p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="py-2">
            <div className="flex gap-4 items-start">
              <span className="text-5xl font-bold">01</span>
              <div className="space-y-4">
                <p>
                  Select the <span className="font-semibold">Apps</span> option
                  on the left-side object panel. Search for
                  <span className="text-purple-500"> Donate in designs</span>.
                </p>
              </div>
            </div>
            <div className="border rounded-lg p-4 mt-4 bg-white">
              <div className="flex gap-3">
                <div className="p-2 ">
                  <div className="w-8 h-8 text-teal-500">
                    <img
                      src="/public/vite.svg"
                      className="w-6 h-6"
                      alt="Icon"
                    />
                  </div>
                  <div className="">App</div>
                </div>
                <div className="border rounded-xl p-2 flex ">
                  <div className="w-20 h-20 flex items-center justify-center mr-2">
                    <svg viewBox="0 0 24 24" fill="pink">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Donate in designs</div>
                    <div className="text-sm text-gray-500">
                      Donate in designs allows you to embed fundraising...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="flex gap-4 items-start">
              <span className="text-5xl font-bold">02</span>
              <div className="space-y-4">
                <p>
                  Choose the <span className="font-semibold">location</span> of
                  the cause, and search and{" "}
                  <span className="font-semibold">
                    select the name of the cause{" "}
                  </span>
                  in the search panel.
                </p>
              </div>
            </div>
            <div className="border rounded-lg p-4 space-y-3 mt-4 bg-white ">
              <input
                type="text"
                placeholder="&#128269;  Find a course"
                className="border p-1 w-full rounded"
              />
              <input
                type="text"
                placeholder="&#8744; Select a location"
                className="border p-1 w-full rounded"
              />
            </div>
          </div>

          <div className="py-2">
            <div className="flex gap-4 items-start">
              <span className="text-5xl font-bold">03</span>
              <div className="space-y-2">
                <p>
                  Under the <span className="font-semibold">Add as</span>{" "}
                  settings, choose if you'd like to add a{" "}
                  <span className="font-semibold">fundraising element</span> or{" "}
                  <span className="font-semibold">donation QR code</span>.
                </p>
                <p className="text-sm text-gray-600">
                  A fundraising element is recommended for website templates.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm">
                If you selected the fundraising element, you can customize its{" "}
                <span className="font-semibold">primary color</span> and add a{" "}
                <span className="font-semibold">fundraising goal</span> in a
                selected currency. Toggle{" "}
                <span className="text-purple-500">Show recent donations</span>{" "}
                to show recent donations to the cause from the element.
              </p>
            </div>
          </div>

          <div className="py-2">
            <div className="flex gap-4 items-center">
              <span className="text-5xl font-bold">04</span>
              <div className="space-y-4">
                <p>
                  Select <span className="text-purple-500">add to design</span>.
                </p>
              </div>
            </div>
            <div className="border rounded-lg px-2 space-y-3 mt-4 bg-white h-25 flex items-center">
              <button className="bg-blue-600 text-white w-full rounded text-sm p-1.5">
                Add to design
              </button>
            </div>
          </div>

          <div className="py-2">
            <div className="flex gap-4 items-center">
              <span className="text-5xl font-bold">05</span>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold">Publish</span> your design and{" "}
                  <span className="font-semibold">share</span> via any channel.
                </p>
              </div>
            </div>
            <div className="border rounded-lg  space-y-3 mt-4 bg-white h-25 flex items-center">
              <div className="bg-blue-600 text-white w-full text-sm p-1.5 flex flex-row gap-1 justify-around">
                <div className="w-5 h-5 bg-blue-400 rounded flex items-center justify-center">
                  <BiMessageRounded />
                </div>

                <div className="h-5 bg-blue-400 rounded flex items-center px-2">
                  <div className="flex items-center gap-1">
                    <FaRegEye />
                    <span className="text-xs">Preview</span>
                  </div>
                </div>
                <div className="h-5 bg-blue-400 rounded flex items-center px-2">
                  <div className="flex items-center gap-1">
                    <FaLink />
                    <span className="text-xs">Public Website</span>
                  </div>
                </div>
                <div className="h-5 bg-blue-400 rounded flex items-center px-2">
                  <div className="flex items-center gap-1">
                    <GoShare />
                    <span className="text-xs">Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="flex gap-4 items-start">
              <span className="text-5xl font-bold">06</span>
              <div>
                <p>
                  <span className="font-semibold">Anyone can donate</span> to
                  your cause via the Canva design link. The donate button links
                  to a <span className="font-semibold">donation form</span>,
                  mobile optimized and available in 135 currencies and 22
                  languages.
                </p>
              </div>
            </div>
          </div>

          <div className="py-2">
            <div className="flex gap-4 items-start">
              <span className="text-5xl font-bold">07</span>
              <div>
                <p>
                  <span className="font-semibold">Track progress</span> towards
                  your fundraising goal!
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-gray-900 text-white p-4 mt-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <RiDeleteBinLine />
          <span>Delete this resource page</span>
        </div>
      </footer>
    </section>
  );
};

export default End;
