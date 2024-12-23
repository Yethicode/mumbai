import React from 'react'
import Pic from '../assets/images/intro.webp'

const Intro = () => {
    return (
        // <div>Intro</div>
        <section className='lg:h-[135dvh] sm:h-[65dvh] h-[30dvh] w-full px-3 lg:mt-[60px] mt-16'>
            <abbr title="best medical coding institute in Mumbai">
                <img src={Pic} alt="" className='w-full h-full overflow-clip' />
            </abbr>
        </section>
    )
}

export default Intro