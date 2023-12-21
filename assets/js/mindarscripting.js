
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("avatar").setAttribute('animation-mixer','clip: Idle; loop: once; clampWhenFinished: true;');
  
  let isCenter = true;
  let isLeft = false;
  let isRight = false;
  let isAnim = false;

  const Avatar = document.getElementById("avatar");
  const leftBtn = document.getElementById("leftBtn");
  const centerBtn = document.getElementById("centerBtn");
  const rightBtn = document.getElementById("rightBtn");


  leftBtn.addEventListener("click", function(){

    if(isCenter && isAnim === false){
      
      document.getElementById("avatar").setAttribute('animation-mixer','clip: CenterToIzq; loop: once; clampWhenFinished: true;');
      
      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;

      isAnim = true;
      isCenter = false;
      isRight = false;
      isLeft = true;

    }

    if(isRight && isAnim === false){

      document.getElementById("avatar").setAttribute('animation-mixer','clip: DerToIzq; loop: once; clampWhenFinished: true;');
      
      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;

      isAnim = true;
      isCenter = false;
      isRight = false;
      isLeft = true;

    }


  });

  centerBtn.addEventListener("click", function(){
    
    if(isRight && isAnim === false){
      
      document.getElementById("avatar").setAttribute('animation-mixer','clip: DerToCenter; loop: once; clampWhenFinished: true;');
      
      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;

      isAnim = true;
      isCenter = true;
      isRight = false;
      isLeft = false;

    }
    
    if(isLeft && isAnim === false){
      
      document.getElementById("avatar").setAttribute('animation-mixer','clip: IzqToCenter; loop: once; clampWhenFinished: true;');

      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;

      isAnim = true;
      isCenter = true;
      isRight = false;
      isLeft = false;

    }

  });

  rightBtn.addEventListener("click", function(){
    
    if(isCenter && isAnim === false){
      
      document.getElementById("avatar").setAttribute('animation-mixer','clip: CenterToDer; loop: once; clampWhenFinished: true;');
      
      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;

      isAnim = true;
      isCenter = false;
      isRight = true;
      isLeft = false;

    }

    if(isLeft && isAnim === false){
      
      document.getElementById("avatar").setAttribute('animation-mixer','clip: IzqToDer; loop: once; clampWhenFinished: true;');
      
      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;

      isAnim = true;
      isCenter = false;
      isRight = true;
      isLeft = false;

    }

  });

  Avatar.addEventListener('animation-finished', function () {

    console.log('La animación ha finalizado:');
    
    isAnim = false;

    if(isAnim === false){
      
      leftBtn.disabled = false;
      rightBtn.disabled = false;
      centerBtn.disabled = false;
    
    }

  });

});

//Eventos al registrar el Target
AFRAME.registerComponent('mytarget', {

  //Se inicia esta función cuando el Target es encontrado
  init: function () {

    const DivConBotones = document.getElementById("Aparece-en-Escena");

    // Hace la lectura de la señal de que el Target fue encontrado
    this.el.addEventListener('targetFound', event => {

      // Avisa en la consola que el Target fue encontrado
      console.log("Target Found");

      DivConBotones.style.display = "";

    });

    // Hace la lectura de la señal de que el Target se perdió
    this.el.addEventListener('targetLost', event => {

      //Avisa en la consola que el Target se perdió
      console.log("Target Lost");

      DivConBotones.style.display = "none";


    });

  }

});
