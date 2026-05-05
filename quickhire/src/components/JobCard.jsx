import { useNavigate } from 'react-router-dom'
import styles from './JobCard.module.css'

export default function JobCard({ job }) {
  const navigate = useNavigate()

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/jobs/${job.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && navigate(`/jobs/${job.id}`)}
    >
      {/* Top row */}
      <div className={styles.top}>
        <span className={`${styles.badge} ${job.type === 'Remote' ? styles.remote : styles.fulltime}`}>
          {job.type}
        </span>
        <span className={styles.posted}>{job.posted}</span>
      </div>

      {/* Info */}
      <h3 className={styles.title}>{job.title}</h3>
      <p className={styles.company}>{job.company}</p>

      {/* Footer */}
      <div className={styles.footer}>
        <span className={styles.salary}>{job.salary}</span>
        <span className={styles.location}>📍 {job.location}</span>
      </div>
    </div>
  )
}
