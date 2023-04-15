// Scroll Animation
const scrollElements = document.querySelectorAll(".js-scroll");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
};
const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop > (window.innerHeight || document.documentElement.clientHeight);
};
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};
window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
setTimeout(() => {
  document.querySelector(".astronaut").style.animation = "4s alternate-reverse infinite astronaut";
}, 3000);

// Pesan
const result = document.querySelector("#result");
function kirimPesan() {
  let nama = document.querySelector("#nama").value.trim();
  let pesan = document.querySelector("#pesan").value.trim();
  if (nama.length < 1 || pesan.length < 1) return false;
  result.innerHTML += `
          <div class="py-2 my-2 px-3 shadow-sm rounded-4 overflow-hidden" style="border-top-left-radius: 0 !important;">
                <p class="mb-0" style="font-size: 14px;">${pesan}</p>
                <p class="mb-0 text-secondary" style="font-size: 12px;">${nama}</p>
            </div>`;
  document.querySelector("#nama").value = "";
  document.querySelector("#pesan").value = "";
}
