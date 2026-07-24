"use client";

export default function Faculty() {
  const copyToClipboard = async (text: string, message: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(message);
    } catch (err) {
      alert("복사에 실패했습니다.");
    }
  };

  return (
    <section
      id="faculty"
      className="flex h-[calc(100vh-80px)] flex-col 
      items-center justify-center 
      bg-gradient-to-b from-gray-200 to-white 
      py-24 
      text-gray-700"
    >
      <h1 className="text-6xl font-extrabold text-gray-900">
        여기에 선생님들 들어가야 합니다.
      </h1>

    </section>
  );
}