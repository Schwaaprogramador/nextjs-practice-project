import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.container}>
        newlogin 
        <Link href="/" className={styles.link}>Salir</Link>   
    </div>
)
  
}

export default page