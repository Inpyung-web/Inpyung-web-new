import { Data } from '@/type';

interface Performance {
  title: string;
  content: {
    title: string;
    introduce: string;
    li: string[];
  };
  img: string[] | string;
}

const PERFORMANCE_KO: Performance[] = [
  {
    title: '광주전방, 일신방직 부지 복합개발',
    content: {
      title: '광주광역시 약 9만평 규모의 원도심 개발 사업',
      introduce:
        "호남권 최대 규모의 백화점 '더 현대 광주'를 유치하였고, 특급 호텔 및 컨벤션 센터 설립, 8개의 글로벌 설계사가 참여한 국제현상설계 공모를 통해 디자인 특화 단지로 조성됩니다. 광주천 일대 수변 조망을 갖추어 광주의 새로운 랜드마크로 거듭날 사업비 4조원, 주거 4,000세대 규모의 초대형 부동산 개발 프로젝트입니다.",
      li: [
        '위치 : 광주광역시 북구 임동 100-3번지 일원',
        '대지면적 : 309,967㎡',
        '사업규모 : 약 4,200세대',
        '공동 사업자 : MBN, 우미건설, 신영',
        '용도 : 주상복합, 쇼핑몰, 호텔, 상업시설, 공원등',
      ],
    },
    img: [
      '/광주사업 사진자료/광주1.jpg',
      '/광주사업 사진자료/광주2.jpg',
      '/광주사업 사진자료/광주9.jpg',
    ],
  },
  {
    title: '하노이 반푸 신도시 라카스타',
    content: {
      title: '하노이 하동지구 중심의 프리미엄 아파트',
      introduce:
        '라카스타 프로젝트는 반푸 신도시 내에서 가장 규모가 큰 사업으로 편의 시설과 녹색 생활 공간의 조화를 중점에 두어 라카스타 타운과 라카스타 아파트를 투자하고 개발하였습니다.',
      li: [
        '위치: 하노이시 하동구 푸라동 반푸 신도시',
        '용도: 아파트, 국제학교, 주민커뮤니티시설, 판매시설, 오피스',
        '대지면적: 73,344m2',
        '연면적: 1,045,562m2',
        '건축면적: 33,870m2',
        '건폐율: 44.37%',
        '규모: 지하 2층~지상 36층, 40층',
        '시행사: 하이브랜드 비냐',
        'CM/PM: 주식회사 인평',
        '교통 : 하노이 도심 지하철 15분, 노이바이 국제공항 차량 40분',
      ],
    },
    img: '/인평실적/하노이 빌라.jpg',
  },
  {
    title: '양재 하이브랜드',
    content: {
      title: '유럽형 쇼핑타운 양재 하이브랜드',
      introduce:
        '유럽형 스트리트 쇼핑타운 하이브랜드는 세계적인 유명 쇼핑몰의 특,장점을 벤치마킹함과 동시에 유럽의 건축디자인 전문그룹과 요코하마 랜드마크타워를 디자인한 야나기사와 그리고 동경대 미야타학장이 참여함으로써 하이브랜드만의 차별화된 디자인과 독창성, 지금까지의 국내 쇼핑몰과는 차원이 다른 고품격쇼핑몰의 대명사로 떠오르게 되었습니다.',
      li: [
        '대지: 약 9,000 평',
        '연면적: 48,000 평',
        '규모: 지상 19층, 지하 3층 (2,000 여대 주차)',
        '시공사: 한화건설',
      ],
    },
    img: '/인평실적/하이브랜드 정면투시도.jpg',
  },
  {
    title: '인덕원 대우 아파트',
    content: {
      title: '2,500 세대 대단지 인덕원 대우아파트',
      introduce:
        '동일방직부지를 개발하여 조성한 2,500세대의 대규모 인덕원 대우아파트는 96년 중앙일보 히트상품으로 선정되었습니다.',
      li: [
        '위치: 경기도 안양시 평촌동',
        '대지: 약 30,000평',
        '규모: 2,500 세대',
        '시공사: 대우건설',
      ],
    },
    img: '/인평실적/인덕원 대우아파트.jpg',
  },

  {
    title: '청량리 현대코아',
    content: {
      title: '청량리가 살아 납니다. 청량리 현대코아',
      introduce:
        '청량리 시장을 재정비하여 만든 현대코아는 청량리 시장을 현대적인 상권으로 탈바꿈하는데 큰 기여를 하였습니다.',
      li: [
        '대지: 약 2,200 평',
        '용도: 판매시설 및 아파트 (주상복합)',
        '규모: 지하7층, 지상21층 (판매시설 약 12,000평 아파트 88세대)',
        '시공자: 현대건설',
      ],
    },
    img: '/인평실적/청량리 현대코아.jpg',
  },
  {
    title: '부천 농축수산물 센터',
    content: {
      title: '수도권 남서부 최대 유통센터',
      introduce:
        '서울주철부지를 최초의 민자 유치로 부천 민자 농축수산물 유통센타를 개발하였습니다.',
      li: [
        ' 대지: 약 12,00 평',
        '용도: 농,축,수산물 도매센타',
        '연면적: 13,000 평',
        '시공자: 롯데건설',
      ],
    },
    img: '/인평실적/부천 농수산물시장.jpg',
  },
];

