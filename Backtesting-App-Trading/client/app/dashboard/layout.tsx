import Navegacion from "../components/Navegacion/Navegacion";
import styles from "./layout.module.css";

export default function RootLayout({  children,}: Readonly<{  children: React.ReactNode;}>) {
    return (
      
        <div className={styles.container}>
            
            <Navegacion/>

            {children}
            
        </div>
      
    );
  }