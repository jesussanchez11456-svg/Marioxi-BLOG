import React from 'react';
import { SidebarLink } from '../types';
import { SearchIcon, BookOpenIcon, ExternalLinkIcon, VideoIcon } from './Icons';

// Sidebar Premium:
// - Iconos color Vino (Burgundy-700).
// - Subrayados color Dorado (Gold-500).
// - Botones con estados visuales ricos.

const categories: SidebarLink[] = [
    { label: "El Arte de Escribir", url: "#", count: 12 },
    { label: "Revistas Científicas", url: "#", count: 8 },
    { label: "Arbitraje y Revisión", url: "#", count: 5 },
    { label: "IA y Tecnología", url: "#", count: 7 },
    { label: "Metodología", url: "#", count: 3 },
];

const resourceLinks = [
    { title: "Libro: El Arte de Escribir (UBA)", url: "https://uba.edu.ve/wp-content/uploads/2022/03/2.-LIBRO-EL-ARTE-DE-ESCRIBIR-V2-N1-2019.pdf" },
    { title: "Artículo: Radio Fe y Alegría", url: "https://www.radiofeyalegrianoticias.com/el-arte-de-la-escritura/" },
    { title: "SciELO: Revistas Científicas", url: "http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1024-94352001000200001" },
    { title: "Revista OGMA (Descarga)", url: "https://revistaogma.com/index.php/home/article/download/2/5/338" },
    { title: "Investigación Educativa (UPR)", url: "https://revistas.upr.edu/index.php/educacion/article/download/16832/14371/17173" },
];

const videoLinks = [
    { title: "El Arte de Escribir (La Rioja)", url: "https://www.youtube.com/watch?v=25UYSogSgLk" },
    { title: "Serie: ¿Cómo ser escritor?", url: "https://www.youtube.com/playlist?list=PLgdcEMZRncHUWZ2znJ33OGQfxZmP-sBW" },
    { title: "Borges: El arte de escribir", url: "https://www.youtube.com/watch?v=jKBf99EaPoM" },
    { title: "Hernán Casciari: Escribir bien", url: "https://www.youtube.com/watch?v=48PFd1LZWMI" },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="space-y-12 border-l border-stone-200 pl-8 hidden lg:block">
      
      {/* Widget: Buscador */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <h4 className="font-serif font-bold text-lg text-burgundy-900 mb-4 pb-2 border-b-2 border-gold-500">
            Búsqueda Académica
        </h4>
        <div className="relative group">
            <input 
                type="text" 
                placeholder="Buscar tema..." 
                className="w-full bg-white border border-stone-300 p-3 pl-4 text-sm focus:outline-none focus:border-burgundy-800 focus:ring-1 focus:ring-burgundy-800 transition-all duration-300 placeholder:text-stone-400 shadow-sm"
            />
            <SearchIcon className="absolute right-3 top-3.5 w-4 h-4 text-gold-600" />
        </div>
      </div>

      {/* Widget: Videoteca (YouTube) */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h4 className="font-serif font-bold text-lg text-burgundy-900 mb-5 pb-2 border-b-2 border-gold-500 flex items-center gap-2">
            <VideoIcon className="w-5 h-5 text-burgundy-700" />
            Videoteca
        </h4>
        <div className="space-y-3">
            {videoLinks.map((link, idx) => (
                <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 bg-white border-l-4 border-l-burgundy-800 border-y border-r border-stone-200 hover:bg-burgundy-50 transition-all duration-300 group shadow-sm hover:shadow-md hover:translate-x-1"
                >
                    <div className="flex justify-between items-start">
                        <span className="text-xs font-bold uppercase tracking-wide leading-tight text-ink-800 group-hover:text-burgundy-900 transition-colors">
                            {link.title}
                        </span>
                        <ExternalLinkIcon className="w-3 h-3 flex-shrink-0 mt-0.5 text-burgundy-600" />
                    </div>
                </a>
            ))}
        </div>
      </div>

      {/* Widget: Biblioteca Digital (Interactiva) */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        <h4 className="font-serif font-bold text-lg text-burgundy-900 mb-5 pb-2 border-b-2 border-gold-500 flex items-center gap-2">
            <BookOpenIcon className="w-5 h-5 text-burgundy-700" />
            Biblioteca Digital
        </h4>
        <div className="space-y-3">
            {resourceLinks.map((link, idx) => (
                <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 bg-burgundy-900 text-gold-100 hover:bg-burgundy-800 hover:text-white transition-all duration-300 group shadow-md hover:shadow-lg rounded-sm"
                >
                    <div className="flex justify-between items-start">
                        <span className="text-xs font-bold uppercase tracking-wide leading-tight">
                            {link.title}
                        </span>
                        <ExternalLinkIcon className="w-3 h-3 flex-shrink-0 mt-0.5 opacity-70 group-hover:opacity-100 text-gold-400" />
                    </div>
                </a>
            ))}
        </div>
      </div>

      {/* Widget: Índice Temático */}
      <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h4 className="font-serif font-bold text-lg text-burgundy-900 mb-4 pb-2 border-b-2 border-gold-500">
            Categorías
        </h4>
        <ul className="space-y-2">
            {categories.map((cat, idx) => (
                <li key={idx}>
                    <a href={cat.url} className="flex justify-between items-center group py-2 border-b border-stone-100 hover:border-gold-200 transition-colors">
                        <span className="text-sm font-serif text-ink-700 group-hover:text-burgundy-800 font-medium transition-all">
                            {cat.label}
                        </span>
                        <span className="text-[10px] font-bold text-burgundy-900 bg-gold-100 px-2 py-0.5 rounded-full border border-gold-200">
                            {cat.count}
                        </span>
                    </a>
                </li>
            ))}
        </ul>
      </div>

      {/* Bloque Didáctico */}
      <div className="bg-gold-100/50 p-6 relative mt-8 border border-gold-300 rounded-sm">
        <h4 className="font-serif font-bold text-burgundy-900 mb-3 text-center uppercase tracking-widest text-xs">
            Reflexión Académica
        </h4>
        <p className="text-sm font-serif italic text-ink-800 leading-relaxed text-center mb-0">
            "Publicar no es solo difundir; es someterse al escrutinio riguroso de la comunidad científica para validar el conocimiento."
        </p>
      </div>

    </aside>
  );
};

export default Sidebar;