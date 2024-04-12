import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PCNav from './PCNav';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [isHover, setIsHover] = useState(false);
  const [whiteHeight, setWhiteHeight] = useState(100);
  const NABVAR_HEIGHT = 100;

  useEffect(() => {
    return () => setWhiteHeight(100);
  });

  return (
    <div
      className={`sticky  h-[${NABVAR_HEIGHT}px] z-[9999] top-0 bg-black md:h-[60px] text-[white]`}
    >
      <div className="flex items-center justify-between h-full px-4">
        <Link to="/" className="flex h-full basis-1/4">
          <img
            src="/public/iogosampleblack.jpg"
            className="object-contain"
          /> 
        </Link>
        <PCNav
          isHover={isHover}
          setIsHover={setIsHover}
          whiteHeight={whiteHeight}
          setWhiteHeight={setWhiteHeight}
        />
        <MobileNav />
      </div>
      <div
        className="absolute w-full transition-all duration-300 bg-black md:hidden"
        style={{
          top: NABVAR_HEIGHT,
          height: isHover ? whiteHeight : 0,
        }}
      />
    </div>
  );
}
