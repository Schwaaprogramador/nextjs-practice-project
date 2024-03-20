
//Se puede importar modulos de css normal
import styled from "./page.module.css"
//next tiene por defecto un componente imagen para la optimizacion de la misma.
//por defecto es lazy loading
// import Image from "next/image"
import Link from "next/link";


export default function Home() {
  return (
    <div className={styled.container}>

      <div className={styled.centralContainer}>

          <div className={styled.seccion_uno}>

          </div>

          <div className={styled.seccion_dos}>

            <div className={styled.enlaces}>
              <Link href="/dashboard" className={styled.button}> Entrar </Link>
              <Link href="/login" className={styled.button}> Login </Link>
              <Link href="/newlogin" className={styled.button}> New Account </Link>
            </div>

            <div className={styled.inputsContainer}>
              <input type="text" name="usuario" placeholder="usuario" className={styled.input}/>
              <input type="password" name="usuario" placeholder="password" className={styled.input}/>
              <input type="password" name="usuario" placeholder="Confirm password" className={styled.input}/>
              <button className={styled.button}> Crear usuario </button>
            </div>
            
          </div>
      </div>
      
    </div>
  );
}
