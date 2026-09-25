'use client'
import {useEffect,useMemo,useState} from 'react'
type Story={id:string,title:string,summary?:string,published_at?:string,updated_at?:string,category?:string}
export default function NewsSection({category}:{category?:string}){
 const [stories,setStories]=useState<Story[]>([]); const [loading,setLoading]=useState(true); const [query,setQuery]=useState('')
 const api=process.env.NEXT_PUBLIC_NEURAQ_API||''
 useEffect(()=>{fetch(api+'/v1/stories?limit=50').then(r=>r.ok?r.json():[]).then(v=>setStories(Array.isArray(v)?v:[])).catch(()=>setStories([])).finally(()=>setLoading(false))},[api])
 const filtered=useMemo(()=>stories.filter(s=>{const text=(s.title+' '+(s.summary||'')).toLowerCase(); return (!category||!s.category||s.category.toLowerCase()===category.toLowerCase())&&(!query||text.includes(query.toLowerCase()))}),[stories,category,query])
 return <section className='news-section'><div className='section-head'><div><span className='eyebrow'>COBERTURA NEURAQ</span><h2>{category||'Últimas historias'}</h2></div><label className='search'><span>⌕</span><input aria-label='Buscar noticias' placeholder='Buscar en NeuraQ…' value={query} onChange={e=>setQuery(e.target.value)}/></label></div>
 {loading?<div className='empty card'><span className='pulse'></span><h3>Conectando con la redacción</h3><p>Estamos consultando las historias verificadas.</p></div>:filtered.length?<div className='news-grid'>{filtered.map((s,i)=><article className={i===0?'news-card featured-card':'news-card'} key={s.id}><div className='card-top'><span>{category||s.category||'Actualidad'}</span><time>{s.published_at||s.updated_at||'Ahora'}</time></div><h3>{s.title}</h3><p>{s.summary||'Historia en desarrollo con fuentes y contexto editorial.'}</p><a className='read' href={'/story/'+encodeURIComponent(s.id)}>Abrir historia <span>↗</span></a></article>)}</div>:<div className='empty card'><h3>Aún no hay historias visibles</h3><p>La redacción está preparando cobertura. Volvé a consultar en unos minutos.</p></div>}
 </section>
}