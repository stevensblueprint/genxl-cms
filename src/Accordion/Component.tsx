import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Accordion as AccordionType } from '@/payload-types'
import { AccordionClient } from './AccordionClient'

export default async function Accordion() {
  const accordionData: AccordionType = await getCachedGlobal('accordion', 1)()

  return <AccordionClient accordionData={accordionData} />
}
