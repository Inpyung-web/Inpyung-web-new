import { HOME } from '@/constants/HOME';
import { useLanguage } from '@/contexts/useLanguage';
import { Link } from 'react-router-dom';
import { useFocusAnimation } from '@d0422/react-hooks';

export default function Images() {
  const ref = useFocusAnimation<HTMLDivElement>('animate-bottom-slide-show');
  const [language] = useLanguage();

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-full h-full gap-4 px-4 justify-evenly translate-y-[10%]"
        ref={ref}
      >
        {HOME[language].images.map((image) => (
          <Link
            to={image.link}
            className="flex flex-col items-center w-full gap-2 transition-all duration-500 basis-1/5 hover:scale-105 "
          >
            <img src={image.src} alt={image.title} className="aspect-video" />
            <div className="w-full text-center whitespace-pre-line text-main md:text-xs md:text-[10px] break-all">
              {image.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
