/* ===================================
   GIFT CERTIFICATE CARD COMPONENT
   =================================== */

import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'
import Card from './Card'

export interface GiftCertificateCardProps {
  icon?: ReactNode
  title: ReactNode
  showOutline?: boolean
  onClick?: () => void
  className?: string
}

export const GiftCertificateCard = forwardRef<HTMLDivElement, GiftCertificateCardProps>(({
  icon,
  title,
  showOutline = false,
  onClick,
  className,
}, ref) => {
  return (
    <Card
      ref={ref}
      variant="default"
      size="fixed-56"
      bgVariant="secondary"
      layout="vertical"
      alignContent="center"
      showOutline={showOutline}
      outlineColor="stroke-accent"
      padding="none"
      shadow="none"
      onClick={onClick}
      className={clsx('flex-col justify-center items-center', className)}
    >
      {icon && (
        <div className="size-16 relative overflow-hidden flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="w-44 h-16 text-center justify-center text-text-primary text-2xl font-semibold font-['Mulish']">
        {title}
      </div>
    </Card>
  )
})

GiftCertificateCard.displayName = 'GiftCertificateCard'

export default GiftCertificateCard

