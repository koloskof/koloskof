import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: '0.75rem',
    }}>
      <h1 style={{ fontSize: '3rem', margin: 0 }}>404</h1>
      <p style={{ opacity: 0.8, margin: 0 }}>Page not found</p>
      <Link to="/" style={{ marginTop: '0.5rem' }}>Go to Home</Link>
    </div>
  )
}

