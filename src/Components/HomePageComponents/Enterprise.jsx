import React from 'react';
function Enterprise() {

    const features = [
        {
            icon: "fa-solid fa-flag",
            color:"green-500",
            title: "SOC 2 & GDPR Compliant",
            description: "Our systems follow strict data security standards and are independently certified for compliance.",
        },
        {
            icon: "fa-solid fa-flag",
            color:"pink-500",
            title: "AI Ethics & Safety Team",
            description: "A dedicated team drives safe, unbiased, and ethical AI applications.",
        },
        {
            icon: "fa-solid fa-flag",
            color:"yellow-500",
            title: "Privacy and Content Moderation",
            description: "AI and human moderation protect user privacy and ensure content integrity.",
        },
        {
            icon: "fa-solid fa-flag",
            title: "Policy Alignment",
            color:"indigo-500",
            description: "Active engagement with regulators to champion responsible AI policies.",
        },
    ];
    
    return (
        <div className='lg:items-center text-center md:text-left px-6 py-6 lg:space-y-0 md:px-12 xl:px-36 md:py-24'>
            <div className='lg:text-left'>
                <div className=" inline-block font-semibold text-xs text-blue-primary bg-white cursor-pointer border px-2 py-2 rounded-lg shadow-sm">
                    ENTERPRISE READY
                </div>
                <div className='lg:space-x-2 xl:space-x-6 lg:flex justify-center'>
                    <div>
                        <h2 className='py-6 text-center md:text-left text-4xl lg:text-5xl font-semibold xl:w-3/4'>Built on AI Innovation with Ethics and Security at the Core</h2>
                    </div>
                    <div className=''>
                        <p className='m-0 pt-4 text-md md:text-md text-center md:text-left'>
                            <span className='font-medium'>At Prodigal AI, we prioritize responsible AI</span> by embedding robust 
                            security and ethical frameworks in all our solutions, ensuring trust and safety for businesses and users alike.
                        </p>
                        <button className="mt-8 border transition ease-in-out duration-200 group hover:bg-blue-secondary font-medium text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition-colors">
                            Explore all integrations
                        <i className="group-hover:pl-4 group-hover:pr-0 transition-all ease-in-out duration-200 fa-solid fa-arrow-right pl-2 pr-2"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="pt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                    <div key={index} className="bg-blue-opaque bg-opacity-40 space-x-5 flex justify-center px-4 py-6 rounded-lg">
                        <div className={`px-2 mt-1 h-8 flex items-center justify-center rounded-lg bg-${feature.color}`}>
                            <i className={`${feature.icon} text-white`}></i>
                        </div>
                        <div className='text-left'>
                            <h2 className="font-medium">{feature.title}</h2>
                            <p className="text-sm pt-2">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Enterprise;