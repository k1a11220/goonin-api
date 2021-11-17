const benefitList = [
  {
    id: 0, // 서비스 아이디
    name: "", //업체 이름
    category: "", //카테고리
    location: "", //지역
    address: "", //주소
    summary: "", //상세페이지 소개 멘트
    thumbnail: "", //카드 썸네일
    mainBenefit: "", //혜택 요약
    benefits: [""], //상세 혜택
    conditions: [""], //혜택 조건
    otherOpts: [""], //기타 주의사항
    dtlImgs: [""], //상세페이지 이미지
    dtlLink: "", //혜택 상세 링크 (이메일 포함)
    contactNb: "", //연락처
    period: "", //행사기간
  },
];

export const getBenefitList = () => benefitList;
