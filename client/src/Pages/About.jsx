import { useEffect, useState } from 'react';
import BasicButtonExample from '../component/components/HomeNav';
import Aboutdata from '../data/Aboutdata';
import Footer from '../component/components/Footer';

export default function About() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState('right'); // Track direction for slide effect

    const links = [
        { key: 0, value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IwoZHwdqT1fPKQ74CW2YPkWo2B-1rWeG-g&s" },
        { key: 1, value: "https://pbs.twimg.com/profile_images/1554405307627016193/Y8yWsnHr_400x400.jpg" },
        { key: 2, value: "https://cdn.britannica.com/13/146313-050-DD9AAC27/India-War-Memorial-arch-New-Delhi-Sir.jpg" }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDirection('right');
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % links.length);
        }, 5000);

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    const handlePrevious = () => {
        setDirection('left');
        setCurrentImageIndex(prevIndex =>
            prevIndex === 0 ? links.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setDirection('right');
        setCurrentImageIndex(prevIndex =>
            prevIndex === links.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <>
            <div>
            <div className="flex object-fill justify-between">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfU34EC9GlHKR4DhdB4s5qS03owiN_tqlrDA&s" className="w-auto h-[150px]"></img>
            </div>
            <div>
             <img src="https://www.indiastack.global/wp-content/uploads/2023/01/G20-Logo-1.png" className="w-auto h-[100px]"></img>
            </div>

        </div>
            </div>
            <div className='flex h-auto justify-center bg-orange-400'><BasicButtonExample/></div>
            <div>carousel</div>
            <div className="relative w-full h-[400px] overflow-hidden rounded-lg border-2 border-orange-400">
                {links.map((link, index) => (
                    <img
                        key={link.key}
                        src={link.value}
                        className={`absolute w-full h-full object-contain transition-transform duration-700 ease-in-out ${index === currentImageIndex ? (direction === 'right' ? 'translate-x-0' : '-translate-x-0') : (direction === 'right' ? 'translate-x-full' : '-translate-x-full')}`}
                        alt={`Carousel image ${index + 1}`}
                    />
                ))}
                <button
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                    onClick={handlePrevious}
                >
                    &#8249;
                </button>
                <button
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none"
                    onClick={handleNext}
                >
                    &#8250;
                </button>
            </div>
            <div><Aboutdata/></div>
            <div><Footer/></div>
        </>
    );
}
