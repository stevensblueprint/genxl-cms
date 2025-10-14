import React from 'react'

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Founders & Executive Presidents Section */}
      <div className="py-16 px-8">
        <h1 className="text-4xl font-medium text-center mb-12 text-white leading-tight">
          <div className="font-medium">Founders</div>
          <div className="text-3xl my-2">&</div>
          <div className="font-medium">Executive Presidents</div>
        </h1>
        
        <div className="flex justify-center items-center gap-16 max-w-5xl mx-auto">
          {/* Nikita Mullangi */}
          <div className="text-center">
            <div className="relative mb-4">
              <img
                src="/nikita.avif"
                alt="Nikita Mullangi"
                className="w-72 h-72 rounded-full mx-auto object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-white">Nikita Mullangi</h2>
            <p className="text-base font-thin text-gray-300">Executive President</p>
          </div>

          {/* Smera Dhananjaya */}
          <div className="text-center">
            <div className="relative mb-4">
              <img
                src="/smera.avif"
                alt="Smera Dhananjaya"
                className="w-72 h-72 rounded-full mx-auto object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-white">Smera Dhananjaya</h2>
            <p className="text-base font-thin text-gray-300">Co-Founder</p>
          </div>
        </div>
      </div>

      {/* Board of Directors Section */}
      <div className="w-full px-8 py-12 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Board of Directors
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Vidhi Patel */}
          <div className="text-center">
            <div className="relative mb-4">
              <img
                src="/vidhi.avif"
                alt="Vidhi Patel"
                className="w-64 h-64 rounded-full mx-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-normal mb-4 text-white">Vidhi Patel</h3>
            <p className="text-base text-gray-300">Vice President</p>
          </div>

          {/* Clara Innella */}
          <div className="text-center">
            <div className="relative mb-4">
              <img
                src="/clara.avif"
                alt="Clara Innella"
                className="w-64 h-64 rounded-full mx-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-normal mb-4 text-white">Clara Innella</h3>
            <p className="text-base text-gray-300">Director of Outreach</p>
          </div>

          {/* Renee Wu */}
          <div className="text-center">
            <div className="relative mb-4">
              <img
                src="/renee.avif"
                alt="Renee Wu"
                className="w-64 h-64 rounded-full mx-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-normal mb-4 text-white">Renee Wu</h3>
            <p className="text-base text-gray-300">Social Media Manager</p>
          </div>

          {/* Divya Peddagali */}
          <div className="text-center">
            <div className="relative mb-4">
              <img
                src="/divya.avif"
                alt="Divya Peddagali"
                className="w-64 h-64 rounded-full mx-auto object-cover"
              />
            </div>
            <h3 className="text-xl font-normal mb-4 text-white">Divya Peddagali</h3>
            <p className="text-base text-gray-300">Director of Expansions</p>
          </div>
        </div>
      </div>
    </div>
  )
}