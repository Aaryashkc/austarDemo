'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'James Wilson',
        role: 'CTO',
        company: 'FinTech Solutions',
        image: '/images/heroimage.png', // Placeholder
        text: "Austar Cyber Tech transformed our security posture. Their integrated approach to DevSecOps allowed us to accelerate our release cycle while significantly reducing vulnerabilities. A truly strategic partner.",
        rating: 5
    },
    {
        id: 2,
        name: 'Elena Rodriguez',
        role: 'Director of IT',
        company: 'Global Health Systems',
        image: '/images/heroimage.png', // Placeholder
        text: "We needed a partner who understood compliance as well as security. Austar delivered a comprehensive audit and automation solution that saved us hundreds of hours and ensured we met all regulatory standards.",
        rating: 5
    },
    {
        id: 3,
        name: 'Michael Chang',
        role: 'VP of Engineering',
        company: 'Nexus Logistics',
        image: '/images/heroimage.png', // Placeholder
        text: "The 'Security-First' mindset isn't just a slogan for them. It's embedded in everything they build. The platform they developed for us is robust, scalable, and incredibly secure.",
        rating: 5
    },
    {
        id: 4,
        name: 'Sarah Thompson',
        role: 'CISO',
        company: 'Elevate Capital',
        image: '/images/heroimage.png', // Placeholder
        text: "Exceptional team. They seamlessly integrated with our internal developers and provided the specialized security expertise we were missing. Highly recommended for any enterprise.",
        rating: 5
    },
    {
        id: 5,
        name: 'David Okafor',
        role: 'Founder',
        company: 'Streamline Tech',
        image: '/images/heroimage.png', // Placeholder
        text: "From the initial consultation to the final deployment, the process was transparent and professional. They delivered exactly what they promised—a high-performance, secure system.",
        rating: 4
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(1); // Start with the second item active
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const sliderRef = useRef(null);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    // Touch/Swipe Logic
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        // Optional: Implement real-time drag (simplified here to just swipe detection)
    };

    const handleTouchEnd = (e) => {
        setIsDragging(false);
        const currentX = e.changedTouches[0].clientX;
        const diff = currentX - startX;

        if (diff > 50) {
            prevSlide();
        } else if (diff < -50) {
            nextSlide();
        }
    };

    // Auto-scroll (optional, but good for engagement)
    useEffect(() => {
        const interval = setInterval(() => {
            // nextSlide(); 
            // Commented out auto-scroll to keep it "intentional" as per request ('Guide the user's eye naturally'), 
            // often manual is better for reading.
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const getCardStyles = (index) => {
        const isActive = index === currentIndex;
        // Check for adjacent cards for partial visibility logic if implemented via specialized transform
        // For a simple centered carousel, we usually transform the track.

        return isActive
            ? 'scale-105 opacity-100 shadow-xl z-20 border-red-50'
            : 'scale-90 opacity-60 shadow-sm z-10 border-transparent blur-[1px]';
    };

    return (
        <section className="py-20 lg:py-32 bg-white overflow-hidden select-none">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <div className="text-center mb-16 md:mb-24">
                    <span className="inline-block text-brand-red font-bold tracking-widest text-sm mb-3 uppercase">
                        Testimonials
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 font-outfit leading-[1.1]">
                        What Our <span className="text-brand-red">Customers</span> Are Saying
                    </h2>
                </div>

                {/* Carousel Container */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-text-primary hover:text-brand-red hover:scale-110 transition-all duration-300"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-text-primary hover:text-brand-red hover:scale-110 transition-all duration-300"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Slider Track */}
                    <div
                        className="flex items-center justify-center -mx-4 md:-mx-8 transition-transform duration-500 ease-out"
                        style={{
                            // Create a "centered" effect by translating based on currentIndex
                            // This simple logic assumes centered active card.
                            // However, strictly translating a flex row might not perfectly center the active one if we don't calculate widths.
                            // A better approach for "3 visible, center active" is to fix the widths and translate.
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* 
                           To achieve the "3 cards, center active" look effectively with a simple list,
                           we can use a fixed window and relative positioning, but implementing a true infinite carousel loop 
                           often requires more complex logic. 
                           A simpler robust way for this specific design is to render the active card and its neighbors.
                           OR, render all and translate.
                           Let's use a "Translate transform" approach.
                           Assuming 33% width for desktop.
                        */}
                    </div>

                    {/* 
                        Re-implementation of the render logic for the specific "Center Emphasis" 
                        We will render a visible window. 
                    */}
                    <div className="relative h-[450px] md:h-[400px] flex items-center justify-center">
                        {testimonials.map((testimonial, index) => {
                            // Calculate relative position to current index
                            let position = index - currentIndex;

                            // Handle wrap-around for endless feeling (optional, or just clamp)
                            // For simplicity, let's not do infinite wrap logic in this iteration unless easy, 
                            // simplified: just show current, prev, next using absolute positioning.
                            // Actually, "absolute positioning" is the easiest way to get the "center active, side faded" look perfectly.

                            // adjust indices for wrap around effect visually?
                            const total = testimonials.length;
                            // get effective position considering wrap
                            let effectivePos = position;
                            if (position < -2) effectivePos += total;
                            if (position > 2) effectivePos -= total;

                            // But simpler: just use the raw index difference and hide those far away.
                            // Or better: use a simpler approach where we verify standard index.

                            const isCenter = index === currentIndex;
                            const isPrev = index === (currentIndex - 1 + total) % total;
                            const isNext = index === (currentIndex + 1) % total;

                            // We only render/animate the center, prev, and next.
                            let cardClass = 'opacity-0 scale-50 z-0 pointer-events-none translate-x-0 hidden'; // Default hidden

                            if (isCenter) {
                                cardClass = 'opacity-100 scale-100 z-20 translate-x-0 shadow-2xl border-t-4 border-brand-red';
                            } else if (isPrev) {
                                cardClass = 'opacity-40 scale-90 z-10 -translate-x-[15%] md:-translate-x-[60%] blur-[1px]'; // Move left
                            } else if (isNext) {
                                cardClass = 'opacity-40 scale-90 z-10 translate-x-[15%] md:translate-x-[60%] blur-[1px]'; // Move right
                            }

                            return (
                                <div
                                    key={testimonial.id}
                                    className={`absolute top-0 w-full md:w-[600px] transition-all duration-500 ease-in-out ${cardClass}`}
                                >
                                    <div className="bg-white rounded-2xl p-8 md:p-12 h-full flex flex-col items-center text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]">

                                        {/* Avatar */}
                                        <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        {/* Name & Role */}
                                        <h3 className="text-xl font-bold text-text-primary font-outfit mb-1">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm font-medium text-text-secondary mb-6 uppercase tracking-wide">
                                            {testimonial.role}, {testimonial.company}
                                        </p>

                                        {/* Quote */}
                                        <blockquote className="text-lg md:text-xl text-gray-600 font-outfit font-light italic leading-relaxed mb-8 max-w-lg">
                                            "{testimonial.text}"
                                        </blockquote>

                                        {/* Stars */}
                                        <div className="flex gap-1 mt-auto">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-brand-red text-brand-red' : 'fill-gray-200 text-gray-200'}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8 md:mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-brand-red' : 'w-2 bg-gray-300 hover:bg-red-200'}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Testimonials;
