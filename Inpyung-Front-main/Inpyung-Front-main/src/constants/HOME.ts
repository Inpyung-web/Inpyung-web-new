import { Data } from '@/type';

interface Image {
  src: string;
  title: string;
  link: string;
}
const IMAGE_DATA_KO: Image[] = [
  {
    src: '/광주사업 사진자료/광주1.jpg',
    title: '광주 전방, 일신방직\n부지 복합개발',
    link: '/performance/1',
  },
  {
    src: '/인평실적/하노이 빌라.jpg',
    title: '하노이 반푸신도시\n라카스타',
    link: '/performance/2',
  },
  {
    src: '/인평실적/하이브랜드 정면투시도.jpg',
    title: '양재 하이브랜드',
    link: '/performance/3',
  },
  {
    src: '/인평실적/인덕원 대우아파트.jpg',
    title: '인덕원\n대우 아파트',
    link: '/performance/4',
  },
  {
    src: '/인평실적/청량리 현대코아.jpg',
    title: '청량리 현대코아',
    link: '/performance/5',
  },
];

const IMAGE_DATA_EN: Image[] = [
  {
    src: '/광주사업 사진자료/광주1.jpg',
    title: 'Gwangju Front, Ilsinbangjik\nSite Mixed Development',
    link: '/performance/1',
  },
  {
    src: '/인평실적/하노이 빌라.jpg',
    title: 'Hanoi Ban Phuc New Urban Area\nLakasta',
    link: '/performance/2',
  },
  {
    src: '/인평실적/하이브랜드 정면투시도.jpg',
    title: 'Yangjae Highland',
    link: '/performance/3',
  },
  {
    src: '/인평실적/인덕원 대우아파트.jpg',
    title: 'Indukwon\nDaewoo Apartment',
    link: '/performance/4',
  },
  {
    src: '/인평실적/청량리 현대코아.jpg',
    title: 'Chungmu-ro Hyundai Core',
    link: '/performance/5',
  },
];

const IMAGE_DATA_VI: Image[] = [
  {
    src: '/광주사업 사진자료/광주1.jpg',
    title: 'Phát triển khu đa năng\ntrước ở Gwangju',
    link: '/performance/1',
  },
  {
    src: '/인평실적/하노이 빌라.jpg',
    title: 'Bán phúc Từ Sơn, Hà Nội\nLakasta',
    link: '/performance/2',
  },
  {
    src: '/인평실적/하이브랜드 정면투시도.jpg',
    title: 'Yangjae Highland',
    link: '/performance/3',
  },
  {
    src: '/인평실적/인덕원 대우아파트.jpg',
    title: 'Indukwon\nDaewoo Apartment',
    link: '/performance/4',
  },
  {
    src: '/인평실적/청량리 현대코아.jpg',
    title: 'Chungmu-ro Hyundai Core',
    link: '/performance/5',
  },
];

interface Home {
  main: string;
  footer: {
    title: string;
    content: string[];
    img: string;
  }[];
  images: Image[];
}
const HOME_KO: Home = {
  main: '인평은 인간을 위한 가치창조를\n우선으로 합니다.',
  footer: [
    {
      title: 'A Dream Space',
      content: [
        '인평은 인간을 위한 보다 나은 공간창조를 소망합니다.',
        '주거공간, 영업활동공간, 휴식공간 등 인간의 생활환경 개선업무에 주력하고 있습니다.',
      ],
      img: '/광주사업 사진자료/광주1.jpg',
    },
    {
      title: 'A Pioneering Spirit',
      content: [
        '인평은 선구자적 정신으로 미래를 이끌어 갑니다.',
        '앞선사고와 틀을 깨는 감각으로 공간에 숨겨진 가치를 찾아내고 창조적인 발상으로 고객과 함께 성장해 나가고 있습니다.',
      ],
      img: '/광주사업 사진자료/광주2.jpg',
    },
    {
      title: 'A Trustworthy Promise',
      content: [
        '인평은 고객과의 약속을 소중히 합니다.',
        '눈앞에 작은 이익에 연연하지 않고 명예를 우선하는 신뢰의 기업이되고자 노력하고 있습니다.',
      ],
      img: '/광주사업 사진자료/광주3.jpg',
    },
    {
      title: 'A New Paradigm',
      content: [
        '인평은 고객의 행복을 위해 끊임없는 노력과 열정으로 신문화 창조에 앞장섭니다.',
        '인평은 21세기 신문화 창조를 위한 우수한 인재발굴과 끊임없는 연구와 노력을 통해 전문시스템을 갖추고 변화하는 시대흐름에 맞추어 인간을 위한 행복공간의 개척자로서 최선을 다하겠습니다.',
      ],
      img: '/광주사업 사진자료/광주4.jpg',
    },
  ],
  images: IMAGE_DATA_KO,
};

