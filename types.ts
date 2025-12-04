// Definición de tipos para la estructura de datos del blog.
// El uso de tipos estrictos facilita el mantenimiento y la escalabilidad del contenido.

export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string; // Resumen para la tarjeta
  content: string; // Contenido completo (simulado o descripción)
  category: string;
  publishDate: string;
  readTime: string; // e.g., "8 min lectura"
  author: Author;
  imageUrl: string;
  mainReference?: string; // Requisito de la rúbrica: Sustento con autores
  externalUrl?: string; // URL externa para redirigir al artículo real
}

export interface SidebarLink {
  label: string;
  url: string;
  count?: number; // Opcional: número de artículos en esa categoría
}