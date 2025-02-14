import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
  return (
    <section className="bg-[url(img/3.jpg)] bg-cover bg-center text-teal-100">
      <div className="container mx-auto flex flex-wrap flex-col p-8">
        <h1 className="text-5xl italic mb-8">Contact us</h1>
        <div className="my-4">
          <p>phone</p>
          <p className="text-2xl py-2">(123)456-7890</p>
        </div>
        <div className="my-4">
          <p>Email</p>
          <p className="text-2xl py-2">hello@reallygreatsite.com</p>
        </div>
        <div className="my-4">
          <p>address</p>
          <p className="text-2xl py-2">
            123 Anywhere St.,
            <br /> Any City, ST 12345
          </p>
        </div>
        <div className="my-4">
          <p>Social</p>
          <p className="text-2xl py-2 flex">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
          
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
