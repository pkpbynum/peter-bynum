import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from '../../styles/Home/HomeHeader.module.scss'

const HomeHeader = () => {
  const tl = useRef(gsap.timeline({ delay: 1 }))
  useEffect(() => {
    const { current: _tl } = tl
    _tl.to('#logobox1', { height: 64 })
    _tl.to('#logobox2', { visibility: 'visible', duration: 0 })
    _tl.to('#logobox2', { width: 64 })
    _tl.to('#box1', { height: 192 })
    _tl.to('#box10', { visibility: 'visible', duration: 0 })
    _tl.to('#box10', { width: 192 })
    _tl.to('#box3', { width: 192 })
    _tl.to('#box8', { width: 192 }, '<')
    _tl.to('#box11', { visibility: 'visible', duration: 0 })
    _tl.to('#box11', { height: 192 })
    _tl.to('#box9', { width: 288 }, '<')
    _tl.to('#box6', { height: 288 }, '<')
    _tl.to('#box4', { height: 192 }, '<')
    _tl.to('#box5', { width: 288 })
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div />
        <div id="logobox1" />
        <div id="logobox2" />
      </div>
      <div className={styles.headerTextWrapper}>
        <h3>PETER BYNUM</h3>
        <h4>I&apos;m studing computer science and statistics at Harvard.</h4>
      </div>
      <div className={styles.boxes}>
        <div id="box1" />
        <div id="box2" />
        <div id="box3" />
        <div id="box4" />
        <div id="box5" />
        <div id="box6" />
        <div id="box7" />
        <div id="box8" />
        <div id="box9" />
        <div id="box10" />
        <div id="box11" />
      </div>
    </header>
  )
}

export default HomeHeader
