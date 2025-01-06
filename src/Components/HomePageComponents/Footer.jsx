import React from 'react';
import { footerfeatures , footeruseCases, footerresources, footercompany} from '../../constants';
import Logo from "../../assets/Logo.svg";
import whiteLogo from "../../assets/logos/white-transparent-horizontal.png";
function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-8">
      <div className="max-w-7xl mx-auto gap-20 md:gap-10 md:flex">
      {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 */}
       
        {/* Left Section */}
        <div className="md:w-1/2 lg:w-1/4 mr-16">
          <img  className="h-36 lg:h-24" src={whiteLogo} alt="prodigalAI"/>  
          <p className="mb-4 text-sm text-left">
            At Prodigal AI, we specialize in transforming businesses with cutting-edge{' '}
            <a href="#" className="text-blue font-bold">
              AI solutions
            </a>{' '}
            blending automation, generative intelligence,
            and decentralized systems to drive growth,
            innovation, and efficiency across industries.
          </p>
          <p className="mb-4 text-sm text-left">
            Empowering businesses with AI innovation and automation.
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
        <div className="">
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

        <div className="">
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

        <div className="">
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
        <div className="">
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
