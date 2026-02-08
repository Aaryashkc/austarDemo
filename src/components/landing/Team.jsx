'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Linkedin, Twitter, Github } from 'lucide-react';

const teamMembers = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Chief Executive Officer',
        bio: 'Visionary leader with 15+ years in cybersecurity, driving innovation and strategic growth for global enterprises.',
        image: '/images/heroimage.png', 
        socials: { linkedin: '#', twitter: '#' }
    },
    {
        id: 2,
        name: 'David Chen',
        role: 'CTO',
        bio: 'Expert in cloud security and AI-driven threat detection, leading our technical strategy and engineering teams.',
        image: '/images/heroimage.png', 
        socials: { linkedin: '#', github: '#' }
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Head of Product',
        bio: 'Passionately focused on user-centric design and product strategy, ensuring our solutions solve real-world problems.',
        image: '/images/heroimage.png', 
        socials: { linkedin: '#', twitter: '#' }
    },
    {
        id: 4,
        name: 'Michael Chang',
        role: 'Lead Security Architect',
        bio: 'Architecting robust security frameworks and ensuring compliance across complex, regulated environments.',
        image: '/images/heroimage.png', 
        socials: { linkedin: '#', github: '#' }
    },
    {
        id: 5,
        name: 'Jessica Lee',
        role: 'Director of Operations',
        bio: 'Streamlining processes and optimizing resource allocation to deliver projects on time and within budget.',
        image: '/images/heroimage.png',
        socials: { linkedin: '#' }
    },
    {
        id: 6,
        name: 'Robert Wilson',
        role: 'Senior DevOps Engineer',
        bio: 'Automating infrastructure and deployment pipelines to accelerate delivery without compromising security.',
        image: '/images/heroimage.png', 
        socials: { linkedin: '#', github: '#' }
    }
];

const Team = () => {
    const sliderRef = useRef(null);

    return (
        <section className="relative py-10 lg:py-10 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Left Column: Static Content (40%) */}
                    <div className="w-full lg:w-[40%] flex flex-col space-y-8 sticky ">
                        <div>
                            <span className="inline-block text-brand-red font-bold tracking-widest text-sm mb-3 uppercase">
                                Together
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-outfit leading-[1.1]">
                                Our Team
                            </h2>
                            <p className="text-xl font-outfit font-light text-text-secondary leading-relaxed">
                                Meet the passionate individuals behind <span className="text-brand-red font-medium">Austar Cyber Tech</span>.
                            </p>
                        </div>

                        <Link href="/team" className="group inline-flex items-center gap-2 text-text-primary font-medium hover:text-brand-red transition-colors duration-300 w-max">
                            <span className="border-b border-gray-300 group-hover:border-brand-red transition-colors duration-300 pb-1">
                                Learn More
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Column: Vertical Slider (60%) */}
                    <div className="w-full lg:w-[60%] relative h-[800px] bg-background-light px-10 py-5 overflow-hidden">
                        <div
                            className="h-full overflow-y-auto scrollbar-hide snap-y snap-mandatory px-2 py-4 space-y-6"
                            ref={sliderRef}
                        >
                            {teamMembers.map((member) => (
                                <div
                                    key={member.id}
                                    className="snap-start bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row gap-6 items-center group/card"
                                >
                                    {/* Image */}
                                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 text-center sm:text-left">
                                        <h3 className="text-xl font-bold text-text-primary mb-1 font-outfit">
                                            {member.name}
                                        </h3>
                                        <p className="text-brand-red font-medium text-sm mb-3 uppercase tracking-wide">
                                            {member.role}
                                        </p>
                                        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                                            {member.bio}
                                        </p>

                                        {/* Social Icons */}
                                        <div className="flex items-center justify-center sm:justify-start gap-4">
                                            {member.socials.linkedin && (
                                                <Link href={member.socials.linkedin} className="text-gray-400 hover:text-brand-red transition-colors duration-300">
                                                    <Linkedin className="w-5 h-5" />
                                                </Link>
                                            )}
                                            {member.socials.twitter && (
                                                <Link href={member.socials.twitter} className="text-gray-400 hover:text-brand-red transition-colors duration-300">
                                                    <Twitter className="w-5 h-5" />
                                                </Link>
                                            )}
                                            {member.socials.github && (
                                                <Link href={member.socials.github} className="text-gray-400 hover:text-brand-red transition-colors duration-300">
                                                    <Github className="w-5 h-5" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Spacer to show bottom of last card clearly */}
                            <div className="h-8 snap-align-none" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Red Quarter Circle (Bottom Left) */}
            <div className="absolute -bottom-60 -left-60 w-[450px] h-[450px] bg-brand-red rounded-full pointer-events-none z-0" />
        </section>
    );
};

export default Team;
