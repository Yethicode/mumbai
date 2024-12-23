// import React from 'react'
// import { FaUserDoctor } from 'react-icons/fa6'
// import { counts } from '.'
// import CountUp from 'react-countup'
// import { useInView } from 'react-intersection-observer'

// const Counts = () => {

//     const { ref, inView } = useInView({
//         triggerOnce: true, // Trigger counting only once
//         threshold: 0.5,    // Start counting when 50% of the section is visible
//     });

//     return (
//         <section ref={ref} className='bg-[#f1f7fd] flex lg:flex-row flex-col items-center justify-evenly lg:px-24 px-4 py-20 lg:gap-0 gap-12 '>
//             {
//                 counts.map((count) => (
//                     <div className='lg:w-[261px] w-full h-[130px] bg-white flex items-center justify-center flex-col'>
//                         <div className='size-12 mt-[-38px] mb-2 bg-[var(--blue-shade)] flex items-center justify-center rounded-full '>
//                             {/* <FaUserDoctor className='size-6 text-white' /> */}
//                             {count.logo}
//                         </div>
//                         {/* <h2 className='text-[36px] font-semibold font-paragraph text-[#082744]'>{count.count}</h2> */}
//                         <h2 className="text-[36px] font-semibold font-paragraph text-[#082744]">
//                             {inView && (
//                                 <CountUp start={1} end={count.count} duration={1.5} separator="" />
//                             )} </h2>
//                         <p className='lg:text-[16px] font-paragraph'>{count.title}</p>
//                     </div>
//                 ))
//             }
//         </section>
//     )
// }

// export default Counts

import React from 'react'
import { FaUserDoctor } from 'react-icons/fa6'
import { counts } from '.'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Counts = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger counting only once
        threshold: 0.5,    // Start counting when 50% of the section is visible
    });

    return (
        <section ref={ref} className='bg-[#f1f7fd] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-12 lg:px-24 sm:px-12 px-4 py-20'>
            {
                counts.map((count) => (
                    <div className='w-full h-[130px] bg-white flex items-center justify-center flex-col'>
                        <div className='size-12 mt-[-38px] mb-2 bg-[var(--blue-shade)] flex items-center justify-center rounded-full '>
                            {count.logo}
                        </div>
                        <h2 className="text-[36px] font-semibold font-paragraph text-[#082744]">
                            {inView && (
                                <CountUp start={1} end={count.count} duration={1.5} separator="" />
                            )}
                        </h2>
                        <p className='lg:text-[16px] font-paragraph'>{count.title}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default Counts
