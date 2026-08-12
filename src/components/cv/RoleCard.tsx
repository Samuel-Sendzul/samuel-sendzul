import type { EarlierRole, Role } from '../../data/cv'
import { Section } from '../ui/Section'
import styles from './RoleCard.module.css'

type ExperienceProps = {
  roles: Role[]
  earlier: EarlierRole[]
}

function BulletText({
  text,
  href,
  hrefLabel,
}: {
  text: string
  href?: string
  hrefLabel?: string
}) {
  if (!href) return <>{text}</>
  return (
    <>
      {text}{' '}
      <a href={href} target="_blank" rel="noreferrer">
        {hrefLabel ?? 'Link'}
      </a>
    </>
  )
}

export function Experience({ roles, earlier }: ExperienceProps) {
  return (
    <Section id="experience" title="Experience">
      <ol className={styles.list}>
        {roles.map((role) => (
          <li key={`${role.company}-${role.start}`} className={styles.role}>
            <div className={styles.header}>
              <div className={styles.heading}>
                <h3 className={styles.company}>{role.company}</h3>
                <p className={styles.dates}>
                  {role.start} – {role.end}
                </p>
              </div>
              <p className={styles.meta}>
                {role.title} · {role.location}
              </p>
            </div>
            <ul className={styles.bullets}>
              {role.bullets.map((b) => (
                <li key={b.lead}>
                  <p className={styles.lead}>{b.lead}</p>
                  <p className={styles.detail}>
                    <BulletText
                      text={b.text}
                      href={b.href}
                      hrefLabel={b.hrefLabel}
                    />
                  </p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className={styles.earlier}>
        <h3 className={styles.earlierTitle}>Earlier</h3>
        <ul className={styles.earlierList}>
          {earlier.map((item) => (
            <li key={item.company}>
              <span className={styles.earlierCompany}>{item.company}</span>
              <span className={styles.earlierMeta}>
                {item.title} · {item.period}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
