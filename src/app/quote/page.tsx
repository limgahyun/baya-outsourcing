"use client";

import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";

type QuoteFormData = {
  name: string;
  phone: string;
  serviceType: string;
  adminRequired: boolean;
  functionList: number[];
};

const SERVICE_TYPES = [
  {
    id: "COMMERCE",
    name: "커머스",
    description: "상품 판매를 위한 온라인 쇼핑몰",
    icon: "M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z",
  },
  {
    id: "LANDING",
    name: "랜딩페이지",
    description: "제품/서비스 소개를 위한 단일 페이지",
    icon: "M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z M12 8V16M8 12H16",
  },
  {
    id: "WEBSITE",
    name: "웹사이트",
    description: "기업/브랜드를 위한 다목적 웹사이트",
    icon: "M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528",
  },
  {
    id: "COMMUNITY",
    name: "커뮤니티",
    description: "회원들간의 소통과 정보 공유",
    icon: "M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7Z",
  },
  {
    id: "RESERVATION",
    name: "예약/신청/오더",
    description: "예약 및 주문 관리 시스템",
    icon: "M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z",
  },
  {
    id: "OTT",
    name: "강의/영상/OTT",
    description: "온라인 교육 및 미디어 스트리밍",
    icon: "M15 10L19.553 7.724C20.449 7.276 21.5 7.925 21.5 8.937V15.063C21.5 16.075 20.449 16.724 19.553 16.276L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z",
  },
  {
    id: "OTHER",
    name: "기타",
    description: "그 외 맞춤형 서비스",
    icon: "M4 6H20M4 12H20M4 18H20",
  },
];

