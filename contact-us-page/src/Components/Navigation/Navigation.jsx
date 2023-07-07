import React from 'react'
import styles from "./Navigation.module.css"

export default function Navigation() {
  console.log(styles)
  return (
   <nav className={`${styles.navigation} container`}>
    <div className="logo">
        <img src="/Images/icon.png" alt="logo" />
    </div>
    <ul className={styles.list}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
    </ul>
   </nav>
  )
}
