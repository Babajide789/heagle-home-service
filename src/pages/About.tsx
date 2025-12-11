import Link from "next/link";
import { Shield, Heart, Award, Users, CheckCircle, ArrowRight } from 'lucide-react';
// import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We believe in honest communication, fair pricing, and doing what we say we\'ll do. Your trust is our most valuable asset.',
    },
    {
      icon: Heart,
      title: 'Customer-First',
      description: 'Your satisfaction drives everything we do. We listen to your needs and work hard to exceed your expectations on every job.',
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'We take pride in our work and never cut corners. Every repair and installation is done right the first time.',
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'As a local business, we\'re invested in our community. We build lasting relationships, not just one-time transactions.',
    },
  ];

  const whyChooseUs = [
    '15+ years serving the local community',
    'Licensed, bonded, and fully insured',
    'Experienced and background-checked professionals',
    'Transparent pricing with free estimates',
    'Same-day and emergency services available',
    'Satisfaction guarantee on all work',
    'Wide range of services under one roof',
    'Excellent customer reviews and referrals',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-white mb-4">About Heagle&apos;s Home Service</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your trusted partner for home repairs and maintenance. Built on integrity, quality, and a commitment to customer satisfaction.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1764438246710-83c535cada80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1MzIwMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our team"
                className="w-full h-auto"
              /> */}
            </div>
            <div>
              <h2 className="text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Heagle&apos;s Home Service was founded over 15 years ago with a simple mission: provide homeowners with reliable, high-quality repair and maintenance services they can trust. What started as a one-person handyman operation has grown into a full-service home repair company, but our core values have remained the same.
                </p>
                <p>
                  Our founder, Mike Heagle, started the business after years of working in the construction industry. He saw too many homeowners being overcharged, under-served, or simply unable to find a trustworthy professional for smaller jobs. He believed there was a better way—one built on transparency, quality work, and genuine care for customers.
                </p>
                <p>
                  Today, our team includes licensed electricians, experienced plumbers, skilled carpenters, and professional painters. We&apos;ve completed thousands of projects for homeowners throughout the metro area, earning a reputation for reliability and excellence.
                </p>
                <p>
                  We&apos;re proud to be a locally-owned, family-operated business. When you call us, you&apos;re not just another ticket in a system—you&apos;re a neighbor we genuinely want to help. That personal touch makes all the difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make as a company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="size-8 text-blue-600" />
                  </div>
                  <h3 className="text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">Why Homeowners Trust Us</h2>
              <p className="text-gray-600 mb-6">
                When you choose Heagle&apos;s Home Service, you&apos;re choosing a partner who genuinely cares about your home and your peace of mind. Here&apos;s what sets us apart:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="size-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1628744448839-a475cc0e90c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY1Mzg4NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Quality home services"
                className="w-full h-auto"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gray-900 mb-6">Our Commitment to You</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              We understand that inviting someone into your home requires trust. That&apos;s why every member of our team is thoroughly vetted, background-checked, and trained not just in their trade, but in customer service and respect for your property.
            </p>
            <p>
              When we arrive at your home, we&apos;ll treat it with the same care and respect we&apos;d give our own. We&apos;ll protect your floors, clean up after ourselves, and ensure everything is left in better condition than we found it.
            </p>
            <p>
              We stand behind our work with a satisfaction guarantee. If something isn&apos;t right, we&apos;ll make it right—no excuses, no hassles. Your complete satisfaction is our goal on every single job.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our skilled professionals bring years of experience and a genuine passion for helping homeowners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                {/* <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764438246710-83c535cada80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY1MzIwMDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mike Heagle"
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <h3 className="text-gray-900 mb-1">Mike Heagle</h3>
              <p className="text-gray-600 text-sm mb-2">Founder & Owner</p>
              <p className="text-gray-600 text-sm">
                20+ years in home services, passionate about quality and customer care
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-gray-900 mb-1">James Rodriguez</h3>
              <p className="text-gray-600 text-sm mb-2">Lead Electrician</p>
              <p className="text-gray-600 text-sm">
                Licensed master electrician with 15 years of experience
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
              <h3 className="text-gray-900 mb-1">Sarah Thompson</h3>
              <p className="text-gray-600 text-sm mb-2">Project Coordinator</p>
              <p className="text-gray-600 text-sm">
                Ensures every project runs smoothly from start to finish
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the Heagle&apos;s difference. Contact us today to discuss your home repair and maintenance needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
