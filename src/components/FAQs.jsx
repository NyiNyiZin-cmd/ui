import React from "react";

const FAQs = () => {
  return (
    <section className="container mx-auto">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 text-teal-800 py-8 px-8 gap-20">
        <div>
          <h1 className="text-5xl italic font-bold mb-24">FAQs</h1>
          <div className="py-6">
            <h2 className="font-semibold italic mb-2">
              What is the purpose of this fundraiser?
            </h2>
            <p>
              Our event aims to raise funds to support our ongoing programs and
              initiatives.
            </p>
          </div>
          <div className="py-6">
            <h2 className="font-semibold italic mb-2">
              Can I donate without attending the event?
            </h2>
            <p>
              Absolutely! Donate here on our website or reach out to us. Every
              contribution helps support our mission.
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="py-6">
              <h2 className="font-semibold italic mb-2">
                Is the event accessible to people with disabilities?
              </h2>
              <p>
                Yes! Entrances and restrooms are wheelchair-accessible. Contact
                us in advance so we can make the necessary arrangements to
                support you.
              </p>
            </div>
            <div className="py-6">
              <h2 className="font-semibold italic mb-2">
                What happens if the event is rescheduled or canceled?
              </h2>
              <p>
                We will be sharing updates on our social media channels for
                updates on any changes or cancellations.
              </p>
            </div>
            <div className="py-6">
              <h2 className="font-semibold italic mb-2">
                How can I volunteer for the event?
              </h2>
              <p>
                We will be sharing volunteer opportunities for this event on our
                social media pages. Kindly watch that space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
