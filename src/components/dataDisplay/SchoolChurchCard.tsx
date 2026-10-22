/* ===================================
   SCHOOL / CHURCH CARD COMPONENT
   =================================== */

import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'
import Card from './Card'

export interface SchoolChurchCardProps {
  children: ReactNode
  bgVariant?: 'white' | 'cards-01'
  showOutline?: boolean
  onClick?: () => void
  className?: string
}

export const SchoolChurchCard = forwardRef<HTMLDivElement, SchoolChurchCardProps>(({
  children,
  bgVariant = 'white',
  showOutline = true,
  onClick,
  className,
}, ref) => {
  return (
    <Card
      ref={ref}
      variant="default"
      size="fixed-32"
      bgVariant={bgVariant}
      rounded="10px"
      showOutline={showOutline}
      outlineColor="cta-accent"
      padding="md"
      shadow="none"
      layout="vertical"
      alignContent="center"
      onClick={onClick}
      className={clsx('flex justify-center items-center gap-2.5 overflow-hidden', className)}
    >
      {children}
    </Card>
  )
})

SchoolChurchCard.displayName = 'SchoolChurchCard'

export default SchoolChurchCard

