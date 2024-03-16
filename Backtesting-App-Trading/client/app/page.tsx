
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
        <button className={styled.button}>Iniciar Sesion</button>
        <button className={styled.button}>Crear Cuenta</button>
        <Link href="/dashboard"> Entrar </Link>
      </div>
    </div>
  );
}
