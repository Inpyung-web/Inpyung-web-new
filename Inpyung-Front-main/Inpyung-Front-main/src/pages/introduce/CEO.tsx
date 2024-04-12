import Title from '@/components/common/Title';
import { CEO_INTRODUCE } from '@/constants/CEO_INTRODUCE';
import { useLanguage } from '@/contexts/useLanguage';

export default function CEO() {
  const [language] = useLanguage();

  return (
    <div>
      <Title>CEO</Title>
      <main className="flex flex-col w-full gap-4 px-10 py-8 text-main">
        <div className="flex items-center justify-center w-full px-60 md:px-1">
          <div className="flex w-full gap-8 md:flex-col">
            <div className="flex flex-col gap-4">
              <img src="/ceo.webp" alt="ceo" />
              <div className="text-[20px] flex flex-col gap-1 justify-center items-center">
                <div className="text-[16px]">{CEO_INTRODUCE[language].company}</div>
                <div className="font-[600]">Park, Chun Seon</div>
              </div>
            </div>
            <div className="w-full break-words whitespace-pre-wrap text-[18px]">
              {CEO_INTRODUCE[language].introduce}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
