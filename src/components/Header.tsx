import React from 'react'
import styles from "./Header.module.css"
import { IoMdMoon } from "react-icons/io";

function Header() {
  return (
    <>
     <div className={styles.headerContainer}>
        <p className={styles.titleHeader}>Where in the world?</p>
        <div className={styles.darkMode}>
            <IoMdMoon />
            <p>Dark Mode</p>
        </div>
     </div> 
    </>
  )
}

export default Header
