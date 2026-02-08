'use client';
import React from 'react';

const AboutStats = () => {
    const stats = [
        {
            value: "30",
            accent: "+",
            label: "Systems & Applications Reviewed / Designed"
        },
        {
            value: "24-48",
            accent: "hrs",
            label: "Incident & Support Response Time"
        },
        {
            value: "100",
            accent: "%",
            label: "Security-First Development Approach"
        },
        {
            value: "98",
            accent: "%",
            label: "Client Retention Rate"
        }
    ];

    return (
        <section className="bg-background-light py-12 border-b border-gray-100">
            <div className="container max-w-7xl mx-auto px-4">

                {/* Section Label */}
                <div className="flex justify-center mb-10">
                    <span className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                        Our Impact
                    </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col items-center text-center group p-6 rounded-xl transition-all duration-300 hover:bg-red-50/30 hover:-translate-y-1 hover:shadow-sm"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-dark-secondary mb-2 flex items-baseline">
                                {stat.value}
                                <span className="text-brand-red ml-0.5 text-4xl md:text-5xl">
                                    {stat.accent}
                                </span>
                            </div>
                            <p className="text-text-secondary text-sm font-medium max-w-[200px] leading-snug">
                                {stat.label}
                            </p>

                            {/* Animated Underline */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-brand-red/80 rounded-full transition-all duration-300 group-hover:w-16 opacity-0 group-hover:opacity-100"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutStats;
