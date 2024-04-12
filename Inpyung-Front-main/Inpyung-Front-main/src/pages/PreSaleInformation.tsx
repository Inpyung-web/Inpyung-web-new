import Title from '@/components/common/Title';
import { PRE_SALE_INFORMATION } from '@/constants/PRE_SALE_INFORMATION';
import { useLanguage } from '@/contexts/useLanguage';

export default function PreSaleInformation() {
  const [language] = useLanguage();
  const data = PRE_SALE_INFORMATION[language];
  return (
    <div>
      <Title>{data.title}</Title>
      <main className="flex justify-center gap-8 px-10 py-8 text-main md:flex-col">
        <div className="flex basis-1/2">
          <img src="/인평실적/하노이 끌레브.jpg" className="object-contain" />
        </div>
        <div className="flex flex-col gap-4 ">
          <div className="text-[20px] font-[700]">{data.name}</div>
          <div className="text-[18px] font-[600]">{data.index}</div>
          <div>
            {data.list.map((li) => (
              <div>{li}</div>
            ))}
          </div>
        </div>
      </main>
      <div className="flex justify-center">
        <iframe
          src="https://www.youtube.com/embed/7Ckf0217zpo?si=qFGO_Ff-UTPMO0ZG"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          width="70%"
          className="px-10 pb-4 aspect-video"
        />
      </div>
      
    </div>
  );
}
