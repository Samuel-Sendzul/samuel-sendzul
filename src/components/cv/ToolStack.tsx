import type { ToolGroup } from '../../data/cv'
import { Section } from '../ui/Section'
import styles from './ToolStack.module.css'

type ToolStackProps = {
  groups: ToolGroup[]
}

function faviconSrc(href: string) {
  return `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(href)}`
}

export function ToolStack({ groups }: ToolStackProps) {
  return (
    <Section id="tools" title="Tool stack">
      <dl className={styles.list}>
        {groups.map((group) => (
          <div key={group.label} className={styles.group}>
            <dt className={styles.label}>{group.label}</dt>
            <dd className={styles.items}>
              {group.items.map((item) => (
                <a
                  key={item.name}
                  className={styles.item}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className={styles.icon}
                    src={faviconSrc(item.href)}
                    alt=""
                    width={16}
                    height={16}
                    onError={(event) => {
                      event.currentTarget.hidden = true
                    }}
                  />
                  {item.name}
                </a>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
