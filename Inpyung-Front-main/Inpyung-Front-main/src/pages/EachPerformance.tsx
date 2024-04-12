import { PERFORMANCE } from '@/constants/PERFORMANCE';
import { Link, useParams } from 'react-router-dom';
import Title from '../components/common/Title';
import { useLanguage } from '@/contexts/useLanguage';
import { Data } from '@/type';
import { NAVBAR } from '@/constants/NAVBAR';
const TITLE_KO = '주요실적';
const TITLE_EN = 'Major performance';
const TITLE_VI = 'thành tích chủ yếu';

const TITLE: Data<string> = {
  korean: TITLE_KO,
  vietnam: TITLE_VI,
  english: TITLE_EN,
};
export default function EachPerformance() {
  const { id } = useParams();
  const [language] = useLanguage();
  const performance = PERFORMANCE[language][Number(id) - 1];
  const BUSINESS_NAV = NAVBAR[language][2].subMenu;
  const images = performance.img;
  if (performance)
    return (
      <>
        {/* <Title>{TITLE[language]}</Title> */}
        <div className="flex-col justify-between w-full h-full">
          <div className="flex justify-center basis-1/4 md:flex-col">
              {BUSINESS_NAV?.map((each) => (
                <Link
                  to={each.link}
                  className="flex-col flex items-center gap-2 p-4 mx-4  border-gray-400 whitespace-nowrap text-main md:text-[16px] md:p-2 font-[600] text-center "
                >
                  <div
                    className={`${
                      each.title === performance.title ? 'text-inpyung' : ''
                    } flex justify-center items-center flex-col font-[700] gap-2`}
                  >
                    {each.title}
                    <hr className="w-[60%] bg-black " />
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <main className="flex justify-center h-full min-h-[85vh] md:min-h-[100px]">
          <div className="flex flex-col gap-4 p-8 basis-3/4 md:basis-[100%]">
            <div className="flex items-center justify-center gap-4 md:flex-col">
              <div className="basis-1/3">
                {Array.isArray(images) ? (
                  <div className="grid grid-cols-2 gap-1">
                    <div className="col-span-2 aspect-[16/11]">
                      <img
                        className="object-fill w-full h-full"
                        src={images[0]}
                      />
                    </div>
                    <img className="aspect-[16/11]" src={images[1]} />
                    <img className="aspect-[16/11]" src={images[2]} />
                  </div>
                ) : (
                  <img src={images} className="object-cover w-full" />
                )}
              </div>
              <div className="flex flex-col justify-start h-full gap-4 basis-1/3">
                <div className="text-title text-[30px]">
                  {performance.title}
                </div>

                <div className="text-main text-[24px] font-[600]">
                  {performance.content.title}
                </div>
                <div className="leading-6 whitespace-pre-wrap">
                  {performance.content.introduce}
                </div>
                <ul className="flex flex-col gap-2">
                  {performance.content.li.map((data) => (
                    <li className="text-main">{data}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
            {performance.title === PERFORMANCE[language][1].title && (
              <iframe
                width="80%"
                src="https://www.youtube.com/embed/0AYAXMRlzSM?si=YBEvMblLbBUSkxyY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="aspect-video"
              ></iframe>
            )}
            </div>
          </div>
          
        </main>
      </>
    );
  return <div>존재 하지 않는 게시물입니다.</div>;
}
