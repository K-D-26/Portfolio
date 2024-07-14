import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div
            name='home'
            className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
        >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                        I'm a Full Stack Web Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md text-justify'>
                        I am Kavan Dagli, a graduate of IIIT Vadodara with a bachelors degree in Computer Science Engineering. Currently, I work as a frontend web developer at PCube Softechs, where I leverage my expertise in React.js to build robust, scalable, and user-friendly applications. My hands-on experience in web development has equipped me with the skills to create dynamic and efficient solutions. For a closer look at my work, please visit the project section.
                    </p>

                    <div>
                        <Link
                            to='projects'
                            smooth
                            duration={1000}
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'
                        >
                            Projects
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img
                        src={HeroImage}
                        alt='profile-pic'
                        className='rounded-2xl mx-auto w-2/3 md:w-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;