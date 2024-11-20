import React from 'react';
import { useScrollSnapping } from './hooks/useScrollSnapping';
import { Section } from './components/section/section.js';
import { sectionsData } from './components/section/sectionsData.js';

function Home() {
  const { containerRef, activeSection } = useScrollSnapping(sectionsData.length);

  return (
    <div ref={containerRef} className="home-p">
      
      {sectionsData.map((section, index) => (
        <Section
          key={section.id}
          {...section}
          isActive={index === activeSection}
          isLastSection={index === sectionsData.length - 1}
        />
      ))}
    </div>
  );
}

export default Home;