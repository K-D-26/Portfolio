import React from 'react'
import top from '../assets/top.png'

const Scroll = () => {
    window.onscroll = function () {
        showScrollToTopButton();
    };

    function showScrollToTopButton() {
        const scrollToTopBtn = document.querySelector('.scroll-to-top-btn');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    }

    function scrollToTop() {
        const scrollDuration = 1000;
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        const scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }

    return (
        <div>
            <button className="scroll-to-top-btn fixed bottom-4 right-4 w-10 h-10 rounded-full bg-blue-500 text-white text-xl flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
                <img src={top} alt="go to top" />
            </button>
        </div>
    )
}

export default Scroll;