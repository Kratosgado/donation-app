import { testimonials } from "@/components/moving.cards";
import { Navbar } from "@/components/navbar";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundBeams } from "@/components/ui/background-beans";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { LampDemo } from "@/components/lamp.effect";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter.effect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar className="top-2" />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <LampDemo />
      {/* <div className="flex items-center justify-center"> */}
      <div className="h-[40rem] w-full flex items-center justify-center flex-row">
        <TypewriterEffectSmooth
          words={[
            { text: "Donation" },
            { text: "Options", className: "text-blue-500 dark:text-blue-500" },
          ]}
        />
        <PinContainer title="Food Donation" href="/donate/food">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Have food for spare?
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
        <PinContainer title="Clothing Donation" href="/donate/clothing">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Have clothes for the needy?
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
      {/* </div> */}
      <BackgroundBeams />
    </main>
  );
}
