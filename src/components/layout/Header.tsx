import type { Profile } from '../../data/cv'
import { Icon } from '../ui/Icon'
import styles from './Header.module.css'

type HeaderProps = {
  profile: Profile
}

export function Header({ profile }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.identity}>
        <h1 className={styles.name}>{profile.name}</h1>
      </div>

      <div className={styles.meta}>
        <p className={styles.tagline}>{profile.tagline}</p>
        <nav className={styles.links} aria-label="Contact">
          <a className={styles.link} href={`mailto:${profile.email}`}>
            <Icon name="mail" />
            <span>{profile.email}</span>
          </a>
          <a
            className={styles.link}
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
          >
            <Icon name="phone" />
            <span>{profile.phone}</span>
          </a>
          <a
            className={styles.link}
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" />
            <span>GitHub</span>
          </a>
          <a
            className={styles.link}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="linkedin" />
            <span>LinkedIn</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
