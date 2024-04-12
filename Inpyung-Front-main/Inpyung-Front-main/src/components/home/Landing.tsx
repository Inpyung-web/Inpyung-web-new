import { HOME } from '@/constants/HOME';
import { useLanguage } from '@/contexts/useLanguage';

export default function Landing() {
  const [language] = useLanguage();
  return (
    <div className="relative">
      <img src="/landing.png" className="w-full" />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-white text-[40px] md:text-[25px]  font-[700] flex-col gap-2 animate-opacity-show">
        <div className="leading-normal text-center whitespace-pre-wrap">
          {HOME[language].main}
        </div>
      </div>
    </div>
  );
}
