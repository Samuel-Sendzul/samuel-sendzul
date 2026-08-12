import type { Degree } from '../../data/cv'
import { Section } from '../ui/Section'
import styles from './Education.module.css'

type EducationProps = {
  degrees: Degree[]
  awards: string
}

export function Education({ degrees, awards }: EducationProps) {
  return (
    <Section id="education" title="Education">
      <ul className={styles.list}>
        {degrees.map((d) => (
          <li key={d.credential} className={styles.item}>
            <p className={styles.credential}>{d.credential}</p>
            <p className={styles.meta}>
              {d.school} · {d.period}
            </p>
          </li>
        ))}
      </ul>
      <p className={styles.awards}>{awards}</p>
    </Section>
  )
}
