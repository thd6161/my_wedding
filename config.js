/**
 * Simple & Clean Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "송창섭",
    father: "송주석",
    mother: "유효숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이승주",
    father: "이형석",
    mother: "한현숙",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-10-31",
    time: "14:00",
    venue: "유성컨벤션웨딩홀",
    hall: "그랜드홀 3층",
    address: "대전 유성구 온천북로 77",
    tel: "042-825-7070",
    mapLinks: {
      kakao: "https://place.map.kakao.com/10457235",
      naver: "https://naver.me/5T4AfUiE"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "함께한 5년의 시간\n거리의 한계를 넘어 함께했던 순간 속에는\n기쁨과 슬픔, 그리고 찬란한 낭만이 가득했습니다.\n\n이제 두 사람이 부부라는 이름으로 하나 되어\n언제나 청춘 같은 마음으로\n서로의 낭만이 되어주려 합니다.\n\n저희의 소중한 첫걸음을 함께하시어\n축복해 주시면 감사하겠습니다."
  },

  // ── 오시는 길 ──
  // (mapLinks는 wedding 객체 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "송창섭", bank: "기업은행", number: "043-118888-01-018" },
      { role: "아버지", name: "송주석", bank: "농협은행", number: "352-1206-5100-13" },
      { role: "어머니", name: "유효숙", bank: "농협은행", number: "173814-52-039046" }
    ],
    bride: [
      { role: "신부", name: "이승주", bank: "우리은행", number: "1002-760-230307" },
      { role: "아버지", name: "이형석", bank: "기업은행", number: "000-000-000000" },
      { role: "어머니", name: "한현숙", bank: "농협은행", number: "000-000-000000" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "송창섭 ♥ 이승주 결혼합니다",
    description: "2026년 10월 31일, 소중한 분들을 초대합니다."
  }
};