const FUNCTION_CARDS = [
  // Row 1
  {
    id: 1,
    name: "로그인/회원가입",
    icon: "M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 13H10C6.68629 13 4 15.6863 4 19V21H20V19C20 15.6863 17.3137 13 14 13Z",
  },
  {
    id: 2,
    name: "소셜로그인",
    icon: "M15 10L20 15L15 20M4 6H13C14.6569 6 16 7.34315 16 9V11",
  },
  {
    id: 3,
    name: "온보딩(추가정보)",
    icon: "M9 12H15M9 16H15M9 8H15M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z",
  },
  {
    id: 4,
    name: "홈 화면 구성",
    icon: "M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15",
  },

  // Row 2
  {
    id: 5,
    name: "검색",
    icon: "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",
  },
  {
    id: 6,
    name: "일반 게시글",
    icon: "M19 20H5C3.89543 20 3 19.1046 3 18V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V18C21 19.1046 20.1046 20 19 20ZM8 7H16M8 11H16M8 15H12",
  },
  {
    id: 7,
    name: "사진 게시글",
    icon: "M4 16L8.586 11.414C9.36683 10.6332 10.6332 10.6332 11.414 11.414L16 16M14 14L15.586 12.414C16.3668 11.6332 17.6332 11.6332 18.414 12.414L20 14M14 8H14.01M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z",
  },
  {
    id: 8,
    name: "동영상 게시글",
    icon: "M15 10L19.553 7.724C20.449 7.276 21.5 7.925 21.5 8.937V15.063C21.5 16.075 20.449 16.724 19.553 16.276L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z",
  },

  // Row 3
  {
    id: 9,
    name: "매칭",
    icon: "M8 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16",
  },
  {
    id: 10,
    name: "팔로우",
    icon: "M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z",
  },
  {
    id: 11,
    name: "채팅방",
    icon: "M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z",
  },
  {
    id: 12,
    name: "댓글/답글",
    icon: "M7 8H17M7 12H11M7 16H9M4 4H20C21.1046 4 22 4.89543 22 6V16C22 17.1046 21.1046 18 20 18H13L8 22V18H4C2.89543 18 2 17.1046 2 16V6C2 4.89543 2.89543 4 4 4Z",
  },

  // Row 4
  {
    id: 13,
    name: "좋아요",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    id: 14,
    name: "콘텐츠 저장",
    icon: "M5 5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5ZM11 7H13V11H17V13H13V17H11V13H7V11H11V7Z",
  },
  {
    id: 15,
    name: "리뷰/평가",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
  {
    id: 16,
    name: "결제하기",
    icon: "M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z",
  },

  // Row 5
  {
    id: 17,
    name: "주문/배송",
    icon: "M9 17C9 18.1046 8.10457 19 7 19C5.89543 19 5 18.1046 5 17C5 15.8954 5.89543 15 7 15C8.10457 15 9 15.8954 9 17ZM19 17C19 18.1046 18.1046 19 17 19C15.8954 19 15 18.1046 15 17C15 15.8954 15.8954 15 17 15C18.1046 15 19 15.8954 19 17Z M13 16V6C13 5.44772 12.5523 5 12 5H3M13 16H17M13 16H3.23529C3.08589 16 3 15.9141 3 15.7647V13M17 16H18.8235C18.9729 16 19.0588 15.9141 19.0588 15.7647V11.5294C19.0588 11.4627 19.0269 11.3999 18.9724 11.3595L16.4297 9.5",
  },
  {
    id: 18,
    name: "장바구니",
    icon: "M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z",
  },
  {
    id: 19,
    name: "예약하기",
    icon: "M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z",
  },
  {
    id: 20,
    name: "투표하기",
    icon: "M14.5 2H9.5L9.5 7.5L5 7.5L12 14.5L19 7.5L14.5 7.5L14.5 2ZM12 14.5L12 22",
  },

  // Row 6
  {
    id: 21,
    name: "테스트/시험",
    icon: "M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01",
  },
  {
    id: 22,
    name: "통화/캡",
    icon: "M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7L3 21V5Z",
  },
  {
    id: 23,
    name: "지도보기",
    icon: "M17.657 16.657L13.414 20.9C13.039 21.275 12.511 21.275 12.136 20.9L7.89297 16.657C5.72897 14.493 5.72897 11.007 7.89297 8.843C10.057 6.679 13.543 6.679 15.707 8.843C17.871 11.007 17.871 14.493 15.707 16.657ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",
  },
  {
    id: 24,
    name: "GPS 추적",
    icon: "M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14ZM12 14V18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
  },

  // Row 7
  {
    id: 25,
    name: "NFT",
    icon: "M4 7V4H7M4 17V20H7M20 17V20H17M20 7V4H17M5 8H19M5 16H19M8 5V19M16 5V19",
  },
  {
    id: 26,
    name: "블록체인",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
  {
    id: 27,
    name: "메타버스",
    icon: "M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z",
  },
  {
    id: 28,
    name: "AI",
    icon: "M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528",
  },

  // Row 8
  {
    id: 29,
    name: "CS 챗봇",
    icon: "M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z",
  },
  {
    id: 30,
    name: "AI 챗봇",
    icon: "M14 9.3v2.9h-2.3V9.3h2.3zm0-3.3v2.3h-2.3V6h2.3zm-2.3 8.3v-2.3h2.3v2.3h-2.3zm-3.3 0v-2.3h2.3v2.3H8.4zm0-2.9V9.3h2.3v2.1H8.4zm0-5.4v2.3h2.3V6H8.4zm-3.3 8.3v-2.3h2.3v2.3H5.1zm0-2.9V9.3h2.3v2.1H5.1zm0-5.4v2.3h2.3V6H5.1z",
  },
  {
    id: 31,
    name: "알림톡 자동발송",
    icon: "M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9",
  },
  {
    id: 32,
    name: "마이데이터",
    icon: "M12 15V3M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.3018 3.32327 20.5763C3.66772 20.8508 4.08555 20.9999 4.518 21H19.482C19.9145 20.9999 20.3323 20.8508 20.6767 20.5763C21.0212 20.3018 21.2708 19.9177 21.379 19.485L22 17",
  },

  // Row 9
  {
    id: 33,
    name: "푸시알림",
    icon: "M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9",
  },
  {
    id: 34,
    name: "다국어",
    icon: "M3 5H15M9 3V5M10.0482 14.5C8.52083 12.9178 7.28073 11.0565 6.41187 9M12.5 18H19.5M11 21L16 11L21 21M12.7511 5C11.7831 10.7702 8.06969 15.6095 3 18.129",
  },
];

export default function QuotePage() {
  const [isSection2Active, setIsSection2Active] = useState(false);
  const [functionList, setFunctionList] = useState<number[]>([]);
  const [isServiceTypeOpen, setIsServiceTypeOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<QuoteFormData>();

  const name = useWatch({
    control,
    name: "name",
  });

  const phone = useWatch({
    control,
    name: "phone",
  });

  const isFirstSectionComplete =
    name?.trim() !== "" &&
    phone?.trim() !== "" &&
    /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/.test(phone);

  const handleArrowClick = () => {
    if (isFirstSectionComplete) {
      setIsSection2Active(true);
      // Smooth scroll to section 2
      const section2 = document.getElementById("section2");
      if (section2) {
        section2.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleFunctionCardClick = (functionId: number) => {
    setFunctionList((prev) =>
      prev.includes(functionId)
        ? prev.filter((f) => f !== functionId)
        : [...prev, functionId]
    );
  };

  const selectedServiceType = watch("serviceType");

  const handleServiceTypeSelect = (type: (typeof SERVICE_TYPES)[0]) => {
    setValue("serviceType", type.name);
    setIsServiceTypeOpen(false);
  };

  // Add phone formatting function
  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/[^\d]/g, "");

    // Return empty if no numbers
    if (!numbers) return "";

    // Format the number
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
        7,
        11
      )}`;
    }
  };

  // Handle phone input change
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Format the value
    const formattedValue = formatPhoneNumber(value);

    // Update the input
    setValue("phone", formattedValue, { shouldValidate: true });
  };

  const onSubmit = (data: QuoteFormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-gmarket font-bold mb-4">견적 조회</h1>
        <p className="text-xl text-gray-600">
          10초만에 내 프로젝트 견적 확인하기
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Contact Person Information Section */}
        <section className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-6 rounded-full bg-[#444] text-white flex items-center justify-center text-sm font-medium">
              1
            </div>
            <h2 className="text-lg font-bold text-gray-900">
              담당자 정보 입력
            </h2>
          </div>
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                이름<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                {...register("name", { required: "이름을 입력해주세요" })}
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-gray-300"
                placeholder="이름을 입력하세요"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900 mb-2"
              >
                연락처<span className="text-red-500 ml-0.5">*</span>
              </label>
              <input
                {...register("phone", {
                  required: "연락처를 입력해주세요",
                  pattern: {
                    value: /^[\d-]{11,13}$/,
                    message:
                      "올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)",
                  },
                  onChange: (e) => handlePhoneChange(e),
                })}
                type="tel"
                id="phone"
                maxLength={13}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                  hover:border-gray-300"
                placeholder="연락처를 입력하세요"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Arrow Button */}
          <div
            onClick={handleArrowClick}
            className={`absolute left-1/2 -bottom-6 -translate-x-1/2 w-12 h-12 rounded-full 
              flex items-center justify-center cursor-pointer transition-all duration-300
              ${
                isFirstSectionComplete
                  ? "bg-blue-600 hover:bg-blue-700 shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
                  : "bg-gray-100 cursor-not-allowed"
              }
              ${
                isSection2Active
                  ? "opacity-0 pointer-events-none"
                  : "opacity-100"
              }`}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isFirstSectionComplete ? "text-white" : "text-gray-400"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </section>

        {/* Service Information Section */}
        <section
          id="section2"
          className={`bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border  
            transition-all duration-500 ease-in-out hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)]
            ${
              !isSection2Active
                ? "opacity-50 pointer-events-none border-gray-100"
                : "opacity-100 border-gray-50"
            }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-6 rounded-full bg-[#444] text-white flex items-center justify-center text-sm font-medium">
              2
            </div>
            <h2 className="text-lg font-bold text-gray-900">
              서비스 정보 입력
            </h2>
          </div>

          <div className="space-y-8">
            {/* Service Type Dropdown */}
            <div className="space-y-2">
              <label
                htmlFor="serviceType"
                className="block text-sm font-medium text-gray-900"
              >
                서비스 유형<span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsServiceTypeOpen(!isServiceTypeOpen)}
                  className={`w-full px-4 py-3 bg-white border rounded-lg text-left transition-all duration-300
                    ${
                      isServiceTypeOpen
                        ? "border-blue-500 ring-2 ring-blue-500/20"
                        : "border-gray-200 hover:border-gray-300"
                    }
                    ${errors.serviceType ? "border-red-500" : ""}
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {selectedServiceType ? (
                        <>
                          <div className="flex-shrink-0 w-5 h-5">
                            <svg
                              className="w-5 h-5 text-gray-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d={
                                  SERVICE_TYPES.find(
                                    (type) => type.name === selectedServiceType
                                  )?.icon || SERVICE_TYPES[6].icon
                                }
                              />
                            </svg>
                          </div>
                          <span className="text-gray-900">
                            {selectedServiceType}
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-500">
                          서비스 유형을 선택하세요
                        </span>
                      )}
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200
                        ${isServiceTypeOpen ? "transform rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {isServiceTypeOpen && (
                  <div className="absolute z-10 w-full mt-2 bg-white border border-gray-100 rounded-lg shadow-lg overflow-hidden">
                    <div className="max-h-60 overflow-y-auto overscroll-contain">
                      {SERVICE_TYPES.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => handleServiceTypeSelect(type)}
                          className={`w-full px-4 py-3 flex items-start gap-3 hover:bg-gray-50 transition-colors duration-150
                            ${
                              selectedServiceType === type.name
                                ? "bg-blue-50"
                                : ""
                            }
                          `}
                        >
                          <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                            <svg
                              className={`w-5 h-5 ${
                                selectedServiceType === type.name
                                  ? "text-blue-600"
                                  : "text-gray-600"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d={type.icon}
                              />
                            </svg>
                          </div>
                          <div>
                            <div
                              className={`text-sm font-medium text-left ${
                                selectedServiceType === type.name
                                  ? "text-blue-600"
                                  : "text-gray-900"
                              }`}
                            >
                              {type.name}
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5 text-left">
                              {type.description}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Hidden input for form handling */}
                <input
                  type="hidden"
                  {...register("serviceType", {
                    required: "서비스 유형을 선택해주세요",
                  })}
                />
              </div>
              {errors.serviceType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.serviceType.message}
                </p>
              )}

              {/* Service Type Description */}
              <div className="">
                {selectedServiceType && !isServiceTypeOpen && (
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg animate-fadeIn">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                      <svg
                        className="w-5 h-5 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={
                            SERVICE_TYPES.find(
                              (type) => type.name === selectedServiceType
                            )?.icon || SERVICE_TYPES[6].icon
                          }
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">
                      {SERVICE_TYPES.find(
                        (type) => type.name === selectedServiceType
                      )?.description ||
                        "선택하신 서비스에 대해 맞춤형 견적을 제공해드립니다."}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Admin Account Radio Buttons */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                관리자 계정 필요 여부
                <span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    {...register("adminRequired", {
                      required: "관리자 계정 필요 여부를 선택해주세요",
                    })}
                    value="true"
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">필요함</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    {...register("adminRequired", {
                      required: "관리자 계정 필요 여부를 선택해주세요",
                      setValueAs: (value) => value === "true",
                    })}
                    value="false"
                    className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">필요없음</span>
                </label>
              </div>
              {errors.adminRequired && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.adminRequired.message}
                </p>
              )}
            </div>

            {/* Function Cards */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-3">
                필요한 기능<span className="text-red-500 ml-0.5">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {FUNCTION_CARDS.map((func) => (
                  <div
                    key={func.id}
                    onClick={() => handleFunctionCardClick(func.id)}
                    className={`p-4 border rounded-xl cursor-pointer transition-all duration-300
                      flex flex-col items-center gap-2 hover:border-blue-200 hover:bg-blue-50/50
                      ${
                        functionList.includes(func.id)
                          ? "bg-blue-50 border-blue-500 text-blue-700"
                          : "border-gray-100 hover:border-blue-300"
                      }`}
                  >
                    <svg
                      className={`w-6 h-6 ${
                        functionList.includes(func.id)
                          ? "text-blue-600"
                          : "text-gray-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={func.icon}
                      />
                    </svg>
                    <span className="text-sm text-center">{func.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={!isSection2Active}
            className={`w-full px-8 py-4 rounded-xl font-medium text-base transition-all duration-300
              shadow-[0_4px_12px_rgba(0,0,0,0.1)]
              ${
                isSection2Active
                  ? "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-[0_4px_16px_rgba(37,99,235,0.2)]"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
          >
            견적 확인하기
          </button>
        </div>
      </form>
    </div>
  );
}
