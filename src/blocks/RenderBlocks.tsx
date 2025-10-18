import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { DonationForm } from '@/blocks/DonationForm/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { Gallery } from '@/blocks/Gallery/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { SponsorsPartnersBlock } from '@/blocks/SponsorsPartners/Component'
// import { CourseCardBlock } from '@/blocks/CourseCard/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  donate: DonationForm,
  formBlock: FormBlock,
  gallery: Gallery,
  mediaBlock: MediaBlock,
  sponsorsPartners: SponsorsPartnersBlock,
  // courseCard: CourseCardBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType] as React.ComponentType<any>

            if (Block) {
              return (
                <div className="my-16" key={index}>
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
