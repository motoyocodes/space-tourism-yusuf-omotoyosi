import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Homepage,
});

function Homepage() {
  return (
    <div
      className="
  flex flex-col md:flex-col w-full lg:flex-row relative 
  justify-center lg:justify-around items-center min-h-screen
  md:justify-center md:items-center md:absolute imgg-home
  lg:items-center top-0 md:gap-3 bg-cover bg-center bg-no-repeat
"
    >
      <div
        className="flex flex-col gap-4 h-full align-start justify-center
       items-center lg:justify-around padd2"
      >
        <h2
          className="color-bluewhite text-sm md:text-lg tracking-widest 
        font-normal"
        >
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1
          className="text-white text-6xl  md:text-9xl font-normal
         font-bellefair"
        >
          SPACE
        </h1>
        <p
          className="color-bluewhite text-base md:max-w-110 max-w-70
          md:text-lg font-normal leading-7"
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="padd2">
        <button
          className="bg-white font-bellefair text-[#0B0D17] rounded-full
           h-30 w-30  md:h-40 md:w-40 xl:w-60 xl:h-60  paddtop
           font-light text-md md:text-lg padd flex items-center justify-center
            hover:scale-110 ease-in duration-300 cursor-pointer "
        >
          EXPLORE
        </button>
      </div>
    </div>
  );
}
