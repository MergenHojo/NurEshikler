


import React, { useState, useEffect } from 'react';
import bg1 from '../assets/b1.jpg';
import bg2 from '../assets/b2.jpg';

import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

const Slider = () => {
    const slides = [
        { id: 1, content: "Ad 1", bgImage: bg1 },
        { id: 2, content: "Ad 2", bgImage: bg2 },

    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Automatically switch slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
        }, 5000); // 5 seconds
        return () => clearInterval(interval);
    }, [currentSlide, slides.length]);

    // Function to manually set the slide
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Go to the previous slide
    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    // Go to the next slide
    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    return (
        <div className="w-full h-72 mt-0 relative overflow-hidden ">
            {/* Slide Content */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'} 
                    bg-cover bg-center`}
                    style={{ backgroundImage: `url(${slide.bgImage})` }}
                >

                </div>
            ))}

            {/* Pagination Dots */}
            <div className="absolute right-3 bottom-1 w-full flex justify-center space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-4 h-1 rounded cursor-pointer ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>

            {/* Left and Right Arrows */}
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-0 text-white p-2  text-2xl py-4"
                onClick={prevSlide}
            >
                <FaChevronLeft />
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-0 text-white p-2 hover:bg-opacity-50 py-4 text-2xl "
                onClick={nextSlide}
            >
                <FaChevronRight />
            </button>
        </div>
    );
};

export default Slider;
