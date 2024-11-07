import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="h-screen flex relative flex-col text-center  
   justify-center mx-auto items-center"
    >
      <div className="flex flex-col mt-20 ">
        <h1 className="text-3xl font-semibold text-center">
          Lets <span className="border-b border-yellow-500">Talk</span>
        </h1>
      </div>

      <form
        action="https://getform.io/f/480ca6d3-75ec-49e6-8dcb-504cdf248635"
        method="POST"
        className="flex flex-col space-y-4 w-fit mt-20 mx-auto "
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="contact-input"
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="contact-input"
        />

        <input
          type="text"
          placeholder="Subject"
          name="subject"
          className="contact-input"
        />
        <textarea
          type="text"
          name="message"
          placeholder="Message"
          className="mb-4 contact-input h-28"
        />
        <button
          className="bg-yellow-500 py-2 font-semibold text-xl rounded-lg
         hover:bg-transparent hover:border w-40 mx-auto md:w-80 "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
