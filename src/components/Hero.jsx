import React from "react";

const Hero = () => {
  return (
    <section className="">
      <div className="flex flex-col justify-center items-center text-center gap-6">
        <h1 className="font-Heading font-bold md:text-5xl text-4xl ">
          Build The Community Your Fans Will Love
        </h1>
        <p className="text-lg font-semibold md:max-w-[600px]">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="mt-8 bg-Pink px-16 py-4 rounded-full text-white font-semibold hover:bg-opacity-70 transition shadow-md">
          Get Started For Free
        </button>
      </div>
      <figure className="flex justify-center items-center md:mt-16 mt-24 ">
        <img src="/images/screen-mockups.svg" alt="" />
      </figure>
    </section>
  );
};

export default Hero;
