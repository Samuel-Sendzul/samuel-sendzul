import styles from './Intro.module.css'

type IntroProps = {
  paragraphs: string[]
}

export function Intro({ paragraphs }: IntroProps) {
  return (
    <div className={styles.intro}>
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  )
}
