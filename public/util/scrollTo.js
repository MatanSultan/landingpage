export function scrollTo(id) {
  let element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth" });
}
