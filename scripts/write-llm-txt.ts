import { writeFileSync } from 'node:fs'
import { llmTxt } from '../src/data/llmTxt.ts'

writeFileSync(new URL('../public/llm.txt', import.meta.url), llmTxt)
console.log('Wrote public/llm.txt')
