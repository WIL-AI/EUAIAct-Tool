import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: boolean
}

export function Card({ padding = true, className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800',
        padding && 'p-6',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
