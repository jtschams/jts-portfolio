import Footer from '../components/Footer';
import { NavBar } from '../components/Header';

const styles = {
  nav: {
    borderRadius: '15px',
    position: 'static',
    margin: '40px auto',
    padding: 0,
    boxShadow: '0px 4px 4px 4px #00000044'
  },
  h2: {
    fontSize: '3.5rem',
    margin: '30px auto'
  },
  p: {
    fontSize: '2rem',
    textAlign: 'center',
    padding: 0
  }
}

export default function Error() {
  return (
    <>
      <main>
        <h2 style={styles.h2}>Oops!  It looks like that link was faulty or the page doesn't exist.</h2>
        <p style={styles.p}>Click one of the links below to be taken back to the portfolio.</p>
        <NavBar style={styles.nav} />
          
      </main>
      <Footer />
    </>
  )
}