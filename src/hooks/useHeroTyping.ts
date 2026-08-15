// src/hooks/useHeroTyping.ts
import { useState, useEffect } from 'react';

export function useHeroTyping() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [typedAbout, setTypedAbout] = useState('');
  const [typedFeatures, setTypedFeatures] = useState('');

  const fullAboutText = 'about';
  const fullFeaturesText = 'features';

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    let aboutInterval: ReturnType<typeof setInterval>;
    let featuresInterval: ReturnType<typeof setInterval>;

    const typingDelayTimeout = setTimeout(() => {
      let aboutIndex = 0;

      aboutInterval = setInterval(() => {
        if (aboutIndex <= fullAboutText.length) {
          setTypedAbout(fullAboutText.slice(0, aboutIndex));
          aboutIndex++;
        } else {
          clearInterval(aboutInterval);

          let featuresIndex = 0;
          featuresInterval = setInterval(() => {
            if (featuresIndex <= fullFeaturesText.length) {
              setTypedFeatures(fullFeaturesText.slice(0, featuresIndex));
              featuresIndex++;
            } else {
              clearInterval(featuresInterval);
            }
          }, 100);
        }
      }, 100);
    }, 1100);

    return () => {
      clearTimeout(typingDelayTimeout);
      if (aboutInterval) clearInterval(aboutInterval);
      if (featuresInterval) clearInterval(featuresInterval);
    };
  }, [isLoaded]);

  return { isLoaded, typedAbout, typedFeatures, fullAboutText, fullFeaturesText };
}