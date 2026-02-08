'use client';

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="relative py-24 lg:py-32 bg-background-light overflow-hidden">
            {/* Background Decoration - Subtle Curved Line */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <svg
                    className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 text-red-100"
                    fill="none"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" // Just a placeholder curve-like path logic or use a simpler bezier
                        fill="none"
                    />
                    {/* Better curve manually drawn for "flow" */}
                    <path
                        d="M-100 150 C 200 50, 400 250, 700 150 S 1200 50, 1500 150"
                        stroke="currentColor"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                        className="text-red-200/50"
                    />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                {/* Headline */}
                <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 font-outfit leading-tight">
                    Let’s Discuss Your <span className="text-brand-red">Security & Technology</span> Needs
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-text-secondary mb-10 font-outfit font-light max-w-2xl mx-auto">
                    Get expert guidance from a security-first engineering team. <br className="hidden md:block" />
                    No spam. No pressure. Just solutions.
                </p>

                {/* Form */}
                <form className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-lg mx-auto w-full">

                    {/* Input */}
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-brand-red/60">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full pl-14 pr-6 py-4 bg-red-50/50 border border-red-100 rounded-full text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-300 font-outfit"
                            required
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full md:w-auto min-w-[200px] bg-brand-red text-white py-4 px-8 rounded-full font-bold font-outfit hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        Start Conversation
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                </form>

                {/* Trust/Micro-copy */}
                <p className="mt-6 text-xs text-gray-400 font-outfit">
                    We respect your privacy. Unsubscribe at any time.
                </p>

            </div>
        </section>
    );
};

export default CTA;
