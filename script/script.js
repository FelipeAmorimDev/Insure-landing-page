const menu = document.getElementById("botao");


function toogleMenu(){
  const nav = document.getElementById("nav-menu-c");
  nav.classList.toggle("active")
  var toogleActive = nav.classList.contains("active");
  if(toogleActive){
    menu.style.backgroundImage="url(../../images/icon-close.svg"
  }
  else{
    menu.style.backgroundImage="url(../../images/icon-hamburger.svg"
  }
}

menu.addEventListener("click",toogleMenu)