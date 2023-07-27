import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Currently I am pursuing my B.Tech in Computer Science Engineering at Indian Institute of Information Technology (IIIT) Vadodara. At present I am in my final year and looking for job opportunities.
                </p>
                <br />
                <p className='text-xl'>
                    As a final-year student with a passion for web development, I have honed my skills and knowledge in full-stack web development, encompassing front-end, back-end, and database technologies. Through personal projects and academic coursework, I have gained hands-on experience in creating responsive and visually appealing websites.
                </p>
                <br />
                <p className='text-xl'>
                    Throughout my academic journey, I have maintained a healthy CPI of 7.35. Balancing my studies and extracurricular activities as a full-stack developer has taught me valuable time management and organizational skills. As a passionate learner, I embrace challenges and continuously seek opportunities to expand my knowledge and skills. I am now eagerly seeking job opportunities to contribute in innovative projects, and grow as a professional person.
                </p>
            </div>
        </div>
    )
}

export default About
