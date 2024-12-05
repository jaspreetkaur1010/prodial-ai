import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { homeHeaderLinks } from "../../constants";
import Logo from "../../assets/Logo.svg";

export default function Header() {
  const [isTicked, setIsTicked] = useState(false);
  const [isHidden, setIsHidden] = useState(false); 

  let toggleRemove = () => {
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
      transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
      transition: 'transform 0.5s ease-in-out',
      }}
      >
        <div className="flex items-center">
          <button className="gradient-button px-2 py-2">
            NEW RELEASE
          </button>
          <span className="font-semibold text-sm md:text-md">AI Video Localization</span>
          <a href="#" className="hidden sm:flex sm:ml-4 underline text-sm md:text-md">
          Learn more
          </a>
        </div>

        <button onClick={toggleRemove} className="absolute m-2 right-4 sm:right-6 text-white text-3xl transition-transform duration-300 hover:rotate-90">
        &times;
        </button>
      </div>

      <div className="flex bg-white px-4 sm:px-10 justify-between items-center"
      style={{
      transform: isHidden && !isTicked ? 
        window.matchMedia('(min-width: 1024px)').matches
        ? 'translateY(-60%)'
        : 'translateY(-75%)'
    : 'translateY(0)',
      transition: 'transform 0.5s ease-in-out',
      }}>
        <div className="space-x-12 align-left flex">
          <Link to="/">
            <img  className="h-16 lg:h-20" src={Logo} alt="prodigalAI"/>
          </Link>
          <div className="flex space-x-12 text-sm items-center">
            {homeHeaderLinks.map((link, index) => (
              <Link to={link.path} key={index}>
                <div className={"relative text-gray-600 group flex items-center py-2 space-x-2"}>
                  <h2 className="group-hover:text-blue-primary">{link.name}</h2>
                  {link.hasDropdown && (
                    <>
                      <i className="fa-solid fa-chevron-down text-xs transform transition-transform duration-300 group-hover:rotate-180 group-hover:text-blue-primary "></i>
                      <div className="text-white hidden group-hover:flex items-center bg-blue-light absolute top-9 -left-28 h-56 w-[900px] rounded-xl ">
                        <ul className="m-12 w-1/2 space-y-4">
                          <li>Feature 1</li>
                          <li>Feature 2</li>
                          <li>Feature 3</li>
                          <li>Feature 4</li>
                        </ul>
                        <div className="bg-white h-3/4 w-1/2 m-4 rounded-lg">image here</div>
                      </div>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <Link to="/login">
            <h3 className="text-sm text-gray-600 hover:text-blue-primary">Login</h3>
          </Link>
          <button className="bg-blue-primary hidden  sm:flex transition ease-in-out duration-200 hover:bg-blue-secondary text-white text-sm font-semibold px-4 py-2 rounded-md">Get Started</button>
          <i className="fa-solid fa-bars text-2xl"></i>

        </div>
    </div>
  </div>
  </>
  );
  }
