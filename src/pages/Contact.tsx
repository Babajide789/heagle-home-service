"use client";

import { useState, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // TODO: integrate real backend endpoint
    console.log("Form submitted:", formData);

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Reach out for quotes, bookings, or general inquiries. We're always
            ready to help with your home service needs.
          </p>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <a
            href="tel:+1234567890"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-blue-600 text-center"
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="size-8 text-white" />
            </div>
            <h3 className="mb-1">Call Us Now</h3>
            <p className="text-blue-600 font-medium">(123) 456-7890</p>
            <p className="text-sm text-gray-600 mt-2">Mon–Sat, 8AM–6PM</p>
          </a>

          {/* Email */}
          <a
            href="mailto:info@heagleshome.com"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="size-8 text-blue-600" />
            </div>
            <h3 className="mb-1">Email Us</h3>
            <p className="text-blue-600 font-medium">info@heagleshome.com</p>
            <p className="text-sm text-gray-600 mt-2">Replies within 2–4 hours</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="size-8 text-green-600" />
            </div>
            <h3 className="mb-1">WhatsApp Chat</h3>
            <p className="text-green-600 font-medium">Chat With Us</p>
            <p className="text-sm text-gray-600 mt-2">Fast responses daily</p>
          </a>
        </div>
      </section>

      {/* Form & Info */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div>
            <h2 className="mb-4">Request a Quote</h2>
            <p className="text-gray-600 mb-6">
              Fill in the details below. We’ll get back to you within hours.
            </p>

            {isSubmitted ? (
              <div className="bg-green-50 p-8 rounded-xl border border-green-600 text-center">
                <CheckCircle className="size-14 text-green-600 mx-auto mb-4" />
                <h3 className="mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your request has been received. We’ll contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <InputField
                  label="Your Name *"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <InputField
                  label="Phone Number *"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <InputField
                  label="Email Address"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

                {/* Service dropdown */}
                <div>
                  <label className="block mb-2">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service...</option>
                    <option value="repairs">General Repairs</option>
                    <option value="electrical">Electrical</option>
                    <option value="plumbing">Plumbing</option>
                    <option value="painting">Painting</option>
                    <option value="installations">Installations</option>
                    <option value="maintenance">General Maintenance</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2">Message / Description *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500"
                    placeholder="Describe the work needed..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition"
                >
                  Send Request
                </button>
                <p className="text-center text-sm text-gray-500">
                  * Required fields.
                </p>
              </form>
            )}
          </div>

          {/* CONTACT INFORMATION */}
          <div className="space-y-6">
            <h2 className="mb-6">Contact Information</h2>

            <ContactInfoCard
              icon={<Phone className="size-6 text-blue-600" />}
              title="Phone"
              line="(123) 456-7890"
              link="tel:+1234567890"
              note="24/7 emergency support"
            />

            <ContactInfoCard
              icon={<Mail className="size-6 text-blue-600" />}
              title="Email"
              line="info@heagleshome.com"
              link="mailto:info@heagleshome.com"
              note="Replies within 2–4 hours"
            />

            <ContactInfoCard
              icon={<MapPin className="size-6 text-blue-600" />}
              title="Service Area"
              line="123 Main Street, Your City"
              note="Serving metro area + 30-mile radius"
            />

            <ContactInfoCard
              icon={<Clock className="size-6 text-blue-600" />}
              title="Business Hours"
              line="Mon–Fri: 8AM–6PM • Sat: 9AM–4PM"
              note="Emergency services available"
            />
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-72 bg-gray-300 rounded-xl flex flex-col items-center justify-center">
            <MapPin className="size-10 text-gray-600" />
            <p className="text-gray-700 mt-2">Map Location Placeholder</p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Reusable Components */

function InputField(props: any) {
  return (
    <div>
      <label htmlFor={props.id} className="block mb-2">
        {props.label}
      </label>
      <input
        {...props}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function ContactInfoCard({
  icon,
  title,
  line,
  link,
  note,
}: {
  icon: any;
  title: string;
  line: string;
  link?: string;
  note?: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
      <div className="flex gap-4">
        <div className="bg-blue-50 p-3 rounded-lg">{icon}</div>
        <div>
          <h3 className="font-medium mb-1">{title}</h3>

          {link ? (
            <a href={link} className="text-blue-600 hover:text-blue-700">
              {line}
            </a>
          ) : (
            <p className="text-gray-700">{line}</p>
          )}

          {note && <p className="text-sm text-gray-500 mt-1">{note}</p>}
        </div>
      </div>
    </div>
  );
}
