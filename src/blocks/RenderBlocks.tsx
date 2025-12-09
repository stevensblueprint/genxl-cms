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
import { CourseCardBlock } from '@/blocks/CourseCard/Component'
import { CoursesBlock } from '@/blocks/Courses/Component'
import { AboutBlock } from '@/blocks/About/Component'
import { CarouselBlock } from '@/blocks/Carousel/Component'
import { NumbersBlock } from '@/blocks/NumbersBlock/Component'
import { NumbersBlockMobile } from '@/blocks/NumbersBlockMobile/Component'
import { MeatballMenuBlock } from '@/blocks/MeatballMenu/Component'
import { Map } from '@/blocks/Map/Component'
import { PopUpModalBlock } from '@/blocks/PopUpModalBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  donate: DonationForm,
  formBlock: FormBlock,
  gallery: Gallery,
  mediaBlock: MediaBlock,
  sponsorsPartners: SponsorsPartnersBlock,
  courseCard: CourseCardBlock,
  courses: CoursesBlock,
  about: AboutBlock,
  carousel: CarouselBlock,
  numbersBlock: NumbersBlock,
  numbersBlockMobile: NumbersBlockMobile,
  meatballMenu: MeatballMenuBlock,
  map: Map,
  popupModalBlock: PopUpModalBlock,
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
              const isLastBlock = index === blocks.length - 1
              const isMeatballMenu = blockType === 'meatballMenu'
              // Remove bottom margin for last meatballMenu block to eliminate whitespace before footer
              const wrapperClass = isLastBlock && isMeatballMenu ? 'mt-16 mb-0' : 'my-16'

              return (
                <div className={wrapperClass} key={index}>
                  <Block {...block} disableInnerContainer isLast={isLastBlock && isMeatballMenu} />
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
