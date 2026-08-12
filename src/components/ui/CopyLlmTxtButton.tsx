import { useState } from 'react'
import { llmTxt } from '../../data/llmTxt'
import styles from './CopyLlmTxtButton.module.css'

type CopyLlmTxtButtonProps = {
  className?: string
}

export function CopyLlmTxtButton({ className }: CopyLlmTxtButtonProps) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleClick() {
    setError(null)
    try {
      await navigator.clipboard.writeText(llmTxt)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setError('Could not copy. Try again.')
    }
  }

  return (
    <div className={[styles.wrap, className].filter(Boolean).join(' ')}>
      <button
        type="button"
        className={styles.button}
        onClick={handleClick}
        data-print-hide
        title="Copy llm.txt for your LLM"
        aria-label="Copy llm.txt for your LLM"
      >
        {copied ? 'Copied' : 'Copy for LLM'}
      </button>
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  )
}
