import FooterPoster from '@/components/home/FooterPoster';
import Images from '@/components/home/Images';
import Landing from '@/components/home/Landing';

export default function Home() {
  return (
    <div className="relative flex flex-col h-full gap-8">
      <Landing />
      <Images />
      <FooterPoster />
    </div>
  );
}
