import Navegacion from "../components/Navegacion";

export default function RootLayout({  children,}: Readonly<{  children: React.ReactNode;}>) {
    return (
      
        <div>
            <Navegacion/>
            {children}
        </div>
      
    );
  }