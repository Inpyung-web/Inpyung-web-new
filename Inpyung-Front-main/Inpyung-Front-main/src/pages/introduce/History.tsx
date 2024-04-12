import Title from '@/components/common/Title';
import { HISTORY } from '@/constants/HISTORY';
import { useLanguage } from '@/contexts/useLanguage';

export default function History() {
  const [language] = useLanguage();
  return (
    <div>
      <Title>{HISTORY[language].title}</Title>
      <main className="flex flex-col gap-4 px-10 py-8 text-main">
        <span className="text-[23px] font-[600] w-full whitespace-pre-wrap text-center leading-relaxed">
          {HISTORY[language].introduce}
        </span>
        <div className="flex justify-center w-full">
          <img src="/연혁.webp" className="w-1/2 h-full" alt="history" />
        </div>
      </main>
    </div>
  );
}
