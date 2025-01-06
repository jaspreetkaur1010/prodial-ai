import React from 'react';

function EmpoweringSection() {
    return (
        <div className='md:flex py-12 items-center px-12 lg:px-24 md:space-x-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl text-4xl lg:text-5xl font-semibold'>
                    <span className='text-transparent bg-gradient-to-br to-blue-primary via-blue-primary from-white bg-clip-text'> 
                         Empowering
                    </span> {' '}
                    Businesses with Advanced AI Solutions
                </h2>
                <p className='text-gray-700 text-sm pt-6'>
                    Prodigal AI leads the way in delivering cutting-edge AI automation 
                    and Generative AI solutions, trusted by global leaders to transform
                     industries.
                </p>
                <div className='grid font-medium grid-cols-2 gap-y-4 gap-x-4 py-12 text-xs'>
                    <p>Tailored AI for Small Businesses</p>
                    <p>Scalable Solutions for Enterprises</p>
                    <p>Industry-Leading User Satisfaction</p>
                    <p>Customized AI Systems for Mid-Market</p>

                </div>
                <button className="bg-blue-secondary transition ease-in-out duration-200 group hover:bg-blue-tertiary text-white font-semibold px-4 py-3 rounded-lg shadow-lg hover:bg-blue-500 transition-colors">
                    Book demo
                    <i className="group-hover:pl-4 group-hover:pr-0 transition-all ease-in-out duration-200 fa-solid fa-arrow-right pl-2 pr-2"></i>
                </button>
            </div>
            <div className='md:w-1/2 pt-12 md:pt-0'>
                <img className="object-cover rounded-2xl" 
                    src="https://cdn.prod.website-files.com/65e89895c5a4b8d764c0d710/66604139c144ea1b821629dc_G2-grid.webp"
                    alt="image" />
            </div>
            
        </div>
    );
}

export default EmpoweringSection;