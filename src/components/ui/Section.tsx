import type { ReactNode } from 'react'
import styles from './Section.module.css'

type SectionProps = {
  id?: string
  title: string
  titleClassName?: string
  children: ReactNode
}

export function Section({ id, title, titleClassName, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <h2
        className={[styles.title, titleClassName].filter(Boolean).join(' ')}
      >
        {title}
      </h2>
      {children}
    </section>
  )
}
