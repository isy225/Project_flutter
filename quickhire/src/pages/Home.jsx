import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  // Search: go to Jobs page and pass query as URL param
  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/jobs?search=${encodeURIComponent(query.trim())}`)
    } else {
      navigate('/jobs')
    }
  }

  return (
    <main className={`${styles.hero} page-enter`}>
      {/* Background decorations */}
      <div className={styles.blob1} aria-hidden />
      <div className={styles.blob2} aria-hidden />

      <div className={`container ${styles.content}`}>
        {/* Tag */}
        <span className={styles.tag}>🚀 100+ jobs available now</span>

        {/* Headline */}
        <h1 className={styles.heading}>
          Find Your<br />
          <span className={styles.highlight}>Dream Job</span><br />
          Today.
        </h1>

        <p className={styles.sub}>
          Students — browse roles at top companies.<br />
          Land your first job in just three clicks.
        </p>

        {/* Search form */}
        <form className={styles.searchBox} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder='Try "Designer" or "Developer"…'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.searchBtn}>
            Search
          </button>
        </form>

        {/* CTA */}
        <button
          className={styles.browseBtn}
          onClick={() => navigate('/jobs')}
        >
          Browse All Jobs →
        </button>

        {/* Stats row */}
        <div className={styles.stats}>
          {[
            { num: '6+', label: 'Open Roles' },
            { num: '100%', label: 'Free to Apply' },
            { num: '3', label: 'Clicks to Apply' },
          ].map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
