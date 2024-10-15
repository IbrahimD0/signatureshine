"use client";
import React, { useState } from "react";


const services = [
  { name: "Interior Detailing" },
  { name: "Exterior Detailing" },
  { name: "Ceramic Coating" },
  { name: "Paint Correction" },
];

const addOns = [
  { name: "Iron Removal", price: 40 },
  { name: "Engine Cleaning", price: 50 },
  { name: "Tire/Rim Cleaning", price: 35 },
  { name: "Headlight Restoration", price: 50 },
  { name: "Clay Bar Treatment", price: 75 },
  { name: "Trim Restoration", price: 45 },
];

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicle: "",
    location: "",
    addOns: [] as string[],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      addOns: checked
        ? [...prevState.addOns, value]
        : prevState.addOns.filter((addon) => addon !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/send/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Booking request submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          vehicle: "",
          location: "",
          addOns: [],
        });
      } else {
        setSubmitMessage("Failed to submit booking request. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-5xl font-bold text-center my-12 text-blue-200 font-serif">
          Book Today
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-300 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-300 font-semibold mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="service"
              className="block text-gray-300 font-semibold mb-2"
            >
              Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            >
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="vehicle"
              className="block text-gray-300 font-semibold mb-2"
            >
              Vehicle
            </label>
            <input
              type="text"
              id="vehicle"
              name="vehicle"
              value={formData.vehicle}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
              placeholder="Make, Model, Year"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="location"
              className="block text-gray-300 font-semibold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-semibold mb-2">
              Add-Ons
            </label>
            <div className="grid grid-cols-2 gap-2">
              {addOns.map((addon, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="addOns"
                    value={addon.name}
                    checked={formData.addOns.includes(addon.name)}
                    onChange={handleAddOnChange}
                    className="form-checkbox text-blue-500"
                  />
                  <span className="text-gray-300">
                    {addon.name} (${addon.price})
                  </span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 disabled:opacity-50"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Book Now"}
          </button>

          {submitMessage && (
            <p
              className={`mt-4 text-center ${
                submitMessage.includes("success")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default BookingForm;
