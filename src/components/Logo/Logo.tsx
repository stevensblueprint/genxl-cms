import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <div className={clsx('flex items-center space-x-2', className)}>
      {/* eslint-disable @next/next/no-img-element */}
      <img
        alt="GenXL Logo"
        width={40}
        height={32}
        loading={loading}
        fetchPriority={priority}
        decoding="async"
        className="w-10 h-8"
        src="/genxl-logo.png"
      />
      <span className="text-xl font-normal text-current">genxl</span>
    </div>
  )
}
