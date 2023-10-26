const cta = document.querySelector(".cta");
const cte = document.querySelector(".cte");
const aside = document.querySelector("aside");

cta.addEventListener("click", () => {
    aside.classList.add("aside-visible");
  })

cte.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
  })  