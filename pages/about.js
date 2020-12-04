import styles from '../styles/Home/Home.module.scss'

// Components
import HomeHeader from '../components/HomeHeader'
import Nav from '../components/Nav'

export default function About() {
  return (
    <div className={styles.container}>
      <Nav />
      <HomeHeader />
      <main className={styles.main} />
      <footer className={styles.footer} />
    </div>
  )
}
