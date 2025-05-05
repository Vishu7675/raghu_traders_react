"use client";
import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can integrate an API call here to send data to the server
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:flex">
        {/* Left Contact Info */}
        <div className="w-full md:w-1/2 bg-green-600 text-white p-8">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6">
            We’d love to hear from you. Whether it’s a business inquiry or a
            general question — reach out!
          </p>

          <div className="mb-4">
            <p className="font-semibold">📍 Address:</p>
            <p>123 Rice Street, Hyderabad, India</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">📞 Phone:</p>
            <p>+91 98765 43210</p>
          </div>
          <div>
            <p className="font-semibold">✉️ Email:</p>
            <p>info@raghunathrice.com</p>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="w-full md:w-1/2 p-8">
          <h3 className="text-2xl font-semibold mb-6 text-green-700">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-green-500 outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
