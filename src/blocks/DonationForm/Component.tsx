import { DonationFormBlock } from '@/payload-types'
import { RenderBlocks } from '../RenderBlocks'
import './DonationForm.css'

export const DonationForm: React.FC<DonationFormBlock> = ({ heading, description, form }) => {
  return (
    <div className="donation-form-block w-full flex flex-col items-center">
      {heading && (
        <h2 className="!text-4xl !text-gray-600 !pt-10 !text-center !font-bold !mb-4">{heading}</h2>
      )}
      {description && <p className="mb-6 text-gray-600 text-center text-xl">{description}</p>}
      {form && form.length > 0 && (
        <div className="donation-form-wrapper w-full !text-black">
          <RenderBlocks blocks={form} />
        </div>
      )}
    </div>
  )
}
