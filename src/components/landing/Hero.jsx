import Link from 'next/link';
import Image from "next/image";
const Hero = () => {
    return (
        <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden py-20 lg:py-0">
            {/* 2. Subtle diagonal light streaks & Circuit lines */}
            <div className="absolute inset-0 z-0">
                <Image src="/images/heroimage.png" alt="Circuit" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/70 z-10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 h-full w-full flex flex-col lg:flex-row items-center">

                {/* Left Column: Text Content (Wide spacing) */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-left space-y-10 pr-0 lg:pr-12 animate-slideUp">
                    <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] font-outfit">
                        We secure the <span className="text-brand-red">digitally</span>
                        <br /> <span className="text-brand-red">connected</span> world
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl font-outfit font-light">
                        Austar Cyber Tech is a security-first technology company focused on designing, building, and protecting modern digital systems. We ensure your solutions are reliable, scalable, and secure by design.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <Link href="/solutions" className="px-10 py-4 bg-brand-red text-white text-lg font-medium rounded-full hover:bg-red-700 transition-all duration-300 shadow-[0_4px_20px_rgba(224,37,38,0.4)] hover:shadow-[0_4px_25px_rgba(224,37,38,0.6)] font-outfit">
                            Learn More →
                        </Link>
                        <Link href="/contact" className="px-10 py-4 bg-transparent border border-white/20 text-white text-lg font-medium rounded-full hover:bg-white/5 transition-all duration-300 font-outfit backdrop-blur-sm">
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Right Column: Visual & Floating Cards */}
                <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] flex items-center justify-center perspective-1000 mt-12 lg:mt-0">



                    {/* Floating Feature Buttons (Pill-style labels) */}
                    {/* Positioned absolutely around the core, appearing to float */}

                    {/* Top Right - 1 */}
                    <div className="absolute top-[15%] right-[-5%] lg:right-[-5%] animate-[float_4s_ease-in-out_infinite] z-20 scale-75 md:scale-100 origin-right">
                        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-2xl hover:bg-brand-red transition-colors group cursor-default">
                            <span className="text-white font-medium font-outfit tracking-wide text-sm md:text-base">Cyber Security</span>
                        </div>
                    </div>

                    {/* Right Upper Middle - 2 */}
                    <div className="absolute top-[35%] right-[0%] lg:right-[-10%] animate-[float_5s_ease-in-out_infinite_1s] z-20 scale-75 md:scale-100 origin-right">
                        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-2xl hover:bg-brand-red transition-colors group cursor-default">
                            <span className="text-white font-medium font-outfit tracking-wide text-sm md:text-base">Network Security</span>
                        </div>
                    </div>

                    {/* Right Lower Middle - 3 (Moved from Left) */}
                    <div className="absolute top-[55%] right-[0%] lg:right-[-10%] animate-[float_7s_ease-in-out_infinite_1.5s] z-20 scale-75 md:scale-100 origin-right">
                        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-2xl hover:bg-brand-red transition-colors group cursor-default">
                            <span className="text-white font-medium font-outfit tracking-wide text-sm md:text-base">DevSecOps (Cloud)</span>
                        </div>
                    </div>

                    {/* Bottom Right - 4 */}
                    <div className="absolute top-[75%] right-[-5%] lg:right-[-5%] animate-[float_6s_ease-in-out_infinite_0.5s] z-20 scale-75 md:scale-100 origin-right">
                        <div className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full shadow-2xl hover:bg-brand-red transition-colors group cursor-default">
                            <span className="text-white font-medium font-outfit tracking-wide text-sm md:text-base">System Development</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
