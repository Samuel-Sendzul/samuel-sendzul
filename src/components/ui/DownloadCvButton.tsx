import { useState } from 'react'
import { cv } from '../../data/cv'
import styles from './DownloadCvButton.module.css'

type DownloadCvButtonProps = {
  className?: string
}

export function DownloadCvButton({ className }: DownloadCvButtonProps) {
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleClick() {
    setPending(true)
    setError(null)
    try {
      const [{ pdf }, { CvDocument }] = await Promise.all([
        import('@react-pdf/renderer'),
        import('../../pdf/CvDocument.tsx'),
      ])
      const blob = await pdf(<CvDocument data={cv} />).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Samuel-Sendzul-CV.pdf'
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      setError('Could not generate PDF. Try again.')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(' ')}>
      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
        disabled={pending}
        data-print-hide
      >
        {pending ? 'Generating…' : 'Download CV'}
      </button>
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  )
}
