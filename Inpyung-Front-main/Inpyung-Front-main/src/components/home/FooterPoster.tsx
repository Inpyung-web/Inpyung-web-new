import { HOME } from '@/constants/HOME';
import { useLanguage } from '@/contexts/useLanguage';
import { useEffect } from 'react';
import { useCarousel } from '@d0422/react-hooks';

export default function FooterPoster() {
  const [language] = useLanguage();
  const data = HOME[language].footer;
  const { next, CarouselWrapper, ref, style } = useCarousel(data.length);

  useEffect(() => {
    setInterval(next, 3000);
  }, []);

  return (
    <div className="w-full text-white ">
      <CarouselWrapper ref={ref} style={style}>
        {data.map((cardData) => (
          <div className="relative flex-shrink-0 w-full">
            <div className="relative object-center w-full h-full">
              <img src={cardData.img} className="object-cover w-full h-full " />
              <div className="absolute top-0 z-10 w-full h-full bg-black/20"></div>
            </div>
            <div className="absolute flex flex-col justify-between gap-10 bottom-[30%] left-[10%] z-[15]">
              <div className="font-[900] text-[35px] md:text-[20px]">
                {cardData.title}
              </div>
              <div className="text-[25px] font-[500] md:text-[10px]">
                {cardData.content.map((data) => (
                  <div className="leading-normal text-left">{data}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </CarouselWrapper>
    </div>
  );
}
