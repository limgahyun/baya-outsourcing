const daysKR = ["일", "월", "화", "수", "목", "금", "토"];

export function formatSeminarDateTime(date: string, time: string) {
  const [hour, minute] = time.split(":").map(Number);
  const d = new Date(date + "T" + time);
  const day = daysKR[d.getDay()];
  const isAM = hour < 12;
  const hour12 = hour % 12 === 0 ? 12 : hour % 12;
  return (
    `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
      d.getDate()
    ).padStart(2, "0")}` +
    ` (${day}) ${isAM ? "오전" : "오후"} ${hour12}:${String(minute).padStart(
      2,
      "0"
    )}`
  );
}
