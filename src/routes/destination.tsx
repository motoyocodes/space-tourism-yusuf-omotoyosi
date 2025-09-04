import { createFileRoute } from "@tanstack/react-router";
import {
  imageEuropa,
  imageEuropaWebp,
  imageMars,
  imageMarsWebp,
  imageMoon,
  imageMoonWebp,
  imageTitan,
  imageTitanWebp,
} from "../assets/destination";
import { useState } from "react";

export const Route = createFileRoute("/destination")({
  component: Destination,
});

const destinations = [
  {
    name: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
    image: imageMoon,
    imageWebp: imageMoonWebp,
  },
  {
    name: "Mars",
    description:
      "Visit the red planet and discover the mysteries of its dusty landscape.",
    distance: "225 mil. km",
    travel: "9 months",
    image: imageMars,
    imageWebp: imageMarsWebp,
  },
  {
    name: "Europa",
    description:
      "The icy moon of Jupiter, famous for its subsurface ocean and breathtaking sights.",
    distance: "628 mil. km",
    travel: "3 years",
    image: imageEuropa,
    imageWebp: imageEuropaWebp,
  },
  {
    name: "Titan",
    description:
      "Saturn’s largest moon, with methane rivers and lakes. An exotic world to explore.",
    distance: "1.6 bil. km",
    travel: "7 years",
    image: imageTitan,
    imageWebp: imageTitanWebp,
  },
];

function Destination() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = destinations[activeIndex];

  return (
    <main
      className="w-full min-h-screen flex flex-col 
       items-center justify-center 
       text-white bg-cover bg-no-repeat 
         img-dest pad-small md:flex-col "
    >
      <h1
        className="  marl-big xl:text-2xl text-md font-light flex gap-4
    justify-center md:justify-start md:text-lg
    items-center xl:items-start margb w-full
    text-[#FFFFFF]
    mt-10 md:mt-16 lg:mt-20"
      >
        <span className="font-bold text-gray-500 ">01</span> PICK YOUR
        DESTINATION
      </h1>

      <div
        className="flex flex-col md:flex-col lg:flex-row items-center 
      gap-8 md:gap-20"
      >
        {/* Planet image */}
        <picture>
          <source srcSet={current.imageWebp} type="image/webp" />
          <img
            src={current.image}
            alt={current.name}
            className="w-40 h-40 padddd md:w-70 md:h-70 xl:w-110 xl:h-110
             object-contain marg img-smaller"
          />
        </picture>

        {/* Planet details */}
        <div
          className="flex flex-col max-w-md md:max-w-lg 
        text-center md:text-left padddd gap-6 gappp"
        >
          <ul
            className="flex justify-center marg  text-[#D0D6F9]
          xl:gap-6 gap-9 padddd uppercase tracking-widest md:text-center"
          >
            {destinations.map((d, index) => (
              <li
                key={d.name}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer pb-1  ${
                  activeIndex === index
                    ? "border-b-2 border-white"
                    : "hover:border-b-2 hover:border-gray-500"
                }`}
              >
                {d.name}
              </li>
            ))}
          </ul>

          <h2
            className="text-6xl moon-text uppercase  text-[#FFFFFF]
           font-light font-bellefair margt md:text-center"
          >
            {current.name}
          </h2>
          <p
            className="text-lg max-w-[445px] text-[#D0D6F9] 
          font-barlow font-normal des-text md:max-w-[900px]
          xl:max-w-[445px]"
          >
            {current.description}
          </p>

          <hr className="border-gray-600 max-w-[445px] md:max-w-[900px]" />

          <div
            className="flex md:justify-around xl:gap-10 text-center
           md:text-left xl:max-w-[445px] md:max-w-[900px] uppercase flex-col
           gapp gap-6 md:flex-row fle-ro"
          >
            <div className="flex gap-y-2 gapp flex-col">
              <p
                className="uppercase font-barlow text-sm
              text-[#D0D6F9] "
              >
                Avg. distance
              </p>
              <p
                className="xl:text-2xl text-3xl font-light
               font-bellefair  text-small"
              >
                {current.distance}
              </p>
            </div>

            <div className="flex gap-2 gappp flex-col">
              <p
                className="uppercase font-barlow text-sm
              text-[#D0D6F9] "
              >
                Est. travel time
              </p>
              <p
                className="xl:text-2x text-3xl font-light
               font-bellefair text-small"
              >
                {current.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Destination;
