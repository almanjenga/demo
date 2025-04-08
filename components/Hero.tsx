"use client";
import Image from 'next/image';
import CustomButton from './CustomButton';
import { CustomButtonProps } from '../types';

const Hero = () => {
    const handleScroll = () => {
    // Scroll logic will go here
    console.log("Button clicked, scroll handler triggered!");
    };

    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-[#e0f7fa] to-[#fffde7] text-center">
        <div className="flex-1 pt-2 px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#12408a] drop-shadow-sm animate-floatIn">
        🌞 AI SOLAR WATER ASSISTANT
        </h1>
        <p className="text-xl font-normal text-black mt-2">
        Smart. Sustainable. Self-sufficient.
        </p>

        <CustomButton
        title="AI Solar"
        containerStyles="bg-blue-600 text-white rounded-full mt-10 px-6 py-3 hover:bg-blue-700 transition"
        handleClick={handleScroll}
        />
    </div>
    <div className='hero__image-container'>
    <div className="relative w-full h-64 md:h-96">
        <Image
            src="/SolarPannelImage.jpg"
            alt="hero"
            fill
            className="object-contain"
            priority
        />
</div>
        </div>
    </div>
    );
};

export default Hero;
