import Image from 'next/image'

const Hero = () => {
    return (
        <div className="flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-[#e0f7fa] to-[#fffde7] text-center">
        <div className="flex-1 pt-2 px-6">
    <h1 className="text-2xl font-bold text-[#12408a] drop-shadow-sm animate-floatIn">
    🌞 AI SOLAR WATER ASSISTANT
    </h1>
    <p className="text-xl font-semibold text-[#000000] mt-2">
    Smart. Sustainable. Self-sufficient.
    </p>
</div>
</div>

    )
}

export default Hero