import React from "react";
import { Images } from ".";
import Marquee from "react-fast-marquee";

const Carousel = () => {
    return (
        <div className="w-full">
            <h2 className="font-header lg:text-[29px] text-[27px] font-bold
             py-5 text-center lg:px-0 px-2 my-6 text-[#444444]" >Students Cleared CPC Certification program at Medicon</h2>
            <div className="marquee-content">
                <Marquee
                    speed={100}
                >
                    {
                        Images.map((img) => (
                            <img src={img} alt="" width={350} height={350} />
                        ))
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Carousel;
