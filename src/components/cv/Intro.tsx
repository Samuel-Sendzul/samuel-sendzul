import {
  introToPlainText,
  type IntroParagraph,
  type IntroPart,
} from '../../data/cv'
import styles from './Intro.module.css'

type IntroProps = {
  paragraphs: IntroParagraph[]
}

function IntroPartView({ part }: { part: IntroPart }) {
  if (typeof part === 'string') return <>{part}</>
  return (
    <a href={part.href} target="_blank" rel="noreferrer">
      {part.text}
    </a>
  )
}

export function Intro({ paragraphs }: IntroProps) {
  return (
    <div className={styles.intro}>
      {paragraphs.map((parts) => (
        <p key={introToPlainText(parts)}>
          {parts.map((part, i) => (
            <IntroPartView
              key={typeof part === 'string' ? `${i}-${part.slice(0, 24)}` : part.href}
              part={part}
            />
          ))}
        </p>
      ))}
    </div>
  )
}
