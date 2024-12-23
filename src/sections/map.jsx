import React from 'react';
import './style.css'

const Map = () => {
    return (
        <section className=''>
            <h2 className="contact font-header lg:text-[29px] text-[27px] font-bold 
             py-16 text-center text-[#444444] 
             ">Contact</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.809580513862!2d73.0568332!3d19.290645299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd093f6bb405%3A0x75ec9d9d81db9eff!2sCITY%20CENTER!5e0!3m2!1sen!2sin!4v1734539314305!5m2!1sen!2sin" 
                // width="600" 
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='w-full z-10'
            ></iframe>
        </section>
    );
};

export default Map;
