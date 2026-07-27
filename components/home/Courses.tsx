const courses = [
  {
    title: "SAT",
    description: "Reading · Writing · Math",
    detail: "미국 대학 입시를 위한 SAT 전문 과정",
  },
  {
    title: "AP",
    description: "Calculus · Physics · Chemistry",
    detail: "AP 과목별 심화 수업",
  },
  {
    title: "TOEFL",
    description: "Reading · Listening · Speaking · Writing",
    detail: "목표 점수 달성을 위한 집중 과정",
  },
  {
    title: "내신 영어",
    description: "중등 · 고등 내신",
    detail: "학교 시험 대비 및 서술형 대비",
  },
];
export default function Faculty() {
  return (
    <section
      id="courses"
      className="scroll-mt-20 bg-white py-24"
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">

        <h2 className="mb-12 text-center text-4xl font-bold text-gray-700">
          Courses
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-gray-700">

          {courses.map((course) => (
            <div
              key={course.title}
              className="
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    "
            >

              <h3 className="text-2xl font-bold">
                {course.title}
              </h3>

              <p className="mt-2 text-lg text-blue-700">
                {course.description}
              </p>

              <p className="mt-5 text-gray-600 leading-7">
                {course.detail}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}