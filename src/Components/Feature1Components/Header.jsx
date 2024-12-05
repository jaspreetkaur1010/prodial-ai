import { useState, useEffect } from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  const [isTicked, setIsTicked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // New state to track scrolling

  const toggleRemove = () => {
    setIsTicked(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const halfScreen = window.innerHeight / 3;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (scrollTop > halfScreen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      if (scrollTop > 45) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed w-full">
        <div
          className={` w-full bg-gradient-to-r from-blue-tertiary via-blue-secondary to-blue-primary text-white h-12 flex items-center justify-center px-2 md:px-6 ${isTicked ? "hidden" : ""}`}
          style={{
            transform: isHidden ? "translateY(-100%)" : "translateY(0)",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <div className="flex items-center">
            <button className="gradient-button px-2 py-2">
              NEW RELEASE
            </button>
            <span className="font-semibold text-sm md:text-md">
              AI Video Localization
            </span>
            <a
              href="#"
              className="hidden sm:flex sm:ml-4 underline text-sm md:text-md"
            >
              Learn more
            </a>
          </div>

          <button
            onClick={toggleRemove}
            className="absolute m-2 right-4 sm:right-6 text-white text-3xl transition-transform duration-300 hover:rotate-90"
          >
            &times;
          </button>
        </div>

        <div
          className={`header flex bg-blue-secondary px-4 sm:px-10 justify-between items-center ${
            isScrolled ? "bg-white text-black" : "bg-transparent text-white "
          }`}
          style={{
            transform: isHidden && !isTicked ? 
            window.matchMedia('(min-width: 1024px)').matches
              ? 'translateY(-60%)'
              : 'translateY(-75%)'
          : 'translateY(0)',
            transition: "transform 0.5s ease-in-out, background-color 0.5s ease-in-out",
          }}
        >
          <Link to="/">
            <img  className="h-16 lg:h-20" src={Logo} alt="prodigalAI"/>
          </Link>
          <div className="flex items-center space-x-8">
            <button className="bg-blue-primary hidden sm:flex transition ease-in-out duration-200 hover:bg-blue-secondary text-white text-sm font-semibold px-4 py-2 rounded-md">
              Get Started
            </button>
            <i className="fa-solid fa-bars text-2xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}
