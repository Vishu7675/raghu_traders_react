"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-100 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Raghu Rice Traders
        </h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Supplying high-quality rice grains across regions with trust,
          tradition, and taste.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
          View Products
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600">
          With over 20 years in the rice trading business, we are committed to
          delivering the finest rice varieties sourced directly from farms. Our
          family-run business ensures quality, integrity, and satisfaction in
          every grain.
        </p>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Our Rice Varieties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Basmati Rice", image: "https://via.placeholder.com/150" },
            { name: "Sona Masoori", image: "https://via.placeholder.com/150" },
            { name: "Brown Rice", image: "https://via.placeholder.com/150" },
          ].map((product) => (
            <div
              key={product.name}
              className="bg-white p-4 rounded-xl shadow-md text-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-500 mt-2">
                Premium quality at best price
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Whether you're a retailer or wholesaler, contact us today to discuss
          pricing and bulk orders.
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="bg-white text-green-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        &copy; {new Date().getFullYear()} Raghu Traders. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
