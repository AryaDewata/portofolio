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
const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
const result = document.querySelector("#result");
const nama = document.querySelector("#nama");
const pesan = document.querySelector("#pesan");
function kirimPesan() {
  if (nama.value.trim().length < 1) return nama.focus();
  if (pesan.value.trim().length < 1) return pesan.focus();
  result.innerHTML += `
    <div class="py-2 my-2 px-3 shadow-sm rounded-4 overflow-hidden" style="border-top-left-radius: 0 !important;">
      <p class="mb-0" style="font-size: 14px; color: rgb(100, 100, 100);">${pesan.value.trim()}</p>
      <div class="d-flex justify-content-between">
          <p class="mb-0 text-secondary" style="font-size: 12px;">Dikirim oleh: ${nama.value.trim()}</p>
          <p class="mb-0 text-secondary" style="font-size: 12px;">~ ${new Date().getDate()} ${bulan[new Date().getMonth()]} ${new Date().getFullYear()}</p>
      </div>
    </div>`;
  nama.value = "";
  pesan.value = "";
}
