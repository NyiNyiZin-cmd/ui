import React from "react";

const EventDetails = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap p-4">
        <div className="sm:w-full md:w-2/5 py-4">
          <div className="border rounded-3xl overflow-hidden">
            <img src="/src/img/2.jpg" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="sm:w-full md:w-2/5 py-4 sm:m-0 md:ml-16 ml-16">
          <h1 className="text-3xl italic mb-8">Event details</h1>
          <p>Funds to raise</p>
          <p className="text-3xl mb-6">$250,000</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ea
            eos praesentium aliquid consequatur illum incidunt recusandae
            delectus adipisci, tempora accusantium dolores perspiciatis porro,
            reprehenderit aspernatur, odio dolor iure. Provident.
          </p>
          <p className="my-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            voluptate veritatis nisi perspiciatis quae, sit quia quisquam fugit,
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
