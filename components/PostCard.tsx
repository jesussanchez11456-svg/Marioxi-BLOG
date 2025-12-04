import React from 'react';
import { BlogPost } from '../types';
import { ExternalLinkIcon } from './Icons';

// PostCard Premium:
// - Imágenes a TODO COLOR siempre.
// - Bordes dorados suaves.
// - Etiquetas con fondo dorado/texto vino.
// - Efectos de elevación.

interface PostCardProps {
  post: BlogPost;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="group bg-white border-l-4 border-l-gold-500 border-y border-r border-stone-200 shadow-sm flex flex-col md:flex-row gap-6 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out rounded-sm">
      
      {/* Imagen a COLOR siempre */}
      <div className="w-full md:w-1/3 flex-shrink-0 relative overflow-hidden shadow-inner border border-stone-100">
         <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
         />
         {/* Overlay sutil dorado en hover */}
         <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <div>
            {/* Etiquetas de colores */}
            <div className="flex items-center text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase mb-3">
                <span className="bg-gold-100 text-burgundy-900 px-3 py-1 rounded-sm border border-gold-200 shadow-sm">
                    {post.category}
                </span>
                <span className="mx-3 text-gold-400 font-serif italic text-lg">•</span>
                <span className="text-ink-500">{post.publishDate}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif font-bold text-burgundy-900 mb-4 leading-tight group-hover:text-gold-600 transition-colors duration-300">
                {post.title}
            </h3>
            
            <p className="text-ink-700 font-serif leading-relaxed text-sm md:text-base mb-5 border-l-2 border-stone-200 pl-4">
                {post.excerpt}
            </p>

            {/* Referencia destacada */}
            {post.mainReference && (
            <div className="mt-4 bg-stone-50 p-3 rounded-r border-l-4 border-burgundy-800">
                <p className="text-[11px] text-ink-600 italic font-serif">
                  <strong className="not-italic text-burgundy-800 font-bold uppercase text-[10px] tracking-wide block mb-1">Cita Bibliográfica:</strong> 
                  {post.mainReference}
                </p>
            </div>
            )}
        </div>

        <div className="mt-6 pt-5 border-t border-dashed border-stone-300 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold-100 border border-gold-300 p-0.5 overflow-hidden">
                    <img src={post.author.avatarUrl} alt={post.author.name} className="w-full h-full rounded-full" />
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-stone-400 leading-none mb-0.5">Autor</span>
                    <span className="text-xs font-bold text-ink-900">
                        {post.author.name}
                    </span>
                </div>
            </div>

            {post.externalUrl ? (
                <a 
                    href={post.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs uppercase font-bold text-white bg-burgundy-800 px-4 py-2 hover:bg-burgundy-900 hover:shadow-lg transition-all duration-300 rounded-sm"
                >
                    Leer Artículo
                    <ExternalLinkIcon className="w-3 h-3" />
                </a>
            ) : (
                <button className="text-xs uppercase font-bold text-burgundy-800 hover:text-burgundy-600 transition-colors">
                    Leer Entrada
                </button>
            )}
        </div>
      </div>
    </article>
  );
};

export default PostCard;