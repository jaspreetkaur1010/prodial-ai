import React from 'react';
import { footerfeatures , footeruseCases, footerresources, footercompany} from '../../constants';
import Logo from "../../assets/Logo.svg";
import whiteLogo from "../../assets/logos/white-transparent-horizontal.png";
function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-20 md:gap-10 ">
        {/* Left Section */}
        <div className="lg:col-span-1 col-span-full">
          <img  className="h-36 lg:h-24 mx-auto" src={whiteLogo} alt="prodigalAI"/>  
          <p className="mb-4 text-sm text-justify">
            Synthesia is the #1 AI Video Communications Platform. Our{' '}
            <a href="#" className="text-blue font-bold">
              AI Video Generator
            </a>{' '}
            enables everyone to create professional videos without mics,
            cameras, actors or studios.
          </p>
          <p className="mb-4 text-sm text-justify">
            Using AI, we’re radically changing the process of video content
            creation, making it scalable and affordable while maintaining high
            quality.
          </p>

          {/* <div className="flex space-x-4 mt-4">
            <img
              src="/path/to/aicpa-logo.png"
              alt="AICPA SOC Logo"
              className="w-10 h-10"
            />
            <img
              src="/path/to/content-authenticity-logo.png"
              alt="Content Authenticity Initiative Logo"
              className="w-10 h-10"
            />
          </div> */}

          <p className="mt-4 text-xs">
            Synthesia Ltd, Synthesia, Kent House, 14-17 Market Place, London,
            W1W 8AJ, United Kingdom.
            {/* Address here */}
          </p>
        </div>

        {/* Middle Sections */}
        <div className="col-span-1">
            <h3 className="text-lg font-semibold text-blue mb-2">Features</h3>
            <ul className="space-y-1">
                {footerfeatures.map((feature, index) => (
                <li key={index}>
                    <a href={feature.link} className="text-sm hover:text-blue-bg-light">
                    {feature.name}
                    </a>
                </li>
                ))}
            </ul>
        </div>

        <div className="col-span-1">
            <h3 className="text-lg font-semibold text-blue mb-2">Use Cases</h3>
            <ul className="space-y-1">
                {footeruseCases.map((feature, index) => (
                <li key={index}>
                    <a href={feature.link} className="text-sm hover:text-blue-bg-light">
                    {feature.name}
                    </a>
                </li>
                ))}
            </ul>
        </div>

        <div className="col-span-1">
            <h3 className="text-lg font-semibold text-blue mb-2">Resources</h3>
            <ul className="space-y-1">
                {footerresources.map((feature, index) => (
                <li key={index}>
                    <a href={feature.link} className="text-sm hover:text-blue-bg-light">
                    {feature.name}
                    </a>
                </li>
                ))}
            </ul>
        </div>

        {/* Right Section */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-blue mb-2">Company</h3>
          <ul className="space-y-1">
                {footercompany.map((feature, index) => (
                <li key={index}>
                    <a href={feature.link} className="text-sm hover:text-blue-bg-light">
                    {feature.name}
                    </a>
                </li>
                ))}
            </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
