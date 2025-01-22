import React from 'react';
function Integrations() {
    return (
        <div className='lg:items-center py-6 space-y-8 lg:space-y-0 lg:space-x-8 py-12 lg:py-16 text-center px-6 md:px-12 xl:px-24'>
            <div className='lg:text-left'>
                <div className=" inline-block font-semibold text-xs text-blue-primary bg-white cursor-pointer border px-2 py-2 rounded-lg shadow-sm">
                    INTEGRATIONS
                </div>
                <div className='lg:space-x-2 xl:space-x-6 lg:flex justify-center'>
                    <div>
                        <h2 className='py-6 text-center md:text-left text-3xl md:text-4xl lg:text-5xl font-semibold xl:w-3/4'>Seamlessly Connect AI with Your Favorite Tools</h2>
                    </div>
                    <div className=''>
                        <p className='m-0 pt-4 text-md md:text-md text-center md:text-left'>
                            Enhance productivity and streamline workflows by integrating Prodigal AI solutions with your CRM, ERP, content platforms, LMS, and other
                                 business tools. Experience smooth deployments and real-time insights across all your critical systems.
                        </p>
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