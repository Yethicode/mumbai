import React from 'react'
import { VscDeviceMobile } from "react-icons/vsc";
import { nav_links } from '.';
import { BsEnvelope } from 'react-icons/bs';

const NavBar1 = () => {
    return (
        <main className='bg-gray-50 h-[40px] w-full flex items-center justify-center z-10 fixed'>
            <section className='lg:w-[81%] w-full flex justify-center lg:justify-between'>
                <div className='lg:flex w-0 lg:w-max items-center gap-[15px] justify-center hidden '>
                    {
                        nav_links.map((link) => (
                            <a href={link.link} target='_blank' key={link.link}>
                                {link.logo}
                            </a>
                        ))
                    }
                </div>
                <div className='flex gap-8 lg:w-fit w-full justify-between lg:justify-start px-4'>
                    <a href="mailto:yethicode@gmail.com" className='w-max flex items-center justify-center gap-1 h-[20px] font-paragraph  text-[#444444]
                    hover:text-[#437099]'>
                        <BsEnvelope className='nav1-logo leading-loose text-[14px]' /> <p className='text-[14px]'>
                            ethicode@gmail.com</p>
                    </a>
                    <p className='w-max flex items-center justify-center gap-1 h-[20px] font-paragraph text-[#444444] hover:text-[#437099]'>
                        <VscDeviceMobile className='nav1-logo' />
                        <p className='font-paragraph leading-9 text-[14px]'>
                            +91 7719819033</p>
                    </p>
                </div>
            </section>

        </main>
    )
}

export default NavBar1