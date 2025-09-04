import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  backgroundCrewDesktop,
  backgroundCrewMobile,
  backgroundCrewTablet,
  imageAnoushehAnsari,
  imageAnoushehAnsariWebp,
  imageDouglasHurley,
  imageDouglasHurleyWebp,
  imageMarkShuttleworth,
  imageMarkShuttleworthWebp,
  imageVictorGlover,
  imageVictorGloverWebp,
} from "../assets/crew";

interface CrewMember {
  name: string;
  role: string;
  bio: string;
  imagePng: string;
  imageWebp: string;
}

const crewMembers: CrewMember[] = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2",

    imagePng: imageDouglasHurley,
    imageWebp: imageDouglasHurleyWebp,
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems...",
    imagePng: imageAnoushehAnsari,
    imageWebp: imageAnoushehAnsariWebp,
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station...",
    imagePng: imageVictorGlover,
    imageWebp: imageVictorGloverWebp,
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind Ubuntu...",
    imagePng: imageMarkShuttleworth,
    imageWebp: imageMarkShuttleworthWebp,
  },
];

export const Route = createFileRoute("/crew")({
  component: CrewPage,
});

function CrewPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const member = crewMembers[selectedIndex];

  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Background */}
      <picture>
        <source media="(min-width:1024px)" srcSet={backgroundCrewDesktop} />
        <source media="(min-width:640px)" srcSet={backgroundCrewTablet} />
        <img
          src={backgroundCrewMobile}
          alt="crew background"
          className="absolute  w-full h-full object-cover
           -z-10 "
        />
      </picture>

      {/* Content */}
      <div
        className="flex flex-col lg:gap-0 lg:items-start
        min-h-screen w-full gap-10 justify-evenly lg:flex-row
        lg:justify-evenly all-pad lg:absolute top-1/10 ipad-pro-flex
        "
      >
        {/* Left: Text Info */}
        <div className="flex flex-col ">
          <h2
            className="flex justify-center font-barlow 
            tracking-widest uppercase font-normal 
          text-[#FFFFFF] gap-6 text-md md:text-2xl 
            md:justify-start crew-top "
          >
            {" "}
            <span className="text-gray-500 font-bold">02</span>
            Meet your crew
          </h2>

          {/* writeup */}

          <div
            className="flex flex-col items-center lg:items-start
          justify-around marr-to"
          >
            <h3
              className="text-2xl md:text-4xl font-bellefair 
            uppercase opacity-60 font-bellefair
             text-[#FFFFFF] font-normal te-siz"
            >
              {member.role}
            </h3>
            <h1
              className="text-4xl lg:text-5xl text-[#FFFFFF] font-bellefair
             uppercase cm-top font-bellefair te-si"
            >
              {member.name}
            </h1>
            <p
              className="text-[#D0D6F9] text-center leading-relaxed
            max-w-[350px] md:max-w-[540px] font-barlow font-normal
             bio-top te-siz lg:max-w-[800px] lg:text-start lg:text-lg"
            >
              {member.bio}
            </p>

            {/* Tabs (dots) */}
            <div
              className="flex gap-4 
             im-abs lg:absolute bottom-3/12 dot"
            >
              {crewMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`h-4 w-4 rounded-full ${
                    selectedIndex === index ? "bg-white" : "bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Image with WebP + PNG fallback */}
        <div className="flex justify-center items-center">
          <picture>
            <source srcSet={member.imageWebp} type="image/webp" />
            <source srcSet={member.imagePng} type="image/png" />
            <img
              src={member.imagePng}
              alt={member.name}
              className="h-80 md:h-[30rem] lg:h-[40rem] md:justify-center 
               md:absolute md:bottom-0 lg:relative object-contain 
               md:left-4/13 lg-left-0"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
