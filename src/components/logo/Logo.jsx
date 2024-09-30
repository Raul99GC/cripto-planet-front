import React from 'react'
import styles from './logo.module.css'


import logo from '../../assets/images/logo.png'

const Logo = () => {
  return (
    <div className={styles.logoCont}>
      <div className={styles.imgContainer}>
        <img src={logo} alt="cripto logo" />
      </div>
      <h2 className={styles.titlelogo}>Crypto Planet </h2>
    </div>
  )
}

export default Logo