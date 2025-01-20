import React from 'react';
function Enterprise() {
    return (
        <div className='lg:items-center px-12 py-6 lg:space-y-0 lg:px-24 lg:py-24'>
            <div className='text-center lg:text-left'>
                <div className=" inline-block font-semibold text-xs text-blue-primary bg-white cursor-pointer border  px-2 py-2 rounded-lg shadow-sm">
                    ENTERPRISE READY
                </div>
                <div className='space-x-2 flex justify-center'>
                    <div>
                        <h2 className='py-6 lg:text-left text-4xl lg:text-5xl font-semibold'>Built on AI Innovation with Ethics and Security at the Core</h2>
                    </div>
                    <div className='w-2/3'>
                        <p className='m-0 pt-4 text-md md:text-md lg:text-left'><span className='font-medium'>At Prodigal AI, we prioritize responsible AI</span> by embedding robust security and ethical frameworks in all our solutions, ensuring trust and safety for businesses and users alike.</p>
                        <button className="mt-8 border transition ease-in-out duration-200 group hover:bg-blue-secondary font-medium text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition-colors">
                            Explore all integrations
                        <i className="group-hover:pl-4 group-hover:pr-0 transition-all ease-in-out duration-200 fa-solid fa-arrow-right pl-2 pr-2"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className='pt-12 grid grid-cols-4 space-x-4'>
                <div className='bg-blue-opaque bg-opacity-40 space-x-2 flex p-4 rounded-lg'>
                    <div className='size-8 rounded-lg'>
                        <i className="fa-solid fa-microchip"></i>
                    </div>
                    <div>
                        <h2 className='font-medium'>SOC 2 & GDPR Compliant</h2>
                        <p className='text-sm pt-2'>Our systems follow strict data security standards and are independently certified for compliance.</p>
                    </div>
                </div>
                <div className='bg-blue-opaque bg-opacity-40 space-x-2 flex p-4 rounded-lg'>
                    <div className='size-8 rounded-lg'>
                        <i className="fa-solid fa-microchip"></i>
                    </div>
                    <div>
                        <h2 className='font-medium'>AI Ethics & Safety Team</h2>
                        <p className='text-sm pt-2'>A dedicated team drives safe, unbiased, and ethical AI applications.</p>
                    </div>
                </div>
                <div className='bg-blue-opaque bg-opacity-40 space-x-2 flex p-4 rounded-lg'>
                    <div className='size-8 rounded-lg'>
                        <i className="fa-solid fa-microchip"></i>
                    </div>
                    <div>
                        <h2 className='font-medium'>Privacy and Content Moderation</h2>
                        <p className='text-sm pt-2'>AI and human moderation protect user privacy and ensure content integrity.</p>
                    </div>
                </div>
                <div className='bg-blue-opaque bg-opacity-40 space-x-2 flex p-4 rounded-lg'>
                    <div className='size-8 rounded-lg'>
                        <i className="fa-solid fa-microchip"></i>
                    </div>
                    <div>
                        <h2 className='font-medium'>Policy Alignment</h2>
                        <p className='text-sm pt-2'>Active engagement with regulators to champion responsible AI policies.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Enterprise;