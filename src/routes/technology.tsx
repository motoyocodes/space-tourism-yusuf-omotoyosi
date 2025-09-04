import { createFileRoute } from "@tanstack/react-router";
import {
  imageLaunchVehicleLandscape,
  imageLaunchVehiclePortrait,
  imageSpaceCapsuleLandscape,
  imageSpaceCapsulePortrait,
  imageSpaceportLandscape,
  imageSpaceportPortrait,
} from "../assets/technology";
import { useState } from "react";

export const Route = createFileRoute("/technology")({
  component: Technology,
});

const technologies = [
  {
    name: "Launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    landscape: imageLaunchVehicleLandscape,
    portrait: imageLaunchVehiclePortrait,
  },
  {
    name: "Spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching or receiving spacecraft. Think of it as an airport, but for space travel.",
    landscape: imageSpaceportLandscape,
    portrait: imageSpaceportPortrait,
  },
  {
    name: "Space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter Earth's atmosphere safely. Our capsule is modern and comfortable.",
    landscape: imageSpaceCapsuleLandscape,
    portrait: imageSpaceCapsulePortrait,
  },
];

function Technology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tech = technologies[activeIndex];

  return (
    <main
      className="min-h-screen w-full flex flex-col items-center
       text-white p-6 bg-cover img-tech  bg-no-repeat justify-evenly"
    >
      <h1
        className="uppercase tracking-widest font-light text-2xl te-sizee bio-top gap-5 
             text-center md:text-left self-center md:self-start
             ma-left flex"
      >
        <span className="font-normal text-gray-500">03</span> Space launch 101
      </h1>

      {/* Tech content */}
      <div
        className="flex flex-col-reverse lg:flex-row w-full items-center
       gap-12"
      >
        {/* Left: Text + Tabs */}
        <div className="flex flex-col lg:flex-row  items-center lg:items-start gap-8">
          {/* Tabs */}
          <div className="flex lg:flex-col gap-4">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-lg font-bold 
                  ${activeIndex === index ? "bg-white text-black" : "text-white"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Tech details */}
          <div className="max-w-xl text-center lg:text-left">
            <p
              className="uppercase text-md font-bellefair 
            text-gray-500 md:text-3xl font-normal te-size"
            >
              The terminology…
            </p>
            <h2
              className="text-xl font-bellefair md:text-5xl cm-top uppercase 
            "
            >
              {tech.name}
            </h2>
            <p
              className="text-lg padd-tech te-size text-[#D0D6F9]
            font-barlow font-light md:max-w-3xl
            "
            >
              {tech.description}
            </p>
          </div>
        </div>

        <picture>
          {/* Desktop portrait */}
          <source srcSet={tech.portrait} media="(min-width:1024px)" />
          {/* tablet portrait */}
          <source srcSet={tech.landscape} media="(min-width:768px)" />
          {/* Mobile/tablet landscape */}
          <img
            src={tech.landscape}
            alt={tech.name}
            className="w-full h-full md:h-[357px] object-cover"
          />
        </picture>
      </div>
    </main>
  );
}

export default Technology;
