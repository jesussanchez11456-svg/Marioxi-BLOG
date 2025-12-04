import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { BlogPost } from './types';

// DATOS ADAPTADOS: CONTENIDO EXTENSO, TÉCNICO Y HUMANIZADO
// Se incluyen herramientas IA, procesos de revisión y reflexiones dialógicas.

const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'El Arte de Escribir: Interacción Dialógica y Reflexión',
    excerpt: 'El acto de escribir trasciende la simple codificación de grafemas; se configura como una interacción dialógica profunda entre el autor y su audiencia potencial. Basándonos en las enseñanzas del Facilitador y en referentes como Borges y Casciari, analizamos la escritura como un proceso de clarificación del pensamiento. ¿Cómo estructurar un discurso que invite a la reflexión y cumpla con los estándares de las revistas indexadas?',
    content: '...',
    category: 'El Arte de Escribir',
    publishDate: 'Octubre 28, 2025',
    readTime: 'Lectura: 15 min',
    author: { name: 'Facilitador del Curso', role: 'Mentor Académico', avatarUrl: 'https://ui-avatars.com/api/?name=F+C&background=44403c&color=fff' },
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    mainReference: 'Radio Fe y Alegría Noticias. (2025). El arte de la escritura.',
    externalUrl: 'https://www.radiofeyalegrianoticias.com/el-arte-de-la-escritura/'
  },
  {
    id: '2',
    title: 'Investigación 2.0: Herramientas IA para la Redacción Científica',
    excerpt: 'La inteligencia artificial ha revolucionado la búsqueda de información académica. Herramientas como Consensus y Elicit permiten extraer evidencias de millones de papers en segundos. Perplexity y Gemini Deep Research actúan como asistentes de razonamiento, mientras que Copilot agiliza la síntesis. Este artículo explora cómo integrar estas tecnologías éticamente sin sacrificar la voz autoral.',
    content: '...',
    category: 'IA y Tecnología',
    publishDate: 'Octubre 27, 2025',
    readTime: 'Lectura: 18 min',
    author: { name: 'Marioxi Herrera', role: 'Investigadora', avatarUrl: 'https://ui-avatars.com/api/?name=Marioxi+Herrera&background=292524&color=fff' },
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800', // Imagen tecnológica/abstracta
    mainReference: 'Uso de IA en la Academia: Consensus, Elicit y Perplexity.',
    externalUrl: 'https://uba.edu.ve/wp-content/uploads/2022/03/2.-LIBRO-EL-ARTE-DE-ESCRIBIR-V2-N1-2019.pdf'
  },
  {
    id: '3',
    title: 'El Ecosistema Editorial: Revistas Indexadas y Arbitraje',
    excerpt: 'Publicar es someter el conocimiento a validación. Desglosamos el proceso de revisión por pares (Peer Review) en sus modalidades: simple ciego, doble ciego y abierto. Analizamos qué buscan los árbitros en un manuscrito: coherencia metodológica, novedad y apego a las normas éticas. Entender el arbitraje es fundamental para sobrevivir al "rechazo" y lograr la publicación en revistas de alto impacto (Q1/Q2).',
    content: '...',
    category: 'Arbitraje y Revisión',
    publishDate: 'Octubre 26, 2025',
    readTime: 'Lectura: 20 min',
    author: { name: 'Comité Editorial', role: 'Revisores', avatarUrl: 'https://ui-avatars.com/api/?name=C+E&background=57534e&color=fff' },
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800', // Imagen de libros/biblioteca
    mainReference: 'SciELO. (2001). Publicación en revistas científicas.',
    externalUrl: 'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S1024-94352001000200001'
  },
  {
    id: '4',
    title: 'Revistas Tradicionales vs. Revistas Digitales: Un Paradigma en Cambio',
    excerpt: 'La dicotomía entre el papel y el bit. Mientras las revistas tradicionales ofrecen prestigio histórico, las revistas digitales y el modelo Open Access garantizan una visibilidad global inmediata. Discutimos los indicadores de calidad (DOI, indexación en Scopus/WoS) y cómo elegir el vehículo adecuado para tu investigación. ¿Es el formato digital menos riguroso? La respuesta te sorprenderá.',
    content: '...',
    category: 'Publicaciones Digitales',
    publishDate: 'Octubre 25, 2025',
    readTime: 'Lectura: 12 min',
    author: { name: 'Marioxi Herrera', role: 'Editora', avatarUrl: 'https://ui-avatars.com/api/?name=Marioxi+Herrera&background=292524&color=fff' },
    imageUrl: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800',
    mainReference: 'Revista OGMA. (2025). Artículos y Ensayos.',
    externalUrl: 'https://revistaogma.com/index.php/home/article/download/2/5/338'
  },
  {
    id: '5',
    title: 'Metodología: Claves para la Revisión General de Textos',
    excerpt: 'El borrador nunca es la versión final. Presentamos una lista de verificación exhaustiva para la auto-revisión: coherencia lógica, cohesión gramatical y adecuación al estilo (APA, Vancouver). La revisión general no solo corrige errores, sino que refina el argumento. Incluye estrategias para detectar ambigüedades y mejorar la fluidez del texto académico antes del envío.',
    content: '...',
    category: 'Metodología',
    publishDate: 'Octubre 24, 2025',
    readTime: 'Lectura: 14 min',
    author: { name: 'Marioxi Herrera', role: 'Autora Principal', avatarUrl: 'https://ui-avatars.com/api/?name=Marioxi+Herrera&background=292524&color=fff' },
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
    mainReference: 'Universidad de Puerto Rico. (2025). Educación y redacción.',
    externalUrl: 'https://revistas.upr.edu/index.php/educacion/article/download/16832/14371/17173'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-900 bg-paper selection:bg-stone-200 selection:text-ink-900">
      
      <Header />
      
      <main className="flex-grow">
        
        <Hero />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Columna Principal */}
            <div className="lg:col-span-8">
              
              <div className="flex items-center justify-between mb-10 pb-4 border-b border-ink-900">
                <h3 className="text-3xl font-serif font-bold text-ink-900 italic">
                    Entradas Destacadas
                </h3>
                <span className="text-xs font-bold uppercase tracking-widest text-ink-500 hidden sm:block">
                    Edición Académica 2025
                </span>
              </div>

              <div className="grid gap-16">
                {samplePosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
              </div>

              {/* Paginación Eliminada para diseño más limpio */}
            </div>

            {/* Sidebar Sticky */}
            <div className="lg:col-span-4">
               <div className="sticky top-8">
                  <Sidebar />
               </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;