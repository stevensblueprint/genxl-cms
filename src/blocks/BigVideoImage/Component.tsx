import React from 'react'
import { Media } from '@/components/Media'
import type { BigVideoImageBlock as BigVideoImageBlockProps } from '@/payload-types'

export const BigVideoImageBlock: React.FC<BigVideoImageBlockProps> = (props) => {
  const { media } = props

  if (!media) {
    return null
  }

  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 -my-16">
      <Media
        resource={media}
        className="w-full"
        imgClassName="w-full h-auto object-cover"
        videoClassName="w-full h-auto"
      />
    </div>
  )
}

