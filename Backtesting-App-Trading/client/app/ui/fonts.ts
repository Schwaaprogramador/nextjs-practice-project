import { Montserrat, Buda } from "next/font/google"

//Fuente optimizada => No se carga desde el lado del cliente, se guarda del lado del servidor mucho mas rapido.
export const montserrat = Montserrat({
    subsets: ['latin']

    
})

export const buda = Buda({weight: ['300'] , subsets: ['latin']})