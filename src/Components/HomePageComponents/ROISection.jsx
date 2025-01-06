import React from 'react';

function ROISection() {
    return (
        <div className='py-12 text-center px-6 lg:px-12 xl:px-24'>
            <div className=" inline-block font-semibold text-xs text-blue-primary bg-white cursor-pointer border  px-2 py-2 rounded-lg shadow-sm">
                THE ROI FOR YOUR BUSINESS
            </div>
            <h2 className='text-4xl py-6 lg:text-5xl text-center font-semibold'>
                You Don’t Have to Choose Between Cost, Time, and Innovation
            </h2>
            <div className='flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-x-4 xl:space-x-6 lg:space-y-0'>
                <section className="group p-4 lg:w-1/3 max-w-[640px] lg:max-w-96 mx-12 lg:mx-0 text-gray-800 bg-blue-opaque bg-opacity-40 rounded-lg py-6 hover:shadow-md shadow-gray-100 border border-blue-opaque transition-all transition-ease-in duration-400">
                    <h3 className='font-semibold text-xl pb-6'>LOAN CALL ANALYSIS</h3>
                    <div className='text-7xl text-blue-secondary flex items-center justify-center'>
                        <i className="fa-solid fa-arrow-down text-5xl"></i>
                        <span className='group-hover:text-gradient font-semibold'>70%</span>
                    </div>
                    <p className='text-xs font-medium'>REDUCTION IN REVIEW TIME</p>
                    <p className='text-sm py-4 px-12 lg:px-4 xl:px-6'>
                        Financial institutions 
                        <span className="font-semibold">reduced sales call review times by 70%</span>
                        , enhancing insights with AI-supported multi-language call analysis.
                    </p>
                    <button className="text-sm text-blue-secondary group group-hover:underline pt-8">
                        Read case studies
                        <i className="group-hover:pl-4 group-hover:pr-0 transition-all ease-in-out duration-200 fa-solid fa-arrow-right pl-2 pr-2"></i>
                    </button>
                </section>
                
                <section className="group lg:w-1/3 max-w-[640px] lg:max-w-96 mx-12 lg:mx-0 text-gray-800 bg-blue-opaque bg-opacity-40 rounded-lg py-6 hover:shadow-md shadow-gray-100 border border-blue-opaque transition-all transition-ease-in duration-400">
                    <h3 className='font-semibold text-xl pb-6'>RETAIL SOLUTIONS</h3>
                    <div className='text-7xl text-blue-secondary flex items-center justify-center'>
                        <i className="fa-solid fa-arrow-up text-5xl"></i>
                        <span className='group-hover:text-gradient font-semibold'>40%</span>
                    </div>
                    <p className='text-xs font-medium'>INCREASE IN SALES EFFICIENCY</p>
                    <p className='text-sm py-4 px-12 lg:px-4 xl:px-6'>
                        A leading retail chain optimized its price recommendations, 
                        <span className="font-semibold"> boosting sales efficiency by over 40% </span> 
                        using AI-driven pricing and automation tools.
                    </p>
                    <button className="text-sm text-blue-secondary group group-hover:underline pt-8">
                        Read case studies
                        <i className="group-hover:pl-4 group-hover:pr-0 transition-all ease-in-out duration-200 fa-solid fa-arrow-right pl-2 pr-2"></i>
                    </button>
                </section>
                
                <section className="group lg:w-1/3 max-w-[640px] lg:max-w-96 mx-12 lg:mx-0 text-gray-800 bg-blue-opaque bg-opacity-40 rounded-lg py-6 hover:shadow-md shadow-gray-100 border border-blue-opaque transition-all transition-ease-in duration-400">
                    <h3 className='font-semibold text-xl pb-6'>SOCIAL MEDIA ENGAGEMENT</h3>
                    <div className='text-7xl text-blue-secondary flex items-center justify-center'>
                        <i className="fa-solid fa-arrow-up text-5xl"></i>
                        <span className='group-hover:text-gradient font-semibold'>50%</span>
                    </div>
                    <p className='text-xs font-medium'>GROWTH IN ENGAGEMENT</p>
                    <p className='text-sm py-4 px-12 lg:px-4 xl:px-6'>
                        Brands leveraging Prodigal AI’s Social AI  
                        <span className="font-semibold"> achieved over 50% growth in user engagement</span>
                          with automated content generation.
                    </p>
                    <button className="text-sm text-blue-secondary group group-hover:underline pt-8">
                        Read case studies
                        <i className="group-hover:pl-4 group-hover:pr-0 transition-all ease-in-out duration-200 fa-solid fa-arrow-right pl-2 pr-2"></i>
                    </button>
                </section>
                
                
            </div>
        </div>
    );
}

export default ROISection;