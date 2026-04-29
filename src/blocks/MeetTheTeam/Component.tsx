import React from 'react'

import { Media } from '@/components/Media'
import type { Media as MediaDoc } from '@/payload-types'

type TeamMember = {
  id?: string | number
  image?: MediaDoc | string | null
  name?: string | null
  role?: string | null
}

type Props = {
  heading?: string | null
  members?: TeamMember[] | null
}

const fallbackMembers: TeamMember[] = [
  { name: 'Nikita Mullangi', role: 'Executive President' },
  { name: 'Smera Dhananjaya', role: 'Executive President' },
  { name: 'Vidhi Patel', role: 'Vice President' },
  { name: 'Clara Innella', role: 'Director of Outreach' },
  { name: 'Divya Peddagali', role: 'Director of Expansions' },
  { name: 'Renee Wu', role: 'Social Media Manager' },
  { name: 'Maria Tyomkina', role: 'Video Animator' },
  { name: 'Sherrie Shao', role: 'UI/UX Designer' },
  { name: 'Aanjhan Ranganathan', role: 'Senior Advisor' },
  { name: 'Cyndi Reitmeyer', role: 'Senior Advisor' },
]

export const MeetTheTeamBlock: React.FC<Props> = ({ heading = 'Meet the Team', members }) => {
  const membersToRender = members && members.length > 0 ? members : fallbackMembers

  return (
    <section className="w-full bg-white text-black">
      <div className="container mx-auto px-4">
        {heading && (
          <h2 className="mb-10 text-center text-3xl font-bold tracking-tight md:text-4xl">
            {heading}
          </h2>
        )}

        <div className="mx-auto grid max-w-5xl grid-cols-2 justify-items-center gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          {membersToRender.map((member, index) => (
            <article key={member.id ?? `${member.name}-${index}`} className="text-center">
              <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-2xl bg-black md:h-28 md:w-28">
                {member.image && typeof member.image === 'object' ? (
                  <Media
                    resource={member.image}
                    imgClassName="h-full w-full object-cover"
                    className="h-full w-full"
                  />
                ) : null}
              </div>
              {member.name && <h3 className="text-base font-bold leading-tight">{member.name}</h3>}
              {member.role && <p className="mt-2 text-xs text-neutral-700">{member.role}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetTheTeamBlock
