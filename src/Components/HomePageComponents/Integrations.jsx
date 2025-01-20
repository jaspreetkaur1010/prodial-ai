import React from 'react';
function Integrations() {
    return (
        <div className='lg:items-center px-12 py-6 space-y-8 lg:space-y-0 lg:space-x-8 lg:px-24 lg:py-24'>
            <div className='text-center lg:text-left'>
                <div className=" inline-block font-semibold text-xs text-blue-primary bg-white cursor-pointer border  px-2 py-2 rounded-lg shadow-sm">
                    INTEGRATIONS
                </div>
                <div className='flex justify-center'>
                    <div className=''>
                        <h2 className='py-6 lg:text-left text-4xl lg:text-5xl font-semibold'>Seamlessly Connect AI with Your Favorite Tools</h2>
                    </div>
                    <div className='w-3/4'>
                        <p className='pt-4 text-md md:text-md lg:text-left'>Enhance productivity and streamline workflows by integrating Prodigal AI solutions with your CRM, ERP, content platforms, LMS, and other business tools. Experience 
                            smooth deployments and real-time insights across all your critical systems.</p>
                        <button className="mt-8 border transition ease-in-out duration-200 group hover:bg-blue-secondary font-medium text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition-colors">
                            Explore all integrations
                        <i className="group-hover:pl-4 group-hover:pr-0 transition-all ease-in-out duration-200 fa-solid fa-arrow-right pl-2 pr-2"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className='pt-12'>
                <div className="inline-flex w-full flex-nowrap overflow-hidden space-x-12 [mask-image:_linear-gradient(to_left,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_80px,rgba(0,0,0,1)_calc(100%-10px),rgba(0,0,0,0)_100%)]">
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
    )
}

export default Integrations;