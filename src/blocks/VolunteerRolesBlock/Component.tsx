'use client'

import React from 'react'
import { Media } from '@/components/Media'
import type { Media as MediaDoc } from '@/payload-types'

type Role = {
  id?: string | number
  title?: string | null
  description?: string | null
  image?: MediaDoc | string | null
}

type Props = {
  rolesHeading?: string | null
  roles?: Role[] | null
}

export const VolunteerRolesBlock: React.FC<Props> = ({
  rolesHeading = 'Our Team Roles',
  roles,
}) => {
  const fallbackRoles: Role[] = [
    {
      title: 'Course Designer',
      description: 'Apply to teach STEM courses with us!',
    },
    {
      title: 'Chapter President',
      description: 'Establish and lead your own genxl chapter',
    },
  ]

  const rolesToRender = roles && roles.length > 0 ? roles : fallbackRoles

  return (
    <section className="w-full bg-white">
      <div className="container py-0 md:py-0">
        {rolesHeading && (
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-10">
            {rolesHeading}
          </h2>
        )}

        <div className="grid max-w-4xl mx-auto gap-6 md:grid-cols-2 md:gap-8 justify-items-center">
          {rolesToRender.map((role, index) => (
            <div
              key={role.id ?? index}
              className="w-full max-w-xs rounded-xl overflow-hidden shadow-md bg-[#F5F5F5]"
            >
              {role.image ? (
                typeof role.image === 'object' ? (
                  <Media
                    resource={role.image as MediaDoc}
                    imgClassName="w-full h-64 object-cover"
                  />
                ) : (
                  <img
                    src={role.image as string}
                    className="w-full h-64 object-cover"
                    alt={role.title ?? ''}
                  />
                )
              ) : (
                <div className="w-full h-64 bg-neutral-200" />
              )}

              <div className="bg-black text-white py-3 px-4 text-center">
                {role.title && <h3 className="text-sm md:text-base font-semibold">{role.title}</h3>}
                {role.description && (
                  <p className="mt-1 text-[11px] md:text-xs opacity-80">{role.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VolunteerRolesBlock
