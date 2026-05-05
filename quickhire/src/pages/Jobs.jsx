import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import jobs from '../data/jobs.json'
import JobCard from '../components/JobCard.jsx'
import styles from './Jobs.module.css'

const FILTERS = ['All', 'Remote', 'Full-Time']

export default function Jobs() {
  const [searchParams] = useSearchParams()
  const initialQuery = searchParams.get('search') || ''

  const [query, setQuery] = useState(initialQuery)
  const [activeFilter, setActiveFilter] = useState('All')

  // Filtered jobs
  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchesType =
        activeFilter === 'All' || job.type === activeFilter
      const matchesSearch =
        query.trim() === '' ||
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase())
      return matchesType && matchesSearch
    })
  }, [query, activeFilter])

  return (
    <main className={`${styles.wrapper} page-enter`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>All Jobs</h1>
          <p className={styles.count}>
            <span className={styles.num}>{filtered.length}</span> position{filtered.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          {/* Inline search */}
          <input
            type="text"
            placeholder="Search by title or company…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={styles.search}
          />

          {/* Filter buttons */}
          <div className={styles.filters}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className={styles.grid}>
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span>😕</span>
            <p>No jobs match your search. Try a different keyword.</p>
          </div>
        )}
      </div>
    </main>
  )
}
