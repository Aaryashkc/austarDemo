import { Shield, Server, Code, Cloud, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: <Shield className="w-6 h-6 text-brand-red" />,
        title: 'Cyber Security',
        description: 'Advanced threat detection, risk assessment, and continuous monitoring to keep your business safe.',
        href: '/solutions/cyber-security'
    },
    {
        icon: <Server className="w-6 h-6 text-brand-red" />,
        title: 'Network Management',
        description: 'Secure network architecture design, firewall management, and intrusion prevention.',
        href: '/solutions/network-management'
    },
    {
        icon: <Code className="w-6 h-6 text-brand-red" />,
        title: 'System Development',
        description: 'Custom web and app development with security integrated from the ground up.',
        href: '/solutions/system-development'
    },
    {
        icon: <Cloud className="w-6 h-6 text-brand-red" />,
        title: 'DevSecOps (Cloud)',
        description: 'Integrating security into your CI/CD pipelines and cloud infrastructure.',
        href: '/solutions/devsecops'
    }
];

const Services = () => {
    return (
        <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
            {/* Decorative Red Quarter Circle (Bottom Left) */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-red rounded-full pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Column: Content (40%) */}
                    <div className="w-full lg:w-[40%] flex flex-col justify-center items-start space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-outfit leading-[1.1]">
                                Created to <span className="text-brand-red">Transform</span> Business
                            </h2>
                            <p className="text-text-secondary text-lg font-outfit font-light leading-relaxed">
                                Designing Experiences. Engineering Systems. <span className="text-brand-red font-medium">Securing Everything.</span>
                            </p>
                        </div>

                        <Link href="/services" className="px-8 py-3 border border-black rounded-lg text-text-primary font-medium hover:bg-black hover:text-white transition-all duration-300 font-outfit inline-flex items-center gap-2 group">
                            Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right Column: Services Grid (60%) */}
                    <div className="w-full lg:w-[60%]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-8 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow duration-300 border-l-[3px] border-brand-red relative group h-full flex flex-col">
                                    <div className="mb-6 p-3 bg-red-50 rounded-full w-max">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-text-primary mb-3 font-outfit">{service.title}</h3>
                                    <p className="text-text-secondary text-sm leading-relaxed font-outfit mb-8 flex-grow">{service.description}</p>

                                    {/* Red Arrow Icon at Bottom Right */}
                                    <div className="absolute bottom-6 right-6 text-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
