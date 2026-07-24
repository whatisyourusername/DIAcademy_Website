export function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) return;

  const navbarHeight = 80;

  const y =
    element.getBoundingClientRect().top +
    window.scrollY -
    navbarHeight;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}
export const copyToClipboard = async (text: string, message: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(message);
    } catch (err) {
      alert("복사에 실패했습니다.");
    }
  };