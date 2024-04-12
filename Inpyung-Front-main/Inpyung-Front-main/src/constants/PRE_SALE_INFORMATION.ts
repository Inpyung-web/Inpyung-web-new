import { Data } from '@/type';

interface PreSaleInformation {
  title: string;
  name: string;
  index: string;
  list: string[];
}
const PRE_SALE_INFORMATION_KO: PreSaleInformation = {
  title: '분양정보',
  name: '반푸 신도시 라카스타',
  index: '사업개요',
  list: [
    '사업명: 반푸신도시 라카스타',
    '분양일: 2010년 12월',
    '위치: 하노이시 하동구 푸라동 반푸신도시',
    '세대: 4,506 세대',
    '입주시기: 2013 년 5월',
    '문의전화: 84-4-3787-6257',
  ],
};

const PRE_SALE_INFORMATION_EN: PreSaleInformation = {
  title: 'Pre-Sale Infromation',
  name: 'Lakasta, a new town in Banfu',
  index: 'Project Overview',
  list: [
    'Project Name: Lakasta, a new town in Banfu',
    'Pre-sale Date: December 2010',
    'Location: Ban Phuc New Urban Area, Phu La Ward, Hadong District, Hanoi',
    'Units: 4,506 units',
    'Expected Occupancy: May 2013',
    'Inquiries: 84-4-3787-6257',
  ],
};

const PRE_SALE_INFORMATION_VI: PreSaleInformation = {
  title: 'thông tin bán theo lô',
  name: 'Khu đô thị mới Lacasta Banpu',
  index: 'Tổng quan dự án',
  list: [
    'Tên dự án: Khu đô thị mới Lacasta Banpu',
    'Ngày mở bán: Tháng 12 năm 2010',
    'Địa điểm: Khu đô thị mới Ban Phuc, Phường Phú La, Quận Hà Đông, Hà Nội',
    'Số lượng căn hộ: 4,506 căn',
    'Dự kiến nhận nhà: Tháng 5 năm 2013',
    'Liên hệ: 84-4-3787-6257',
  ],
};

export const PRE_SALE_INFORMATION: Data<PreSaleInformation> = {
  korean: PRE_SALE_INFORMATION_KO,
  vietnam: PRE_SALE_INFORMATION_VI,
  english: PRE_SALE_INFORMATION_EN,
};
