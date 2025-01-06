import React from 'react';
function FooterCTAsection() {
    return (
        <div className='lg:flex lg:items-center px-12 py-6 space-y-8 lg:space-y-0 lg:space-x-8 lg:px-24 lg:py-24'>
            <div className='lg:w-1/2 lg:text-left'>
                <h2 className='text-5xl lg:text-left lg:text-4xl xl:text-5xl font-semibold'>Ready to <br/> Supercharge Your <br/> Business with AI?</h2>
                <p className='pt-4 md:text-lg lg:text-left'>Join thousands of businesses transforming their workflows with Prodigal AI.</p>
                <button className="mt-8 bg-blue-primary transition ease-in-out duration-200 group hover:bg-blue-secondary text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-colors">
                    Get started today
                <i className="group-hover:pl-4 group-hover:pr-0 transition-all ease-in-out duration-200 fa-solid fa-arrow-right pl-2 pr-2"></i>
                </button>
            </div>
            <div className='lg:w-2/3'>
                <div className="w-full h-full">
                    <video
                        src="https://webcdn.synthesia.io/HomeHeroVideos/02.08.24/Alex_NEW_WBHERO_1400px_2Mbps.webm"
                        width="100%"
                        height="100%"
                        className="object-cover  rounded-xl"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </div>
    )
}

export default FooterCTAsection;