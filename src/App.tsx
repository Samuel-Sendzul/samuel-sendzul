import { cv } from './data/cv'
import { ThemeProvider } from './context/ThemeContext'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Intro } from './components/cv/Intro'
import { Experience } from './components/cv/RoleCard'
import { ToolStack } from './components/cv/ToolStack'
import { Education } from './components/cv/Education'
import { DownloadCvButton } from './components/ui/DownloadCvButton'
import { ThemeToggle } from './components/ui/ThemeToggle'
import styles from './App.module.css'

function App() {
  return (
    <ThemeProvider>
      <div className={styles.page}>
        <Header profile={cv.profile} />
        <div className={styles.layout}>
          <main className={styles.main}>
            <Intro paragraphs={cv.intro} />
            <Experience roles={cv.roles} earlier={cv.earlier} />
            <div className={styles.mobileOnly}>
              <ToolStack groups={cv.toolStack} />
            </div>
            <Education degrees={cv.education} awards={cv.awards} />
          </main>
          <div className={styles.rail}>
            <div className={styles.actions} data-print-hide>
              <ThemeToggle />
              <DownloadCvButton />
            </div>
            <aside className={styles.sidebar} aria-label="Tool stack">
              <ToolStack groups={cv.toolStack} align="end" />
            </aside>
          </div>
        </div>
        <Footer profile={cv.profile} />
      </div>
    </ThemeProvider>
  )
}

export default App
