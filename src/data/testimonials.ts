export interface Testimonial {
  content: string;
  author: string;
  position: string;
  company: string;
  bgColor: string;
  accentColor: string;
}

export const testimonials: Testimonial[] = [
  {
    content:
      "커뮤니케이션이 진짜 편했어요. 오히려 제 말을 듣고 더 좋은 방향을 제안해 주셨네요. 덕분에 저도 정리되는 느낌이었어요.",
    author: "허수아",
    position: "CEO",
    company: "ALAN inc.",
    bgColor: "bg-blue-100",
    accentColor: "text-blue-500",
  },
  {
    content:
      "오픈 이후에도 세심히 케어해주시고 오류 처리도 빠르게 해주셔서 든든했어요.",
    author: "김민수",
    position: "PL",
    company: "believe",
    bgColor: "bg-green-100",
    accentColor: "text-green-500",
  },
  {
    content:
      "단순히 개발사가 아니라 함께 전략을 기획하는 파트너처럼 함께 성장하는 느낌을 많이 받았어요.",
    author: "구양미",
    position: "CEO",
    company: "리커머스",
    bgColor: "bg-yellow-100",
    accentColor: "text-yellow-500",
  },
  {
    content:
      'A를 요구했는데, "B안과 C안이 확장성을 생각하면 더 좋다"처럼 생각지 못한 부분을 신경써주셔서 고마웠어요.',
    author: "홍승연",
    position: "CTO",
    company: "바이오세레나티",
    bgColor: "bg-red-100",
    accentColor: "text-red-500",
  },
];
