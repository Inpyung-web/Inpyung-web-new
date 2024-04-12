import { Data } from '@/type';

export interface Content {
  title: string;
  content: string;
  img: string;
}

const BUSINESS_AREA_KO: Record<string, Content> = {
  REAL_ESTATE: {
    title: '부동산개발',
    content:
      '부동산 개발 노하우를 바탕으로 고객의 이익과 가치 창출에 최선을 다 하겠습니다. \n인평의 역동성은 창의적인 비젼과 강력한 추진력을 갖춘 맨파워에서 비롯됩니다.\n풍부한 현장경험을 바탕으로한 전문가의 ‘기술력,’\n합리적인 분석과 전문시스템을 통한 ‘정보력,’\n흔들리지 않는 튼튼한 ‘자본력’으로\n아파트, 오피스, 유통상업시설 등의 개발 노하우를 바탕으로 부동산에 새로운 가치를 부여하고 고객의 이익과 가치 창출에 최선을 다 하겠습니다.',
    img: '/인평실적/하노이 끌레브.jpg',
  },
  ICT_SERVICE: {
    title: '정보통신서비스',
    content:
      '언제 어디서나 상호작용적 커뮤니케이션이 가능한 세상 유비쿼터스 (Ubiquitous) 세상을 실행해 갑니다.\n인평은 국방부 전자입찰시스템을 개발하였던 기술력을 바탕으로, 고객과 기업간의 유기적인 정보화와 효율적인 비즈니스 프로세스 구현을 위해 U-Business 에 앞장서겠으며 부동산을 개발, 유통서비스, 레져분야에 이르기까지 언제 어디서나 상호작용적 커뮤니케이션이 가능한 세상 유비쿼터스 (Ubiquitous) 세상을 실현하여 행복한 미래를 열어가겠습니다.',
    img: '/인평실적/하노이 빌라.jpg',
  },
  GOLF_RESORT: {
    title: '골프장 & 종합리조트사업',
    content:
      '골프장, 종합리조트 사업을 추진하여 보다 나은 행복공간을 만들어 가겠습니다.\n인평은 골프장, 종합리조트사업을 추진하여 더욱더 신뢰받는 기업이 되겠습니다. \n매일 반복되는 현대인에게 쉴 수 있는 보다 나은 공간을 제공함으로서 모든 사람들이 편안하고 행복한 삶을 누리게 하는 것이 인평이 추구하는 휴먼유토피아의 세상입니다.',
    img: '/인평실적/하노이 빌라.jpg',
  },
  CIRCULATION: {
    title: '유통서비스',
    content:
      '인평의 새로운 유통시스템은 고객의 풍요로운 쇼핑문화를 제공합니다. \n인평은 유럽풍 패션타운 하이브랜드의 개발 과정에서 축척된 유통서비스와 마케팅 노하우를 바탕으로 각 분야 전문가들의 유기적인 협력을 통해 제2, 제3의 하이브랜드를 건립하겠으며 대한민국에서 새로운 유통시스템을 만들어 가겠습니다.',
    img: '/인평실적/하노이 빌라.jpg',
  },
};

const BUSINESS_AREA_EN: Record<string, Content> = {
  REAL_ESTATE: {
    title: 'Real estate development',
    content:
      "Based on real estate development know-how, we will do our best to create profit and value for our customers. \nThe dynamism of human criticism comes from manpower with creative vision and strong drive.\nExpert 'technology' with rich field experience,\n'Information power' through rational analysis and specialized systems,\nwith a sturdy 'capital power' that won't falter.\nBased on development know-how such as apartments, offices, and distribution commercial facilities, we will give new value to real estate and do our best to create customer profits and value.",
    img: '/인평실적/하노이 끌레브.jpg',
  },
  ICT_SERVICE: {
    title: 'Information and communication services',
    content:
      "We are executing a ubiquitous world where interactive communication is possible anytime, anywhere.\nBased on the technology that developed the Ministry of National Defense's electronic bidding system, Inpyung will take the lead in U-Business for organic informatization and efficient business process implementation between customers and companies, and will open a happy future by realizing a world where interactive communication is possible anytime, anywhere from real estate development, distribution service, and leisure.",
    img: '/인평실적/하노이 빌라.jpg',
  },
  GOLF_RESORT: {
    title: 'Golf Course & General Resort Business',
    content:
      'We will promote the golf course and general resort business to create a better space for happiness.\nInpyung will become a more trusted company by promoting the golf course and general resort business. \nIt is the world of human utopia that human opinion pursues to make everyone enjoy a comfortable and happy life by providing a better space to rest for modern people who repeat every day.',
    img: '/인평실적/하노이 빌라.jpg',
  },
  CIRCULATION: {
    title: 'Distribution services',
    content:
      "Infinite's new distribution system provides a rich shopping culture for our customers. \nBased on the distribution service and marketing know-how accumulated in the development process of European-style fashion town high brands, Inpyung will build the second and third high brands through organic cooperation with experts in each field, and we will create a new distribution system in Korea.",
    img: '/인평실적/하노이 빌라.jpg',
  },
};

