import React from 'react';
import { GraduationCapIcon, PhoneIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-burgundy-900 text-stone-300 py-16 border-t-8 border-gold-600 mt-20 relative overflow-hidden">
      
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 opacity-50"></div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        <div className="flex justify-center mb-6">
            <div className="p-3 bg-burgundy-800 rounded-full border-2 border-gold-500 shadow-lg">
                <GraduationCapIcon className="h-8 w-8 text-gold-400" />
            </div>
        </div>

        <h2 className="text-3xl font-serif text-gold-100 mb-4 tracking-wide font-bold">La Bitácora de Marioxi</h2>
        
        <p className="text-sm md:text-base max-w-xl mx-auto mb-8 font-serif italic text-stone-300 leading-relaxed">
            "Escribir es la pintura de la voz." - Voltaire. <br/>
            Un espacio dedicado al desarrollo académico, la investigación formal y la integración de nuevas tecnologías en la escritura.
        </p>

        <div className="inline-flex items-center gap-3 bg-burgundy-800 px-6 py-3 rounded-full border border-gold-600/30 shadow-md mb-10 hover:bg-burgundy-700 transition-colors">
             <div className="bg-gold-500 p-1.5 rounded-full text-burgundy-900">
                <PhoneIcon className="w-4 h-4" />
             </div>
             <span className="text-base tracking-wide font-bold text-gold-100">+58 412-9400290</span>
        </div>

        <div className="flex justify-center space-x-8 text-xs font-bold tracking-widest uppercase mb-10 text-gold-200/80">
            <span className="cursor-pointer hover:text-white transition-colors">Publicaciones</span>
            <span className="text-gold-600">•</span>
            <span className="cursor-pointer hover:text-white transition-colors">Bibliografía</span>
            <span className="text-gold-600">•</span>
            <span className="cursor-pointer hover:text-white transition-colors">Aviso Legal</span>
        </div>

        <div className="text-[10px] text-stone-500 border-t border-burgundy-800 pt-8 font-serif">
            Desarrollado y Editado por <strong className="text-gold-400 text-xs">Marioxi Herrera</strong> &copy; 2025. <br/>
            Todos los derechos reservados bajo licencia académica.
        </div>
      </div>
    </footer>
  );
};

export default Footer;