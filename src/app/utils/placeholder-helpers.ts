export function setResponsivePlaceholderByClass(className: string, placeholderText: string): void {
  const inputElement = document.querySelector(`.${className}`) as HTMLInputElement;
  
  if (inputElement) {
    const mediaQuery = window.matchMedia('(min-width: 640px)');

    // Función para manejar los cambios de la media query
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        inputElement.placeholder = placeholderText;
      } else {
        inputElement.placeholder = 'Search'; // Coloca el texto original u otro que prefieras
      }
    };
    if (mediaQuery.matches) {
      inputElement.placeholder = placeholderText;
    }
    mediaQuery.addEventListener('change', handleMediaChange);
  }
}
