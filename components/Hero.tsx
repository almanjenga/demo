"use client";
import Image from 'next/image';
import CustomButton from './CustomButton';
import { CustomButtonProps } from '../types';

const Hero = () => {
const handleScroll = () => {
    console.log("Button clicked, scroll handler triggered!");
};

return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-[80vh] bg-gradient-to-br from-[#e0f7fa] to-[#fffde7] px-6 md:px-20 py-10 gap-10">
    
      {/* LEFT TEXT SIDE */}
    <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#12408a] drop-shadow-sm animate-floatIn leading-tight">
        🌞 AI SOLAR WATER ASSISTANT
        </h1>
        <p className="text-xl font-normal text-black mt-4">
        Smart. Sustainable. Self-sufficient.
        </p>
        <div className="mt-8 flex justify-left md:justify-start">
        <CustomButton
            title="Explore Assistant"
            containerStyles="bg-blue-600 text-white rounded-full px-2 py-3 hover:bg-blue-700 transition"
            handleClick={handleScroll}
        />
        </div>
    </div>


    <div className="flex-1 flex justify-center items-center w-full">
        <div className="relative w-full max-w-[1350px] h-[300px] sm:h-[450px] md:h-[450px]">
        <div className="absolute -top-10 -right-10 w-[600px] h-[500px] bg-blue-500 rotate-[25deg] rounded-md -z-10 shadow-2xl opacity-90" />
        <Image
            src="/blueSolar.png"
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
