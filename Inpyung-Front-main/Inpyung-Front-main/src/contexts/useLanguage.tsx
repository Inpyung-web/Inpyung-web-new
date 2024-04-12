import { Language } from '@/type';
import { ReactNode, createContext, useContext, useState } from 'react';

export const LanguageContext = createContext<
  [Language, React.Dispatch<React.SetStateAction<Language>>] | null
>(null);

export const useLanguage = () => {
  const state = useContext(LanguageContext);
  if (!state) throw new Error('프로바이더를 확인하세요');
  return state;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const languageState = useState<Language>('korean');
  return (
    <LanguageContext.Provider value={languageState}>
      {children}
    </LanguageContext.Provider>
  );
};
