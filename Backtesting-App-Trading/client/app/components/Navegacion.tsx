import Link from 'next/link'//Componente de next nativo, no carga toda la pagina como lo haria un a normal. Descarga todo lo que necesita.
import React from 'react'

const Navegacion = () => {
  return (
    <header>
    <nav>
      <ul>
        <li><Link href="/dashboard">Inicio</Link></li>
        <li><Link href="/dashboard/operaciones">operaciones</Link></li>
        <li><Link href="/dashboard/plan">plan</Link></li>
        <li><Link href="/dashboard/settings">settings</Link></li>
        <li><Link href="/">Salir</Link></li>
      </ul>
    </nav>
  </header>
  )
}

export default Navegacion
