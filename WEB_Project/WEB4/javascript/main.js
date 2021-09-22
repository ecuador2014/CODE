(function(){
  const links = document.querySelectorAll(".close-me");
      // recotrrerlos
  links.forEach(el =>{
    //agregar un evento click a cada uno de ellos - case sensitive
    el.addEventListener("click",function(ev){
      let container = document.querySelector(".content");
      ev.preventDefault();
      container.classList.remove("fadeInDown");
      container.classList.remove("animated");
      // Agregar clases para animar su salida fadeOutUp
      container.classList.add("fadeOutUp");
      container.classList.add("animated");
      setTimeout(()=>{
        location.href = "/";
      },600);
      return false;
    })
  })

})();
