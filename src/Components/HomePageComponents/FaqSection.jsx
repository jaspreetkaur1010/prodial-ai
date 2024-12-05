import { useState } from 'react';
import { faqData } from '../../constants';
export default function FaqSection() {
    const [visibleIndex, setVisibleIndex] = useState(null);

    const toggleVisibility = (index) => {
        setVisibleIndex(visibleIndex === index ? null : index);
    };

    return (
        <div className='space-y-6'>
            {faqData.map((faq, index) => (
                <div 
                    key={index} 
                    className="bg-blue-opaque border border-blue-bg-light w-full cursor-pointer px-8 py-8 my-2 rounded-xl" 
                    onClick={() => toggleVisibility(index)}
                >
                    <div className='flex justify-between items-center'>
                        <h2 className="font-semibold text-blue-tertiary">{faq.heading}</h2>
                        <i 
                            className={`fa-solid fa-arrow-right ml-4 text-blue-secondary transition-transform duration-300 ${
                                visibleIndex === index ? '-rotate-90' : ''
                            }`}
                        ></i>
                    </div>
                    {visibleIndex === index && (
                        <p className='pt-4 text-sm text-blue-secondary'>
                            {faq.paragraph}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}
