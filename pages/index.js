import styles from '../styles/Home/Home.module.scss'
import HomeHeader from '../components/HomeHeader'

export default function Index() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>nav here</nav>
      <HomeHeader />
      <main className={styles.main} />
      <footer className={styles.footer} />
    </div>
  )
}
