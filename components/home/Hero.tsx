export default function Hero() {
  return (
    <section className="flex h-[calc(100vh-80px)] flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50">

      <h1 className="text-6xl font-extrabold text-gray-900">
        DI Academy
      </h1>

      <p className="mt-6 text-xl text-gray-600">
        Learn Smarter. Achieve Higher.
      </p>

      <div className="mt-10 flex gap-4">

        <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
          무료 상담
        </button>

        <button className="rounded-xl border border-blue-600 px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
          강의 보기
        </button>

      </div>

    </section>
  );
}