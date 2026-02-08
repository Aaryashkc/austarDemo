'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Shield } from 'lucide-react';
import Image from "next/image";

const Navbar = () => {
  /* State for Desktop Dropdowns */
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredSolution, setHoveredSolution] = useState(null);

  /* State for Mobile Menu */
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const platformSolutions = [
    {
      id: 'cyber-security',
      title: 'Cyber Security',
      description: 'Threat detection and risk assessment',
      items: [
        'Security Consulting',
        'Security Log Analysis and Monitoring',
        'System Security Assessment (Web, Network, Cloud)'
      ]
    },
    {
      id: 'network-management',
      title: 'Network Management',
      description: 'Threat detection and risk assessment',
      items: [
        'Network Security Assessment & Auditing',
        'Firewall Configuration & Management',
        'Intrusion Detection & Prevention (IDS/IPS)',
        'Secure Network Architecture & Design'
      ]
    },
    {
      id: 'system-development',
      title: 'System Development',
      description: 'Threat detection and risk assessment',
      items: [
        'App/web Development',
        'Domain Hosting & Registration',
        'UI/UX Design'
      ]
    },
    {
      id: 'devsecops',
      title: 'DevSecOps (Cloud)',
      description: 'Threat detection and risk assessment',
      items: [
        'App/web Development',
        'Domain Hosting & Registration',
        'UI/UX Design'
      ]
    },
    {
      id: 'awareness-training',
      title: 'Awareness & Training',
      description: 'Educate and empower employees',
      items: [
        'Security Awareness Training',
        'Phishing Simulation'
      ]
    }
  ];

  const platformOverview = [
    {
      title: 'One Platform. Total Control.',
      subtitle: 'Monitor, assess, and secure your systems from a single, centralized dashboard.',
      features: [
        'Real-Time Monitoring',
        'Automated Threat Detection',
        'Comprehensive Reports'
      ]
    },
    {
      title: 'One Platform. Total Control.',
      subtitle: 'Monitor, assess, and secure your systems from a single, centralized dashboard.',
      features: [
        'Real-Time Monitoring',
        'Automated Threat Detection',
        'Comprehensive Reports'
      ]
    }
  ];

  const resourcesItems = [
    'Blogs / Articles',
    'Case Studies',
    'Security Insights',
    'Whitepapers / Reports',
    'Awareness & Training Programs',
    'FAQs'
  ];

  const companyItems = [
    { title: 'About Us', href: '/about-us' },
    { title: 'Our Mission & Vision', href: '#' },
    { title: 'Why Choose Us', href: '#' },
    { title: 'Certifications & Compliance', href: '#' },
    { title: 'Careers', href: '#' },
    { title: 'Partners', href: '#' }
  ];

  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = (dropdown) => {
    if (timeoutId) clearTimeout(timeoutId);
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setOpenDropdown(null);
      setHoveredSolution(null);
    }, 200);
    setTimeoutId(id);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 border-b border-white/5 transition-all duration-300 backdrop-blur-md shadow-md ${isScrolled ? 'bg-dark-secondary/80' : 'bg-dark-secondary'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <Image src="/austar.png" alt="Austar Logo" width={150} height={150} className="brightness-0 invert opacity-90 hover:opacity-100 transition-opacity w-32 md:w-42" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 h-full">
            <Link
              href="/"
              className="text-white/70 hover:text-brand-red transition-colors duration-200 font-medium flex items-center h-full font-outfit"
            >
              Home
            </Link>

            {/* Platform & Solutions Dropdown */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('platform')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-white/70 hover:text-brand-red transition-colors duration-200 font-medium h-full font-outfit">
                Platform & Solutions
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'platform' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {openDropdown === 'platform' && (
                <div
                  className="fixed left-1/2 -translate-x-1/2 top-18 pt-0 w-[90vw] max-w-[1600px] z-50 animate-fadeIn"
                  onMouseEnter={() => handleMouseEnter('platform')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-white shadow-2xl rounded-lg overflow-hidden flex border border-gray-100 mt-0">
                    {/* Solutions Overview - Left Side */}
                    <div className="w-[60%] p-8 bg-background-light">
                      <h3 className="text-brand-red font-semibold mb-6 text-lg font-['Outfit']">
                        Solutions Overview
                      </h3>

                      {/* Grid Layout - 2 rows, responsive columns */}
                      <div className="grid grid-cols-2 gap-4">
                        {platformSolutions.map((solution, index) => (
                          <div
                            key={solution.id}
                            className={`relative group ${index === 4 ? 'col-span-2' : ''
                              }`}
                            onMouseEnter={() => setHoveredSolution(solution.id)}
                          >
                            <div
                              className={`p-4 rounded-lg relative overflow-hidden transition-all duration-300 bg-white ${hoveredSolution === solution.id
                                ? ''
                                : ''
                                }`}
                            >
                              <div
                                className={`absolute left-0 top-0 w-2 bg-brand-red transition-all duration-300 ease-in-out ${hoveredSolution === solution.id ? 'h-full' : 'h-[40%]'
                                  }`}
                              ></div>
                              <div className="flex items-start gap-3">
                                <div className="mt-1">
                                  <Shield className="w-5 h-5 text-text-primary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-text-primary mb-1 font-['Outfit']">
                                    <Link href={`/solutions/${solution.id}`} className="hover:text-brand-red transition-colors">
                                      {solution.title}
                                    </Link>
                                  </h4>
                                  <p className="text-sm text-[rgba(59,59,59,0.6)] mb-3 font-['Outfit']">
                                    {solution.description}
                                  </p>
                                  <ul className={`grid ${index === 4 ? 'grid-cols-2 gap-x-8' : 'grid-cols-1'} gap-y-1.5`}>
                                    {solution.items.map((item, idx) => (
                                      <li
                                        key={idx}
                                        className="text-xs text-[rgba(59,59,59,0.6)] flex items-start gap-2 font-['Outfit']"
                                      >
                                        <span className="w-1.5 h-1.5 bg-[rgba(59,59,59,0.4)] rounded-full mt-1.5 flex-shrink-0"></span>
                                        <Link href="#" className="hover:text-brand-red transition-colors pointer-events-auto">
                                          {item}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Platform Overview - Right Side */}
                    <div className="w-[40%] p-8 bg-dark-secondary overflow-y-auto max-h-[600px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-brand-red [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-brand-red">
                      <h3 className="text-white font-semibold mb-6 text-lg font-['Outfit']">
                        Platform Overview
                      </h3>
                      <div className="space-y-4">
                        {platformOverview.map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-white border border-[rgba(255,255,255,0.6)] p-6 rounded-2xl"
                          >
                            <h4 className="font-semibold text-text-primary text-xl mb-2 font-['Outfit']">
                              <Link href="#" className="hover:text-brand-red transition-colors">
                                {item.title}
                              </Link>
                            </h4>
                            <p className="text-sm text-[rgba(59,59,59,0.6)] mb-4 font-['Outfit'] font-light">
                              {item.subtitle}
                            </p>

                            {/* White box with features */}
                            <div className="bg-background-light p-4 rounded-xl mb-4">
                              <ul className="space-y-2">
                                {item.features.map((feature, featureIdx) => (
                                  <li
                                    key={featureIdx}
                                    className="text-sm text-text-primary flex items-start gap-2 font-['Outfit']"
                                  >
                                    <span className="w-1.5 h-1.5 bg-text-primary rounded-full mt-2 flex-shrink-0"></span>
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <Link href="#" className="bg-brand-red text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-medium flex items-center justify-center gap-2 font-['Outfit'] w-max">
                              View Platform →
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('resources')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-white/70 hover:text-brand-red transition-colors duration-200 font-medium h-full font-outfit">
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'resources' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {openDropdown === 'resources' && (
                <div className="absolute left-0 top-full pt-0 w-72 z-50 animate-fadeIn">
                  <div className="bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-100 p-6 mt-0">
                    <h3 className="text-text-primary font-semibold mb-4 text-base font-['Outfit']">
                      Resources
                    </h3>
                    <ul className="space-y-3">
                      {resourcesItems.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href="#"
                            className="block text-text-secondary hover:text-brand-red transition-colors duration-200 font-['Outfit']"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-white/70 hover:text-brand-red transition-colors duration-200 font-medium h-full font-outfit">
                Company
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'company' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {openDropdown === 'company' && (
                <div className="absolute left-0 top-full pt-0 w-72 z-50 animate-fadeIn">
                  <div className="bg-white shadow-2xl rounded-lg overflow-hidden border border-gray-100 p-6 mt-0">
                    <h3 className="text-text-primary font-semibold mb-4 text-base font-['Outfit']">
                      Company
                    </h3>
                    <ul className="space-y-3">
                      {companyItems.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            className="block text-text-secondary hover:text-brand-red transition-colors duration-200 font-['Outfit']"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="relative bg-brand-red text-white px-6 py-2.5 rounded-full font-medium shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl font-['Outfit']">
              <span className="relative z-10">Lets Connect</span>
              {/* Glassy overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
              {/* Glassy shine effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-dark-secondary z-40 overflow-y-auto w-full">
          <div className="px-4 py-8 space-y-6">
            <Link href="/" className="block text-white text-lg font-medium font-outfit py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>

            {/* Mobile Platform Section */}
            <div className="space-y-3 py-2 border-b border-white/5">
              <div className="text-brand-red font-medium font-outfit mb-2 text-lg">Platform & Solutions</div>
              {platformSolutions.map((solution) => (
                <Link key={solution.id} href={`/solutions/${solution.id}`} className="block text-white/80 py-2 text-base font-outfit" onClick={() => setIsMobileMenuOpen(false)}>
                  {solution.title}
                </Link>
              ))}
            </div>

            {/* Mobile Resources Section */}
            <div className="space-y-3 py-2 border-b border-white/5">
              <div className="text-brand-red font-medium font-outfit mb-2 text-lg">Resources</div>
              {resourcesItems.map((item, idx) => (
                <Link key={idx} href="#" className="block text-white/80 py-2 text-base font-outfit" onClick={() => setIsMobileMenuOpen(false)}>
                  {item}
                </Link>
              ))}
            </div>

            {/* Mobile Company Section */}
            <div className="space-y-3 py-2 border-b border-white/5">
              <div className="text-brand-red font-medium font-outfit mb-2 text-lg">Company</div>
              {companyItems.map((item, idx) => (
                <Link key={idx} href={item.href} className="block text-white/80 py-2 text-base font-outfit" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="pt-6 pb-20">
              <button className="w-full bg-brand-red text-white px-6 py-4 rounded-full font-medium shadow-lg font-['Outfit'] text-lg">
                Lets Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;