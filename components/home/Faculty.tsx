"use client";

import Image from "next/image";

const faculty = [
  {
    name: "홍길동",
    image: "/images/faculty/hong.jpg",
    education: "서울대학교 수학교육과",
    info: [
      "전 대치동 ○○학원",
      "강의 경력 10년",
      "수능 만점자 다수 배출",
    ],
  },
  {
    name: "김영희",
    image: "/images/faculty/kim.jpg",
    education: "연세대학교 영어영문학과",
    info: [
      "TOEFL 전문",
      "SAT Reading 강의",
      "강의 경력 8년",
    ],
  },
  {
    name: "고양희",
    image: "/images/faculty/ko.jpg",
    education: "연세대학교 영어영문학과",
    info: [
      "TOEFL 전문",
      "SAT Reading 강의",
      "강의 경력 8년",
    ],
  }
];

export default function Faculty() {
  return (
    <section
      id="faculty"
      className="scroll-mt-20 bg-gradient-to-b from-gray-200 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <h2 className="mb-12 text-center text-4xl font-bold text-gray-700">
          Faculty
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 text-gray-700">

          {faculty.map((teacher) => (
            <div
              key={teacher.name}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-square">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {teacher.name}
                </h3>

                <p className="mt-2 text-gray-600">
                  {teacher.education}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {teacher.info.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}