import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const AboutUs = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row min-h-[700px]">
            {/* Left Panel - Dark */}
            <div className="w-full lg:w-1/2 bg-dark-secondary relative overflow-hidden p-8 md:p-12 lg:p-24 flex flex-col justify-center">

                {/* Content */}
                <div className="relative z-10 max-w-2xl">
                    <span className="text-white/80 font-medium font-outfit mb-6 block tracking-wide">About Us</span>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white font-outfit leading-[1.15]">
                        A security-first technology studio
                        <br />
                        building and protecting digital
                        <br />
                        systems.
                    </h2>
                </div>

                {/* Decorative Circle (Bottom Left) - Single, Bigger, Thicker */}
                <div className="absolute -bottom-16 -left-16 md:-bottom-32 md:-left-32 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border-[30px] md:border-[60px] border-white/5 rounded-full z-0 pointer-events-none"></div>
            </div>

            {/* Right Panel - Light */}
            <div className="w-full lg:w-1/2 bg-background-light relative overflow-hidden p-8 md:p-12 lg:p-20 flex flex-col justify-center">

                {/* Content */}
                <div className="relative z-10 space-y-8">
                    <p className="text-[#333] text-lg leading-relaxed font-outfit">
                        <span className="text-brand-red font-semibold">Austar Cyber Tech</span> exists to solve one core problem: modern digital systems are complex, interconnected, and increasingly exposed to risk. We help organizations regain control by building systems that are structured, secure, and designed to operate reliably at scale.
                    </p>

                    <div className="space-y-4">
                        <p className="text-[#444] text-lg leading-relaxed font-outfit">
                            We combine UI/UX design, system development, network security, and DevSecOps to deliver reliable and scalable solutions for modern businesses.
                        </p>

                        <div className="pt-2">
                            <p className="text-[#333] font-medium font-outfit">Security is built in from day one.</p>
                            <p className="text-[#333] font-bold text-lg font-outfit">Design - Engineering Security - DevSecOps</p>
                        </div>
                    </div>

                    <div className="pt-4">
                        <Link href="/about" className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-3.5 rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium font-outfit group">
                            Learn More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Decorative Red Quarter Circle (Bottom Right) - Bigger */}
                <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-brand-red rounded-full z-0 pointer-events-none opacity-90"></div>
            </div>
        </section>
    );
};

export default AboutUs;
