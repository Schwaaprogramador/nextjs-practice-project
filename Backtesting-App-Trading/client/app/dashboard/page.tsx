import React from 'react'
import styles from "./page.module.css"
const page = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.cajitaContainer}>
        <p>
          Total
        </p>
        <p>
          1000k
        </p>
      </div>

      <div className={styles.cajitaContainer}>
        <p>
          Win Rate
        </p>
        <p>
          80%
        </p>
      </div>

      <div className={styles.cajitaContainer}>
        <p>
          Total Operaciones
        </p>

        <p>
          50
        </p>
      </div>

      
    </div>
  )
}

export default page
