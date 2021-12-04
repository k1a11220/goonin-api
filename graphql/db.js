const benefitList = [
  {
    id: 0, // 서비스 아이디
    name: "롯데시네마", //업체 이름
    category: "문화", //카테고리
    location: "전국", //지역
    address: "", //주소
    summary: "", //상세페이지 소개 멘트
    thumbnail: "", //카드 썸네일
    mainBenefit: "2D영화 최대 5천원 할인", //혜택 요약
    benefits: [
      "일반 2D 영화 주중 7천원, 주말 8천원(동반3인)",
      "3D 영화 주중 8천원, 주말 9천원(동반3인)",
      "매점 콤보세트 2천원 할인(더블콤보 4천원 할인)",
    ], //상세 혜택
    conditions: ["휴가증 지참 필수"], //혜택 조건
    otherOpts: [
      " 4D, 샤롯데관 등 스페셜관 할인 불가",
      "기타 할인과 중복 불가",
      "일부 영화관 매점 혜택 상이.",
    ], //기타 주의사항
    dtlImgs: [""], //상세페이지 이미지
    dtlLink: "", //혜택 상세 링크 (이메일 포함)
    contactNb: "", //연락처
    period: "2021-12-31", //행사기간
  },
  {
    id: 1, // 서비스 아이디
    name: "CGV", //업체 이름
    category: "문화", //카테고리
    location: "전국", //지역
    address: "", //주소
    summary: "", //상세페이지 소개 멘트
    thumbnail: "", //카드 썸네일
    mainBenefit: "2D영화 최대 6천원 할인", //혜택 요약
    benefits: ["2D : 7,000원 / 3D : 8,000원", "더블콤보 5000원 할인"], //상세 혜택
    conditions: ["휴가증, 외출/외박증 지참 필수"], //혜택 조건
    otherOpts: [
      "온라인 예매 가능",
      "나라사랑 포털, 청년드림 로그인 후 CGV 군인 할인 메뉴 선택 (CJ ONE 가입 필수)",
    ], //기타 주의사항
    dtlImgs: [""], //상세페이지 이미지
    dtlLink: "", //혜택 상세 링크 (이메일 포함)
    contactNb: "", //연락처
    period: "2021-12-31", //행사기간
  },
  {
    id: 2, // 서비스 아이디
    name: "VIPS", //업체 이름
    category: "음식", //카테고리
    location: "전국", //지역
    address: "", //주소
    summary: "", //상세페이지 소개 멘트
    thumbnail: "", //카드 썸네일
    mainBenefit: "주문금액 10만원 한도 내 25% 할인", //혜택 요약
    benefits: [
      "할인 전 주문금액 10만원 한도 내 25% 할인(최대 2만 5천원)",
      "할인 전 주문금약 10만원 한도 내 15% 할인(최대 1만 5천원) 적용 후 제휴신용카드 할인결제 1회 중복 가능",
    ], //상세 혜택
    conditions: ["신분증 또는 나라사랑카드 + 휴가, 외출, 외박증 지참 필수"], //혜택 조건
    otherOpts: [
      "타 쿠폰 및 행사, 제휴할인 중복 불가",
      "사회복무요원은 평일에 한하여 사용 가능",
      "통신사 및 CJ임직원 할인 중복 불가",
      "일부제품은 할인 적용 불가",
    ], //기타 주의사항
    dtlImgs: [""], //상세페이지 이미지
    dtlLink: "", //혜택 상세 링크 (이메일 포함)
    contactNb: "", //연락처
    period: "2022-09-30", //행사기간
  },
  {
    id: 3, // 서비스 아이디
    name: "에버랜드", //업체 이름
    category: "여행", //카테고리
    location: "", //지역
    address: "", //주소
    summary: "", //상세페이지 소개 멘트
    thumbnail: "", //카드 썸네일
    mainBenefit: "본인 무료이용", //혜택 요약
    benefits: ["본인 무료이용"], //상세 혜택
    conditions: ["휴가증/외박증, 신분증 제시"], //혜택 조건
    otherOpts: [
      "에버랜드 정문 우측 '예매티켓 교환처'에 지정 서류 제시 및 본인 확인 후 교환권 수령",
      "휴가 기간 중 1회, 본인에 한하여 이용가능",
      "사회복무요원은 평일에 한하여 이용 가능",
    ], //기타 주의사항
    dtlImgs: [""], //상세페이지 이미지
    dtlLink: "", //혜택 상세 링크 (이메일 포함)
    contactNb: "", //연락처
    period: "2021-09-30", //행사기간
  },
  {
    id: 4, // 서비스 아이디
    name: "롯데월드", //업체 이름
    category: "여행", //카테고리
    location: "", //지역
    address: "", //주소
    summary: "", //상세페이지 소개 멘트
    thumbnail: "", //카드 썸네일
    mainBenefit: "50% 할인", //혜택 요약
    benefits: ["1인당 1일권 3만원", "야간권 2만원 대(24,500원)"], //상세 혜택
    conditions: ["휴가증/외박증, 신분증 제시"], //혜택 조건
    otherOpts: ["기타우대 및 카드 할인과 중복적용 안됨"], //기타 주의사항
    dtlImgs: [""], //상세페이지 이미지
    dtlLink: "", //혜택 상세 링크 (이메일 포함)
    contactNb: "", //연락처
    period: "2021-12-31", //행사기간
  },
  {
    id: 5, // 서비스 아이디
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
  {
    id: 6, // 서비스 아이디
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
  {
    id: 7, // 서비스 아이디
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
  {
    id: 8, // 서비스 아이디
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
  {
    id: 9, // 서비스 아이디
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
  {
    id: 10,
    name: "",
    category: "",
    location: "",
    address: "",
    summary: "",
    thumbnail: "",
    mainBenefit: "",
    benefits: [""],
    conditions: [""],
    otherOpts: [""],
    dtlImgs: [""],
    dtlLink: "",
    contactNb: "",
    period: "",
  },
];
export const getBenefitList = () => benefitList;

export const getById = (id) => {
  const filteredBenefits = benefitList.filter((benefit) => benefit.id === id);
  return filteredBenefits[0];
};

export const getByCategory = (category) => {
  const filteredBenefits = benefitList.filter(
    (benefit) => benefit.category === category
  );
  return filteredBenefits;
};
