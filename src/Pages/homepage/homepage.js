
import Slider from '../../components/slider';
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';
import { useRef } from 'react';
import productsData from '../../components/productsData';
import PromoBanner from '../../components/promobanner';

const HomePage = () => {
    const scrollContainerRefTrend = useRef(null);
    const scrollContainerRefToy = useRef(null);
    const scrollContainerRefAyratyn = useRef(null);
    const scrollContainerRefBest = useRef(null);

    // Sağ ve sol kaydırma fonksiyonları (Trend)
    const scrollLeftTrend = () => {
        scrollContainerRefTrend.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRightTrend = () => {
        scrollContainerRefTrend.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    // Sağ ve sol kaydırma fonksiyonları (Toý eşikleri)
    const scrollLeftToy = () => {
        scrollContainerRefToy.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRightToy = () => {
        scrollContainerRefToy.current.scrollBy({ left: 300, behavior: 'smooth' });
    };


    const scrollLeftAyrtn = () => {
        scrollContainerRefAyratyn.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRightAyrtn = () => {
        scrollContainerRefAyratyn.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
    const scrollLeftBest = () => {
        scrollContainerRefBest.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRightBest = () => {
        scrollContainerRefBest.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <>


            <div className="container mt-0 mb-2 mx-auto px-4 ">

                <Slider />

                {/* Trend Section */}
                <div className="relative">
                    <div className='flex justify-between my-2'>
                        <h1 className='text-xl font-bold'>Trend</h1>
                        <div className='flex items-center'>
                            <FaChevronLeft className='hover:cursor-pointer text-xl' onClick={scrollLeftTrend} />
                            <FaChevronRight onClick={scrollRightTrend} className='ml-2 hover:cursor-pointer text-xl' />
                        </div>
                    </div>

                    {/* Kartların bulunduğu alan (Trend) */}
                    <div
                        ref={scrollContainerRefTrend}
                        className="flex space-x-4 overflow-x-hidden scroll-smooth"
                    >
                        {productsData.map((product) => (
                            <Link key={product.id} to={`/product/${product.id}`}>
                                <Card product={product} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Toý eşikleri Section */}
                <div className="relative">
                    <div className='flex justify-between my-2'>
                        <h1 className='text-xl font-bold'>Toý eşikleri</h1>
                        <div className='flex items-center'>
                            <FaChevronLeft className='hover:cursor-pointer text-xl' onClick={scrollLeftToy} />
                            <FaChevronRight onClick={scrollRightToy} className='ml-2 hover:cursor-pointer text-xl' />
                        </div>
                    </div>

                    {/* Kartların bulunduğu alan (Toý eşikleri) */}
                    <div
                        ref={scrollContainerRefToy}
                        className="flex space-x-4 overflow-x-hidden scroll-smooth"
                    >
                        {productsData.map((product) => (
                            <Link key={product.id} to={`/product/${product.id}`}>
                                <Card product={product} />
                            </Link>
                        ))}
                    </div>
                </div>
                <PromoBanner />


                <div className="relative">
                    <div className='flex justify-between my-2'>
                        <h1 className='text-xl font-bold'>Best eşikleri</h1>
                        <div className='flex items-center'>
                            <FaChevronLeft className='hover:cursor-pointer text-xl' onClick={scrollLeftBest} />
                            <FaChevronRight onClick={scrollRightBest} className='ml-2 hover:cursor-pointer text-xl' />
                        </div>
                    </div>

                    {/* Kartların bulunduğu alan (Toý eşikleri) */}
                    <div
                        ref={scrollContainerRefBest}
                        className="flex space-x-4 overflow-x-hidden scroll-smooth"
                    >
                        {productsData.map((product) => (
                            <Link key={product.id} to={`/product/${product.id}`}>
                                <Card product={product} />
                            </Link>
                        ))}
                    </div>
                </div>






                <div className="relative">
                    <div className='flex justify-between my-2'>
                        <h1 className='text-xl font-bold'>Aýratyn eşikleri</h1>
                        <div className='flex items-center'>
                            <FaChevronLeft className='hover:cursor-pointer text-xl' onClick={scrollLeftAyrtn} />
                            <FaChevronRight onClick={scrollRightAyrtn} className='ml-2 hover:cursor-pointer text-xl' />
                        </div>
                    </div>

                    {/* Kartların bulunduğu alan (Toý eşikleri) */}
                    <div
                        ref={scrollContainerRefAyratyn}
                        className="flex space-x-4 overflow-x-hidden scroll-smooth"
                    >
                        {productsData.map((product) => (
                            <Link key={product.id} to={`/product/${product.id}`}>
                                <Card product={product} />
                            </Link>
                        ))}
                    </div>
                </div>





            </div>
        </>
    );
};

export default HomePage;