const PERFORMANCE_EN: Performance[] = [
  {
    title: 'Gwangju Front, Ilsinbangjik Site Mixed Development',
    content: {
      title:
        'A large-scale urban development project in Gwangju Metropolitan City',
      introduce:
        "The project includes the attraction of 'The Hyundai Gwangju', the largest department store in the Honam region, the establishment of a luxury hotel and convention center, and the creation of a design-specialized district through an international design competition involving 8 global design firms. With a project cost of KRW 4 trillion and a scale of 4,000 residential units, it is set to become Gwangju's new landmark, featuring waterfront views along the Gwangju Stream.",
      li: [
        'Location: Buk-gu, Imdong, Gwangju Metropolitan City',
        'Site Area: 309,967㎡',
        'Project Scale: About 4,200 units',
        'Joint Business Partners: MBN, Woomi Construction, Shinyoung',
        'Usage: Mixed-use residential, shopping mall, hotel, commercial facilities, park, etc.',
      ],
    },
    img: [
      '/광주사업 사진자료/광주1.jpg',
      '/광주사업 사진자료/광주2.jpg',
      '/광주사업 사진자료/광주9.jpg',
    ],
  },
  {
    title: 'Hanoi Ban Phuc New Urban Area Lakasta',
    content: {
      title: 'Premium apartments in the heart of Hanoi Hadong District',
      introduce:
        'The La Casta project, located within the Ban Phu New City, is the largest project in the area, focusing on the harmony of convenience facilities and green living spaces, investing and developing La Casta Town and La Casta Apartments.',
      li: [
        'Location: Phu La Dong, Ban Phu New City, Hadong District, Hanoi',
        'Usage: Apartments, international schools, community facilities for residents, retail facilities, offices',
        'Site Area: 73,344m2',
        'Total Floor Area: 1,045,562m2',
        'Building Area: 33,870m2',
        'Building-to-Land Ratio: 44.37%',
        'Scale: Basement 2 floors to 36 floors, 40 floors',
        'Developer: HighBrand Vina',
        'CM/PM: Inpyung Co., Ltd.',
        'Transportation: 15 minutes to downtown Hanoi by subway, 40 minutes to Noi Bai International Airport by car',
      ],
    },
    img: '/인평실적/하노이 빌라.jpg',
  },
  {
    title: 'Yangjae Highland',
    content: {
      title: 'European-style shopping town Yangjae HighBrand',
      introduce:
        'Inspired by world-famous shopping malls and benchmarking their strengths, Yangjae HighBrand, designed in collaboration with a European architectural design group, Yanagisawa, and Professor Miyata from Tokyo University, has emerged as a synonym for high-quality shopping malls, offering a differentiated design and originality unlike any other shopping mall in Korea.',
      li: [
        'Site: About 9,000 pyeong',
        'Total Floor Area: 48,000 pyeong',
        'Scale: 19 floors above ground, 3 floors underground (parking for about 2,000 vehicles)',
        'Construction Company: Hanwha Construction',
      ],
    },
    img: '/인평실적/하이브랜드 정면투시도.jpg',
  },
  {
    title: 'Indukwon Daewoo Apartment',
    content: {
      title: 'Large complex of 2,500 units, Indeokwon Daewoo Apartments',
      introduce:
        'Developed on the site of the former Dongil Textile, the Indeokwon Daewoo Apartments, a large-scale complex of 2,500 units, was selected as a hit product by JoongAng Ilbo in 1996.',
      li: [
        'Location: Pyeongchon-dong, Anyang, Gyeonggi Province',
        'Site: About 30,000 pyeong',
        'Scale: 2,500 units',
        'Construction Company: Daewoo Construction',
      ],
    },
    img: '/인평실적/인덕원 대우아파트.jpg',
  },
  {
    title: 'Chungmu-ro Hyundai Core',
    content: {
      title: 'Revitalizing Cheongnyangni, Hyundai KoA',
      introduce:
        'Hyundai KoA, created by reorganizing the Cheongnyangni market, has made a significant contribution to transforming the Cheongnyangni market into a modern commercial district.',
      li: [
        'Site: About 2,200 pyeong',
        'Usage: Retail facilities and apartments (mixed-use)',
        'Scale: 7 floors underground, 21 floors above ground (about 12,000 pyeong of retail space, 88 apartments)',
        'Constructor: Hyundai Construction',
      ],
    },
    img: '/인평실적/청량리 현대코아.jpg',
  },
  {
    title: 'Bucheon Agricultural and Marine Products Center',
    content: {
      title:
        'The largest distribution center in the southwestern region of the metropolitan area',
      introduce:
        'Developed as the first private investment project on the site of the former Seoul Iron & Steel, the Bucheon Private Agricultural, Livestock, and Fisheries Products Distribution Center has been developed.',
      li: [
        ' Site: About 12,00 pyeong',
        'Usage: Wholesale center for agricultural, livestock, and fisheries products',
        'Total Floor Area: 13,000 pyeong',
        'Constructor: Lotte Construction',
      ],
    },
    img: '/인평실적/부천 농수산물시장.jpg',
  },
];