const HOME_EN: Home = {
  main: 'Inpyung prioritizes value creation for humanity.',
  footer: [
    {
      title: 'A Dream Space',
      content: [
        'Inpyeong hopes to create better spaces for humanity.',
        'We focus on improving human living environments such as residential, commercial, and leisure spaces.',
      ],
      img: '/광주사업 사진자료/광주1.jpg',
    },
    {
      title: 'A Pioneering Spirit',
      content: [
        'Inpyeong leads the future with a pioneering spirit.',
        'We discover hidden values in spaces with forward thinking and breaking conventional ideas.',
        'We grow with our customers through creative ideas.',
      ],
      img: '/광주사업 사진자료/광주2.jpg',
    },
    {
      title: 'A Trustworthy Promise',
      content: [
        'Inpyeong values promises with our customers.',
        'We strive to become a trustworthy company that prioritizes honor over immediate profit.',
      ],
      img: '/광주사업 사진자료/광주3.jpg',
    },
    {
      title: 'A New Paradigm',
      content: [
        'Inpyeong pioneers a new culture with relentless effort and passion for customer happiness.',
        'We aim to become leaders in creating happy spaces for humanity by continuously improving our professional system.',
        'We adapt to the changing trends of the era by recruiting excellent talents and conducting constant research.',
      ],
      img: '/광주사업 사진자료/광주4.jpg',
    },
  ],
  images: IMAGE_DATA_EN,
};

const HOME_VI: Home = {
  main: 'Inpyung ưu tiên tạo ra giá trị cho con người.',
  footer: [
    {
      title: 'Một không gian mơ mộng',
      content: [
        'Inpyeong hy vọng tạo ra không gian tốt đẹp hơn cho con người.',
        'Chúng tôi tập trung vào việc cải thiện môi trường sống của con người như không gian sống, kinh doanh và giải trí.',
      ],
      img: '/광주사업 사진자료/광주1.jpg',
    },
    {
      title: 'Tinh thần tiên phong',
      content: [
        'Inpyeong dẫn dắt tương lai với tinh thần tiên phong.',
        'Chúng tôi khám phá ra các giá trị ẩn trong không gian bằng cách nghĩ tiến bộ và phá vỡ các ý tưởng thông thường.',
        'Chúng tôi phát triển cùng khách hàng qua các ý tưởng sáng tạo.',
      ],
      img: '/광주사업 사진자료/광주2.jpg',
    },
    {
      title: 'Một lời hứa đáng tin cậy',
      content: [
        'Inpyeong đánh giá cao các lời hứa với khách hàng của chúng tôi.',
        'Chúng tôi nỗ lực trở thành một công ty đáng tin cậy mà ưu tiên danh dự hơn lợi nhuận ngay lập tức.',
      ],
      img: '/광주사업 사진자료/광주3.jpg',
    },
    {
      title: 'Một mô hình mới',
      content: [
        'Inpyeong tiên phong một văn hóa mới với sự nỗ lực không ngừng và niềm đam mê cho hạnh phúc của khách hàng.',
        'Chúng tôi nhằm trở thành những người dẫn đầu trong việc tạo ra những không gian hạnh phúc cho con người bằng cách liên tục cải thiện hệ thống chuyên môn của mình.',
        'Chúng tôi thích ứng với các xu hướng thay đổi của thời đại bằng cách tuyển dụng các tài năng xuất sắc và tiến hành nghiên cứu liên tục.',
      ],
      img: '/광주사업 사진자료/광주4.jpg',
    },
  ],
  images: IMAGE_DATA_VI,
};

export const HOME: Data<Home> = {
  korean: HOME_KO,
  english: HOME_EN,
  vietnam: HOME_VI,
};
