//import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronRight, TruckElectric } from "lucide-react";
ß;

const AuthScreen = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="hero-bg relative">
      {/* navbar */}
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4 pb-10">
        <img
          src="netflix-logo.png"
          alt="Netlix-logo"
          className="w-32 md:w-52"
        />
        <Link to={"/login"} className="tetx-white bg-red-600 py-1 px-2 rounded">
          Sign In
        </Link>
      </header>
      {/* hero -section */}

      <div className="flex flex-col items-center justify-center py-40 text-white max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-lg mb-4">Watch anywher. cancel anytime.</p>
        <p className="mb-4">
          Ready to watch? Enter your email to create or restart your membership
        </p>

        <form className="flex flex-col md:flex-row gap-4 w-1/2">
          <input
            type="email"
            className="w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white 
                    focus:outline-none focus:ring"
            placeholder="you@example.com"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center">
            Get started
            <ChevronRight className="size-8 md:size-10" />
          </button>
        </form>
      </div>

      {/* separator*/}
      <div className="h-2 w-full bg-[#232323]" aria-hidden="true" />
      {/*1st section*/}
      <div className="py-10 bg-black text-white">
        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2">
          {/*left side*/}

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Enjoy on your TV
            </h2>
            <p className="text-lg md:text-xl">
              Watch on smart TVs, playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more
            </p>
          </div>
          {/*right side*/}
          <div className="flex-1 relative">
            <img src="/tv.png" alt="TV image" className="mt-4 z-20 relative " />
            <video
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2  z-10"
              playsInline
              autoPlay={true}
              muted
              loop
            >
              <source src="/hero-vid.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthScreen;
