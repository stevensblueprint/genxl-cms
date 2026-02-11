'use client'

import React from 'react'

type Props = {
  contactHeading?: string | null
  contactSubheading?: string | null
}

export const ContactFormBlock: React.FC<Props> = ({
  contactHeading = 'Contact Us',
  contactSubheading = 'Have a question, comment, or concern? Tell us about it here!',
}) => {
  return (
    <section className="w-full bg-white">
      <div className="container py-0 md:py-0">
        <div className="max-w-2xl mx-auto">
          {contactHeading && (
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
              {contactHeading}
            </h2>
          )}

          {contactSubheading && (
            <p className="mt-2 text-center text-sm md:text-base text-muted-foreground">
              {contactSubheading}
            </p>
          )}

          <form className="mt-8 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full rounded-xl bg-[#E6E6E6] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F8DC48]"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full rounded-xl bg-[#E6E6E6] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F8DC48]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                className="w-full rounded-xl bg-[#E6E6E6] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F8DC48]"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-medium mb-1">Your Message</label>
              <textarea
                name="message"
                rows={5}
                className="w-full rounded-xl bg-[#E6E6E6] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F8DC48] resize-none"
              />
            </div>

            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center rounded-full px-10 py-2 text-sm md:text-base font-semibold tracking-wide bg-[#F8DC48] text-black hover:bg-[#e5c843] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8DC48]"
              >
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactFormBlock
