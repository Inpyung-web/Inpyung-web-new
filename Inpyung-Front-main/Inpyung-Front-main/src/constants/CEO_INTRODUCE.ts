import { Data } from '@/type';
interface CEO {
  company: string;
  introduce: string;
}
const CEO_INTRODUCE_KO: CEO = {
  company: '(주) 인평 대표 이사',
  introduce: `네티즌 여러분 안녕하십니까? 
홈페이지를 방문해 주신것을 진심으로 감사드립니다. 

급변하는 현대 사회는 인류의 생활과 패턴을 다양하게 변화시키고 있습니다.
변화하는 환경에 적응하고 새로운 시대의 리더가 되기위해서는 끊임 없는 혁신과 개발을 이루어 내야 합니다. 

인평의 기업 활동은 인간의 생활 환경을 근본적으로 보장하는 주거공간, 영업공간, 휴식공간 등 생활환경을 개선하는 업무를 주력으로 하고있습니다. 
인평은 인간중심으로 조직을 효율적으로 운영하고 창조적인 업무환경 개선을 통해 기업의 발전을 이루어냄은 물론, 
고객에게는 성실한 자세로 편익과 발전을 도모하는 협력자가 되도록 노력하겠습니다.
인평은 고객을 성공시키고, 고객의 행복을 통해서 회사가 발전 할 수 있음을 인식하고 있습니다.
인평은 고객과 인류가 모두 행복해지는 그날 까지, 기업 경영의 프론티어로 앞서가겠습니다.

여러분 모두의 성원에 감사드리며 밝고 풍요로운 미래가 여러분과 함께 하시길 바랍니다. 
감사합니다.`,
};

const CEO_INTRODUCE_EN: CEO = {
  company: 'CEO of Inpyung Co., Ltd',
  introduce: `Hello, netizens? 
Thank you very much for visiting our website. 
The rapidly changing modern society is changing human life and patterns in various ways.

In order to adapt to the changing environment and become a leader in a new era, we must achieve constant innovation and development. 
Inpyung's corporate activities focus on improving living conditions such as residential, business, and rest areas that fundamentally guarantee human living conditions. 

In-pyung will strive to become a partner who efficiently operates the organization centered on humans and promotes the development of the company by improving the creative work environment, as well as sincerely promoting benefits and development to customers.
In-pyung recognizes that the company can succeed customers and develop through the happiness of customers.
In-pyung will lead the way to the frontiers of corporate management until the day both customers and humanity are happy.

Thank you all for your support and I hope a bright and prosperous future will be with you. 
Thank you`,
};

const CEO_INTRODUCE_VI: CEO = {
  company: '(chủ yếu) giám đốc đại diện của Inpyung',
  introduce: `Xin chào các bạn netizen 
Chân thành cảm ơn bạn đã ghé thăm trang chủ. 
Một xã hội hiện đại thay đổi nhanh chóng đang thay đổi cuộc sống và mô hình của loài người.

Để thích nghi với môi trường thay đổi và trở thành một nhà lãnh đạo của thời đại mới, chúng ta phải tạo ra sự đổi mới và phát triển không ngừng. 
Hoạt động doanh nghiệp của Inpyung chủ yếu là công việc cải thiện môi trường sống như không gian sống, không gian kinh doanh, không gian nghỉ ngơi đảm bảo cơ bản môi trường sống của con người. 

Nhân dân sẽ nỗ lực trở thành đối tác thúc đẩy sự phát triển và tiện ích cho khách hàng bằng thái độ chân thành cũng như đạt được sự phát triển của doanh nghiệp thông qua việc cải thiện môi trường làm việc sáng tạo và vận hành tổ chức một cách hiệu quả với trọng tâm là con người.
Nhận thức được rằng thông qua sự thành công của khách hàng, công ty có thể phát triển thông qua hạnh phúc của khách hàng.
Inpyung sẽ dẫn đầu với tư cách là một tiền đạo quản lý doanh nghiệp cho đến ngày khách hàng và nhân loại đều hạnh phúc.

Cảm ơn sự ủng hộ của tất cả các bạn và chúc các bạn có một tương lai tươi sáng và phong phú. 
'Cám ơn ạ'`,
};
export const CEO_INTRODUCE: Data<CEO> = {
  korean: CEO_INTRODUCE_KO,
  english: CEO_INTRODUCE_EN,
  vietnam: CEO_INTRODUCE_VI,
};
