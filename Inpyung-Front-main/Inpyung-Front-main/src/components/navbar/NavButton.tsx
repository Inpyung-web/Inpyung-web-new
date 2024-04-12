import { Navbar } from '@/constants/NAVBAR';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface NavButtonProps extends Navbar {
  showSub: boolean;
  whiteHeight: number;
  setWhiteHeight: React.Dispatch<React.SetStateAction<number>>;
}

export default function NavButton({
  title,
  showSub,
  subMenu,
  link,
  setWhiteHeight,
}: NavButtonProps) {
  const [isHover, setIsHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setWhiteHeight((prev) => {
      if (ref.current) {
        if (ref.current.offsetHeight > prev) {
          return ref.current.offsetHeight;
        }
      }
      return prev;
    });
  });
  return (
    <Link
      to={link}
      className="relative flex items-center justify-center w-full h-full text-center text-title hover:text-inpyung"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {title}
      <div
        className={`absolute bottom-0 h-[3px] bg-inpyung transition-all duration-300 ${
          isHover ? 'w-full' : 'w-0'
        }`}
      />
      {showSub && subMenu && (
        <div className="absolute top-[100px] z-10  w-full">
          <div
            className="flex flex-col w-full h-full gap-2 py-4 animate-show"
            ref={ref}
          >
            {subMenu.map((menu) => (
              <Link
                to={menu.link}
                key={menu.title}
                className="text-left text-white text-main hover:text-inpyung"
              >
                {menu.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </Link>
  );
}
