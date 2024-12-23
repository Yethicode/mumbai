import React from 'react'
import { BsEnvelope, BsFacebook, BsGeoAlt, BsInstagram, BsLinkedin, BsPhone, BsYoutube } from 'react-icons/bs'

const Contact = () => {
    return (
        <section className='lg:ml-32 sm:ml-20 ml-3 w-full mb-20'>
            <div className='flex gap-4 group w-max my-10'>
                <div className='flex size-11 mt-1 transition-all bg-[#d6e9fa] group-hover:bg-[#1977cc] items-center justify-center rounded-full'>
                    <BsGeoAlt className='text-xl text-[#1977cc] group-hover:text-[#d6e9fa]' />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-[22px] text-[#2c4964] font-semibold'>
                        Location:
                    </h2>
                    <p className='w-[55%] text-[14px] text-[#4b7dab] whitespace-normal font-paragraph'>City centre 1st floors Flat #117,Thane Rd Dhamankar naka Bhiwandi (Mumbai )Maharashtra 421302                        </p>
                </div>
            </div>
            <div className='flex gap-4 group w-max my-10'>
                <div className='flex size-11 mt-1 transition-all bg-[#d6e9fa] group-hover:bg-[#1977cc] items-center justify-center rounded-full'>
                    <BsEnvelope className='text-xl text-[#1977cc] group-hover:text-[#d6e9fa]' />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-[22px] text-[#2c4964] font-semibold'>
                        Email:
                    </h2>
                    <p className='w-[55%] text-[14px] text-[#4b7dab] whitespace-normal font-paragraph'>ethicode@gmail.com</p>
                </div>
            </div>
            <div className='flex gap-4  group w-max my-10'>
                <div className='flex size-11 mt-1 transition-all bg-[#d6e9fa] group-hover:bg-[#1977cc] items-center justify-center rounded-full'>
                    <BsPhone className='text-xl text-[#1977cc] group-hover:text-[#d6e9fa]' />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-[22px] text-[#2c4964] font-semibold'>
                        Call:
                    </h2>
                    <p className='text-[14px] text-[#4b7dab] whitespace-normal font-paragraph'>+91 7719819033</p>
                </div>
            </div>
            <div className='flex lg:w-[15%] w-max items-center justify-evenly group gap-4 lg:gap-0 mx-3'>

                <a 
                    className=' flex size-11 mt-1 transition-all bg-[#d6e9fa] group-hover:bg-[#1977cc] items-center justify-center rounded-full'
                >
                    <BsFacebook className='text-xl text-[#1977cc] group-hover:text-[#d6e9fa]' />
                </a>

                <a 
                    className=' flex size-11 mt-1 transition-all bg-[#d6e9fa] group-hover:bg-[#1977cc] items-center justify-center rounded-full'
                >
                    <BsLinkedin className='text-xl text-[#1977cc] group-hover:text-[#d6e9fa]' />
                </a>

                <a 
                    className=' flex size-11 mt-1 transition-all bg-[#d6e9fa] group-hover:bg-[#1977cc] items-center justify-center rounded-full'
                >
                    {/* <BsInstagram className='nav1-logo' /> */}
                    <BsYoutube className='text-xl text-[#1977cc] group-hover:text-[#d6e9fa]' />
                </a>

            </div>
        </section >
    )
}

export default Contact