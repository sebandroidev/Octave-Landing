import { images } from '../../constants'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="container py-6 px-4 md:px-0 sticky top-0 z-50 flex flex-col bg-white">
            <div className="flex justify-between items-center">
                {/* Logo */ }
                <h2><a href="#home" className="font-bold text-primary-color text-xl">Octave</a></h2>

                {/* Desktop Menu */ }
                <ul className="hidden md:flex flex-row gap-14 capitalize">
                    { ['accueil', 'tutoriel', 'tarifs'].map((item) => (
                        <li className='hover:text-primary-color hover:scale-110 transition ease-in-out delay-150'><a href={ `#${item}` }>{ item }</a></li>
                    )) }
                </ul>

                {/* Download Button */ }
                <a href="#subscribe" className="hidden md:flex hover:scale-90 transition ease-in-out delay-100 bg-primary-color text-white px-4 py-3 rounded-md hover:bg-purple-600">Télécharger</a>

                <div className='md:hidden'>
                    {/* Mobile menu button */ }
                    <div className={ toggle && 'hidden' } onClick={ () => setToggle(true) }>
                        <img src={ images.menu } alt="menu icon" />
                    </div>
                    <div className={ !toggle && 'hidden' } onClick={ () => setToggle(false) } >
                        <img src={ images.close } alt="menu icon" />
                    </div>
                </div>

            </div>

            {
                toggle && <motion.div
                    whileInView={ { x: [300, 0] } }
                    transition={ { duration: 0.65, ease: 'easeIn' } }
                    className='flex flex-col items-center md:hidden w-full py-2 mt-4'
                >
                    <ul className="flex flex-col gap-6 items-center m-auto capitalize">
                        { ['accueil', 'tutoriel', 'tarifs'].map((item) => (
                            <li className='hover:text-primary-color hover:scale-110 transition ease-in-out delay-150' onClick={ () => setToggle(false) } ><a href={ `#${item}` }>{ item }</a></li>
                        )) }
                    </ul>
                    <a href="#download" className='mt-5 bg-primary-color text-white px-4 py-3 rounded-md'>Télécharger</a>
                </motion.div>
            }
        </nav>
    );
}

export default Navbar