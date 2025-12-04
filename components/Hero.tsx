import React from 'react';

// Hero Clásico:
// Texto centrado, tipografía serif grande, estilo editorial.

const Hero: React.FC = () => {
  return (
    <div className="bg-paper border-b border-ink-200">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <span className="block font-serif italic text-ink-500 mb-4 text-lg">
          Bienvenidos al espacio de Marioxi
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-ink-900 mb-6 leading-tight">
          El Camino hacia la <br/> Publicación Científica
        </h2>
        <div className="w-24 h-1 bg-ink-900 mx-auto mb-6"></div>
        <p className="text-lg md:text-xl text-ink-700 leading-relaxed font-light">
          En este blog, exploraremos los desafíos de redactar para revistas indexadas, 
          entenderemos el rigor del arbitraje y descubriremos las claves para 
          convertir una idea en un artículo de impacto.
        </p>
      </div>
    </div>
  );
};

export default Hero;