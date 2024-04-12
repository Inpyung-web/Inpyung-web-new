import { Data } from '@/type';

interface HistoryData {
  title: string;
  introduce: string;
}

const HISTORY_KO: HistoryData = {
  title: '인평연혁',
  introduce:
  `인평은 건전한 기업윤리와 인류애를 바탕으로 
  기업활동을 전개해나가고 있습니다.`,
};

const HISTORY_EN: HistoryData = {
  title: 'Inpyung History',
  introduce:
    'Inpyung conducts its business activities based on sound corporate ethics and philanthropy.',
};

const HISTORY_VI: HistoryData = {
  title: 'Lịch sử công ty',
  introduce:
    'Inpyung tiến hành các hoạt động kinh doanh dựa trên đạo đức doanh nghiệp và lòng nhân ái.',
};

export const HISTORY: Data<HistoryData> = {
  korean: HISTORY_KO,
  english: HISTORY_EN,
  vietnam: HISTORY_VI,
};
