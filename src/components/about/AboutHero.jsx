import React from 'react';

const AboutHero = () => {
    return (
        <section className="relative  w-full bg-brand-red text-white py-16 overflow-hidden">

            <div className="container max-w-7xl mx-auto px-4 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">About Us</h1>
                <p className="text-md md:text-lg max-w-4xl text-white/90">
                    We are a security-first technology company committed to building a safer, more resilient digital world – one system at a time.
                </p>
            </div>

            {/* Decorative Shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
                {/* Large Circle */}
                <div className="absolute -top-35 -right-20 size-85 border-2 border-white/50 rounded-full" />
                {/* Smaller Circle */}
                <div className="absolute -bottom-105 right-40 size-85 border-2 border-white/50 rounded-full transform -translate-y-1/2" />
                {/* Square */}
                <div className="absolute bottom-32 right-20 size-18 border-2 border-white/50 transform rotate-45" />
            </div>
        </section>
    );
};

export default AboutHero;
