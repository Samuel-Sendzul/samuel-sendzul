import type { Profile } from '../../data/cv'
import { DownloadCvButton } from '../ui/DownloadCvButton'
import { Icon } from '../ui/Icon'
import styles from './Footer.module.css'

type FooterProps = {
  profile: Profile
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <p className={styles.contact}>
        <a className={styles.link} href={`mailto:${profile.email}`}>
          <Icon name="mail" />
          <span>{profile.email}</span>
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
        <a
          className={styles.link}
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" />
          <span>GitHub</span>
        </a>
      </p>
      <DownloadCvButton />
    </footer>
  )
}
