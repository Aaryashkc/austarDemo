import AboutUs from '@/components/landing/AboutUs'
import Hero from '@/components/landing/Hero'
import Platforms from '@/components/landing/Platforms'
import Services from '@/components/landing/Services'
import Tagline from '@/components/landing/Tagline'
import Team from '@/components/landing/Team'
import Testimonials from '@/components/landing/Testimonials'
import RecentBlogs from '@/components/landing/RecentBlogs'
import CTA from '@/components/landing/CTA'
import WhyChooseUs from '@/components/landing/WhyChooseUs'
import Footer from '@/components/layout/Footer'
import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <Hero />
      <Tagline />
      <AboutUs />
      <Services />
      <Platforms />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <RecentBlogs />
      <CTA />
      <Footer />
    </div>
  )
}

export default HomePage