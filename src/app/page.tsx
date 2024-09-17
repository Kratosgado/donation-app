import { testimonials } from "@/components/moving.cards";
import { PinContainer } from "@/components/ui/3d-pin";
import { BackgroundBeams } from "@/components/ui/background-beans";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { LampDemo } from "@/components/lamp.effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter.effect";
import { InspirationsSection } from "@/components/inspirations.section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar className="top-2" />

      <LampDemo />
      <div
        id="donations"
        className="h-[40rem] w-full flex items-center justify-center flex-row"
      >
        <TypewriterEffectSmooth
          words={[
            { text: "Donation" },
            { text: "Options", className: "text-blue-500 dark:text-blue-500" },
          ]}
        />
        <PinContainer title="Food Donation" href="/donate">
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
        <PinContainer title="Clothing Donation" href="/donate">
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
      <TypewriterEffectSmooth
        words={[
          { text: "Get" },
          {
            text: "Inspired!!!",
            className: "text-blue-500 dark:text-blue-500",
          },
        ]}
      />

        <InspirationsSection />
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

        <div id="how-it-works">
          <h1 className="">How It Works</h1>
          <p>So thosj sdfklfjsdk fjsdh fsdhf sdjhfsdlkj fkosdjf sdljaf kdjfa nsdjhf nsfhsdjfh sdl jksdhfjkhsdj</p>
        </div>
        <div id="about-us">
          <h1>About Us</h1>
            <p>sldjfklsdlfjsd fkjsd</p>
        </div>

      <BackgroundBeams />
    </main>
  );
}
