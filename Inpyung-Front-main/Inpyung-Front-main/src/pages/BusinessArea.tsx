import Title from '@/components/common/Title';
import { BUSINESS_AREA, Content } from '@/constants/BUSINESS_AREA';
import { NAVBAR } from '@/constants/NAVBAR';
import { useLanguage } from '@/contexts/useLanguage';
import { Link, useParams } from 'react-router-dom';

export default function BusinessArea() {
  const [language] = useLanguage();
  const BUSINESS_NAV = NAVBAR[language][1].subMenu;
  const { id } = useParams();
  if (!id) return <div>존재하지 않습니다.</div>;
  const mapper: Record<string, Content> = {
    'real-estate': BUSINESS_AREA[language].REAL_ESTATE,
    'ict-service': BUSINESS_AREA[language].ICT_SERVICE,
    'golf-resort': BUSINESS_AREA[language].GOLF_RESORT,
    circulation: BUSINESS_AREA[language].CIRCULATION,
  };
  const data = mapper[id];
  if (data)
    return (
      <div className="h-full">
        {/* <Title>{data.title}</Title> */}
        <div className="flex-col justify-between w-full h-full min-h-[85vh] md:justify-center">
          <div className="flex justify-center basis-1/4 md:flex-col">
            {BUSINESS_NAV?.map((each) => (
              <Link
                to={each.link}
                className="flex-col flex items-center gap-2 p-4 mx-4  border-gray-400 whitespace-nowrap text-main md:text-[16px] md:p-2 font-[600] text-center "
              >
                <div
                  className={`${
                    each.title === data.title ? 'text-inpyung' : ''
                  } flex justify-center items-center flex-col font-[700] gap-2`}
                >
                  {each.title}
                  <hr className="w-[60%] bg-black " />
                </div>
              </Link>
            ))}
          </div>
          <main className="flex justify-center w-full p-4 py-8 basis-3/4">
            <div className="flex flex-col w-3/4 gap-4 leading-7 text-center break-words whitespace-pre-wrap">
              <div className="text-[30px] font-[700]">{data.title}</div>
              <div className='m-auto'>
                <img
                    src={data.img}
                    className="flex flex-col align-center w-[480px] h-[330px]"
                />
              </div>
              
              <div>{data.content}</div>
            </div>
          </main>
          
        </div>
      </div>
    );
}
