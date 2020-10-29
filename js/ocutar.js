function remover(){
  var clase=$("#barras").attr('class');
  if (clase=="fas fa-bars"){
    $("#barras").removeClass("fas fa-bars").addClass("fas fa-times");
  }
    else if(clase=="fas fa-times"){
      $("#barras").removeClass("fas fa-times").addClass("fas fa-bars");
    }
  
}

//Busca un elemento que tenga la clase definida
var dropdown = document.getElementsByClassName("dropdown-btn");
//Se declara una variable
var i;

for (i = 0; i < dropdown.length; i++) {
    //Se crea un evento y función
  dropdown[i].addEventListener("click", function() {
      //se le añade la clase activo
  this.classList.toggle("active");
  
  var dropdownContent = this.nextElementSibling;
  //Si el estilo esta bloqueado
  if (dropdownContent.style.display === "block") {
      //No es visible
  dropdownContent.style.display = "none";
  } else {
      //Es visible
  dropdownContent.style.display = "block";
  }
  });
}



