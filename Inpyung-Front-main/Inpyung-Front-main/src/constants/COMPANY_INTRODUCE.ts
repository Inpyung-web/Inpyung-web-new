import { Data } from '@/type';

export interface CompanyIntroduce {
  title: string;
  contents: string[];
  img: string;
  type: 'left' | 'right';
}

const COMPANY_INTRODUCE_KO: CompanyIntroduce[] = [
  {
    title: 'A Dream Space',
    contents: [
      '인평은 인간을 위한 보다 나은 공간창조를 소망합니다.',
      '주거공간, 영업활동공간, 휴식공간 등 인간의 생활환경 개선업무에 주력하고 있습니다.',
    ],
    img: '/광주사업 사진자료/광주1.jpg',
    type: 'left',
  },
  {
    title: 'A Pioneering Spirit',
    contents: [
      '인평은 선구자적 정신으로 미래를 이끌어 갑니다.',
      '앞선사고와 틀을 깨는 감각으로 공간에 숨겨진 가치를 찾아내고 창조적인 발상으로 고객과 함께 성장해 나가고 있습니다.',
    ],
    img: '/광주사업 사진자료/광주2.jpg',
    type: 'right',
  },
  {
    title: 'A Trustworthy Promise',
    contents: [
      '인평은 고객과의 약속을 소중히 합니다.',
      '눈앞에 작은 이익에 연연하지 않고 명예를 우선하는 신뢰의 기업이되고자 노력하고 있습니다.',
    ],
    img: '/광주사업 사진자료/광주3.jpg',
    type: 'left',
  },
  {
    title: 'A New Paradigm',
    contents: [
      '인평은 고객의 행복을 위해 끊임없는 노력과 열정으로 신문화 창조에 앞장섭니다.',
      '인평은 21세기 신문화 창조를 위한 우수한 인재발굴과 끊임없는 연구와 노력을 통해 전문시스템을 갖추고 변화하는 시대',
      '흐름에 맞추어 인간을 위한 행복공간의 개척자로서 최선을 다하겠습니다.',
    ],
    img: '/광주사업 사진자료/광주4.jpg',
    type: 'right',
  },
];

const COMPANY_INTRODUCE_EN: CompanyIntroduce[] = [
  {
    title: 'A Dream Space',
    contents: [
      'Inpyung hopes to create a better space for humans',
      'We are focusing on improving human living conditions such as residential spaces, business activity spaces, and rest areas',
    ],
    img: '/광주사업 사진자료/광주1.jpg',
    type: 'left',
  },
  {
    title: 'A Pioneering Spirit',
    contents: [
      'Inpraise leads the future with a pioneering spirit',
      'With forward thinking and a sense of breaking the mold, we are discovering hidden values in space and growing with customers with creative ideas.',
    ],
    img: '/광주사업 사진자료/광주2.jpg',
    type: 'right',
  },
  {
    title: 'A Trustworthy Promise',
    contents: [
      "People's reviews value their commitments to customers",
      'We are trying to become a company of trust that prioritizes honor without worrying about small profits in front of our eyes',
    ],
    img: '/광주사업 사진자료/광주3.jpg',
    type: 'left',
  },
  {
    title: 'A New Paradigm',
    contents: [
      'Inpyung takes the lead in creating new newspapers with constant effort and enthusiasm for the happiness of its customers',
      'Inpraise is an era in which a professional system is established and changed through the discovery of excellent talents and constant research and efforts to create new newspapers in the 21st century',
      'I will do my best as a pioneer of happy spaces for humans in line with the flow,',
    ],
    img: '/광주사업 사진자료/광주4.jpg',
    type: 'right',
  },
];

const COMPANY_INTRODUCE_VI: CompanyIntroduce[] = [
  {
    title: 'Một Không Gian Mơ Mộng',
    contents: [
      'Inpyung hi vọng tạo ra không gian tốt hơn cho con người.',
      'Chúng tôi chuyên tâm vào việc cải thiện môi trường sống của con người như không gian sống, không gian kinh doanh, không gian nghỉ ngơi, vv.',
    ],
    img: '/광주사업 사진자료/광주1.jpg',
    type: 'left',
  },
  {
    title: 'Tinh Thần Tiên Phong',
    contents: [
      'Inpyung dẫn đầu tương lai bằng tinh thần tiên phong.',
      'Chúng tôi tìm ra giá trị ẩn sau không gian bằng tư duy tiên tiến và phá vỡ khuôn mẫu, cùng với sự sáng tạo để phát triển cùng khách hàng.',
    ],
    img: '/광주사업 사진자료/광주2.jpg',
    type: 'right',
  },
  {
    title: 'Lời Hứa Đáng Tin Cậy',
    contents: [
      'Inpyung coi trọng lời hứa với khách hàng.',
      'Chúng tôi nỗ lực trở thành một doanh nghiệp đáng tin cậy, ưu tiên danh dự hơn lợi nhuận ngắn hạn.',
    ],
    img: '/광주사업 사진자료/광주3.jpg',
    type: 'left',
  },
  {
    title: 'Một Mô Hình Mới',
    contents: [
      'Inpyung luôn dẫn đầu trong việc tạo ra văn hóa mới để mang lại hạnh phúc cho khách hàng.',
      'Chúng tôi sẽ luôn nỗ lực và nhiệt huyết trong việc tìm kiếm và nghiên cứu để tạo ra hệ thống chuyên môn tốt nhất, đáp ứng xu hướng thay đổi của thế giới hiện đại.',
      'Chúng tôi cam kết là người khai phá không gian hạnh phúc cho con người theo dõi xu hướng của thời đại.',
    ],
    img: '/광주사업 사진자료/광주4.jpg',
    type: 'right',
  },
];

export const COMPANY_INTRODUCE: Data<CompanyIntroduce[]> = {
  korean: COMPANY_INTRODUCE_KO,
  english: COMPANY_INTRODUCE_EN,
  vietnam: COMPANY_INTRODUCE_VI,
};
