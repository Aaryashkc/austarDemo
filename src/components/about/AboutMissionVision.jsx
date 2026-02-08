'use client';


import React from 'react';
import { Plus } from 'lucide-react';

const AboutMissionVision = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                    {/* Mission Flip Card */}
                    <div className="group h-96 perspective-1000">
                        <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

                            {/* Front Face */}
                            <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-10 flex flex-col items-center justify-center backface-hidden">
                                <div className="w-20 h-20 bg-red-50 rounded-2xl flex items-center justify-center mb-6 text-brand-red">
                                    <Plus size={40} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-4xl font-bold text-dark-secondary tracking-tight uppercase">
                                    Our Mission
                                </h3>
                                <div className="mt-6 w-16 h-1 bg-brand-red rounded-full"></div>
                            </div>

                            {/* Back Face */}
                            <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-10 flex flex-col items-start rotate-y-180 backface-hidden overflow-hidden">
                                {/* Decorative Circle */}
                                <div className="absolute -top-16 -right-16 w-48 h-48 bg-red-50 rounded-full opacity-60 pointer-events-none"></div>

                                {/* Icon Badge */}
                                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 text-brand-red relative z-10">
                                    <Plus size={28} strokeWidth={1.5} />
                                </div>

                                <div className="relative z-10">
                                    <span className="text-brand-red font-bold tracking-wider text-sm uppercase block mb-3">
                                        Our Mission
                                    </span>
                                    <h2 className="text-3xl font-bold text-dark-secondary mb-4 leading-tight">
                                        Empowering Secure Digital Futures
                                    </h2>
                                    <p className="text-text-secondary text-base leading-relaxed">
                                        Our mission is to deliver cutting-edge cybersecurity solutions that protect organizations from evolving threats. We strive to make enterprise-grade security accessible, scalable, and seamless.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Vision Flip Card */}
                    <div className="group h-96 perspective-1000">
                        <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">

                            {/* Front Face */}
                            <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-10 flex flex-col items-center justify-center backface-hidden">
                                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 text-gray-600">
                                    <Plus size={40} strokeWidth={1.5} className="rotate-45" />
                                </div>
                                <h3 className="text-4xl font-bold text-dark-secondary tracking-tight uppercase">
                                    Our Vision
                                </h3>
                                <div className="mt-6 w-16 h-1 bg-gray-300 rounded-full"></div>
                            </div>

                            {/* Back Face */}
                            <div className="absolute inset-0 w-full h-full bg-white rounded-2xl border border-gray-100 shadow-sm p-10 flex flex-col items-start rotate-y-180 backface-hidden overflow-hidden">
                                {/* Decorative Circle */}
                                <div className="absolute -top-16 -right-16 w-48 h-48 bg-gray-100 rounded-full opacity-60 pointer-events-none"></div>

                                {/* Icon Badge */}
                                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 text-gray-600 relative z-10">
                                    <Plus size={28} strokeWidth={1.5} className="rotate-45" />
                                </div>

                                <div className="relative z-10">
                                    <span className="text-gray-500 font-bold tracking-wider text-sm uppercase block mb-3">
                                        Our Vision
                                    </span>
                                    <h2 className="text-3xl font-bold text-dark-secondary mb-4 leading-tight">
                                        A World Where Security is Universal
                                    </h2>
                                    <p className="text-text-secondary text-base leading-relaxed">
                                        We envision a future where every organization — regardless of size — has access to world-class cyber defense, pioneering innovative, AI-driven security platforms.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Global styles for 3D transform utilities if not present in Tailwind config */}
            <style jsx global>{`
                .perspective-1000 {
                    perspective: 1000px;
                }
                .transform-style-3d {
                    transform-style: preserve-3d;
                }
                .backface-hidden {
                    backface-visibility: hidden;
                }
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
            `}</style>
        </section>
    );
};

export default AboutMissionVision;
