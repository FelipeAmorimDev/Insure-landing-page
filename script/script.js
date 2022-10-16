const menu = document.getElementById("botao");


function toogleMenu(){
  const nav = document.getElementById("nav-menu-c");
  nav.classList.toggle("active")
}

menu.addEventListener("click",toogleMenu)