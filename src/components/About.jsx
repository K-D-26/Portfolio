import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-10 text-justify'>
                    I have done my schooling from Ultra Vision Academy during which I appeared for JEE Mains 2020 and scored 98.76 percentile. After that I graduated with a B.Tech in Computer Science Engineering from the Indian Institute of Information Technology Vadodara with 7.62 CGPA.
                </p>
                <br />
                <p className='text-xl text-justify'>
                    During my graduation, I have honed my skills and knowledge in engineering and development, encompassing front-end, back-end, and database technologies. Through personal projects and academic coursework and professional experience, I have gained hands-on experience in creating responsive and visually appealing websites.
                </p>
                <br />
                <p className='text-xl text-justify'>
                    I also had hands-on experience during my frontend development internship at <strong><em><a href="https://www.technotery.com/" target="_blank" rel="noreferrer">Technotery</a></em></strong> and full stack developer internship at <strong><em><a href="https://www.e-monk.com/" target="_blank" rel="noreferrer">e-Monk IT Solutions</a></em></strong>. The internship periods were of 2 months and 4 months respectively where I had a great experience working with the team and learning new concepts and ways to counter a problem and expanding my skills. As a passionate learner, I embrace challenges and continuously seek opportunities to grow and expand my knowledge. Currently, I am working as a frontend developer at <strong><em><a href="https://pcubesoftechs.com/" target="_blank" rel="noreferrer">PCube Softechs</a></em></strong>, specializing in React.js to develop responsive, user-friendly applications with intuitive and comfortable user interfaces.
                </p>
            </div>
        </div>
    )
}

export default About
