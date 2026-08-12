import type { Highlight } from '../../data/cv'
import { Section } from '../ui/Section'
import styles from './SelectedWork.module.css'

type SelectedWorkProps = {
  highlights: Highlight[]
}

function isAppleMobile(ua: string) {
  if (/iPhone|iPod/i.test(ua)) return true
  if (/iPad/i.test(ua)) return true
  return /Mac/i.test(ua) && navigator.maxTouchPoints > 1
}

function resolveHref(highlight: Highlight) {
  const { href, iosHref, androidHref } = highlight
  if (!iosHref && !androidHref) return href

  const ua = navigator.userAgent
  if (isAppleMobile(ua) || (/Mac/i.test(ua) && !/Android/i.test(ua))) {
    return iosHref ?? href
  }
  return androidHref ?? href
}

function clusterHighlights(highlights: Highlight[]) {
  const clusters: Highlight[][] = []
  for (const highlight of highlights) {
    const last = clusters.at(-1)
    if (highlight.group && last?.[0]?.group === highlight.group) {
      last.push(highlight)
    } else {
      clusters.push([highlight])
    }
  }
  return clusters
}

function HighlightCard({ highlight }: { highlight: Highlight }) {
  const href = resolveHref(highlight)

  return (
    <li>
      <a
        className={styles.card}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        <p className={styles.metric}>{highlight.metric}</p>
        <p className={styles.metricLabel}>{highlight.metricLabel}</p>
        <h3 className={styles.title}>{highlight.title}</h3>
        <p className={styles.body}>{highlight.body}</p>
      </a>
    </li>
  )
}

export function SelectedWork({ highlights }: SelectedWorkProps) {
  const clusters = clusterHighlights(highlights)

  return (
    <Section id="selected-work" title="Selected work">
      <ul className={styles.grid}>
        {clusters.map((cluster) =>
          cluster.length === 1 ? (
            <HighlightCard key={cluster[0].title} highlight={cluster[0]} />
          ) : (
            <li key={cluster[0].group} className={styles.groupItem}>
              <ul className={styles.group}>
                {cluster.map((highlight) => (
                  <HighlightCard key={highlight.title} highlight={highlight} />
                ))}
              </ul>
            </li>
          ),
        )}
      </ul>
    </Section>
  )
}
