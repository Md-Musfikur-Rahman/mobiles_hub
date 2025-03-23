"use client";

import React from "react";
import Link from "next/link";

const ExtraPage = ({ params }) => {
  const pageName = params.extras;

  if (pageName === "contact") {
    return (
      <div className="w-4/5 mx-auto my-10">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text mb-8">
          Let's Connect
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="backdrop-blur-sm bg-gradient-to-br from-white/60 to-white/30 border border-white/20 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                About Me
              </h2>
              <p className="text-gray-600">
                I'm Musfikur Rahaman, a Full Stack Developer with expertise in
                MERN stack development. I specialize in creating responsive and
                user-friendly web applications.
              </p>
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-br from-white/60 to-white/30 border border-white/20 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Info
              </h2>
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  contact@musfikur.com
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-gradient-to-br from-white/60 to-white/30 border border-white/20 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Connect With Me
              </h2>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/musfikur-rahman"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com/in/musfikur-rahman"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com/musfikur"
                  className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-sm bg-gradient-to-br from-white/60 to-white/30 border border-white/20 p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Send Me a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-4/5 mx-auto my-10">
      <h1 className="text-2xl font-bold capitalize">{pageName} Page</h1>
    </div>
  );
};

export default ExtraPage;
