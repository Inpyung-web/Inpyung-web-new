import { Data } from '@/type';

export interface Navbar {
  title: string;
  link: string;
  subMenu?: {
    title: string;
    link: string;
  }[];
}

const NAVBAR_KO: Navbar[] = [
  {
    title: '회사소개',
    subMenu: [
      {
        title: '기업이념',
        link: '/introduce/company',
      },
      {
        title: '인평연혁',
        link: '/introduce/history',
      },
      {
        title: 'CEO',
        link: '/introduce/ceo',
      },
    ],
    link: '/introduce/company',
  },
  {
    title: '사업영역',
    link: '/businessarea/real-estate',
    subMenu: [
      {
        title: '부동산개발',
        link: '/businessarea/real-estate',
      },
      { title: '정보통신서비스', link: '/businessarea/ict-service' },
      { title: '골프장 & 종합리조트사업', link: '/businessarea/golf-resort' },
      { title: '유통서비스', link: '/businessarea/circulation' },
    ],
  },
  {
    title: '주요실적',
    subMenu: [
      { title: '광주전방, 일신방직 부지 복합개발', link: '/performance/1' },
      { title: '하노이 반푸 신도시 라카스타', link: '/performance/2' },
      { title: '양재 하이브랜드', link: '/performance/3' },
      { title: '인덕원 대우 아파트', link: '/performance/4' },
      { title: '청량리 현대코아', link: '/performance/5' },
      { title: '부천 농축수산물 센터', link: '/performance/6' },
    ],
    link: '/performance',
  },
  { title: '분양정보', link: '/pre-sale-info' },
  { title: '오시는길', link: '/way' },
];

const NAVBAR_EN = [
  {
    title: 'Company Introduction',
    subMenu: [
      {
        title: 'Corporate Philosophy',
        link: '/introduce/company',
      },
      {
        title: 'Inpyung History',
        link: '/introduce/history',
      },
      {
        title: 'CEO',
        link: '/introduce/ceo',
      },
    ],
    link: '/introduce/company',
  },
  {
    title: 'Business Areas',
    link: '/businessarea/real-estate',
    subMenu: [
      {
        title: 'Real estate development',
        link: '/businessarea/real-estate',
      },
      {
        title: 'Information and communication services',
        link: '/businessarea/ict-service',
      },
      {
        title: 'Golf Course & General Resort Business',
        link: '/businessarea/golf-resort',
      },
      { title: 'Distribution services', link: '/businessarea/circulation' },
    ],
  },
  {
    title: 'Key Achievements',
    subMenu: [
      {
        title: 'Gwangju Front, Ilsinbangjik Site Mixed Development',
        link: '/performance/1',
      },
      {
        title: 'Hanoi Ban Phuc New Urban Area Lakasta',
        link: '/performance/2',
      },
      { title: 'Yangjae Highland', link: '/performance/3' },
      { title: 'Indukwon Daewoo Apartment', link: '/performance/4' },
      { title: 'Chungmu-ro Hyundai Core', link: '/performance/5' },
      {
        title: 'Bucheon Agricultural and Marine Products Center',
        link: '/performance/6',
      },
    ],
    link: '/performance',
  },
  { title: 'Sales Information', link: '/pre-sale-info' },
  { title: 'Directions', link: '/way' },
];

const NAVBAR_VI = [
  {
    title: 'Giới Thiệu Công Ty',
    subMenu: [
      {
        title: 'Triết Lý Doanh Nghiệp',
        link: '/introduce/company',
      },
      {
        title: 'Lịch Sử Inpyung',
        link: '/introduce/history',
      },
      {
        title: 'CEO',
        link: '/introduce/ceo',
      },
    ],
    link: '/introduce/company',
  },
  {
    title: 'khai thác bất động sản',
    link: '/businessarea/real-estate',
    subMenu: [
      {
        title: 'Phát Triển Bất Động Sản',
        link: '/businessarea/real-estate',
      },
      {
        title: 'dịch vụ thông tin truyền thông',
        link: '/businessarea/ict-service',
      },
      {
        title: 'Dự án sân golf & khu nghỉ dưỡng tổng hợp',
        link: '/businessarea/golf-resort',
      },
      { title: 'dịch vụ lưu thông', link: '/businessarea/circulation' },
    ],
  },
  {
    title: 'Thành Tích Chính',
    subMenu: [
      {
        title: 'Phát triển khu đa năng Gwangju Front, Ilsinbangjik',
        link: '/performance/1',
      },
      {
        title: 'Khu đô thị mới Hà Nội Ban Phuc Lakasta',
        link: '/performance/2',
      },
      { title: 'Yangjae Highland', link: '/performance/3' },
      { title: 'Căn hộ Daewoo Indukwon', link: '/performance/4' },
      { title: 'Chungmu-ro Hyundai Core', link: '/performance/5' },
      {
        title: 'Trung tâm Nông sản và Thuỷ sản Bucheon',
        link: '/performance/6',
      },
    ],
    link: '/performance',
  },
  { title: 'Thông Tin Bán Hàng', link: '/pre-sale-info' },
  { title: 'Chỉ Đường', link: '/way' },
];

export const NAVBAR: Data<Navbar[]> = {
  korean: NAVBAR_KO,
  english: NAVBAR_EN,
  vietnam: NAVBAR_VI,
};
