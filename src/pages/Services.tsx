"use client";

import { useState } from 'react';
import {
  Hammer,
  Zap,
  Droplet,
  Paintbrush,
  Wrench,
  Home as HomeIcon,
  ArrowRight
} from 'lucide-react';
import Link from "next/link";
// import { ImageWithFallback } from '../components/figma/ImageWithFallback';

type ServiceCategory =
  | 'repairs'
  | 'electrical'
  | 'plumbing'
  | 'painting'
  | 'installations'
  | 'maintenance';

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceCategory>('repairs');

  const services = [
    {
      id: 'repairs' as ServiceCategory,
      icon: Hammer,
      title: 'Repairs',
      shortDesc: 'Expert repairs for all types of home issues',
      details: [
        'Door and window repairs',
        'Drywall patching and repair',
        'Cabinet and drawer fixes',
        'Flooring repairs',
        'Trim and molding restoration',
        'Deck and fence repairs',
        'Weather damage restoration',
        'Emergency repair services'
      ],
      image:
        'https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 'electrical' as ServiceCategory,
      icon: Zap,
      title: 'Electrical',
      shortDesc: 'Licensed electrical work for safety and efficiency',
      details: [
        'Light fixture installation and repair',
        'Ceiling fan installation',
        'Outlet and switch replacement',
        'Electrical panel upgrades',
        'Home wiring and rewiring',
        'GFCI outlet installation',
        'Electrical safety inspections',
        'Smoke detector installation'
      ],
      image:
        'https://images.unsplash.com/photo-1636218685495-8f6545aadb71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 'plumbing' as ServiceCategory,
      icon: Droplet,
      title: 'Plumbing',
      shortDesc: 'Professional plumbing solutions for your home',
      details: [
        'Leak detection and repair',
        'Faucet and sink installation',
        'Toilet repair and replacement',
        'Drain cleaning and unclogging',
        'Water heater services',
        'Garbage disposal installation',
        'Pipe repair and replacement',
        'Emergency plumbing services'
      ],
      image:
        'https://images.unsplash.com/photo-1760571327612-8ab776dcd462?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 'painting' as ServiceCategory,
      icon: Paintbrush,
      title: 'Painting',
      shortDesc: 'Quality painting services to beautify your space',
      details: [
        'Interior painting (walls, ceilings, trim)',
        'Exterior painting and staining',
        'Cabinet and furniture painting',
        'Deck and fence staining',
        'Pressure washing and surface prep',
        'Color consultation',
        'Wallpaper removal',
        'Touch-ups and repairs'
      ],
      image:
        'https://images.unsplash.com/photo-1719985969510-01b17ef58f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 'installations' as ServiceCategory,
      icon: Wrench,
      title: 'Installations',
      shortDesc: 'Professional installation of fixtures and appliances',
      details: [
        'Appliance installation',
        'Shelving and storage systems',
        'Curtain rods and blinds',
        'TV mounting',
        'Door hardware installation',
        'Mailbox and house number installation',
        'Smart home device setup',
        'Mirror and artwork hanging'
      ],
      image:
        'https://images.unsplash.com/photo-1759386885883-b9ea5add440f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    },
    {
      id: 'maintenance' as ServiceCategory,
      icon: HomeIcon,
      title: 'General Maintenance',
      shortDesc: 'Preventive care to protect your home investment',
      details: [
        'Seasonal home inspections',
        'Gutter cleaning and repair',
        'Weatherproofing and caulking',
        'HVAC filter replacement',
        'Preventive maintenance packages',
        'Property walk-throughs',
        'Minor repairs and adjustments',
        'Home improvement consultations'
      ],
      image:
        'https://images.unsplash.com/photo-1628744448839-a475cc0e90c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
    }
  ];

  const currentService = services.find((s) => s.id === selectedService);
  const CurrentIcon = currentService?.icon || Hammer;

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="mb-4 text-white">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive home repair and maintenance services handled by skilled professionals.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((svc) => {
              const Icon = svc.icon;
              const isActive = selectedService === svc.id;
              return (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc.id)}
                  className={`p-4 rounded-lg transition ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 shadow-md hover:bg-gray-100'
                  }`}
                >
                  <Icon
                    className={`size-8 mx-auto mb-2 ${
                      isActive ? 'text-white' : 'text-blue-600'
                    }`}
                  />
                  <span className="text-sm">{svc.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service details */}
      {currentService && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <CurrentIcon className="size-8 text-blue-600" />
                </div>
                <h2 className="text-gray-900">{currentService.title}</h2>
              </div>

              <p className="text-gray-600 mb-6">{currentService.shortDesc}</p>

              <h3 className="text-gray-900 mb-4">What We Offer:</h3>
              <ul className="space-y-3">
                {currentService.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="size-5 text-blue-600 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mt-8"
              >
                Get a Quote for This Service
                <ArrowRight className="size-5" />
              </Link>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg">
              {/* <ImageWithFallback
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-auto"
              /> */}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">See Our Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse examples of our completed projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1706622437268-52d6488b697f?q=80&w=1080"
                alt="Kitchen Renovation"
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-4">
                <h3 className="text-gray-900 mb-2">Kitchen Renovation</h3>
                <p className="text-gray-600 text-sm">
                  Complete kitchen refresh with new fixtures and paint.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1719985969510-01b17ef58f5f?q=80&w=1080"
                alt="Interior Painting"
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-4">
                <h3 className="text-gray-900 mb-2">Interior Painting</h3>
                <p className="text-gray-600 text-sm">
                  Fresh modern color coat for improved aesthetics.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              {/* <ImageWithFallback
                src="https://images.unsplash.com/photo-1600585152340-8a9e91b69a61?q=80&w=1080"
                alt="Bathroom Plumbing"
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-4">
                <h3 className="text-gray-900 mb-2">Bathroom Fix</h3>
                <p className="text-gray-600 text-sm">
                  Leak repair and fixture upgrade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
