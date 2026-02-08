import React from 'react';

const Tagline = () => {
    return (
        <section className="bg-white py-10 md:py-16 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start justify-between gap-8 md:gap-12">
                {/* Left Column: Headline */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-text-primary font-outfit leading-tight">
                        Custom, tech-enabled solutions <span className="text-brand-red">built for modern businesses</span>
                    </h2>
                    {/* Thick Red Underline */}
                    <div className="w-full h-2 bg-brand-red rounded-full"></div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center">
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed font-outfit font-light">
                        <span className="text-brand-red font-medium">Austar Cyber Tech</span> is a security-first technology company focused on designing, building, and protecting modern digital systems. We work at the intersection of UI/UX design, system development, network security, and DevSecOps to deliver solutions that are reliable, scalable, and secure by design.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Tagline;
