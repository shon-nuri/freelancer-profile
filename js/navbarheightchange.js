const menu = document.getElementById('menu');
function handleScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  if (scrollY > 1) {
    menu.classList.add("height-changer");
  } else {
    menu.classList.remove("height-changer");
  }
}
window.addEventListener('scroll', handleScroll);
