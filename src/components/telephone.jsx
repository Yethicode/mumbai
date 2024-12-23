import React from 'react'
import Tele from '../assets/images/carousel/tele.webp'

const Telephone = () => {
    return (
        <a href='tel:7719819033' className='fixed w-[7.2rem] h-14 rounded-[50%] bg-white border-[1px] border-black z-50 bottom-2 right-2 flex items-center justify-center gap-1'>
            <img src={Tele} alt="" className='w-[2.8rem] h-[2.8rem] overflow-clip ml-2' />
            <h3 className='text-[var(--blue-shade)]' >Call Us</h3>
        </a>
    )
}

export default Telephone