const BUSINESS_AREA_VI: Record<string, Content> = {
  REAL_ESTATE: {
    title: 'Phát Triển Bất Động Sản',
    content:
      "Chúng tôi sẽ cố gắng hết sức để tạo ra lợi ích và giá trị cho khách hàng dựa trên bí quyết phát triển bất động sản. \nSự năng động của nhân bình xuất phát từ tầm nhìn sáng tạo và sức đẩy mạnh mẽ.\n'Kỹ năng kỹ thuật',\n' của chuyên gia dựa trên kinh nghiệm thực tế phong phú 'Sức mạnh thông tin',\nthông qua hệ thống chuyên môn và phân tích hợp lý Với 'sức mạnh tư bản' vững chắc không hề lay chuyển\nTrên cơ sở bí quyết phát triển căn hộ, văn phòng, cơ sở thương mại lưu thông… chúng tôi sẽ tạo ra giá trị mới cho bất động sản và cố gắng hết sức để tạo ra lợi ích và giá trị cho khách hàng.",
    img: '/인평실적/하노이 끌레브.jpg',
  },
  ICT_SERVICE: {
    title: 'dịch vụ thông tin truyền thông',
    content:
      'Chúng tôi đang thực hiện một thế giới Ubiquitous, một thế giới có khả năng giao tiếp tương tác mọi lúc mọi nơi.\nDựa trên công nghệ phát triển hệ thống đấu thầu điện tử của Bộ Quốc phòng, Inpyung sẽ đi đầu trong U-Business để thông tin hóa hữu cơ giữa khách hàng và doanh nghiệp và hiện thực hóa thế giới Ubiquitous, nơi có thể giao tiếp tương tác bất động sản bất động sản bất cứ lúc nào, bất cứ nơi đâu.',
    img: '/인평실적/하노이 빌라.jpg',
  },
  GOLF_RESORT: {
    title: 'Dự án sân golf & khu nghỉ dưỡng tổng hợp',
    content:
      'Chúng tôi sẽ thúc đẩy việc kinh doanh sân golf, khu nghỉ dưỡng tổng hợp để tạo ra một không gian hạnh phúc tốt hơn.\nInpyung sẽ trở thành doanh nghiệp đáng tin cậy hơn khi xúc tiến dự án sân golf, khu nghỉ dưỡng tổng hợp. \nĐó là thế giới của Human Utopia mà Nhân Bình theo đuổi, giúp mọi người có một cuộc sống thoải mái và hạnh phúc bằng cách cung cấp một không gian tốt hơn cho những người hiện đại lặp đi lặp lại hàng ngày.',
    img: '/인평실적/하노이 빌라.jpg',
  },
  CIRCULATION: {
    title: 'dịch vụ lưu thông',
    content:
      'Hệ thống phân phối mới của Inpyung mang đến một nền văn hóa mua sắm phong phú cho khách hàng. \nInpyung sẽ xây dựng thương hiệu thứ hai và thứ ba thông qua sự hợp tác hữu cơ của các chuyên gia trong các lĩnh vực dựa trên các dịch vụ phân phối và bí quyết marketing được xây dựng trong quá trình phát triển thương hiệu cao cấp theo phong cách châu Âu. ',
    img: '/인평실적/하노이 빌라.jpg',
  },
};

export const BUSINESS_AREA: Data<Record<string, Content>> = {
  korean: BUSINESS_AREA_KO,
  english: BUSINESS_AREA_EN,
  vietnam: BUSINESS_AREA_VI,
};
