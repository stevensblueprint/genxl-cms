'use client'

import type { FC, FormEvent } from 'react'
import { useState } from 'react'
import type { DonationFormBlock } from '@/payload-types'

type MediaField =
  | {
      url?: string | null
    }
  | string
  | null
  | undefined

type DonationAmount = {
  amount?: number | null
}

type DonationFormProps = DonationFormBlock & {
  backgroundImage?: MediaField
  donationAmounts?: DonationAmount[] | null
}

export const DonationForm: FC<DonationFormProps> = ({
  heading,
  description,
  backgroundImage,
  donationAmounts,
}) => {
  const [frequency, setFrequency] = useState<'one-time' | 'monthly'>('monthly')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')

  const amounts =
    donationAmounts
      ?.map((item) => item.amount)
      .filter((amount): amount is number => typeof amount === 'number') || []

  const finalAmounts = amounts.length > 0 ? amounts : [100, 50, 25, 10]
  const activeAmount = selectedAmount || finalAmounts[0]

  let backgroundImageUrl = ''

  if (typeof backgroundImage === 'string') {
    backgroundImageUrl = backgroundImage
  } else if (backgroundImage && typeof backgroundImage === 'object' && backgroundImage.url) {
    backgroundImageUrl = backgroundImage.url
  }

  const displayHeading = heading || 'Support genxl'
  const displayDescription = description || 'Make a donation, make a difference'

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const donationAmount = customAmount || activeAmount

    console.log({
      frequency,
      donationAmount,
    })
  }

  return (
    <section className="relative min-h-[650px] w-full overflow-hidden bg-gray-900">
      {backgroundImageUrl && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
          }}
        />
      )}

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto flex min-h-[650px] w-full max-w-[1500px] flex-col items-center justify-center gap-12 px-6 py-16 lg:flex-row lg:justify-between lg:px-14 xl:px-20">
        <div className="w-full max-w-[600px] text-center text-white lg:text-left">
          <h2 className="mb-4 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            {displayHeading}
          </h2>

          <p className="text-xl font-medium text-white/90 md:text-2xl">{displayDescription}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[540px] rounded-xl border-[3px] border-[#1497d4] bg-white p-6 shadow-2xl md:p-7"
        >
          <div className="mb-10 flex rounded-full bg-[#d9d9d9] p-1">
            <button
              type="button"
              onClick={() => setFrequency('one-time')}
              className={`h-14 flex-1 rounded-full text-lg font-bold transition ${
                frequency === 'one-time' ? 'bg-white text-black shadow-sm' : 'text-gray-500'
              }`}
            >
              One-Time
            </button>

            <button
              type="button"
              onClick={() => setFrequency('monthly')}
              className={`h-14 flex-1 rounded-full text-lg font-bold transition ${
                frequency === 'monthly' ? 'bg-white text-black shadow-sm' : 'text-gray-500'
              }`}
            >
              Monthly
            </button>
          </div>

          <div className="mb-6 grid grid-cols-2 gap-5">
            {finalAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => {
                  setSelectedAmount(amount)
                  setCustomAmount('')
                }}
                className={`flex h-[115px] items-center justify-center rounded-lg bg-[#4b5faa] text-white transition hover:scale-[1.02] ${
                  activeAmount === amount && customAmount === '' ? 'ring-4 ring-[#1497d4]/40' : ''
                }`}
              >
                <span className="mr-1 text-2xl font-light">$</span>
                <span className="text-5xl font-light">{amount}</span>
              </button>
            ))}
          </div>

          <input
            type="number"
            min="1"
            value={customAmount}
            onChange={(event) => setCustomAmount(event.target.value)}
            placeholder="$ Other amount"
            className="mb-7 h-14 w-full rounded-2xl border-2 border-gray-200 px-5 text-xl text-gray-700 outline-none transition placeholder:text-gray-300 focus:border-[#1497d4]"
          />

          <button
            type="submit"
            className="h-16 w-full rounded-xl bg-[#4b5faa] text-xl font-bold text-white transition hover:bg-[#40529b]"
          >
            Donate Now
          </button>
        </form>
      </div>
    </section>
  )
}
