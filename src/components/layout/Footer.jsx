import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-dark-secondary text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="mb-4 block">
                            {/* Assuming the logo is white or has a light version. If not, might need a different logo for dark bg */}
                            <Image src="/austar.png" alt="Austar Logo" width={150} height={50} className="brightness-0 invert" />
                        </Link>
                        <p className="text-gray-400 text-sm mt-4 font-outfit">
                            Securing your digital future with comprehensive cyber solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-outfit">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-brand-red transition-colors text-sm font-outfit">Home</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-brand-red transition-colors text-sm font-outfit">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-brand-red transition-colors text-sm font-outfit">Services</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-brand-red transition-colors text-sm font-outfit">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-outfit">Services</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm font-outfit">Cyber Security</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm font-outfit">Network Management</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm font-outfit">System Development</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm font-outfit">Cloud DevSecOps</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 font-outfit">Contact Us</h4>
                        <ul className="space-y-2">
                            <li className="text-gray-400 text-sm font-outfit">info@austar.com</li>
                            <li className="text-gray-400 text-sm font-outfit">+nonooooomomo</li>
                            <li className="text-gray-400 text-sm font-outfit">Kathmandu, Nepal</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm font-outfit">© {new Date().getFullYear()} Austar. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm font-outfit">Privacy Policy</Link>
                        <Link href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm font-outfit">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
