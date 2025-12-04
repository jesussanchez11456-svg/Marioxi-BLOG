import React, { useState } from 'react';
import { MenuIcon } from './Icons';

// Header Clásico Premium:
// - Uso de colores Burgundy (Vino) y Gold (Dorado).
// - Navegación eliminada según solicitud.

const Header: React.FC = () => {
  return (
    <header className="bg-paper text-ink-900 w-full relative border-b-4 border-gold-500">
      {/* Barra superior fina en color Vino */}
      <div className="bg-burgundy-900 text-gold-100 text-center py-2 text-[11px] uppercase tracking-[0.2em] font-bold shadow-md">
        Asignatura: El Arte de Escribir — 2025
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        
        {/* Título Principal / Branding con colores */}
        <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight mb-4 uppercase text-burgundy-900 drop-shadow-sm">
              El Arte de Escribir
            </h1>
            <div className="flex items-center justify-center gap-4 mb-2">
                <div className="h-[1px] w-12 bg-gold-500"></div>
                <div className="w-2 h-2 rotate-45 bg-gold-500"></div>
                <div className="h-[1px] w-12 bg-gold-500"></div>
            </div>
            <p className="text-base md:text-lg font-medium italic text-ink-600 font-serif max-w-2xl mx-auto">
              "Reflexiones sobre la escritura académica, el arbitraje y la publicación científica"
            </p>
        </div>
      </div>
    </header>
  );
};

export default Header;