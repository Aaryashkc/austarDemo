'use client';

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const CTA = () => {
    return (
        <section className="relative py-20 lg:py-30 overflow-hidden">
                {/* Background Gradient & Subtle Texture */}
             <div className="absolute inset-0 z-0">
                <Image src="/images/CTA.png" alt="Circuit" fill className="object-cover" />
             </div>
            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

                {/* Headline */}
                <h2 className="text-2xl md:text-5xl font-bold text-text-primary mb-5 leading-tight">
                    Call to Action Let’s Discuss with us
                </h2>

                {/* Subtitle */}
                <p className="text-sm md:text-xl text-text-secondary mb-20  font-light max-w-2xl mx-auto">
                    Get expert guidance from a security-first engineering team. No spam. No pressure. Just solutions.
                </p>

                {/* Form */}
                <form className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-lg mx-auto w-full">

                    {/* Input */}
                    <div className="relative w-full md:w-auto">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none text-brand-red/60">
                            <Mail className="w-5 h-5" />
                        </div>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-120 pl-14 pr-6 py-4 bg-[#FFE6E6] border border-brand-red/60 rounded-full text-text-primary placeholder:text- focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all duration-300 "
                            required
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full md:w-auto min-w-[200px] bg-brand-red text-white py-4 px-8 rounded-full font-bold hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                        Let’s Connect
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                </form>

            </div>
        </section>
    );
};

export default CTA;
