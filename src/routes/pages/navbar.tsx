import { Link } from "@tanstack/react-router";
import { iconHamburger, logo } from "../../assets/shared";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";

export default function Navbar() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");
  const [ismenmuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <header className="w-full fixed lg:top-10 md:top-0 z-50 bg-transparent">
      <div className="flex">
        {/* Logo */}
        <div className="left-15 top-4.5 absolute">
          <img src={logo} alt="logo" />
        </div>

        {/* Desktop Menu */}
        {isAboveMediumScreens ? (
          <nav className="flex flex-col absolute justify-center right-0 padd sm:w-120 xs:w-100 md:w-150 lg:w-2xl xl:w-2xl bg-white/10 backdrop-blur-md h-20">
            <ul className="flex justify-end md:gap-7 gap-10 md:text-white sm:gap-4 w-full text-white tracking-widest text-sm">
              <li className="flex gap-3">
                <Link
                  to="/"
                  className="flex gap-3"
                  activeProps={{
                    className: "border-b-2 border-white", // underline when active
                  }}
                >
                  <span className="font-bold">00</span>
                  <p className="font-normal">HOME</p>
                </Link>
              </li>

              <Link
                to="/destination"
                className="flex gap-3"
                activeProps={{
                  className: "border-b-2 border-white", // underline when active
                }}
              >
                <span className="font-bold">01</span>
                <p className="font-normal">DESTINATION</p>
              </Link>

              <Link
                to="/crew"
                className="flex gap-3"
                activeProps={{
                  className: "border-b-2 border-white", // underline when active
                }}
              >
                <span className="font-bold">02</span>
                <p className="font-normal">CREW</p>
              </Link>

              <Link
                to="/technology"
                className="flex gap-3"
                activeProps={{
                  className: "border-b-2 border-white", // underline when active
                }}
              >
                <span className="font-bold">03</span>
                <p className="font-normal">TECHNOLOGY</p>
              </Link>
            </ul>
          </nav>
        ) : (
          <>
            {/* Hamburger Icon */}
            <img
              className="absolute right-14 top-6 h-7 w-7 cursor-pointer"
              src={iconHamburger}
              alt="hamburger-icon"
              onClick={() => setIsMenuToggled(!ismenmuToggled)}
            />

            {/* Mobile Menu Overlay */}
            {ismenmuToggled && (
              <div className="fixed right-0 top-0 h-full w-64 bg-white/10 backdrop-blur-md flex flex-col items-start p-8 space-y-6 text-white tracking-widest">
                <button
                  className="self-end text-xl cursor-pointer"
                  onClick={() => setIsMenuToggled(false)}
                >
                  ✕
                </button>

                {/* Mobile Links */}
                <Link
                  to="/"
                  className="flex gap-3"
                  activeProps={{
                    className: "border-b-2 border-white", // underline when active
                  }}
                  onClick={() => setIsMenuToggled(false)}
                >
                  <span className="font-bold">00</span> HOME
                </Link>

                <Link
                  to="/destination"
                  className="flex gap-3"
                  activeProps={{
                    className: "border-b-2 border-white", // underline when active
                  }}
                  onClick={() => setIsMenuToggled(false)}
                >
                  <span className="font-bold">01</span> DESTINATION
                </Link>

                <Link
                  to="/crew"
                  className="flex gap-3"
                  activeProps={{
                    className: "border-b-2 border-white", // underline when active
                  }}
                  onClick={() => setIsMenuToggled(false)}
                >
                  <span className="font-bold">02</span> CREW
                </Link>

                <Link
                  to="/technology"
                  className="flex gap-3"
                  activeProps={{
                    className: "border-b-2 border-white", // underline when active
                  }}
                  onClick={() => setIsMenuToggled(false)}
                >
                  <span className="font-bold">03</span> TECHNOLOGY
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}
