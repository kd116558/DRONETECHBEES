const header = document.querySelector(".header");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    header.classList.toggle("active");
})
