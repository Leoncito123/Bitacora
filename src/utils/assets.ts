// Helper para generar rutas correctas en GitHub Pages
export function getAssetPath(path: string): string {
  // En desarrollo o cuando no hay base configurado
  if (import.meta.env.DEV || !import.meta.env.BASE_URL) {
    return path;
  }
  
  // En producción con base URL (GitHub Pages)
  const base = import.meta.env.BASE_URL;
  
  // Si el path ya incluye la base, no lo agregues
  if (path.startsWith(base)) {
    return path;
  }
  
  // Asegurar que la base termine con / y el path no empiece con /
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${cleanBase}${cleanPath}`;
}
