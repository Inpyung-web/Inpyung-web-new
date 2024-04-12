import { useLanguage } from '@/contexts/useLanguage';
import { Language } from '@/type';

const flagimg = ['/베트남.png', '/성조기.jpg', '/태극기.jpg'];
const languages: Language[] = ['vietnam', 'english', 'korean'];
export default function Translate() {
  const setLanguage = useLanguage()[1];
  return (
    <div className="flex gap-2">
      {flagimg.map((flag, i) => (
        <button
          key={flag}
          onClick={() => setLanguage(languages[i])}
          className="w-[31px] h-[31px] rounded-full flex justify-center items-center overflow-hidden"
        >
          <img src={flag} className="object-cover w-full h-full" />
        </button>
      ))}
    </div>
  );
}
