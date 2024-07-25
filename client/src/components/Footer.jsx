const style = {
  margin: '0 40px',
  color: 'var(--highlight)',
}
export default function Footer() {
  return (
    <footer>
      {/* // TODO:  Add LinkedIn Link */}
      <a href='/error' target='_blank' rel="noopener noreferrer" style={style}>LinkedIn</a>
      <a href='https://github.com/jtschams' target='_blank' rel="noopener noreferrer" style={style}>Github</a>
    </footer>
  )
}