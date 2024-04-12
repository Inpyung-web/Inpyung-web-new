import { PERFORMANCE } from '@/constants/PERFORMANCE';
import { useLanguage } from '@/contexts/useLanguage';
import { Link } from 'react-router-dom';

export default function Lists() {
  const [language] = useLanguage();
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-wrap justify-center gap-10 p-10 w-[1100px] lg:w-full">
        {PERFORMANCE[language].map((each, index) => {
          const img = Array.isArray(each.img) ? each.img[0] : each.img;
          return (
            <div
              key={each.title}
              className="flex basis-[48%] justify-center w-full"
            >
              <Link
                to={`${index + 1}`}
                className="relative flex justify-center transition-all hover:scale-105"
              >
                <img
                  src={img}
                  className="object-cover  brightness-75 w-[480px] h-[330px] md:w-full md:h-full md:aspect-[16/11]"
                />
                <div className="text-white font-[700] absolute bottom-5 left-5 text-[30px] md:text-[20px]">
                  {each.title}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
