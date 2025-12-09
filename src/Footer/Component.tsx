import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'

export async function Footer() {
  // Get footer data from Payload CMS global settings
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  // Extract navigation items from footer data (currently not used but available)
  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto" id="SITE_FOOTER">
      {/* YELLOW STRIP: Thin yellow horizontal line at the very top of footer */}
      <div className="h-1 bg-yellow-400"></div>
      
      {/* MAIN FOOTER CONTAINER: Dark background container for all footer content */}
      <div 
        className="text-white relative" 
        style={{ 
          backgroundColor: 'rgb(20, 20, 22)', // Dark gray background
        }}
      >
        {/* CONTENT WRAPPER: Centers content with max width and padding */}
        <div 
          className="mx-auto px-8 py-7" 
          style={{ 
            maxWidth: '1200px',
          }}
        >
          {/* MAIN LAYOUT: Four-column layout (responsive: stacks on mobile) */}
          <div 
            className="grid gap-7 items-start grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          >
            {/* COLUMN 1: Contact Us */}
            <div className="flex flex-col">
              <h3 className="text-base font-medium mb-2.5" style={{ color: '#FFD700' }}>Contact Us</h3>
              <p className="text-white text-sm mb-2">genxl</p>
              <p className="text-white text-sm mb-3">gnxl.org@gmail.com</p>
              <Link 
                href="/contact" 
                className="text-white text-sm underline mb-3 hover:opacity-80 transition-opacity"
              >
                Send us a message
              </Link>
              {/* SOCIAL MEDIA ICONS */}
              <ul className="flex flex-row flex-nowrap gap-3 mt-2" aria-label="Social Media Links" style={{ flexWrap: 'nowrap' }}>
                <li style={{ flexShrink: 0 }}>
                  <a href="https://www.facebook.com/profile.php?id=100069090228854" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <img 
                      src="https://static.wixstatic.com/media/ce6ec7c11b174c0581e20f42bb865ce3.png"
                      alt="Facebook"
                      className="w-5 h-5 object-contain rounded-full hover:opacity-80 transition-opacity"
                      style={{ display: 'block' }}
                    />
                  </a>
                </li>
                <li style={{ flexShrink: 0 }}>
                  <a href="https://vm.tiktok.com/ZMR2cJaXG/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <img 
                      src="https://static.wixstatic.com/media/11062b_94e1c6b464c9454a80fc03a2ce369a6d~mv2.png"
                      alt="TikTok"
                      className="w-5 h-5 object-contain rounded-full hover:opacity-80 transition-opacity"
                      style={{ display: 'block' }}
                    />
                  </a>
                </li>
                <li style={{ flexShrink: 0 }}>
                  <a href="https://www.youtube.com/channel/UCiQ2IDtqf9GMv_x_rxbzAww" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <img 
                      src="https://static.wixstatic.com/media/71ac09a5a92848cc943bf2ca2a09a6d0.png"
                      alt="YouTube"
                      className="w-5 h-5 object-contain rounded-full hover:opacity-80 transition-opacity"
                      style={{ display: 'block' }}
                    />
                  </a>
                </li>
                <li style={{ flexShrink: 0 }}>
                  <a href="https://twitter.com/genxl1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <img 
                      src="https://static.wixstatic.com/media/444f49eac2e348f89128293b0c6432fd.png"
                      alt="Twitter"
                      className="w-5 h-5 object-contain rounded-full hover:opacity-80 transition-opacity"
                      style={{ display: 'block' }}
                    />
                  </a>
                </li>
                <li style={{ flexShrink: 0 }}>
                  <a href="https://www.linkedin.com/in/genxl-9b4173214/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <img 
                      src="https://static.wixstatic.com/media/8efda6398c724b5ea342287bfe3f5ed0.png"
                      alt="LinkedIn"
                      className="w-5 h-5 object-contain rounded-full hover:opacity-80 transition-opacity"
                      style={{ display: 'block' }}
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* COLUMN 2: Get To Know Us */}
            <div className="flex flex-col">
              <h3 className="text-base font-medium mb-2.5" style={{ color: '#FFD700' }}>Get To Know Us</h3>
              <Link 
                href="/about" 
                className="text-white text-sm underline mb-3 hover:opacity-80 transition-opacity"
              >
                About Us
              </Link>
              <Link 
                href="/courses" 
                className="text-white text-sm underline mb-3 hover:opacity-80 transition-opacity"
              >
                Courses
              </Link>
              <Link 
                href="/team" 
                className="text-white text-sm underline hover:opacity-80 transition-opacity"
              >
                Team
              </Link>
            </div>

            {/* COLUMN 3: Support Our Mission */}
            <div className="flex flex-col">
              <h3 className="text-base font-medium mb-2.5" style={{ color: '#FFD700' }}>Support Our Mission</h3>
              <Link 
                href="/donate" 
                className="text-white text-sm underline mb-3 hover:opacity-80 transition-opacity"
              >
                Donate
              </Link>
              <Link 
                href="/volunteer" 
                className="text-white text-sm underline hover:opacity-80 transition-opacity"
              >
                Volunteer
              </Link>
            </div>

            {/* COLUMN 4: GreatNonprofits Badge */}
            <div className="flex justify-start lg:justify-end items-center">
              <img 
                loading="lazy"
                sizes="180px"
                src="https://static.wixstatic.com/media/7b67f9_5e3f7adb8333445fbd18dcae0ccf1dc3~mv2.png/v1/fill/w_231,h_173,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2022-top-rated-awards-badge-hi-res.png"
                alt="2022 Top Rated Nonprofit Badge"
                className="w-[180px] h-auto object-contain"
                width="180"
                height="135"
              />
            </div>
          </div>
        </div>

        {/* Theme Selector */}
        <div className="mt-3 flex justify-center pb-3">
          <ThemeSelector />
        </div>
      </div>
    </footer>
  )
}
