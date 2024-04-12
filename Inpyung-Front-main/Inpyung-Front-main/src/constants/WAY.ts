import { Data } from '@/type';

type Direction = {
  title: string;
  subtitle: string;
  address: string;
  subway: string;
  bus: string;
  tel: string;
  fax: string;
};

const WAY_KO: Direction = {
  title: '오시는길',
  subtitle: '인평 본사 위치',
  address: '서울 서초구 양재동 215 하이브랜드 리빙관 14층',
  subway: '신분당선 양재시민의숲역 하차 후, 5번출구 약 도보 15분 이동',
  bus: '하이브랜드.코스트코.이마트 정류장 하차 / 양곡도매시장 정류장 하차',
  tel: '02.2155.0323',
  fax: '02.2155.0307',
};

const WAY_EN: Direction = {
  title: 'Directions',
  subtitle: 'Inpyeong office location',
  address:
    '14th Floor, Highland Living Building, 215 Yangjae-dong, Seocho-gu, Seoul',
  subway:
    "Approximately 15 minutes on foot from Exit 5 of Yangjae Citizen's Forest Station, Shinbundang Line",
  bus: 'Get off at Highland.Costco.Emart Bus Stop / Get off at Yanggok Wholesale Market Bus Stop',
  tel: '02.2155.0323',
  fax: '02.2155.0307',
};

const WAY_VI: Direction = {
  title: 'Chỉ đường',
  subtitle: 'Địa chỉ văn phòng Inpyeong',
  address:
    'Tầng 14, Tòa nhà Highland Living, số 215 Yangjae-dong, Quận Seocho-gu, Seoul',
  subway:
    'Khoảng 15 phút đi bộ từ Lối ra 5 của Ga Rừng Công dân Yangjae, Đường sắt Shinbundang',
  bus: 'Xuống ở Bến xe buýt Highland.Costco.Emart / Xuống ở Bến xe buýt Thị trường Bán buôn Yanggok',
  tel: '02.2155.0323',
  fax: '02.2155.0307',
};

export const WAY: Data<Direction> = {
  korean: WAY_KO,
  vietnam: WAY_VI,
  english: WAY_EN,
};
