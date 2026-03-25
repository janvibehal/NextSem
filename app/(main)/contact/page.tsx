"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (showThankYou) {
      // Prevent scrolling when popup is open
      document.body.style.overflow = "hidden";
    } else {
      // Restore scrolling when popup is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showThankYou]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just show the thank you popup
    setShowThankYou(true);
    // Reset form
    e.currentTarget.reset();
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row w-full min-h-[calc(100vh-120px)] animate-fade-in">
        {/* Left Section: Contact Form */}

        <div className="md:w-1/2 flex items-center justify-center bg-white px-6 md:px-12 py-12">
          <div className="w-full max-w-md space-y-8">
            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-3xl font-semibold text-gray-900">
                Contact Us
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                Tell us what you'd like to see next. We're building this
                platform with you.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Input Group */}
              {[
                { label: "Your Name", name: "name", type: "text" },
                { label: "Your Branch", name: "branch", type: "text" },
                { label: "Your Email", name: "email", type: "email" },
              ].map((field, i) => (
                <div key={i} className="space-y-1">
                  <label className="text-xs text-gray-500">{field.label}</label>

                  <input
                    name={field.name}
                    type={field.type}
                    required
                    className="w-full px-3 py-2.5 text-sm text-gray-900 bg-transparent border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition"
                  />
                </div>
              ))}

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs text-gray-500">Your Message</label>

                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2.5 text-sm text-gray-900 bg-transparent border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition resize-none"
                />
              </div>

              {/* Button */}
              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Section: Illustration */}
        <div className="md:w-1/2 bg-[#090909] p-8 md:p-12 flex items-center justify-center relative min-h-[300px] md:min-h-[calc(100vh-120px)] animate-zoom-in">
          <Image
            src="/contact-us.svg"
            alt="Contact Us Illustration"
            width={400}
            height={400}
            className="object-contain animate-float"
            priority
          />
          <div className="absolute top-8 right-8 animate-fade-in delay-700">
            <Image
              src="/contact-us-logo.svg"
              alt="NextSem Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Thank You Popup */}
      {showThankYou && (
        <div className="fixed inset-0 flex items-center justify-center z-50 animate-fade-in">
          <div
            className="absolute inset-0 bg-transparent backdrop-blur-md"
            onClick={closeThankYou}
          ></div>
          <div
            className="relative bg-white rounded-xl p-8 md:p-12 max-w-md w-full mx-4 shadow-2xl animate-slide-down z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-600 mb-8">
                Your message has been sent successfully. We'll get back to you
                soon!
              </p>
              <button
                onClick={closeThankYou}
                className="px-6 py-3 bg-[#090909] text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
