import Link from 'next/link'//Componente de next nativo, no carga toda la pagina como lo haria un a normal. Descarga todo lo que necesita.
import React from 'react'
import styles from "./Navegacion.module.css"

const Navegacion = () => {
  return (
    <header className={styles.container}>     
        
          <Link href="/dashboard" className={styles.link}>Inicio</Link>
          <Link href="/dashboard/operaciones" className={styles.link}>Operaciones</Link>
          <Link href="/dashboard/plan" className={styles.link}>Plan</Link>
          <Link href="/dashboard/settings" className={styles.link}>Settings</Link>
          <Link href="/" className={styles.link}>Salir</Link>        
      
  </header>
  )
}

export default Navegacion
