import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata={title:'NeuraQ — Noticias e inteligencia en tiempo real',description:'Medio digital AI-native con verificación, fuentes y cobertura continua.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='es'><body>{children}</body></html>}
