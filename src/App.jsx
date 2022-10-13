import React from "react";
import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

const Cards = [
  {
    src: "/images/illustration-grow-together.svg",
    bg: "top",
    reverse: false,
    title: "Grow Together",
    text: "  Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
  },
  {
    src: "/images/illustration-flowing-conversation.svg",
    bg: false,
    reverse: true,
    title: "Flowing Conversations",
    text: "  You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow .",
  },
  {
    src: "/images/illustration-your-users.svg",
    reverse: false,
    bg: "bottom",
    title: "Your Users",
    text: "  It takes no time at all to integrate Huddle with your app's authentication solution. This means,once signed in to your app, your users can start chatting immediately.",
  },
];

function App() {
  return (
    <div className="min-h-screen font-Body text-VeryDarkCyan bg-white">
      <header className="px-4 md:px-8 py-8">
        <Header />
      </header>
      <section className="lg:px-20 md:px-8 px-6 md:max-w-fit mx-auto mt-28 md:space-y-16 space-y-36 ">
        <Hero />
        <Stats />
      </section>
      <section className="lg:mt-16  mt-28 space-y-16 md:space-y-0">
        {Cards.map((card) => (
          <Card data={card} key={card.src} />
        ))}
      </section>
      <section className="lg:px-20  px-8 md:space-y-6 space-y-12 text-center md:pt-24 mt-16">
        <h1 className="text-3xl font-Heading">
          Ready To Build Your Community?
        </h1>
        <button className="bg-Pink px-16 py-4 rounded-full text-white font-semibold hover:bg-opacity-70 transition shadow-md">
          Get Started For Free
        </button>
      </section>
      <footer className="md:mt-24 mt-40">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
