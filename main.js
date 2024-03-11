const navbar = document.querySelectorAll(".navbar .underline");

document.addEventListener("click", e => {
   el = e.target;
   if (el.classList.contains("underline")) {
      navbar.forEach(e => {
         e.classList.remove("on")
      })
      el.classList.add("on")
   }
})