const PERFORMANCE_VN: Performance[] = [
  {
    title: 'Phát triển khu đa năng Gwangju Front, Ilsinbangjik',
    content: {
      title:
        'Dự án phát triển khu vực trung tâm cũ của thành phố Gwangju với quy mô khoảng 90,000m²',
      introduce:
        "Dự án bao gồm việc thu hút 'The Hyundai Gwangju', trung tâm mua sắm lớn nhất khu vực Honam, xây dựng khách sạn và trung tâm hội nghị cao cấp, và tạo ra một khu vực đặc biệt về thiết kế thông qua cuộc thi thiết kế quốc tế với sự tham gia của 8 công ty thiết kế toàn cầu. Với chi phí dự án 4 nghìn tỷ won và quy mô 4,000 căn hộ, dự án này sẽ trở thành biểu tượng mới của Gwangju, có tầm nhìn hướng ra dòng sông Gwangju.",
      li: [
        'Vị trí: Buk-gu, Imdong, Gwangju',
        'Diện tích khu đất: 309,967㎡',
        'Quy mô dự án: Khoảng 4,200 căn hộ',
        'Đối tác doanh nghiệp: MBN, Woomi Construction, Shinyoung',
        'Mục đích sử dụng: Khu phức hợp, trung tâm mua sắm, khách sạn, cơ sở thương mại, công viên, v.v.',
      ],
    },
    img: [
      '/광주사업 사진자료/광주1.jpg',
      '/광주사업 사진자료/광주2.jpg',
      '/광주사업 사진자료/광주9.jpg',
    ],
  },
  {
    title: 'Khu đô thị mới Hà Nội Ban Phuc Lakasta',
    content: {
      title: 'Căn hộ cao cấp tại trung tâm quận Hadong, Hanoi',
      introduce:
        'Dự án La Casta là dự án lớn nhất trong thành phố mới Ban Phu, tập trung vào sự hài hòa giữa tiện ích và không gian sống xanh, đầu tư và phát triển La Casta Town và La Casta Apartments.',
      li: [
        'Vị trí: Phu La Dong, thành phố mới Ban Phu, quận Hadong, Hanoi',
        'Mục đích sử dụng: Căn hộ, trường học quốc tế, cơ sở cộng đồng, cơ sở bán lẻ, văn phòng',
        'Diện tích khu đất: 73,344m2',
        'Tổng diện tích sàn: 1,045,562m2',
        'Diện tích xây dựng: 33,870m2',
        'Tỷ lệ xây dựng: 44.37%',
        'Quy mô: 2 tầng hầm đến 36 tầng, 40 tầng',
        'Nhà phát triển: HighBrand Vina',
        'CM/PM: Công ty cổ phần Inpyung',
        'Giao thông: 15 phút đến trung tâm Hanoi bằng tàu điện ngầm, 40 phút đến sân bay quốc tế Noi Bai bằng xe hơi',
      ],
    },
    img: '/인평실적/하노이 빌라.jpg',
  },
  {
    title: 'Yangjae Highland',
    content: {
      title: 'Trung tâm mua sắm kiểu Âu tại Yangjae, HighBrand',
      introduce:
        'Lấy cảm hứng từ các trung tâm mua sắm nổi tiếng thế giới và đánh giá cao những điểm mạnh của chúng, HighBrand Yangjae, được thiết kế bởi một nhóm thiết kế kiến trúc Âu, Yanagisawa, và Giáo sư Miyata từ Đại học Tokyo, đã trở thành biểu tượng của trung tâm mua sắm cao cấp, mang lại thiết kế độc đáo và sự sáng tạo không giống bất kỳ trung tâm mua sắm nào khác tại Hàn Quốc.',
      li: [
        'Khu đất: Khoảng 9,000 pyeong',
        'Tổng diện tích sàn: 48,000 pyeong',
        'Quy mô: 19 tầng nổi, 3 tầng hầm (chỗ đậu xe cho khoảng 2,000 xe)',
        'Nhà thầu xây dựng: Hanwha Construction',
      ],
    },
    img: '/인평실적/하이브랜드 정면투시도.jpg',
  },
  {
    title: 'Căn hộ Daewoo Indukwon',
    content: {
      title: 'Khu căn hộ lớn với 2,500 căn hộ tại Indeokwon, Daewoo Apartments',
      introduce:
        'Phát triển trên khu đất của nhà máy dệt Dongil, khu căn hộ Daewoo tại Indeokwon với quy mô lớn 2,500 căn hộ đã được chọn là sản phẩm nổi bật bởi JoongAng Ilbo vào năm 1996.',
      li: [
        'Vị trí: Pyeongchon-dong, Anyang, tỉnh Gyeonggi',
        'Khu đất: Khoảng 30,000 pyeong',
        'Quy mô: 2,500 căn hộ',
        'Nhà thầu xây dựng: Daewoo Construction',
      ],
    },
    img: '/인평실적/인덕원 대우아파트.jpg',
  },
  {
    title: 'Chungmu-ro Hyundai Core',
    content: {
      title: 'Cheongnyangni được tái sinh. Hyundai KoA tại Cheongnyangni',
      introduce:
        'Hyundai KoA, được tạo ra bằng cách tái tổ chức chợ Cheongnyangni, đã đóng góp lớn trong việc chuyển đổi chợ Cheongnyangni thành một khu thương mại hiện đại.',
      li: [
        'Khu đất: Khoảng 2,200 pyeong',
        'Mục đích sử dụng: Cơ sở bán lẻ và căn hộ (khu phức hợp)',
        'Quy mô: 7 tầng hầm, 21 tầng nổi (khoảng 12,000 pyeong cơ sở bán lẻ, 88 căn hộ)',
        'Nhà thầu: Hyundai Construction',
      ],
    },
    img: '/인평실적/청량리 현대코아.jpg',
  },
  {
    title: 'Trung tâm Nông sản và Thuỷ sản Bucheon',
    content: {
      title:
        'Trung tâm phân phối lớn nhất khu vực phía tây nam của khu vực đô thị',
      introduce:
        'Phát triển như dự án đầu tư tư nhân đầu tiên trên khu đất của Seoul Iron & Steel, Trung tâm Phân phối Nông, Lâm, Thủy sản Bucheon đã được phát triển.',
      li: [
        'Khu đất: Khoảng 12,00 pyeong',
        'Mục đích sử dụng: Trung tâm bán buôn nông sản, lâm sản và thủy sản',
        'Tổng diện tích sàn: 13,000 pyeong',
        'Nhà thầu: Lotte Construction',
      ],
    },
    img: '/인평실적/부천 농수산물시장.jpg',
  },
];

export const PERFORMANCE: Data<Performance[]> = {
  korean: PERFORMANCE_KO,
  english: PERFORMANCE_EN,
  vietnam: PERFORMANCE_VN,
};
