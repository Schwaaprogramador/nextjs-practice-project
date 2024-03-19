
//Se puede importar modulos de css normal
import styled from "./page.module.css"
//next tiene por defecto un componente imagen para la optimizacion de la misma.
//por defecto es lazy loading
import Image from "next/image"
import img from "../public/image2.jpg"
import Link from "next/link";


export default function Home() {
  return (
    <div className={styled.container}>

        <Image src={img} alt={"fondo de medellin"} className={styled.img} /> 

      <div className={styled.seccion_dos}>
      <Link href="/dashboard" className={styled.button}> Entrar </Link>
      <Link href="/login" className={styled.button}> Login </Link>
      <Link href="/newlogin" className={styled.button}> New Account </Link>
        
        

      </div>
    </div>
  );
}
