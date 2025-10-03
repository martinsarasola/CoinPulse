// hooks/use-media-query.js
"use client"; // 1. La Directiva del Cliente

import { useState, useEffect } from "react"; // 2. Las Herramientas de React

export function useMediaQuery(query: string) {
  // 3. La Declaración del Hook

  const [matches, setMatches] = useState(false); // 4. La Memoria del Hook

  useEffect(() => {
    // 5. El "Efecto Secundario" Mágico

    // Lo que pasa cuando el componente aparece...
    const media = window.matchMedia(query); // 6. Preguntando al Navegador

    if (media.matches !== matches) {
      // 7. Sincronización Inicial
      setMatches(media.matches);
    }

    const listener = () => {
      // 8. El Vigilante de Cambios
      setMatches(media.matches);
    };

    media.addListener(listener); // 9. Poniendo al Vigilante a Trabajar

    // Lo que pasa cuando el componente desaparece...
    return () => media.removeListener(listener); // 10. La Limpieza
  }, [matches, query]); // 11. Las Dependencias

  return matches; // 12. El Resultado Final
}
