import { forwardRef } from 'react'
import clsx from 'clsx'

interface SectionProps {
  id: string
  className?: string
  children: React.ReactNode
}

const Section = forwardRef<HTMLDivElement, SectionProps>(({ children, id, className }, ref) => {
  return (
    <section id={id} ref={ref} className={clsx('min-h-[101vh] overflow-x-hidden', className)}>
      {children}
    </section>
  )
})

Section.displayName = 'Section'

export default Section
