'use client'
import NewsSection from '../components/NewsSection'

export default function Home(){
  return (
    <main>
      <header>
        <a className='brand' href='/'>Neura<span>Q</span></a>
        <nav>
          <a href='/'>Inicio</a>
          <a href='/politica'>Política</a>
          <a href='/tecnologia'>Tecnología</a>
          <a href='/economia'>Economía</a>
          <a href='/mundo'>Mundo</a>
          <a href='/rss.xml'>RSS</a>
        </nav>
      </header>
      <section className='hero'>
        <div className='hero-copy'>
          <span className='eyebrow'>NEURAQ · NEWS INTELLIGENCE</span>
          <h1>La actualidad, <em>conectada.</em></h1>
          <p>Noticias recientes con fuentes, contexto y trazabilidad editorial. NeuraQ reúne señales, contrasta información y presenta historias claras.</p>
          <div className='hero-actions'>
            <a className='primary' href='#historias'>Explorar noticias <span>↓</span></a>
            <a className='secondary' href='/about'>Cómo funciona</a>
          </div>
        </div>
        <div className='signal'>
          <div className='signal-core'><span>Q</span></div>
          <div className='orbit orbit-a'></div>
          <div className='orbit orbit-b'></div>
          <div className='signal-label'>RED EDITORIAL<br/><strong>ACTIVA</strong></div>
        </div>
      </section>
      <section id='historias'><NewsSection/></section>
      <section className='trust'>
        <div><strong>Fuentes</strong><span>trazables y atribuidas</span></div>
        <div><strong>Verificación</strong><span>antes de publicar</span></div>
        <div><strong>Correcciones</strong><span>historial transparente</span></div>
        <div><strong>Actualización</strong><span>cobertura continua</span></div>
      </section>
      <footer>
        <a href='/about'>Quiénes somos</a><span>·</span>
        <a href='/contact'>Contacto</a><span>·</span>
        <a href='/privacy'>Privacidad</a><span>·</span>
        <a href='/terms'>Términos</a><span>·</span>
        <a href='/cookies'>Cookies</a>
      </footer>
    </main>
  )
}