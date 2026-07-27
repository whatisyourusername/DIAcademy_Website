const reviews = [
  {
    course: "SAT Math",
    score: "1560",
    name: "김○○",
    school: "서울국제학교",
    review:
      "수학이 항상 어려웠는데 개념부터 차근차근 설명해 주셔서 자신감이 생겼습니다. 덕분에 목표 점수를 달성할 수 있었습니다.",
  },
  {
    course: "AP Calculus",
    score: "5점",
    name: "박○○",
    school: "세화고등학교",
    review:
      "시험에 자주 나오는 유형을 중심으로 연습해서 AP 시험에서 좋은 결과를 얻었습니다.",
  },
  {
    course: "TOEFL",
    score: "112",
    name: "이○○",
    school: "Branksome Hall Asia",
    review:
      "Speaking과 Writing 첨삭이 정말 도움이 되었고 단기간에 목표 점수를 달성했습니다.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="scroll-mt-20 bg-gray-50 py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">

        <h2 className="mb-3 text-center text-4xl font-bold text-gray-700">
          Student Reviews
        </h2>

        <p className="mb-14 text-center text-gray-500">
          QUAD Academy와 함께한 학생들의 실제 후기입니다.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">

                <div className="text-xl text-[#F4C542]">
                  ★★★★★
                </div>

                <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-semibold">
                  {review.course}
                </span>

              </div>

              <h3 className="mt-5 text-2xl font-bold text-gray-700">
                {review.score}
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                "{review.review}"
              </p>

              <div className="mt-8 border-t pt-4 text-sm text-gray-500">
                {review.name} · {review.school}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}