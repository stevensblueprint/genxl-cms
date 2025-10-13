'use client'

import React from "react";

const formConfig = {
  title: 'Contact Us',
  description: 'We would love to hear from you!',
  fields: {
    firstName: { label: 'First Name', placeholder: 'Enter your first name', required: true },
    lastName: { label: 'Last Name', placeholder: 'Enter your last name', required: false },
    email: { label: 'Email Address', placeholder: 'Enter your email address', required: true },
    message: { label: 'Message', placeholder: 'Your message here...', required: true },
  },
  submitButton: 'Submit',
};


export function ContactFormBlock() {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{formConfig.title}</h1>
          <p className="text-gray-600">{formConfig.description}</p>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {formConfig.fields.firstName.label}{" "}
                {formConfig.fields.firstName.required && (
                  <span className="text-red-500">*</span>
                )}
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder={formConfig.fields.firstName.placeholder}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                {formConfig.fields.lastName.label}
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder={formConfig.fields.lastName.placeholder}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {formConfig.fields.email.label}{" "}
              {formConfig.fields.email.required && (
                <span className="text-red-500">*</span>
              )}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={formConfig.fields.email.placeholder}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              {formConfig.fields.message.label}{" "}
              {formConfig.fields.message.required && (
                <span className="text-red-500">*</span>
              )}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={formConfig.fields.message.placeholder}
              rows={6}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="button"
              className="px-12 py-3 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-medium rounded-full transition duration-200 shadow-sm hover:shadow-md"
            >
              {formConfig.submitButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}






