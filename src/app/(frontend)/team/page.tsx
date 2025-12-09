'use client'

import React, { useState } from 'react'

interface LocationMember {
  name: string
  title: string
  image?: string | null
}

export default function TeamPage() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)

  // Location team members data
  const locationMembers: Record<string, LocationMember[]> = {
    'Munich, Germany': [
      { name: 'Selo Inan', title: 'President and Founder', image: '/SeloInanGenxlGermany.avif' }
    ],
    'Volta, Ghana': [
      { name: 'Annie Mensah', title: 'Executive Director', image: '/AnnieMensahExecutiveDirectorVoltaGhana.avif' },
      { name: 'Godsway Michael Mensah', title: 'Program Manager', image: '/GodswayMichaelMensahProgramManagerVolta,Ghana.avif' },
      { name: 'Worlanyo Dornu', title: 'Administrator', image: '/WorlanyoDornuAdministratorVolta,Ghana.avif' },
      { name: 'Esther Kpormegbe', title: 'Project Coordinator', image: '/EstherKpormegbeProjectCoordinatorVolta,Ghana.avif' },
      { name: 'Denyigba Phillipines', title: 'Project Coordinator', image: '/DenyigbaPhillipinesProjectCoordinatorVolta,Ghana.avif' },
      { name: 'Eugenia Afflu', title: 'Social Media Manager', image: '/EugeniaAffluSocialMediaManagerVolta,Ghana.avif' },
      { name: 'Mavis Aziruah', title: 'Assistant Administrator', image: '/MavisAziruahAssistantAdministratorVolta,Ghana.avif' }
    ],
    'Punjab, India': [
      { name: 'Akul Sharma', title: 'President and Founder', image: '/AkulSharmaPresidentandFounderPunjab,India.avif' },
      { name: 'Rabeek Singh', title: 'Co-President and Co-Founder', image: '/RabeekSinghco-presidentand co-founderPunjab,India.avif' },
      { name: 'Garv Sehgal', title: 'Organizer', image: '/GarvSehgalOrganizerPunjab,India.avif' },
      { name: 'Khushal Davesar', title: 'Member', image: '/KhushalDavesarMember,Punjab,India.avif' }
    ],
    'Agadir, Morocco': [
      { name: 'Hiba Bidar', title: 'President and Founder', image: '/HibaBidarPresidentFounderAgadirMorroco.avif' }
    ],
    'Bacoor, Philippines': [
      { name: 'Shekainah Bag-ao', title: 'President and Founder', image: '/ShekainahBag-aoPresidentandFounderBacoor,Philippines.avif' }
    ],
    'Bangkok, Thailand': [
      { name: "Panalee 'Honey' Oupaijit", title: 'President and Founder', image: "/Panalee'Honey'OupaijitPresidentandFounderBangkokThailand.avif" },
      { name: 'Supavee Oupaijit', title: 'Instructor', image: '/SupaveeOupaijitInstructorBangkokThailand.avif' }
    ],
    'Cairo, Egypt': [
      { name: 'Farida Ouf', title: 'President and Founder', image: '/FaridaOufPresidentandFounderCairoEgypt.avif' }
    ],
    'Chonburi, Thailand': [
      { name: 'Nattawatt Hongthong', title: 'President and Founder', image: '/NattawattHongthongPresidentandFounderChonburiThailand.avif' },
      { name: 'Kritthapath Yaviraj', title: 'Co-President and Co-Founder', image: '/KritthapathYavirajCo-presidentandCo-FounderChonburiThailand.avif' },
      { name: 'Narapat Burapasiriwat', title: 'Organizer', image: '/NarapatBurapasiriwatOrganizerChonburiThailand.avif' }
    ],
    'Coimbatore, India': [
      { name: 'Iniya Venkat', title: 'President and Founder', image: '/IniyaVenkatPresidentandFounderCoimbatoreIndia.avif' }
    ],
    'Karnataka, India': [
      { name: 'Aadya SP', title: 'President and Founder', image: '/aadyaSPpresidentandfounderkarnatakaindia.avif' }
    ],
    'Kathmandu, Nepal': [
      { name: 'Kritika Karakheti', title: 'President and Co-Founder', image: '/KritikaKarakhetipresidentandcofounderkathmandunepal.avif' }
    ],
    'Kowloon, Hong Kong': [
      { name: 'Michael Tong', title: 'President and Founder', image: '/MichaelTongPresidentandFounderHongKong.avif' }
    ],
    'Lagos, Nigeria': [
      { name: 'Halima Bello', title: 'President and Founder', image: '/HalimaBelloPresidentandFounderLagosNigeria.avif' }
    ],
    'Mbabane City, Swaziland': [
      { name: 'Saziwengaye Simelene', title: 'President and Founder', image: '/SaziwengayeSimelenePresidentandFounder-MbabaneCity,Swaziland.avif' },
      { name: 'Sinenhlanhla Hlophe', title: 'Vice President and Instructor', image: '/SinenhlanhlaHlopheVicePresidentandInstructorMbabaneCitySwaziland.avif' }
    ],
    'Ontario, Canada': [
      { name: 'Kushvir Brar', title: 'President and Founder', image: '/KushvirBrarPresidentandFounderOntarioCanada.avif' },
      { name: 'Rivan Jarjes', title: 'Instructor', image: '/RivanJarjesInstructorOntarioCanada.avif' }
    ],
    'Singapore': [
      { name: 'Aarav Malik', title: 'President and Founder', image: '/aaravmalikpresidentandfoundersingapore.avif' }
    ],
    'Uttar Pradesh, India': [
      { name: 'Somsri Srivastava', title: 'President and Founder', image: '/somsrivastavapresidentandfounderuttarpradeshindia.avif' }
    ],
    'Acton-Boxborough, MA': [
      { name: 'Nikita Mullangi', title: 'President and Co-Founder', image: '/nikitamullangipresidentandcofounderacton-boxboroughma.avif' },
      { name: 'Smera Dhananjaya', title: 'President and Co-Founder', image: '/smeradhananjayapresidentandcofounderacton-boxboroughma.avif' },
      { name: 'Vidhi Patel', title: 'Director of Marketing', image: '/vidhipateldirectorofmarketingacton-boxboroughma.avif' },
      { name: 'Shriya Reddy', title: 'Course Developer Instructor', image: '/ShriyaReddyCourseDeveloperInstructorActonBoxboroughMa.avif' },
      { name: 'Aisha Farheen Riaz', title: 'Course Developer Instructor', image: '/AishaFarheenRiazCourseDeveloperInstructorActon-BoxboroughMA.avif' },
      { name: 'Ashwaryalakshmi Saravanan', title: 'Course Developer Instructor', image: '/ashwaryalakshmiSaravananCourseDeveloperInstructorActonBox-boroughma.avif' },
      { name: 'Advait Dasu', title: 'Instructor', image: '/advaithdasuinstructoractonboxboroughma.avif' },
      { name: 'Ayana Bahadur', title: 'Instructor', image: '/ayanabahadurinstructoractonboxboroughma.avif' }
    ],
    'Alpharetta, Georgia': [
      { name: 'Rishi Challa', title: 'President and Founder', image: '/RishiChallaPresidentandFounderAlpharettaGeorgia.avif' }
    ],
    'Ashburn, VA': [
      { name: 'Sahasra Mogulla', title: 'President and Co-Founder', image: '/SahasraMogullaPresidentCofounderAshburnVA.avif' }
    ],
    'Bay Area, CA': [
      { name: 'Akash Sriram', title: 'President and Founder', image: '/AkashSriramPresidentandFounderBayAreaCA.avif' }
    ],
    'Boston, MA': [
      { name: 'Elysse Gonzalez', title: 'President and Founder', image: '/ElysseGonzalezPresidentandFounderBostonMA.avif' }
    ],
    'Brentwood, TN': [
      { name: 'Saisha Kumar', title: 'President and Founder', image: '/BrentwoodTNSaishaKumarPresidentFounder.avif' }
    ],
    'Dover-Sherborn, MA': [
      { name: 'Layla Bailey', title: 'President and Founder', image: '/LaylaBaileyPresidentandFounderDover-SherbonMA.avif' },
      { name: 'Isabella Lefevre', title: 'Vice President and Instructor', image: '/IsabellaLefevreVicePresidentInstructorDover-SherbonMA.avif' }
    ],
    'Downingtown, PA': [
      { name: 'Anshika Jhindal', title: 'President and Founder', image: '/DowningtonPAAnshikaJhindalPresidentandFounder.avif' }
    ],
    'Fresno, TX': [
      { name: 'Agnes Ehiahuruike', title: 'President and Founder', image: '/AgnesEhiahuruikePresidentFounderFresnoTX.avif' },
      { name: 'Victor Pineda-tinoco', title: 'Member', image: '/VictorPineda-tinocoFresnoTX.avif' }
    ],
    'Glenn Dale, MD': [
      { name: 'Sena Williams', title: 'President and Instructor', image: '/SenaWilliamsPresidentandInstructorGlennDaleMD.avif' }
    ],
    'Houston, TX': [
      { name: 'Khushi Patel', title: 'President and Founder', image: '/KhushiPatelPresidentandFounderHoustonTX.avif' },
      { name: 'Rhea Ganguly', title: 'Vice President', image: '/RheaGangulyVicepresidentHoustonTX.avif' }
    ],
    'Jersey City, NJ': [
      { name: 'Fadila El Mahdaoui', title: 'President and Founder', image: '/FadilaElMahdaouiPresidentandFounderJerseyCityNJ.avif' }
    ],
    'Middletown, NJ': [
      { name: 'Meenakshi Viswanandha', title: 'President and Founder', image: '/MeenakshiViswanandhaPresidentandFounderMiddletownNJ.avif' }
    ],
    'Mount Clemens, MI': [
      { name: 'Alexis Page', title: 'President and Founder', image: '/AlexisPagePresidentandFounderMountClemonsMI.avif' }
    ],
    'Nashua, NH': [
      { name: 'Vaishnavi Pullela', title: 'President and Founder', image: '/VaishnaviPullelaPresidentandFounderNashuaNH.avif' }
    ],
    'New York City, NY': [
      { name: 'Sofia Millerman', title: 'President and Founder', image: '/SofiaMillermanPresidentandFounderNewyorkCityNY.avif' }
    ],
    'Ontario, CA': [
      { name: 'Tshiamo Monye', title: 'Member', image: '/OntarioCATshiamoMonye.avif' }
    ],
    'Reynoldsburg, OH': [
      { name: 'Aminata Sow', title: 'President and Founder', image: '/AminataSowPresidentFounderReynoldsburgOH.avif' }
    ],
    'Saginaw, MI': [
      { name: 'Kaitlyn Mann', title: 'President and Founder', image: '/SaginawMichiganKaitlynMannPresidentandFounder.avif' }
    ],
    'Woodbridge, NJ': [
      { name: 'Vidhi Patel', title: 'President and Co-Founder', image: '/VidhiPatelPresidentCofounderWoodbridgeNJ.avif' },
      { name: 'Shalini Ram', title: 'Vice President', image: '/ShaliniRamVicePresidentWoodbridgeNJ.avif' },
      { name: 'Rebecca Xiong', title: 'Vice President', image: '/RebeccaXiongVicePresidentWoodbridgeNJ.avif' }
    ]
  }

  const teamMembers = [
    { name: 'Nikita Mullangi', title: 'Executive President', image: '/nikita.avif' },
    { name: 'Smera Dhananjaya', title: 'Executive President', image: '/smera.avif' },
    { name: 'Vidhi Patel', title: 'Vice President', image: '/vidhi.avif' },
    { name: 'Clara Innella', title: 'Director of Outreach', image: '/clara.avif' },
    { name: 'Divya Peddagali', title: 'Director of Expansions', image: '/divya.avif' },
    { name: 'Renee Wu', title: 'Social Media Manager', image: '/renee.avif' },
    { name: 'Maria Tyomkina', title: 'Video Animator', image: '/MariaTyomkina.avif' },
    { name: 'Sherrie Shao', title: 'UI/UX Designer', image: '/SherrieShao.avif' },
    { name: 'Aanjhan Ranganathan', title: 'Senior Advisor', image: '/Aanjhan Ranganathan.avif' },
    { name: 'Cyndi Reitmeyer', title: 'Senior Advisor', image: '/CyndiReitmeyer.avif' },
  ]

  const nationalChapters = [
    ['Acton-Boxborough, MA', 'Alpharetta, Georgia', 'Ashburn, VA', 'Bay Area, CA', 'Boston, MA'],
    ['Brentwood, TN', 'Dover-Sherborn, MA', 'Downingtown, PA', 'Fresno, TX', 'Glenn Dale, MD'],
    ['Houston, TX', 'Jersey City, NJ', 'Middletown, NJ', 'Mount Clemens, MI', 'Nashua, NH'],
    ['New York City, NY', 'Ontario, CA', 'Reynoldsburg, OH', 'Saginaw, MI', 'Woodbridge, NJ'],
  ]

  const internationalChapters = [
    ['Agadir, Morocco', 'Bacoor, Philippines', 'Bangkok, Thailand', 'Cairo, Egypt', 'Chonburi, Thailand', 'Coimbatore, India'],
    ['Coimbatore, India', 'Karnataka, India', 'Kathmandu, Nepal', 'Kowloon, Hong Kong', 'Lagos, Nigeria', 'Mbabane City, Swaziland'],
    ['Munich, Germany', 'Ontario, Canada', 'Punjab, India', 'Singapore', 'Uttar Pradesh, India', 'Volta, Ghana'],
  ]

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location)
  }

  const closeModal = () => {
    setSelectedLocation(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Meet the Team Section */}
      <div className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-black">
            Meet the Team
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-3">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square mx-auto object-cover"
                      style={{ backgroundColor: '#000000' }}
                    />
                  ) : (
                    <div className="w-full aspect-square mx-auto" style={{ backgroundColor: '#000000' }}>
                    </div>
                  )}
                </div>
                <h2 className="text-sm md:text-base font-bold mb-1 text-black leading-tight">{member.name}</h2>
                <p className="text-xs md:text-sm text-black leading-tight">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* National Chapters Section */}
      <div className="w-full px-4 md:px-8 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 text-black">
            National Chapters
          </h2>
          <p className="text-sm md:text-base text-center mb-8 md:mb-12 text-black">
            Past and Present
          </p>
          
          <div className="rounded-lg p-6 md:p-8" style={{ backgroundColor: '#f0f0f0' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {nationalChapters.map((column, colIndex) => (
                <div 
                  key={colIndex} 
                  className="space-y-1.5"
                  style={colIndex < nationalChapters.length - 1 ? { borderRight: '1px solid #d1d5db' } : {}}
                >
                  {column.map((location, locIndex) => (
                    <p 
                      key={locIndex} 
                      onClick={() => handleLocationClick(location)}
                      className="text-sm md:text-base text-black text-left underline hover:text-blue-600 cursor-pointer transition-colors"
                    >
                      {location}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* International Chapters Section */}
      <div className="w-full px-4 md:px-8 py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 text-black">
            International Chapters
          </h2>
          <p className="text-sm md:text-base text-center mb-8 md:mb-12 text-black">
            Past and Present
          </p>
          
          <div className="rounded-lg p-6 md:p-8" style={{ backgroundColor: '#f0f0f0' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto px-8 md:px-16">
              {internationalChapters.map((column, colIndex) => (
                <div 
                  key={colIndex} 
                  className="space-y-1.5"
                  style={colIndex < internationalChapters.length - 1 ? { borderRight: '1px solid #d1d5db' } : {}}
                >
                  {column.map((location, locIndex) => (
                    <p 
                      key={locIndex} 
                      onClick={() => handleLocationClick(location)}
                      className="text-sm md:text-base text-black text-left underline hover:text-blue-600 cursor-pointer transition-colors"
                    >
                      {location}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Location Modal */}
      {selectedLocation && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative p-6 border-b border-gray-300">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                Meet {selectedLocation}
              </h2>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            {/* Modal Content - Team Member Cards */}
            <div className="p-6">
              {(() => {
                const members = locationMembers[selectedLocation] || []
                // If no data yet, show 5 placeholders
                const displayMembers = members.length > 0 ? members : [...Array(5)].map(() => ({ name: 'Name', title: 'Title', image: null }))
                
                return (
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {displayMembers.map((member, index) => (
                      <div key={index} className="text-center">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full aspect-square rounded-lg mb-3 object-cover mx-auto"
                          />
                        ) : (
                          <div className="w-full aspect-square rounded-lg mb-3" style={{ backgroundColor: '#e5e7eb' }}>
                          </div>
                        )}
                        <p className="font-bold text-black mb-1">{member.title}</p>
                        <p className="text-black">{member.name}</p>
                      </div>
                    ))}
                  </div>
                )
              })()}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
