import React from "react";

const Stats = () => {
  return (
    <section className="md:px-20 px-8 flex flex-col md:flex-row gap-16  md:justify-between  items-center">
      <div className="space-y-6">
        <img src="/images/icon-communities.svg" alt="" />
        <div className="space-y-6">
          <h1 className="font-Heading text-6xl leading-12">1.4k+</h1>
          <p className="font-semibold text-center text-VeryDarkCyan/50">
            Communities Formed
          </p>
        </div>
      </div>
      <div className="space-y-6">
        <img src="/images/icon-messages.svg" alt="" />
        <div className="space-y-6">
          <h1 className="font-Heading text-6xl leading-12">2.7m+</h1>
          <p className="font-semibold text-center text-VeryDarkCyan/50">
            Messages Sent
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
