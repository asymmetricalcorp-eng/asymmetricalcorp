export default function Divider() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: '0 24px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 600,
        height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(108,92,231,0.4), rgba(0,212,255,0.4), transparent)',
      }} />
    </div>
  )
}
