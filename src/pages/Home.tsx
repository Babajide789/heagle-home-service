

import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, Zap, Wrench, Droplet, Paintbrush, Home as HomeIcon, Hammer } from 'lucide-react';
import { ServiceCard } from "@/customStyles/ServiceCard";
import { TestimonialCard } from "@/customStyles/TestimonialCard";


export default function HomeSection() {
  const services = [
    {
      icon: Hammer,
      title: 'Repairs',
      description: 'Quick fixes for doors, windows, drywall, and more to keep your home in perfect condition.',
    },
    {
      icon: Zap,
      title: 'Electrical',
      description: 'Licensed electrical services including installations, repairs, and safety inspections.',
    },
    {
      icon: Droplet,
      title: 'Plumbing',
      description: 'Expert plumbing repairs, installations, and emergency services for all your needs.',
    },
    {
      icon: Paintbrush,
      title: 'Painting',
      description: 'Professional interior and exterior painting to refresh and protect your home.',
    },
    {
      icon: Wrench,
      title: 'Installations',
      description: 'Professional installation of fixtures, appliances, shelving, and home improvements.',
    },
    {
      icon: HomeIcon,
      title: 'General Maintenance',
      description: 'Regular upkeep and preventive maintenance to protect your investment.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Downtown',
      text: 'Heagle\'s Home Service saved the day when our bathroom had a plumbing emergency. They arrived quickly and fixed everything professionally. Highly recommend!',
      rating: 5,
    },
    {
      name: 'John Davis',
      location: 'West End',
      text: 'We\'ve used them for electrical work and painting. Always on time, fair prices, and quality work. They\'re now our go-to for any home repairs.',
      rating: 5,
    },
    {
      name: 'Maria Garcia',
      location: 'Riverside',
      text: 'Professional team that really cares about their work. They helped us with several repairs and the results exceeded our expectations.',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-10">
          {/* <ImageWithFallback
            src="https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVwYWlyJTIwaGFuZHltYW58ZW58MXx8fHwxNzY1MzQwOTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Home repair services"
            className="w-full h-full object-cover"
          /> */}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">
              Your Trusted Partner for Home Repairs & Maintenance
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Professional, reliable, and affordable home services. From small repairs to major installations, we handle it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="size-5" />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors border-2 border-blue-500"
              >
                <Phone className="size-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-1">Licensed & Insured</h3>
                <p className="text-gray-600 text-sm">
                  Fully certified professionals you can trust
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-1">Fast Response Time</h3>
                <p className="text-gray-600 text-sm">
                  Same-day service available for urgent repairs
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="size-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-gray-900 mb-1">Satisfaction Guaranteed</h3>
                <p className="text-gray-600 text-sm">
                  We stand behind our work with a quality guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of home repair and maintenance services to keep your property in excellent condition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              View All Services
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-4">About Heagle&apos;s Home Service</h2>
              <p className="text-gray-600 mb-4">
                For over 15 years, we&apos;ve been the trusted choice for homeowners in our community. What started as a one-person operation has grown into a full-service home repair and maintenance company, but we&apos;ve never lost sight of what matters most: quality work and happy customers.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of skilled professionals brings expertise, integrity, and attention to detail to every job, whether it&apos;s a minor repair or a major installation. We treat your home like our own.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                Learn More About Us
                <ArrowRight className="size-5" />
              </Link>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1764438246710-83c535cada80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1MzIwMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional team"
                className="w-full h-auto"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what homeowners in our community have to say about our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. We&apos;re here to help with all your home repair and maintenance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request a Quote
              <ArrowRight className="size-5" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors border-2 border-blue-500"
            >
              <Phone className="size-5" />
              (123) 456-7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
