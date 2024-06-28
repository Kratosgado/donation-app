"use client";

import React, { useState } from "react";
import Head from "next/head";
import { useAuthContext } from "@/components/auth.context";

const ProfilePage: React.FC = () => {
  const user = useAuthContext();

  const bgImage =
    "https://image.freepik.com/free-photo/friendly-brunette-looking-camera_23-2147774849.jpg";

  return (
    <main className=" bg-zinc-950  flex justify-center items-center min-h-screen py-40">
      <div className="bg-neutral-950 shadow-md shadow-gray-700 w-full max-w-4xl p-8 rounded-2xl">
        <div className="bg-zinc-950 shadow-sm shadow-gray-700 rounded-2xl p-8">
          <div className="relative bg-gradient-to-r from-white to-gray-500 h-48 rounded-t-2xl"></div>
          <div
            className="absolute w-48 h-48 rounded-full bg-cover bg-center mx-auto -mt-24 shadow-lg shadow-gray-700"
            style={{
              backgroundImage: `url('${bgImage}')`,
            }}
          ></div>

          <div className="text-center mt-12">
            <h1 className="text-4xl font-bold">
              {user?.firstname + " " + user?.lastname}
            </h1>
            <span className="block text-lg mt-2">Kumasi, Ghana</span>
          </div>
          <div className=" text-center mt-6">
            <p>Computer Science Student - Enterprenuer</p>
            <p>On-Campus - Baby Brunei</p>
          </div>
          <div className="text-center mt-12 text-4xl font-bold">Donations</div>
          <ul className=" flex justify-center mt-6 space-x-8">
            <li className="text-center">
              <span className="block text-2xl font-bold">65</span>Food Items
            </li>
            <li className="text-center ">
              <span className="block text-2xl font-bold">43</span>Clothings
            </li>
            <li className="text-center">
              <span className="block text-2xl font-bold">21</span>Others
            </li>
          </ul>
          <div className=" text-center mt-12">
            <a
              href="#"
              className="button bg-gradient-to-r from-white to-gray-400  text-zinc-950 px-8 py-4 rounded-2xl inline-block"
            >
              Show more
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
