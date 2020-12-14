import * as React from 'react';
import styles from './Footer.module.css'

export default function Footer() {
  // React.useEffect(() => {

  // });

  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you
      </footer>
    </>
  )
}
