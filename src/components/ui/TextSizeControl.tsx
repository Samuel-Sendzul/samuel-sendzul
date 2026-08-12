import { useEffect, useState } from 'react'
import styles from './TextSizeControl.module.css'

const SCALES = [1, 1.0625, 1.1875]
const DEFAULT_INDEX = 1
const STORAGE_KEY = 'sendzul-text-scale'
const LABELS = ['Small', 'Default', 'Large']

function readStoredIndex(): number {
  try {
    const stored = Number(localStorage.getItem(STORAGE_KEY))
    const index = SCALES.indexOf(stored)
    return index === -1 ? DEFAULT_INDEX : index
  } catch {
    return DEFAULT_INDEX
  }
}

export function TextSizeControl() {
  const [index, setIndex] = useState(() =>
    typeof window === 'undefined' ? DEFAULT_INDEX : readStoredIndex(),
  )

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--text-scale',
      String(SCALES[index]),
    )
  }, [index])

  function step(delta: number) {
    const next = Math.min(SCALES.length - 1, Math.max(0, index + delta))
    setIndex(next)
    try {
      localStorage.setItem(STORAGE_KEY, String(SCALES[next]))
    } catch {
      /* ignore */
    }
  }

  return (
    <div
      className={styles.control}
      role="group"
      aria-label="Text size"
      data-print-hide
    >
      <button
        type="button"
        className={styles.button}
        onClick={() => step(-1)}
        disabled={index === 0}
        aria-label="Decrease text size"
        title="Decrease text size"
      >
        <span className={styles.small} aria-hidden>
          A
        </span>
      </button>
      <span className={styles.steps} aria-hidden>
        {SCALES.map((scale, i) => (
          <span
            key={scale}
            className={styles.step}
            data-active={i <= index || undefined}
          />
        ))}
      </span>
      <span className={styles.status} aria-live="polite">
        {LABELS[index]} text size
      </span>
      <button
        type="button"
        className={styles.button}
        onClick={() => step(1)}
        disabled={index === SCALES.length - 1}
        aria-label="Increase text size"
        title="Increase text size"
      >
        <span className={styles.large} aria-hidden>
          A
        </span>
      </button>
    </div>
  )
}
