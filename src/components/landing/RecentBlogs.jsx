'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

const recentBlogs = [
    {
        id: 1,
        title: 'The Future of AI in Cybersecurity',
        category: 'Technology',
        date: 'Oct 24, 2024',
        image: '/images/heroimage.png', // Placeholder
        excerpt: 'How artificial intelligence is reshaping threat detection and response in modern enterprises.',
        link: '#'
    },
    {
        id: 2,
        title: 'Navigating Compliance in 2025',
        category: 'Compliance',
        date: 'Oct 18, 2024',
        image: '/images/heroimage.png', // Placeholder
        excerpt: 'A comprehensive guide to new regulatory standards and how to stay ahead of the curve.',
        link: '#'
    },
    {
        id: 3,
        title: 'DevSecOps: A Culture Shift',
        category: 'Development',
        date: 'Oct 12, 2024',
        image: '/images/heroimage.png', // Placeholder
        excerpt: 'Why integrating security into your DevOps pipeline is no longer optional.',
        link: '#'
    }
];

const featuredBlog = {
    id: 4,
    title: 'Protecting Digital Assets in a Hyper-Connected World',
    category: 'Security Strategy',
    date: 'Nov 01, 2024',
    image: '/images/heroimage.png', // Placeholder
    excerpt: 'As connectivity grows, so does risk. Learn the key strategies for building a resilient defense posture that scales with your business.',
    link: '#'
};

const RecentBlogs = () => {
    return (
        <section className="py-20 bg-brand-red relative">
            {/* Background Texture/Pattern (Optional - sticking to clean for now) */}

            <div className="max-w-7xl mx-auto px-6">
                {/* Intro */}
                <div className="mb-12 text-white">
                    <span className="font-bold tracking-widest text-sm mb-3 uppercase opacity-80 block">
                        Insights
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit">
                        Recent Blogs
                    </h2>
                </div>

                {/* Main Content Container */}
                <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 overflow-hidden">
                    <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16">

                        {/* Left Column: Recent Blogs List */}
                        <div className="w-full lg:w-[40%] flex flex-col justify-between">
                            <div className="space-y-8">
                                <h3 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-4">
                                    Latest Updates
                                </h3>

                                <div className="space-y-6">
                                    {recentBlogs.map((blog) => (
                                        <Link
                                            href={blog.link}
                                            key={blog.id}
                                            className="group flex gap-5 items-start hover:bg-gray-50 p-4 -mx-4 rounded-xl transition-colors duration-300"
                                        >
                                            <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                                                <Image
                                                    src={blog.image}
                                                    alt={blog.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">
                                                    <span className="text-brand-red">{blog.category}</span>
                                                    <span>•</span>
                                                    <span>{blog.date}</span>
                                                </div>
                                                <h4 className="text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-brand-red transition-colors duration-300 font-outfit">
                                                    {blog.title}
                                                </h4>
                                                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                                                    {blog.excerpt}
                                                </p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <Link href="/blog" className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-brand-red transition-colors duration-300">
                                    View All Articles
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Column: Featured Blog */}
                        <div className="w-full lg:w-[60%]">
                            <Link href={featuredBlog.link} className="group block relative h-[400px] lg:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-lg">
                                {/* Image */}
                                <Image
                                    src={featuredBlog.image}
                                    alt={featuredBlog.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                {/* Category Badge */}
                                <div className="absolute top-6 left-6 md:top-8 md:left-8 bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                    Featured - {featuredBlog.category}
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full text-white">
                                    <div className="mb-4 flex items-center gap-2 text-white/70 text-sm">
                                        <Calendar className="w-4 h-4" />
                                        <span>{featuredBlog.date}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-bold mb-4 font-outfit leading-tight group-hover:text-white/90 transition-colors">
                                        {featuredBlog.title}
                                    </h3>
                                    <p className="text-white/80 text-lg mb-8 line-clamp-2 max-w-xl leading-relaxed">
                                        {featuredBlog.excerpt}
                                    </p>

                                    <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-lg font-medium group-hover:bg-white group-hover:text-brand-red transition-all duration-300">
                                        Read Article
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentBlogs;
