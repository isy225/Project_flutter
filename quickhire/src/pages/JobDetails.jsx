import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import jobs from '../data/jobs.json'
import styles from './JobDetails.module.css'

export default function JobDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [applied, setApplied] = useState(false)

  const job = jobs.find((j) => j.id === Number(id))

  // If the job does not exist
  if (!job) {
    return (
      <main className={`${styles.wrapper} page-enter`}>
        <div className="container">
          <div className={styles.notFound}>
            <span>🔍</span>
            <h2>Job Not Found</h2>
            <p>This listing may have been removed.</p>
            <button className={styles.backBtn} onClick={() => navigate('/jobs')}>
              ← Back to Jobs
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className={`${styles.wrapper} page-enter`}>
      <div className="container">
        {/* Back link */}
        <button className={styles.back} onClick={() => navigate('/jobs')}>
          ← Back to Jobs
        </button>

        <div className={styles.layout}>
          {/* ── Main content ── */}
          <div className={styles.main}>
            {/* Header card */}
            <div className={styles.headerCard}>
              <span
                className={`${styles.badge} ${
                  job.type === 'Remote' ? styles.remote : styles.fulltime
                }`}
              >
                {job.type}
              </span>
              <h1 className={styles.jobTitle}>{job.title}</h1>
              <p className={styles.company}>{job.company}</p>
              <p className={styles.location}>📍 {job.location}</p>
            </div>

            {/* Description */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>About the Role</h2>
              <p className={styles.description}>{job.description}</p>
            </section>

            {/* Requirements */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Requirements</h2>
              <ul className={styles.reqList}>
                {job.requirements.map((req) => (
                  <li key={req} className={styles.reqItem}>
                    <span className={styles.dot} />
                    {req}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* ── Sidebar ── */}
          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <div className={styles.salaryBlock}>
                <span className={styles.salaryLabel}>Monthly Salary</span>
                <span className={styles.salary}>{job.salary}</span>
              </div>

              <div className={styles.meta}>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>Posted</span>
                  <span className={styles.metaVal}>{job.posted}</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>Type</span>
                  <span className={styles.metaVal}>{job.type}</span>
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.metaKey}>Location</span>
                  <span className={styles.metaVal}>{job.location}</span>
                </div>
              </div>

              {/* Apply button / success */}
              {applied ? (
                <div className={styles.success}>
                  <span>✅</span>
                  <strong>Application Sent!</strong>
                  <p>Good luck, you've got this 🚀</p>
                </div>
              ) : (
                <button
                  className={styles.applyBtn}
                  onClick={() => setApplied(true)}
                >
                  Apply Now
                </button>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
