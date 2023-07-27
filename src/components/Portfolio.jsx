import React from 'react'
import blog from '../assets/portfolio/blog.jpg'
import snake from '../assets/portfolio/snake.jpg'
import quote from '../assets/portfolio/quote.jpg'
import chat from '../assets/portfolio/chat.jpg'

const Portfolio = () => {

    const handleDemoClick = (link) => {
        window.open(link, '_blank');
    };

    const portfolios = [
        {
            id: 1,
            src: blog,
            code: "https://github.com/K-D-26/Blog-Mania",
            demo: "https://blog-mania-rsa1.vercel.app/"
        },
        {
            id: 2,
            src: chat,
            code: "https://github.com/K-D-26/web-chat-app",
            demo: "https://web-chat-app-frontend.vercel.app/"
        },
        {
            id: 3,
            src: snake,
            code: "https://github.com/K-D-26/Snake_Game",
            demo: "https://snake-game-k-d-26.vercel.app/"
        },
        {
            id: 4,
            src: quote,
            code: "https://github.com/K-D-26/Quote-Generator",
            demo: "https://quote-generator-k-d-26.vercel.app/"
        },
    ]

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my works right here.</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 flex justify-center items-center'>
                    {
                        portfolios.map(({ id, src, demo, code }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img
                                    src={src}
                                    alt=""
                                    className='rounded-md duration-200 hover:scale-105'
                                />
                                <div className='flex items-center justify-center'>
                                    <button
                                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                                        onClick={() => handleDemoClick(demo)}
                                    >
                                        Demo
                                    </button>
                                    <button
                                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                                        onClick={() => handleDemoClick(code)}
                                    >
                                        Code
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Portfolio