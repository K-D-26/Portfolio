import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20 text-justify'>
                    Currently, I am pursuing my B.Tech in Computer Science Engineering from Indian Institute of Information Technology Vadodara. At present I am in my final year and looking for job opportunities.
                </p>
                <br />
                <p className='text-xl text-justify'>
                    As a final-year student with a passion for web development, I have honed my skills and knowledge in full-stack web development, encompassing front-end, back-end, and database technologies. Through personal projects and academic coursework, I have gained hands-on experience in creating responsive and visually appealing websites.
                </p>
                <br />
                <p className='text-xl text-justify'>
                    I also had hands-on experience during my frontend development internship with <strong><em><a href="https://www.technotery.com/" target="_blank" rel="noreferrer">Technotery</a></em></strong>. The internship period was of 2 months and I had a great experience working with the team and learning new skills and expanding my knowledge. As a passionate learner, I embrace challenges and continuously seek opportunities to expand my knowledge and skills. I am now eagerly seeking job opportunities to contribute in innovative projects, and grow as a professional person.
                </p>
            </div>
        </div>
    )
}

export default About
