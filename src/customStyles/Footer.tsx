
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Wrench } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="size-5 text-white" />
              </div>
              <div>
                <div className="text-white">Heagle&apos;s</div>
                <div className="text-sm">Home Service</div>
              </div>
            </div>
            <p className="text-sm mb-4">
              Your trusted local partner for all home repair and maintenance needs. Professional, reliable, and affordable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-sm hover:text-blue-400 transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-sm hover:text-blue-400 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-sm hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Our Services</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/services" className="hover:text-blue-400 transition-colors">
                Repairs
              </Link>
              <Link href="/services" className="hover:text-blue-400 transition-colors">
                Electrical
              </Link>
              <Link href="/services" className="hover:text-blue-400 transition-colors">
                Plumbing
              </Link>
              <Link href="/services" className="hover:text-blue-400 transition-colors">
                Painting
              </Link>
              <Link href="/services" className="hover:text-blue-400 transition-colors">
                General Maintenance
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="size-4" />
                (123) 456-7890
              </a>
              <a href="mailto:info@heagleshome.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail className="size-4" />
                info@heagleshome.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="size-4 mt-0.5 flex-shrink-0" />
                <span>123 Main Street, Your City, ST 12345</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="size-4 mt-0.5 flex-shrink-0" />
                <span>Mon-Fri: 8AM-6PM<br />Sat: 9AM-4PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Heagle&apos;s Home Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
