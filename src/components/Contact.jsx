import React from "react";

const Contact = () => {
  return (
    <div>
      <h2 className="text-4xl text-center mb-10 font-serif font-bold">
        Contact Me
      </h2>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58318.04666526506!2d90.3519162582031!3d24.000087800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755db0007a9519d%3A0xd7ae2a1de7480fe7!2sTIMES%20EYE!5e0!3m2!1sen!2sbd!4v1709020555379!5m2!1sen!2sbd"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="mt-10 w-11/12 sm:w-10/12 md:w-9/12 lg:w-7/12 mx-auto">
        <form action="https://formspree.io/f/xoqgwlvv" method="POST">
          <div className="xs:flex gap-5">
            <input
              type="text"
              name="text"
              placeholder="your name"
              autoComplete="off"
              className="w-full h-12 bg-gray-600 outline-none rounded-md pl-6 mb-5 xs:mb-0"
            />
            <input
              type="number"
              name="number"
              placeholder="phone number"
              autoComplete="off"
              className="w-full h-12 bg-gray-600 outline-none rounded-md pl-6"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="your email"
            autoComplete="off"
            className="w-full h-12 bg-gray-600 outline-none rounded-md pl-6 my-5"
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="✏ message"
            className="w-full bg-gray-600 p-6 resize-none outline-none mb-6 sm:mb-8 lg:mb-10"
          />
          <div className="text-center">
            <input
              type="submit"
              value="Submit"
              className="bg-red-800 border-2 border-red-800 cursor-pointer px-16 py-3 outline-none hover:bg-transparent duration-300"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
