import React from 'react';
import { Shield, Clock, Users } from 'lucide-react';

const AboutContent = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                    {/* Left Column - Narrative */}
                    <div className="flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-0.5 bg-brand-red"></div>
                            <span className="text-brand-red font-bold tracking-wider text-sm uppercase">WHO WE ARE</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-dark-secondary mb-6 leading-tight">
                            Securing the <span className="text-brand-red">digitally connected</span> world
                        </h2>

                        <div className="text-text-secondary text-lg leading-relaxed space-y-5">
                            <p>
                                <span className="text-brand-red font-semibold">Austar Cyber Tech</span> is a security-first technology company focused on designing, building, and protecting modern digital systems.
                            </p>
                            <p>
                                We work at the intersection of UI/UX design, system development, network security, and DevSecOps to deliver solutions that are reliable, scalable, and secure by design.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Feature Cards */}
                    <div className="flex flex-col gap-5">

                        {/* Primary Feature Card */}
                        <div className="bg-white p-6 rounded-2xl border-2 border-brand-red shadow-lg relative overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-5 text-brand-red">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-dark-secondary mb-2">Security-First Philosophy</h3>
                            <p className="text-text-secondary leading-relaxed">
                                Every solution we build starts with a security-first mindset, ensuring protection is woven into the fabric of every product.
                            </p>
                        </div>

                        {/* Secondary Cards Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Card 1 */}
                            <div className="bg-background-light p-6 rounded-2xl transition-transform hover:-translate-y-1 duration-300">
                                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-5 text-brand-red">
                                    <Clock size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-dark-secondary mb-2">24/7 Monitoring</h3>
                                <p className="text-text-secondary leading-relaxed text-sm">
                                    Round-the-clock threat surveillance to keep your infrastructure safe.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-background-light p-6 rounded-2xl transition-transform hover:-translate-y-1 duration-300">
                                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-5 text-brand-red">
                                    <Users size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-dark-secondary mb-2">Expert Team</h3>
                                <p className="text-text-secondary leading-relaxed text-sm">
                                    Seasoned professionals with deep expertise across every security domain.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutContent;
