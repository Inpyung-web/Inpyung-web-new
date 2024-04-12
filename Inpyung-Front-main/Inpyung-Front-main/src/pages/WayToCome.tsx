import Bus from '@/components/common/Bus';
import Subway from '@/components/common/Subway';
import Title from '@/components/common/Title';
import { WAY } from '@/constants/WAY';
import { useLanguage } from '@/contexts/useLanguage';
import { Data } from '@/type';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
interface busOrSubway {
  bus: string;
  subway: string;
}

const BUS_OR_SUBWAY: Data<busOrSubway> = {
  korean: {
    bus: '버스',
    subway: '지하철',
  },
  english: {
    bus: 'bus',
    subway: 'subway',
  },
  vietnam: {
    bus: 'xe buýt',
    subway: 'xe điện ngầm, tàu điện ngầm',
  },
};
export default function WayToCome() {
  const [language] = useLanguage();
  const way = WAY[language];

  return (
    <div className="flex flex-col w-full gap-4">
      <Title>{way.title}</Title>
      
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div className="text-[25px] font-[600]">{way.address}</div>
        <div className="flex gap-8">
          <div className="text-main">TEL : {way.tel}</div>
          <div className="text-main">FAX : {way.fax}</div>
        </div>
        <Map
          center={{ lat: 37.46701460131, lng: 127.03522419581 }}
          style={{ width: '55%', height: '500px' }}
          level={3}
        >
          <MapMarker
            position={{ lat: 37.46701460131, lng: 127.03522419581 }}
          ></MapMarker>
        </Map>
        <div className="flex gap-4 w-[60%] justify-evenly md:flex-col md:items-center">
          <div className="flex flex-col items-start gap-4 md:items-center mb-6">
            <div className="flex items-center gap-8">
              <Subway />
              <div className="text-[20px] font-[600]">
                {BUS_OR_SUBWAY[language].subway}
              </div>
            </div>
            <div className="flex items-center justify-start">{way.subway}</div>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-center">
            <div className="flex items-center gap-8">
              <Bus />
              <div className="text-[20px] font-[600]">
                {BUS_OR_SUBWAY[language].bus}
              </div>
            </div>
            <div className="flex items-center justify-start">{way.bus}</div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
