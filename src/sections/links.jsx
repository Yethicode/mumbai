import React from 'react'
import { medicon_links1, medicon_links2 } from '.'
// import { medicon_links1, medicon_links2 } from '.'

const Links = () => {
    return (
        <section className='flex flex-col'>
            <h2 className='lg:text-[32px] text-[25px] font-header text-center font-medium'>Medical Coding & CPC at
                <a href=' ' className='text-[#1977cc] hover:text-[#3291e6]'> YETHICODE</a></h2>
            <div className='flex lg:flex-row flex-col py-5'>
                <ul className='list-disc flex-1 px-12 lg:py-5'>
                    {
                        medicon_links1.map((link) => (
                            <li className='text-[16px] font-paragraph '>
                                <a href=" " className='text-[#1977cc] hover:text-[#3291e6]'>{link}</a>
                            </li>
                        ))
                    }
                </ul>
                <ul className='list-disc flex-1 lg:px-0 px-12 lg:py-5'>
                    {
                        medicon_links2.map((link) => (
                            <li className='text-[16px] font-paragraph '>
                                <a href=" " className='text-[#1977cc] hover:text-[#3291e6]'>{link}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}

export default Links