import React from 'react';
import { infintyItems } from '../../constants';

const VideoInfinty = () => {

    return (
    <>
        <div className="group inline-flex w-full flex-nowrap overflow-hidden space-x-16 ">
            <ul className="flex m-2 items-center justify-center md:justify-start space-x-16 animate-infinite-scroll group-hover:pause">
                {infintyItems.map((item, index) => (
                    <li className='flex flex-col h-[370px] w-96 bg-black text-white space-y-2 rounded-2xl'>
                        <div className=''> {/* add color of the text div to mask */}
                            <img className="object-cover rounded-2xl [mask-image:_linear-gradient(to_bottom,_black_calc(100%-200px),transparent_100%)]" 
                                src={item.image}
                                alt={item.heading}/>
                        </div>
                        <div className='px-4 pb-12'>
                            <div  className='flex py-2 justify-between'>
                                <h3 className='text-lg  font-bold'>{item.heading}</h3>
                                <button className='gradient-button py-1 px-2'>NEW</button>
                            </div>
                            <p className='text-xs text-gray-200'>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>                        
            <ul className="flex m-2 items-center justify-center md:justify-start space-x-16 animate-infinite-scroll group-hover:pause">
                {infintyItems.map((item, index) => (
                    <li className='flex flex-col h-[370px] w-96 bg-black text-white space-y-2 rounded-2xl'>
                        <div className=''> {/* add color of the text div to mask */}
                            <img className="object-cover rounded-2xl [mask-image:_linear-gradient(to_bottom,_black_calc(100%-200px),transparent_100%)]" 
                                src={item.image}
                                alt={item.heading}/>
                        </div>
                        <div className='px-4 pb-12'>
                            <div  className='flex py-2 justify-between'>
                                <h3 className='text-lg  font-bold'>{item.heading}</h3>
                                <button className='gradient-button py-1 px-2'>NEW</button>
                            </div>
                            <p className='text-xs text-gray-200'>{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>                        
        </div>
    </>
    );
};

export default VideoInfinty;
