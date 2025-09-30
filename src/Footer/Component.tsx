import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

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
          minHeight: '240px' // Minimum height to ensure proper spacing
        }}
      >
        {/* CONTENT WRAPPER: Centers content with max width and padding */}
        <div 
          className="mx-auto px-8 py-8 grid gap-8 items-center" 
          style={{ 
            maxWidth: '1200px', // wider for spacing
            gridTemplateColumns: 'auto 1fr auto', // left fixed, middle flexible, right fixed
            minHeight: '200px'
          }}
        >
          {/* MAIN LAYOUT: Three-column layout (logo, social media, badge) */}

          {/* LEFT SECTION: GenXL Logo and Contact Information */}
          <div className="flex items-center space-x-4" style={{ flex: '0 0 auto', marginTop: '20px' }}>
            {/* LOGO: Circular blue logo with lightbulb icon */}
            <div className="flex-shrink-0">
              <img 
                loading="lazy"
                sizes="110px"
                src="https://static.wixstatic.com/media/e188cb_4d38a439b0044bcf84991b7d85b0abba~mv2.png/v1/fill/w_110,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screen_Shot_2021-08-23_at_6_19_36_PM-removebg-preview%20(1).png"
                alt="GenXL Logo"
                className="w-[110px] h-[92px] object-cover"
                width="110"
                height="92"
              />
            </div>
            {/* COMPANY INFO: GenXL name and email address */}
            <div>
               <h2 
                 className="text-xl font-medium text-white mb-0"
               >
                 genxl
               </h2>
              <p className="text-sm text-white">gnxl.org@gmail.com</p>
            </div>
          </div>

           {/* MIDDLE SECTION: Social Media Links */}
           <div className="justify-self-end flex flex-col items-center justify-center text-center" style={{ marginRight: '50px' }}>
             {/* SOCIAL MEDIA HEADER */}
             <h3 className="text-lg font-medium text-white mb-2">Follow Us On</h3>
             {/* SOCIAL MEDIA ICONS: Smaller size (about half) */}
             <ul className="flex justify-center space-x-2" aria-label="Social Bar">
               <li>
                 <a href="https://www.youtube.com/channel/UCiQ2IDtqf9GMv_x_rxbzAww" target="_blank" aria-label="YouTube">
                   <img 
                     src="https://static.wixstatic.com/media/71ac09a5a92848cc943bf2ca2a09a6d0.png"
                     alt="YouTube"
                     className="w-5 h-5 lg:w-6 lg:h-6 object-contain rounded-full hover:opacity-80 transition-opacity"
                   />
                 </a>
               </li>
               <li>
                 <a href="https://vm.tiktok.com/ZMR2cJaXG/" target="_blank" aria-label="TikTok">
                   <img 
                     src="https://static.wixstatic.com/media/11062b_94e1c6b464c9454a80fc03a2ce369a6d~mv2.png"
                     alt="TikTok"
                     className="w-5 h-5 lg:w-6 lg:h-6 object-contain rounded-full hover:opacity-80 transition-opacity"
                   />
                 </a>
               </li>
               <li>
                 <a href="https://www.instagram.com/genxl_/?hl=en" target="_blank" aria-label="Instagram">
                   <img 
                     src="https://static.wixstatic.com/media/fdcfaba150fc427da298a00cb09d91c1.png"
                     alt="Instagram"
                     className="w-5 h-5 lg:w-6 lg:h-6 object-contain rounded-full hover:opacity-80 transition-opacity"
                   />
                 </a>
               </li>
               <li>
                 <a href="https://www.linkedin.com/in/genxl-9b4173214/" target="_blank" aria-label="LinkedIn">
                   <img 
                     src="https://static.wixstatic.com/media/8efda6398c724b5ea342287bfe3f5ed0.png"
                     alt="LinkedIn"
                     className="w-5 h-5 lg:w-6 lg:h-6 object-contain rounded-full hover:opacity-80 transition-opacity"
                   />
                 </a>
               </li>
               <li>
                 <a href="https://www.facebook.com/profile.php?id=100069090228854" target="_blank" aria-label="Facebook">
                   <img 
                     src="https://static.wixstatic.com/media/ce6ec7c11b174c0581e20f42bb865ce3.png"
                     alt="Facebook"
                     className="w-5 h-5 lg:w-6 lg:h-6 object-contain rounded-full hover:opacity-80 transition-opacity"
                   />
                 </a>
               </li>
               <li>
                 <a href="https://twitter.com/genxl1" target="_blank" aria-label="Twitter">
                   <img 
                     src="https://static.wixstatic.com/media/444f49eac2e348f89128293b0c6432fd.png"
                     alt="Twitter"
                     className="w-5 h-5 lg:w-6 lg:h-6 object-contain rounded-full hover:opacity-80 transition-opacity"
                   />
                 </a>
               </li>
             </ul>
           </div>

          {/* Right Section - GreatNonprofits Badge */}
          <div className="justify-self-end" style={{ marginRight: '50px' }}>
            <img 
              loading="lazy"
              sizes="231px"
              src="https://static.wixstatic.com/media/7b67f9_5e3f7adb8333445fbd18dcae0ccf1dc3~mv2.png/v1/fill/w_231,h_173,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2022-top-rated-awards-badge-hi-res.png"
              alt="2022-top-rated-awards-badge-hi-res.png"
              className="w-[231px] h-[173px] object-cover"
              width="231"
              height="173"
            />
          </div>
        </div>

        {/* Message Us Button - Bottom Right */}
        <div className="absolute bottom-4 right-4">
          {/* ... keep your button code exactly as you wrote it ... */}
        </div>

        {/* Theme Selector */}
        <div className="mt-8 flex justify-center">
          <ThemeSelector />
        </div>
      </div>
    </footer>
  )
}
