function Refund() {
  return (
    <section
      aria-labelledby="refund-policy"
      className="flex w-full flex-col gap-2 rounded-base bg-bg-secondary px-6 py-4 md:m-auto md:max-w-6xl"
    >
      <h3 id="refund-policy" className="text-base font-bold text-gray-100">
        환불 규정
      </h3>
      <p className="text-sm text-gray-100">프로젝트 시작일 기준</p>
      <ul className="text-sm text-gray-100">
        <li>7일 전 : 100% 환불</li>
        <li>6일 ~ 3일 전 : 50% 환불</li>
        <li>2일 전 ~ 1주차 : 20% 환불</li>
        <li>2주차 : 환불 불가</li>
      </ul>
    </section>
  );
}

export default Refund;
