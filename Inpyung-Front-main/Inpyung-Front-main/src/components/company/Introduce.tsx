import { CompanyIntroduce } from '@/constants/COMPANY_INTRODUCE';

export default function Introduce({ data }: { data: CompanyIntroduce }) {
  return (
    <div>
      {data.type === 'left' && (
        <div className="flex gap-8 md:flex-col-reverse md:gap-2">
          <div className="basis-1/2">
            <img src={data.img} className="aspect-[16/11]" />
          </div>
          <div className="flex flex-col justify-between basis-1/2 md:gap-2">
            <h1 className="font-[700] text-inpyung text-[80px]  lg:text-[40px] leading-[80px] lg:leading-[40px]">
              {data.title}
            </h1>
            <div className="flex flex-col gap-6 lg:gap-2">
              {data.contents.map((content) => (
                <div className="text-[30px] leading-10 lg:text-[15px] lg:leading-[15px]">
                  {content}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {data.type === 'right' && (
        <div className="flex gap-8 md:flex-col md:gap-2">
          <div className="flex flex-col justify-between basis-1/2 md:gap-2">
            <h1 className="font-[700] text-inpyung text-[80px] lg:text-[40px] leading-[80px] lg:leading-[40px]">
              {data.title}
            </h1>
            <div className="flex flex-col gap-6 lg:gap-2">
              {data.contents.map((content) => (
                <div className="text-[30px] leading-10 lg:text-[15px] lg:leading-[15px]">
                  {content}
                </div>
              ))}
            </div>
          </div>
          <div className="basis-1/2">
            <img src={data.img} className="aspect-[16/11]" />
          </div>
        </div>
      )}
    </div>
  );
}
