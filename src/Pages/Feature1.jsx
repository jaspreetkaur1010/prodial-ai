import Header from "../Components/Feature1Components/Header";
import VideoInfinty from "../Components/Feature1Components/VideoInfinty";
export default function Feature1(){
    return(
        <>
            <Header/>
            <div className="pt-56 bg-gradient-to-b from-black via-blue-tertiary to-blue-primary py-12">
                <div className="text-center pb-20">
                    <div className="inline-block font-semibold text-sm text-blue-bg-light bg-blue-primary bg-opacity-50 cursor-pointer px-2 py-2 rounded-lg shadow-sm">
                        TRUSTED BY 50,000 COMPANIES
                    </div>
                
                    <h1 className="text-5xl md:text-7xl text-white font-semibold mt-4">The complete <span className="bg-gradient-to-r  from-blue-bg-light via-blue-light to-blue-secondary text-transparent bg-clip-text">AI Video Platform</span><br/> for companies.</h1>
                    <p className="text-lg mt-8 px-4 text-gray-200 font-semibold">
                    Easily produce your training, marketing and internal communication videos.
                    </p>

                </div>

                <VideoInfinty/>
            </div>

        </>
    )
}