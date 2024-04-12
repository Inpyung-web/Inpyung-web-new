import { Navbar } from '@/constants/NAVBAR';
import RightArrow from '../common/RightArrow';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MobileNavButton({
  data,
  hide,
}: {
  data: Navbar;
  hide: () => void;
}) {
  const { title } = data;
  const [toggle, setToggle] = useState(false);
  return (
    <button
      className="flex flex-col w-full gap-2 "
      onClick={() => setToggle((prev) => !prev)}
    >
      <div className="relative flex items-center justify-center w-full gap-2">
        <div className="text-[25px] relative">
          {data.subMenu && (
            <div className="absolute flex items-center justify-center h-full -left-6">
              <RightArrow
                className={`fill-white ${
                  toggle ? 'rotate-90' : ''
                } transition-all`}
                width={15}
                height={15}
              />
            </div>
          )}
          <div>{title}</div>
        </div>
      </div>
      {toggle && data.subMenu && (
        <div className="flex flex-col items-center w-full gap-4 py-4 animate-show">
          {data.subMenu.map((data) => (
            <Link
              className="text-[15px] text-center active:text-inpyung hover:text-inpyung"
              to={data.link}
              onClick={hide}
            >
              {data.title}
            </Link>
          ))}
        </div>
      )}
    </button>
  );
}
