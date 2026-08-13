import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import {
  introToPlainText,
  type CvData,
  type IntroPart,
} from '../data/cv'

const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 32,
    fontFamily: 'Helvetica',
    fontSize: 9,
    lineHeight: 1.35,
    color: '#1a1a1a',
  },
  name: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 16,
    marginBottom: 2,
  },
  tagline: {
    fontSize: 10,
    marginBottom: 2,
  },
  contact: {
    fontSize: 8,
    color: '#444',
    marginBottom: 10,
  },
  section: {
    marginTop: 8,
  },
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
    letterSpacing: 1.1,
    textTransform: 'uppercase',
    color: '#555',
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 2,
  },
  intro: {
    marginBottom: 2,
  },
  role: {
    marginBottom: 6,
  },
  roleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  company: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
  },
  dates: {
    fontSize: 8,
    color: '#555',
  },
  title: {
    fontSize: 8.5,
    marginBottom: 2,
  },
  bullet: {
    marginLeft: 8,
    marginBottom: 1.5,
  },
  bulletLead: {
    fontFamily: 'Helvetica-Bold',
  },
  toolGroup: {
    marginBottom: 2,
  },
  toolLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8,
  },
  link: {
    color: '#0e7c66',
    textDecoration: 'none',
  },
  muted: {
    color: '#555',
    fontSize: 8,
  },
  earlier: {
    marginTop: 2,
  },
})

type CvDocumentProps = {
  data: CvData
}

export function CvDocument({ data }: CvDocumentProps) {
  const { profile, intro, roles, earlier, toolStack, education, awards } = data

  return (
    <Document
      title={`${profile.name} CV`}
      author={profile.name}
      subject={profile.tagline}
    >
      <Page size="A4" style={styles.page}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.tagline}>{profile.tagline}</Text>
        <Text style={styles.contact}>
          {profile.email} ·{' '}
          <Link src={profile.github} style={styles.link}>
            GitHub
          </Link>{' '}
          ·{' '}
          <Link src={profile.linkedin} style={styles.link}>
            LinkedIn
          </Link>
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          {intro.map((parts) => (
            <Text key={introToPlainText(parts)} style={styles.intro}>
              {parts.map((part: IntroPart, i) =>
                typeof part === 'string' ? (
                  <Text key={`${i}-${part.slice(0, 24)}`}>{part}</Text>
                ) : (
                  <Link key={part.href} src={part.href} style={styles.link}>
                    {part.text}
                  </Link>
                ),
              )}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {roles.map((role) => (
            <View
              key={`${role.company}-${role.start}`}
              style={styles.role}
              wrap={false}
            >
              <View style={styles.roleHeader}>
                <Text style={styles.company}>{role.company}</Text>
                <Text style={styles.dates}>
                  {role.start} – {role.end}
                </Text>
              </View>
              <Text style={styles.title}>
                {role.title} · {role.location}
              </Text>
              {role.bullets.map((b) => (
                <Text key={b.lead} style={styles.bullet}>
                  • <Text style={styles.bulletLead}>{b.lead}.</Text> {b.text}
                  {b.href ? (
                    <>
                      {' '}
                      <Link src={b.href} style={styles.link}>
                        ({b.hrefLabel ?? 'link'})
                      </Link>
                    </>
                  ) : null}
                </Text>
              ))}
            </View>
          ))}
          <View style={styles.earlier}>
            <Text style={styles.toolLabel}>Earlier</Text>
            {earlier.map((item) => (
              <Text key={item.company} style={styles.muted}>
                {item.company}: {item.title} ({item.period})
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tool stack</Text>
          {toolStack.map((group) => (
            <Text key={group.label} style={styles.toolGroup}>
              <Text style={styles.toolLabel}>{group.label}: </Text>
              {group.items.map((item, i) => (
                <Text key={item.name}>
                  {i > 0 ? ', ' : ''}
                  <Link src={item.href} style={styles.link}>
                    {item.name}
                  </Link>
                </Text>
              ))}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {education.map((d) => (
            <Text key={d.credential}>
              <Text style={styles.toolLabel}>{d.credential}</Text>
              {', '}
              {d.school} ({d.period})
            </Text>
          ))}
          <Text style={[styles.muted, { marginTop: 3 }]}>{awards}</Text>
        </View>
      </Page>
    </Document>
  )
}
