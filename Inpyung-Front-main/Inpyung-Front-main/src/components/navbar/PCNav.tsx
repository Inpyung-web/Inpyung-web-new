import { NAVBAR } from '@/constants/NAVBAR';
import { useLanguage } from '@/contexts/useLanguage';
import NavButton from './NavButton';
import Translate from './Translate';

export default function PCNav({
  isHover,
  setIsHover,
  whiteHeight,
  setWhiteHeight,
}: {
  isHover: boolean;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
  whiteHeight: number;
  setWhiteHeight: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [language] = useLanguage();

  return (
    <div className="flex items-center justify-between w-full md:hidden">
      <div
        className="relative w-full h-[100px]"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex justify-center w-full h-full ">
          {NAVBAR[language].map((navData) => (
            <NavButton
              key={navData.title}
              title={navData.title}
              showSub={isHover}
              subMenu={navData.subMenu}
              link={navData.link}
              whiteHeight={whiteHeight}
              setWhiteHeight={setWhiteHeight}
            />
          ))}
        </div>
      </div>
      <Translate />
    </div>
  );
}
