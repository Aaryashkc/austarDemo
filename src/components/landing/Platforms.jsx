'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';

const platforms = [
    {
        id: 1,
        title: 'CRM (Consultancy)',
        description: 'Streamline customer relationships with our integrated CRM solutions tailored for consultancy firms.',
        image: '/images/heroimage.png', // Placeholder
        link: '#'
    },
    {
        id: 2,
        title: 'Auto Help Desk',
        description: 'Automate support tickets and improve response times with AI-driven help desk software.',
        image: '/images/heroimage.png', // Placeholder
        link: '#'
    },
    {
        id: 3,
        title: 'Audit Automation',
        description: 'Simplify compliance and internal audits with automated workflows and reporting tools.',
        image: '/images/heroimage.png', // Placeholder
        link: '#'
    },
    {
        id: 4,
        title: 'HR Management',
        description: 'Manage your workforce efficiently from recruitment to payroll in one secure platform.',
        image: '/images/heroimage.png', // Placeholder
        link: '#'
    },
    {
        id: 5,
        title: 'Project Tracking',
        description: 'Keep projects on schedule and budget with real-time tracking and collaboration tools.',
        image: '/images/heroimage.png', // Placeholder
        link: '#'
    }
];

const Platforms = () => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    // Handle Scroll Buttons
    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth / (window.innerWidth < 768 ? 1.2 : window.innerWidth < 1024 ? 2 : 3);
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    // Handle Drag to Scroll
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.style.cursor = 'grabbing';
        scrollContainerRef.current.style.scrollSnapType = 'none'; // Disable snap while dragging
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
            scrollContainerRef.current.style.scrollSnapType = 'x mandatory'; // Re-enable snap
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
            scrollContainerRef.current.style.scrollSnapType = 'x mandatory'; // Re-enable snap
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Check Scroll Position for Arrows
    const checkScrollPosition = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScrollPosition);
            checkScrollPosition(); // Initial check
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', checkScrollPosition);
            }
        };
    }, []);

    return (
        <section className="py-20 lg:py-32 bg-background-light relative overflow-hidden">
            {/* Decorative Red Rectangle Background */}
            <div className="absolute top-[35%] md:top-[30%] lg:top-[25%] bottom-0 right-[5%] md:right-[10%] lg:right-[15%] w-[80%] md:w-[60%] lg:w-[40%] bg-brand-red z-0 pointer-events-none" />

            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="max-w-7xl mx-auto mb-12 lg:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 font-outfit leading-tight">
                        Our <span className="text-brand-red">Technology</span> Platforms
                    </h2>
                    <p className="text-text-secondary text-lg md:text-xl font-outfit font-light leading-relaxed max-w-3xl">
                        Built to simplify operations, scale systems, and embed security at every <span className="text-brand-red font-medium">layer</span>.
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative group">

                    {/* Navigation Buttons (Desktop) */}
                    {showLeftArrow && (
                        <button
                            onClick={() => scroll('left')}
                            className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-text-primary hover:text-brand-red hover:scale-110 transition-all duration-300"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}

                    {showRightArrow && (
                        <button
                            onClick={() => scroll('right')}
                            className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg items-center justify-center text-text-primary hover:text-brand-red hover:scale-110 transition-all duration-300"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    )}

                    {/* Scroll Track */}
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 pb-12 pt-4 px-4 lg:px-8 snap-x snap-mandatory scrollbar-hide cursor-grab active:cursor-grabbing select-none"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
                    >
                        {platforms.map((platform) => (
                            <div
                                key={platform.id}
                                className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[30vw] snap-center lg:snap-start relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group/card"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={platform.image}
                                        alt={platform.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover/card:scale-105"
                                    />
                                    {/* Dark Overlay for Image Readability if needed, mostly handled by card overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/10 transition-colors duration-300" />
                                </div>

                                {/* Content Overlay Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 font-outfit">
                                        {platform.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm md:text-base mb-6 font-outfit line-clamp-3">
                                        {platform.description}
                                    </p>

                                    <Link href={platform.link}>
                                        <button className="bg-brand-red text-white pr-4 pl-6 py-2.5 rounded-full font-medium text-sm flex items-center gap-3 hover:bg-red-700 transition-colors duration-300 font-outfit group/btn w-max">
                                            Learn More
                                            <div className="bg-white/20 rounded-full p-1 group-hover/btn:translate-x-1 transition-transform duration-300">
                                                <ArrowRight className="w-3 h-3 text-white" />
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Platforms;
