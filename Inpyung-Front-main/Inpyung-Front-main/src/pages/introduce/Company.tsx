import Title from '@/components/common/Title';
import Introduce from '@/components/company/Introduce';
import { COMPANY_INTRODUCE } from '@/constants/COMPANY_INTRODUCE';
import { useLanguage } from '@/contexts/useLanguage';
import { Data } from '@/type';

const COMPANY_DATA_KO = {
  title: '기업이념',
  introduce: `휴먼 프론티어 인평의 꿈은
여러분의 행복입니다!`,
};
const COMPANY_DATA_EN = {
  title: 'Corporate ideology',
  introduce: 'The dream of Human Frontier Inpraise is your happiness!',
};
const COMPANY_DATA_VI = {
  title: 'tư tưởng doanh nghiệp',
  introduce: 'Giấc mơ của Human Frontier Inpyeong là hạnh phúc của các bạn!',
};

const COMPANY_DATA: Data<{ title: string; introduce: string }> = {
  korean: COMPANY_DATA_KO,
  english: COMPANY_DATA_EN,
  vietnam: COMPANY_DATA_VI,
};

export default function Company() {
  const [language] = useLanguage();
  const data = COMPANY_INTRODUCE[language];
  return (
    <div>
      <Title>{COMPANY_DATA[language].title}</Title>
      <main className="flex flex-col justify-center gap-4 px-10 py-8 text-main">
        <div className="text-[25px] text-center font-[600] whitespace-pre-wrap leading-relaxed">
          {COMPANY_DATA[language].introduce}
        </div>
        <div className="flex flex-col gap-10 px-40 lg:px-0">
          {data.map((data) => (
            <Introduce data={data} />
          ))}
        </div>
        <img src="/기업이념.webp" />
      </main>
    </div>
  );
}
