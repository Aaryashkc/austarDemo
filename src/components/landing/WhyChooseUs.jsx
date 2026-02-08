import React from 'react';

const reasons = [
    {
        id: 1,
        title: 'Security-First Engineering',
        description: 'We create digital systems with security built in from the start. From applications to infrastructure, every layer is designed to protect your data, users, and operations against modern threats.'
    },
    {
        id: 2,
        title: 'One Integrated Team',
        description: 'Designers, engineers, and security specialists work as one team. No silos, no handovers—just faster delivery, better alignment, and full accountability from start to finish.'
    },
    {
        id: 3,
        title: 'Structured & Agile Process',
        description: 'We follow proven, agile processes to handle projects of any scale and complexity. Our workflows allow us to adapt quickly while maintaining quality, security, and timelines.'
    },
    {
        id: 4,
        title: 'Everything In-House',
        description: 'We don’t outsource critical work. All design, development, security, and DevSecOps are handled in-house, giving you full control, transparency, and consistent quality.'
    },
    {
        id: 5,
        title: 'Built to Scale',
        description: 'Our systems are engineered for growth. We focus on performance, reliability, and scalability so your digital products can evolve without constant rework or security risks.'
    },
    {
        id: 6,
        title: 'Reliable & Cost-Effective',
        description: 'By managing everything under one roof, we reduce complexity and cost without compromising quality. You get enterprise-grade solutions that are practical, efficient, and sustainable.'
    }
];

const WhyChooseUs = () => {
    return (
        <section className="relative py-20 lg:py-32 bg-dark-secondary overflow-hidden">

             <div className="absolute -top-60 -right-63 w-[500px] h-[500px] bg-[#8A8A8A]/20 rounded-full pointer-events-none z-0" />
             <div className="absolute -bottom-50 -left-50 w-[500px] h-[500px] border-100 border-[#8A8A8A]/20 bg-transparent rounded-full pointer-events-none z-0" />

            {/* Background Background Elements - Abstract Curved Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

                {/* Large curved shape top right */}
                <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-white/[0.02] blur-3xl transform rotate-12" />

                {/* Large curved shape bottom left */}
                <div className="absolute -bottom-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-red/[0.02] blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Heading Area */}
                <div className="mb-16 md:mb-20 text-center md:text-left">
                    <span className="inline-block text-brand-red font-bold tracking-widest text-sm mb-3 uppercase">
                        Our Advantage
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white font-outfit leading-tight">
                        Why Choose <span className="text-brand-red">Austar</span> Cyber Tech
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 lg:gap-y-16">
                    {reasons.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-white rounded-xl p-8 pt-12 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out border border-transparent hover:border-red-50"
                        >
                            {/* Number Badge */}
                            <div className="absolute -top-6 left-8 bg-brand-red text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                                {item.id}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 mt-2">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 font-outfit group-hover:text-brand-red transition-colors duration-300">
                                    {item.title}
                                </h3>

                                {/* Subtle Divider */}
                                <div className="w-12 h-0.5 bg-gray-200 mb-4 group-hover:bg-red-100 transition-colors duration-300" />

                                <p className="text-gray-600 leading-relaxed font-outfit text-[0.95rem] md:text-base">
                                    {item.description}
                                </p>
                            </div>

                            {/* Decorative soft glow on hover*/}
                            <div className="absolute inset-0 rounded-xl bg-brand-red/0 group-hover:bg-brand-red/2  transition-colors duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
