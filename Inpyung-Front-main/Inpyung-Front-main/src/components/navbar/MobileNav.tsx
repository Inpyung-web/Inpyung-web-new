import { useEffect, useState } from 'react';
import Hamburger from '../common/Hamburger';
import { createPortal } from 'react-dom';
import X from '../common/X';
import { NAVBAR } from '@/constants/NAVBAR';
import { useLanguage } from '@/contexts/useLanguage';
import MobileNavButton from './MobileNavButton';
import Translate from './Translate';
import { useAnimation } from '@d0422/react-hooks';

export default function MobileNav() {
  const [isClicked, setIsClicked] = useState(false);
  const {
    animationClassName,
    triggerUnmountAnimation,
    handleUnmountAnimationEnd,
  } = useAnimation('animate-show-mobile-nav', 'animate-hide-mobile-nav', () =>
    setIsClicked(false)
  );
  const [language] = useLanguage();
  const hide = () => triggerUnmountAnimation();

  useEffect(() => {
    if (isClicked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isClicked]);

  return (
    <>
      <button onClick={() => setIsClicked(true)}>
        <Hamburger />
      </button>
      {isClicked &&
        createPortal(
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 w-screen  bg-black/90 z-[999999] h-full ${animationClassName}`}
            onClick={(e) => e.stopPropagation()}
            onAnimationEnd={handleUnmountAnimationEnd}
            style={{
              transform: `translateY(${window.scrollY}px)`,
            }}
          >
            <button
              className="flex justify-end w-full pt-4 pr-8"
              onClick={hide}
            >
              <X />
            </button>
            <main className="flex flex-col items-center justify-center w-full h-full gap-8 text-white">
              <div className="flex flex-col items-center gap-4">
                {NAVBAR[language].map((navData) => (
                  <MobileNavButton
                    key={navData.title}
                    data={navData}
                    hide={hide}
                  />
                ))}
              </div>
              <Translate />
            </main>
          </div>,
          document.getElementById('root')!
        )}
    </>
  );
}
