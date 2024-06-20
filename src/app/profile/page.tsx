"use client";

import React, { useState } from "react";
import Head from "next/head";

const ProfilePage: React.FC = () => {
  const [theme, setTheme] = useState("theme-orange");

  const switchTheme = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <div className={theme}>
      <Head>
        <title>Dashboard Profile Page Theme Color Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="cd__intro text-center py-10">
        <h1 className="text-3xl font-bold">
          Dashboard Profile Page Theme Color Example
        </h1>
        <p className="text-lg">
          Dashboard Profile Page Theme Color with Vanilla JS
        </p>
        <div className="cd__action mt-4">
          <a
            href="https://www.codehim.com/html5-css3/user-profile-page-template-in-html-css"
            className="cd__btn back bg-blue-500 text-white px-4 py-2 rounded"
          >
            Back to Tutorial
          </a>
        </div>
      </header>
      <main className="cd__main flex justify-center items-center min-h-screen">
        <div className="profile-page w-full max-w-4xl p-8 bg-white rounded-2xl shadow-xl">
          <div className="content">
            <div className="content__cover relative bg-gradient-to-r from-blue-500 to-purple-500 h-48 rounded-t-2xl"></div>
            <div
              className="content__avatar w-48 h-48 rounded-full bg-cover bg-center mx-auto -mt-24 shadow-lg"
              style={{
                backgroundImage:
                  "url('https://image.freepik.com/free-photo/friendly-brunette-looking-camera_23-2147774849.jpg')",
              }}
            ></div>
            <div className="content__actions flex justify-between py-4">
              <a href="#" className="flex items-center text-pink-500">
                <svg
                  className="w-8 h-8 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M192 256A112 112 0 1 0 80 144a111.94 111.94 0 0 0 112 112zm76.8 32h-8.3a157.53 157.53 0 0 1-68.5 16c-24.6 0-47.6-6-68.5-16h-8.3A115.23 115.23 0 0 0 0 403.2V432a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48v-28.8A115.23 115.23 0 0 0 268.8 288z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M480 256a96 96 0 1 0-96-96 96 96 0 0 0 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592a48 48 0 0 0 48-48 111.94 111.94 0 0 0-112-112z"
                  ></path>
                </svg>
                <span>Connect</span>
              </a>
              <a href="#" className="flex items-center text-purple-400">
                <svg
                  className="w-8 h-8 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M208 352c-41 0-79.1-9.3-111.3-25-21.8 12.7-52.1 25-88.7 25a7.83 7.83 0 0 1-7.3-4.8 8 8 0 0 1 1.5-8.7c.3-.3 22.4-24.3 35.8-54.5-23.9-26.1-38-57.7-38-92C0 103.6 93.1 32 208 32s208 71.6 208 160-93.1 160-208 160z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M576 320c0 34.3-14.1 66-38 92 13.4 30.3 35.5 54.2 35.8 54.5a8 8 0 0 1 1.5 8.7 7.88 7.88 0 0 1-7.3 4.8c-36.6 0-66.9-12.3-88.7-25-32.2 15.8-70.3 25-111.3 25-86.2 0-160.2-40.4-191.7-97.9A299.82 299.82 0 0 0 208 384c132.3 0 240-86.1 240-192a148.61 148.61 0 0 0-1.3-20.1C522.5 195.8 576 253.1 576 320z"
                  ></path>
                </svg>
                <span>Message</span>
              </a>
            </div>
            <div className="content__title text-center mt-12">
              <h1 className="text-4xl font-bold">Samantha Jones</h1>
              <span className="block text-lg mt-2">
                New York, United States
              </span>
            </div>
            <div className="content__description text-center mt-6">
              <p>Web Producer - Web Specialist</p>
              <p>Columbia University - New York</p>
            </div>
            <ul className="content__list flex justify-center mt-6 space-x-8">
              <li className="text-center">
                <span className="block text-2xl font-bold">65</span>Friends
              </li>
              <li className="text-center">
                <span className="block text-2xl font-bold">43</span>Photos
              </li>
              <li className="text-center">
                <span className="block text-2xl font-bold">21</span>Comments
              </li>
            </ul>
            <div className="content__button text-center mt-12">
              <a
                href="#"
                className="button bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-2xl inline-block"
              >
                Show more
              </a>
            </div>
          </div>
          <div className="theme-switcher-wrapper mt-12 text-center">
            <span className="block mb-2">Themes color</span>
            <ul className="inline-flex space-x-4">
              <li>
                <em
                  className={`theme-switcher bg-orange-500 ${
                    theme === "theme-orange" ? "is-active" : ""
                  }`}
                  onClick={() => switchTheme("theme-orange")}
                ></em>
              </li>
              <li>
                <em
                  className={`theme-switcher bg-green-500 ${
                    theme === "theme-green" ? "is-active" : ""
                  }`}
                  onClick={() => switchTheme("theme-green")}
                ></em>
              </li>
              <li>
                <em
                  className={`theme-switcher bg-red-500 ${
                    theme === "theme-red" ? "is-active" : ""
                  }`}
                  onClick={() => switchTheme("theme-red")}
                ></em>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
