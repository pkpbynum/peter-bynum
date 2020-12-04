import Link from 'next/link'
import styles from '../../styles/Nav.module.scss'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/about">
        <a className={styles.navLink}>ABOUT</a>
      </Link>
      <Link href="/about">
        <a className={styles.navLink}>ABOUT</a>
      </Link>
      <Link href="/about">
        <a className={styles.navLink}>ABOUT</a>
      </Link>
    </nav>
  )
}
