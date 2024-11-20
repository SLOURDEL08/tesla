// hooks/useScrollSnapping.js
import { useEffect, useRef, useState } from 'react';

export const useScrollSnapping = (sectionsCount) => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollAccumulator = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling) return;

      const scrollDelta = e.deltaY;
      scrollAccumulator.current += scrollDelta;
      const sectionHeight = window.innerHeight;

      // Seuil pour changement de section (ajustez selon besoin)
      const threshold = 50;

      if (Math.abs(scrollAccumulator.current) > threshold) {
        setIsScrolling(true);
        const direction = scrollAccumulator.current > 0 ? 1 : -1;
        const targetSection = Math.max(0, Math.min(sectionsCount - 1, activeSection + direction));
        
        setActiveSection(targetSection);
        container.scrollTo({
          top: targetSection * sectionHeight,
          behavior: 'smooth'
        });

        scrollAccumulator.current = 0;
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 700); // Durée de l'animation
      } else {
        // Retour à la section actuelle si le scroll n'est pas assez fort
        container.scrollTo({
          top: activeSection * sectionHeight,
          behavior: 'smooth'
        });
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [activeSection, isScrolling, sectionsCount]);

  return { containerRef, activeSection };
};