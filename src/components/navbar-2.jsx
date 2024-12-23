import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";

const NavBar2 = () => {
    const [topPosition, setTopPosition] = useState(40);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setTopPosition(0);
            } else {
                setTopPosition(40);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="w-full flex items-center justify-center py-[15px] z-10 bg-white shadow-lg transition-all fixed"
            style={{
                top: `${topPosition}px`,
                transition: 'top 0.2s ease-out',
            }}>
            <section className="lg:w-[83%] sm:w-[83%] w-full flex justify-around items-center lg:justify-between sm:justify-between">
                <img
                    src={Logo}
                    width={200}
                    className="lg:h-[2.7rem] sm:h-[2.7rem] lg:w-[184px] sm:w-[184px] h-[4.2rem] w-[272px] "
                />
                <button className="lg:h-9 sm:h-9 lg:w-[5.8rem] sm:w-[5.8rem] h-[30px] w-[5rem] text-white text-[14px] lg:mr-[10px] sm:mr-[10px] font-paragraph rounded-3xl bg-[#1977cc] hover:bg-[#166ab5]">
                    <a href="https://api.whatsapp.com/send?phone=917719819033&text=hi" target="_blank">
                        Join Us
                    </a>
                </button>
            </section>
        </main>
    );
};

export default NavBar2;
