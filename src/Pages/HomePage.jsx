import { useState } from "react";
import Header from "../Components/HomePageComponents/Header";
import VideoCard from "../Components/HomePageComponents/VideoCard";
import WorkSection from "../Components/HomePageComponents/WorkSection";
import FaqSection from "../Components/HomePageComponents/FaqSection";
import Footer from "../Components/HomePageComponents/Footer";
import FooterCTAsection from "../Components/HomePageComponents/FooterCTAsection";
import BookDemo from "../Components/HomePageComponents/BookDemo";
export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);


  return (
  <>
    <div className="absolute z-50"><Header/></div>

    <div className="pt-36 bg-gradient-to-b from-white via-blue-bg-light to-white py-12">
        <div className="text-center">
            <div 
            className="inline-block font-semibold text-xs text-blue-primary bg-white cursor-pointer border  px-2 py-2 rounded-lg shadow-sm"
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
            >
                #1 AI VIDEO COMMUNICATIONS PLATFORM 
                <i className="fa-solid fa-circle-info pl-4 text-sm"></i>
            
                {showPopup && (
                <div className="absolute top-36 left-1/2 transform -translate-x-1/2 bg-blue-secondary text-white text-sm p-4 rounded-lg shadow-lg w-80 z-10">
                    <p className="font-bold">1,000+ 5-star reviews on G2</p>
                    <p className="mt-2">
                        "Our 380,000+ employees all over the world must have the same competence profile. Synthesis helps us develop engaging, relevant, and localized training content at scale."
                    </p>
                    <p className="mt-4 font-semibold">Ben K.</p>
                    <p className="text-sm">SVP Learning and Dev. at Teleperformance</p>
                </div>
                )}
            </div>
        
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mt-4">Scale Smarter <br/>with <span className="bg-gradient-to-r from-blue-light to-blue-tertiary text-transparent bg-clip-text">Generative AI and <br/> Automation Tools.</span></h1>
            <p className="text-lg mt-4 px-4 text-gray-800">
            Streamline your buisness with <br/> 
            AI-powered automation and smarter workflows.
            </p>

            <button className="mt-8 bg-blue-secondary transition ease-in-out duration-200 group hover:bg-blue-tertiary text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-colors">
            Get started today
            <i className="group-hover:pl-4 group-hover:pr-0 transition-all ease-in-out duration-200 fa-solid fa-arrow-right pl-2 pr-2"></i>
            </button>
        
            <p className=" mt-4 text-white text-opacity-90 text-sm">No credit card required  &nbsp; | &nbsp;  Rated 4.9/5 by global leaders</p>
        </div>

        <div className="relative pt-12">
            <div className="relative group z-10 mx-auto w-3/4 rounded-3xl overflow-hidden">
                <div>
                    <button className="absolute top-4 left-4 bg-white border rounded-full p-5 opacity-50 shadow-md group-hover:opacity-100 transition-all ease-in-out duration-500">
                        <i className="fa-solid fa-volume-high px-1 group-hover:hidden"></i>
                        <p className="pl-12 hidden group-hover:flex transition-all transition-translate  ease-in-out duration-500">Listen</p>
                    </button>
                    <button className="absolute top-6 left-6 bg-white border rounded-full p-3 shadow-md">
                        <i className="fa-solid fa-volume-high px-1"></i>
                    </button>
                </div>

                <div className="w-full h-full">
                <video
                    src="https://webcdn.synthesia.io/HomeHeroVideos/02.08.24/Alex_NEW_WBHERO_1400px_2Mbps.webm"
                    width="100%"
                    height="100%"
                    className="object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                </div>
            </div>

            <div className="absolute -my-32 lg:px-28 left-0 right-0 z-20 flex-row lg:flex items-center justify-center pt-28 h-56 lg:h-48 bg-gradient-to-b from-transparent via-blue-opaque to-blue-opaque">
                <p className="text-black text-center text-md lg:pr-4 lg:w-48">
                Trusted by over 50,000 companies of all sizes
                </p>
                <div className="inline-flex w-full lg:w-3/4 flex-nowrap overflow-hidden space-x-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                    <ul className="flex items-center justify-center md:justify-start space-x-12 font-bold text-6xl animate-infinite-scroll ">
                        <li><p><i className="fa-brands fa-stripe"></i></p></li>
                        <li><p><i className="fa-brands fa-wix"></i></p></li>
                        <li><p><i className="fa-brands fa-apple-pay"></i></p></li>
                        <li><p><i className="fa-brands fa-ebay"></i></p></li>
                        <li><p><i className="fa-brands fa-cpanel"></i></p></li>
                        <li><p><i className="fa-brands fa-dhl"></i></p></li>
                    </ul>                
                    <ul className="flex items-center justify-center md:justify-start space-x-12 font-bold text-6xl animate-infinite-scroll " aria-hidden="true">
                        <li><p><i className="fa-brands fa-stripe"></i></p></li>
                        <li><p><i className="fa-brands fa-wix"></i></p></li>
                        <li><p><i className="fa-brands fa-apple-pay"></i></p></li>
                        <li><p><i className="fa-brands fa-ebay"></i></p></li>
                        <li><p><i className="fa-brands fa-cpanel"></i></p></li>
                        <li><p><i className="fa-brands fa-dhl"></i></p></li>
                    </ul>                
                    <ul className="flex items-center justify-center md:justify-start space-x-12 font-bold text-6xl animate-infinite-scroll " aria-hidden="true">
                        <li><p><i className="fa-brands fa-stripe"></i></p></li>
                        <li><p><i className="fa-brands fa-wix"></i></p></li>
                        <li><p><i className="fa-brands fa-apple-pay"></i></p></li>
                        <li><p><i className="fa-brands fa-ebay"></i></p></li>
                        <li><p><i className="fa-brands fa-cpanel"></i></p></li>
                        <li><p><i className="fa-brands fa-dhl"></i></p></li>
                    </ul>                
                </div>
            </div>
        </div>
    </div>
    <div className="w-full">    <VideoCard/></div>

    <WorkSection/>
    <div className="lg:flex px-4 py-6 lg:px-24 lg:py-24">
        <div className=" p-8 space-y-4 lg:w-1/2">
            <div className=" inline-block font-semibold text-xs text-blue-primary bg-white cursor-pointer border  px-2 py-2 rounded-lg shadow-sm">
                FAQS
            </div>
            <h3 className="text-4xl text-center lg:text-left md:text-5xl font-semibold">AI video <br/> generation FAQs</h3>
        </div>
        <div className="lg:w-1/2 mt-12 lg:ml-4 lg:mt-0">
                <FaqSection/>
        </div>
    </div>
    <FooterCTAsection/>
    <BookDemo/>

    <Footer/>
    </>
  );
}
