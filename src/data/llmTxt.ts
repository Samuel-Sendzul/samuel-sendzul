import { cv, introToMarkdown, type CvData } from './cv'

export function formatLlmTxt(data: CvData = cv): string {
  const { profile, intro, roles, earlier, toolStack, education, awards } = data

  const lines: string[] = [
    `# ${profile.name}`,
    '',
    `> ${profile.tagline}`,
    '',
    `- Email: ${profile.email}`,
    `- GitHub: ${profile.github}`,
    `- LinkedIn: ${profile.linkedin}`,
    '',
    '## About',
    '',
    ...intro.map(introToMarkdown),
    '',
    '## Experience',
    '',
  ]

  for (const role of roles) {
    lines.push(`### ${role.title} · ${role.company}`)
    lines.push('')
    lines.push(`${role.start} – ${role.end} · ${role.location}`)
    lines.push('')
    for (const b of role.bullets) {
      const link = b.href ? ` ([${b.hrefLabel ?? 'link'}](${b.href}))` : ''
      lines.push(`- **${b.lead}:** ${b.text}${link}`)
    }
    lines.push('')
  }

  if (earlier.length > 0) {
    lines.push('### Earlier', '')
    for (const role of earlier) {
      lines.push(`- **${role.title}** · ${role.company} (${role.period})`)
    }
    lines.push('')
  }

  lines.push('## Tool stack', '')
  for (const group of toolStack) {
    const names = group.items.map((t) => t.name).join(', ')
    lines.push(`- **${group.label}:** ${names}`)
  }
  lines.push('')

  lines.push('## Education', '')
  for (const degree of education) {
    lines.push(`- **${degree.credential}** · ${degree.school} (${degree.period})`)
  }
  lines.push('')

  lines.push('## Awards', '', awards, '')

  return lines.join('\n')
}

export const llmTxt = formatLlmTxt()
