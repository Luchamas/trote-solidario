const responsa = document.querySelector(".responsa");
const navMenu = document.querySelector(".nav-menu");

responsa.addEventListener("click", () => {
  responsa.classList.toggle('active');
  navMenu.classList.toggle('active');
}) 