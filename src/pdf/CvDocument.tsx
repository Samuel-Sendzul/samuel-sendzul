import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer'
import type { CvData } from '../data/cv'

const styles = StyleSheet.create({
  page: {
    paddingTop: 36,
    paddingBottom: 40,
    paddingHorizontal: 40,
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    lineHeight: 1.4,
    color: '#1a1a1a',
  },
  name: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 18,
    marginBottom: 2,
  },
  tagline: {
    fontSize: 10.5,
    marginBottom: 2,
  },
  contact: {
    fontSize: 8.5,
    color: '#444',
    marginBottom: 14,
  },
  section: {
    marginTop: 12,
  },
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9,
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    color: '#555',
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 3,
  },
  intro: {
    marginBottom: 4,
    maxWidth: 460,
  },
  highlight: {
    marginBottom: 6,
  },
  highlightMetric: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 11,
    color: '#0e7c66',
  },
  highlightTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    marginTop: 1,
  },
  role: {
    marginBottom: 8,
  },
  roleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  company: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
  },
  dates: {
    fontSize: 8.5,
    color: '#555',
  },
  title: {
    fontSize: 9,
    marginBottom: 3,
  },
  bullet: {
    marginLeft: 8,
    marginBottom: 2,
  },
  bulletLead: {
    fontFamily: 'Helvetica-Bold',
  },
  toolGroup: {
    marginBottom: 3,
  },
  toolLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 8.5,
  },
  link: {
    color: '#0e7c66',
    textDecoration: 'none',
  },
  muted: {
    color: '#555',
    fontSize: 8.5,
  },
  earlier: {
    marginTop: 4,
  },
})

type CvDocumentProps = {
  data: CvData
}

export function CvDocument({ data }: CvDocumentProps) {
  const { profile, intro, highlights, roles, earlier, toolStack, education, awards } =
    data

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
          {profile.email} · {profile.phone} ·{' '}
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
          {intro.map((p) => (
            <Text key={p} style={styles.intro}>
              {p}
            </Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Selected work</Text>
          {highlights.map((h) => (
            <View key={h.title} style={styles.highlight} wrap={false}>
              <Text style={styles.highlightMetric}>
                {h.metric} · {h.metricLabel}
              </Text>
              <Text style={styles.highlightTitle}>{h.title}</Text>
              <Text>{h.body}</Text>
              <Link src={h.href} style={styles.link}>
                {h.hrefLabel}
              </Link>
            </View>
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
          <Text style={[styles.muted, { marginTop: 4 }]}>{awards}</Text>
        </View>
      </Page>
    </Document>
  )
}
