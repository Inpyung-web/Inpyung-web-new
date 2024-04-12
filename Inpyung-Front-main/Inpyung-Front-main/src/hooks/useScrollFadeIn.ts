import { useCallback, useEffect, useRef } from 'react';

const useScrollFadeIn = <T extends HTMLElement>(fadeInClassName: string) => {
  const dom = useRef<T>(null);

  const handleScroll: IntersectionObserverCallback = useCallback(([entry]) => {
    const { current } = dom;
    if (current) {
      if (entry.isIntersecting) {
        current.classList.add(fadeInClassName);
      } else {
        current.classList.remove(fadeInClassName);
      }
    }
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
  };
};

export default useScrollFadeIn;
