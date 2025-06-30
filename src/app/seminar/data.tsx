import { ReactNode } from "react";

export interface Seminar {
  id: string;
  organization: string;
  title: ReactNode;
  thumbnail: string;
  date: string; // format: YYYY-MM-DD
  time: string;
  url: string;
}

export const seminars: Seminar[] = [
  {
    id: "offTheRecord",
    organization: "BAYA",
    title: (
      <>
        <span className="font-extrabold">[오프더레코드]</span> 주관기관이 절대
        <br /> 알려주지 않는{" "}
        <span className="font-extrabold">지원사업 실전</span>
      </>
    ),
    thumbnail: "/seminar/offTheRecord.png",
    date: "2025-06-22",
    time: "20:00",
    url: "https://tally.so/r/mVBxLy",
  },
  {
    id: "withNothing",
    organization: "BAYA",
    title: (
      <>
        맨땅에서 <span className="font-extrabold">2억받고</span> <br />
        창업 <span className="font-extrabold">지름길</span> 타기
      </>
    ),
    thumbnail: "/seminar/withNothing.png",
    date: "2025-07-11",
    time: "20:00",
    url: "https://tally.so/r/wLj5O1",
  },
];
