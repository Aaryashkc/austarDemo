import React from 'react';
import AboutContent from '@/components/about/AboutContent';
import AboutHero from '@/components/about/AboutHero';
import AboutStats from '@/components/about/AboutStats';
import AboutMissionVision from '@/components/about/AboutMissionVision';

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white pt-[72px]">
            <AboutHero />
            <AboutContent />
            <AboutStats />
            <AboutMissionVision />
        </main>
    );
}
