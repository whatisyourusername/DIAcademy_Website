"use client";

import { copyToClipboard } from "@/lib/scroll";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-200 to-white py-24 text-gray-700"
    >
      <div className="space-y-4 space-x-20 mx-auto px-8">

      <div className="flex">
        <div className="w-32 font-semibold">
          전화번호
        </div>
        <button
          onClick={() =>
            copyToClipboard("010-1234-5678", "전화번호가 복사되었습니다.")
          }
          className="text-blue-600 hover:underline"
        >
          010-1234-5678
        </button>
      </div>

      <div className="flex">
        <div className="w-32 font-semibold">
          이메일
        </div>

        <button
          onClick={() =>
            copyToClipboard("contact@diacademy.com", "이메일이 복사되었습니다.")
          }
          className="text-blue-600 hover:underline"
        >
          contact@diacademy.com
        </button>
      </div>

      <div className="flex">
        <div className="w-32 font-semibold">
          주소
        </div>

        <p>
          서울특별시 강남구 ○○로 123
        </p>
      </div>
    </div>
    </section>
  );
}