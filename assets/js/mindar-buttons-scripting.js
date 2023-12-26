
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById("avatar").setAttribute('animation-mixer','clip: Idle; loop: once; clampWhenFinished: true;');
  
  let isCenter = true;
  let isLeft = false;
  let isRight = false;
  let isAnim = false;

  let startX, startY;


  // Botones en Interfaz
  const Avatar = document.getElementById("avatar");
  const leftBtn = document.getElementById("leftBtn");
  const centerBtn = document.getElementById("centerBtn");
  const rightBtn = document.getElementById("rightBtn");

  // Botones en AR
  const arRightBtn = document.querySelector("#DerBtn");
  const arSuperRightBtn = document.querySelector("#SuperDerBtn");
  const arLeftBtn = document.querySelector("#IzqBtn");
  const arSuperLeftBtn = document.querySelector("#SuperIzqBtn");

  // Eventos botones en Interfaz
  leftBtn.addEventListener("click", function(){

    if(isCenter && isAnim === false){
      
      document.getElementById("avatar").setAttribute('animation-mixer','clip: CenterToIzq; loop: once; clampWhenFinished: true;');
      
      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;

      arRightBtn.setAttribute('visible', 'false');
      arSuperRightBtn.setAttribute('visible', 'false');
      arLeftBtn.setAttribute('visible', 'false');
      arSuperLeftBtn.setAttribute('visible', 'false');

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

      arRightBtn.setAttribute('visible', 'false');
      arSuperRightBtn.setAttribute('visible', 'false');
      arLeftBtn.setAttribute('visible', 'false');
      arSuperLeftBtn.setAttribute('visible', 'false');

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

      arRightBtn.setAttribute('visible', 'false');
      arSuperRightBtn.setAttribute('visible', 'false');
      arLeftBtn.setAttribute('visible', 'false');
      arSuperLeftBtn.setAttribute('visible', 'false');

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

      arRightBtn.setAttribute('visible', 'false');
      arSuperRightBtn.setAttribute('visible', 'false');
      arLeftBtn.setAttribute('visible', 'false');
      arSuperLeftBtn.setAttribute('visible', 'false');

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

      arRightBtn.setAttribute('visible', 'false');
      arSuperRightBtn.setAttribute('visible', 'false');
      arLeftBtn.setAttribute('visible', 'false');
      arSuperLeftBtn.setAttribute('visible', 'false');

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

      arRightBtn.setAttribute('visible', 'false');
      arSuperRightBtn.setAttribute('visible', 'false');
      arLeftBtn.setAttribute('visible', 'false');
      arSuperLeftBtn.setAttribute('visible', 'false');

      isAnim = true;
      isCenter = false;
      isRight = true;
      isLeft = false;

    }

  });

  
  // Eventos botones en AR
  arRightBtn.addEventListener('click', function (evt) {
      
    console.log("DerBtn");

    if(isCenter && isAnim === false){
      
      document.getElementById("avatar").setAttribute('animation-mixer','clip: CenterToDer; loop: once; clampWhenFinished: true;');
        
      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;

      arRightBtn.setAttribute('visible', 'false');
      arSuperRightBtn.setAttribute('visible', 'false');
      arLeftBtn.setAttribute('visible', 'false');
      arSuperLeftBtn.setAttribute('visible', 'false');
  
      isAnim = true;
      isCenter = false;
      isRight = true;
      isLeft = false;
  
    }
      
    if(isLeft && isAnim === false){
        
      document.getElementById("avatar").setAttribute('animation-mixer','clip: IzqToCenter; loop: once; clampWhenFinished: true;');

      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;
        
      arRightBtn.setAttribute('visible', 'false');
      arSuperRightBtn.setAttribute('visible', 'false');
      arLeftBtn.setAttribute('visible', 'false');
      arSuperLeftBtn.setAttribute('visible', 'false');

      isAnim = true;
      isCenter = true;
      isRight = false;
      isLeft = false;
  
    }
    
  });

  arSuperRightBtn.addEventListener('click', function (evt) {

    console.log("SuperDerBtn");
      
    if(isLeft && isAnim === false){
        
      document.getElementById("avatar").setAttribute('animation-mixer','clip: IzqToDer; loop: once; clampWhenFinished: true;');

      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;
        
      arRightBtn.setAttribute('visible', 'false');
      arSuperRightBtn.setAttribute('visible', 'false');
      arLeftBtn.setAttribute('visible', 'false');
      arSuperLeftBtn.setAttribute('visible', 'false');

      isAnim = true;
      isCenter = false;
      isRight = true;
      isLeft = false;
  
    }

  });

  arLeftBtn.addEventListener('click', function (evt) {

    console.log("IzqBtn");

    if(isRight && isAnim === false){
        
      document.getElementById("avatar").setAttribute('animation-mixer','clip: DerToCenter; loop: once; clampWhenFinished: true;');

      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;
        
      arRightBtn.setAttribute('visible', 'false');
      arSuperRightBtn.setAttribute('visible', 'false');
      arLeftBtn.setAttribute('visible', 'false');
      arSuperLeftBtn.setAttribute('visible', 'false');

      isAnim = true;
      isCenter = true;
      isRight = false;
      isLeft = false;
  
    }

    if(isCenter && isAnim === false){
        
      document.getElementById("avatar").setAttribute('animation-mixer','clip: CenterToIzq; loop: once; clampWhenFinished: true;');

      leftBtn.disabled = true;
      rightBtn.disabled = true;
      centerBtn.disabled = true;
        
      arRightBtn.setAttribute('visible', 'false');
      arSuperRightBtn.setAttribute('visible', 'false');
      arLeftBtn.setAttribute('visible', 'false');
      arSuperLeftBtn.setAttribute('visible', 'false');

      isAnim = true;
      isCenter = false;
      isRight = false;
      isLeft = true;
  
    }
  });

  arSuperLeftBtn.addEventListener('click', function (evt) {
      console.log("SuperIzqBtn");

      if(isRight && isAnim === false){
        
        document.getElementById("avatar").setAttribute('animation-mixer','clip: DerToIzq; loop: once; clampWhenFinished: true;');
  
        leftBtn.disabled = true;
        rightBtn.disabled = true;
        centerBtn.disabled = true;
          
        arRightBtn.setAttribute('visible', 'false');
        arSuperRightBtn.setAttribute('visible', 'false');
        arLeftBtn.setAttribute('visible', 'false');
        arSuperLeftBtn.setAttribute('visible', 'false');
  
        isAnim = true;
        isCenter = false;
        isRight = false;
        isLeft = true;
    
      }
  });

  
  // Eventos gestos mobile
  document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    
    console.log("Presión");
  });

  document.addEventListener("touchmove", e => {
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;

      const deltaX = currentX - startX;
      const deltaY = currentY - startY;

      // Ajusta este umbral según sea necesario
      const umbral = 10;


      if (Math.abs(deltaX) > Math.abs(deltaY)) {
          // Movimiento horizontal
          if (deltaX > umbral) {
              
              console.log("Movimiento hacia la derecha");

              if(isLeft && isAnim === false){
      
                document.getElementById("avatar").setAttribute('animation-mixer','clip: IzqToDer; loop: once; clampWhenFinished: true;');
                  
                leftBtn.disabled = true;
                rightBtn.disabled = true;
                centerBtn.disabled = true;
          
                arRightBtn.setAttribute('visible', 'false');
                arSuperRightBtn.setAttribute('visible', 'false');
                arLeftBtn.setAttribute('visible', 'false');
                arSuperLeftBtn.setAttribute('visible', 'false');
            
                isAnim = true;
                isCenter = false;
                isRight = true;
                isLeft = false;
            
              }

              if(isCenter && isAnim === false){
      
                document.getElementById("avatar").setAttribute('animation-mixer','clip: CenterToDer; loop: once; clampWhenFinished: true;');
                  
                leftBtn.disabled = true;
                rightBtn.disabled = true;
                centerBtn.disabled = true;
          
                arRightBtn.setAttribute('visible', 'false');
                arSuperRightBtn.setAttribute('visible', 'false');
                arLeftBtn.setAttribute('visible', 'false');
                arSuperLeftBtn.setAttribute('visible', 'false');
            
                isAnim = true;
                isCenter = false;
                isRight = true;
                isLeft = false;
            
              }
              
          } else if (deltaX < -umbral) {
              
              console.log("Movimiento hacia la izquierda");

              if(isRight && isAnim === false){
      
                document.getElementById("avatar").setAttribute('animation-mixer','clip: DerToIzq; loop: once; clampWhenFinished: true;');
                  
                leftBtn.disabled = true;
                rightBtn.disabled = true;
                centerBtn.disabled = true;
          
                arRightBtn.setAttribute('visible', 'false');
                arSuperRightBtn.setAttribute('visible', 'false');
                arLeftBtn.setAttribute('visible', 'false');
                arSuperLeftBtn.setAttribute('visible', 'false');
            
                isAnim = true;
                isCenter = false;
                isRight = false;
                isLeft = true;
            
              }

              if(isCenter && isAnim === false){
      
                document.getElementById("avatar").setAttribute('animation-mixer','clip: CenterToIzq; loop: once; clampWhenFinished: true;');
                  
                leftBtn.disabled = true;
                rightBtn.disabled = true;
                centerBtn.disabled = true;
          
                arRightBtn.setAttribute('visible', 'false');
                arSuperRightBtn.setAttribute('visible', 'false');
                arLeftBtn.setAttribute('visible', 'false');
                arSuperLeftBtn.setAttribute('visible', 'false');
            
                isAnim = true;
                isCenter = false;
                isRight = false;
                isLeft = true;
            
              }
              
          }
      } else {
          // Movimiento vertical
          if (deltaY > umbral) {

              console.log("Movimiento hacia abajo");
              
              if(isRight && isAnim === false){
      
                document.getElementById("avatar").setAttribute('animation-mixer','clip: DerToCenter; loop: once; clampWhenFinished: true;');
                  
                leftBtn.disabled = true;
                rightBtn.disabled = true;
                centerBtn.disabled = true;
          
                arRightBtn.setAttribute('visible', 'false');
                arSuperRightBtn.setAttribute('visible', 'false');
                arLeftBtn.setAttribute('visible', 'false');
                arSuperLeftBtn.setAttribute('visible', 'false');
            
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
          
                arRightBtn.setAttribute('visible', 'false');
                arSuperRightBtn.setAttribute('visible', 'false');
                arLeftBtn.setAttribute('visible', 'false');
                arSuperLeftBtn.setAttribute('visible', 'false');
            
                isAnim = true;
                isCenter = true;
                isRight = false;
                isLeft = false;
            
              }


          } else if (deltaY < -umbral) {
              
              console.log("Movimiento hacia arriba");
              
              if(isRight && isAnim === false){
      
                document.getElementById("avatar").setAttribute('animation-mixer','clip: DerToCenter; loop: once; clampWhenFinished: true;');
                  
                leftBtn.disabled = true;
                rightBtn.disabled = true;
                centerBtn.disabled = true;
          
                arRightBtn.setAttribute('visible', 'false');
                arSuperRightBtn.setAttribute('visible', 'false');
                arLeftBtn.setAttribute('visible', 'false');
                arSuperLeftBtn.setAttribute('visible', 'false');
            
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
          
                arRightBtn.setAttribute('visible', 'false');
                arSuperRightBtn.setAttribute('visible', 'false');
                arLeftBtn.setAttribute('visible', 'false');
                arSuperLeftBtn.setAttribute('visible', 'false');
            
                isAnim = true;
                isCenter = true;
                isRight = false;
                isLeft = false;
            
              }

          }
      }

      startX = currentX;
      startY = currentY;
  });

  document.addEventListener("touchend", e => {
      console.log("NoPresión");
      isPress = false;
      isNotPress = true;
  });



  // Evento que detecta finalización de animación
  Avatar.addEventListener('animation-finished', function () {

    console.log('La animación ha finalizado');
    
    isAnim = false;

    if(isAnim === false){
      
      leftBtn.disabled = false;
      rightBtn.disabled = false;
      centerBtn.disabled = false;

      if(isLeft){

        arRightBtn.setAttribute('visible', 'true');
        arSuperRightBtn.setAttribute('visible', 'true');

        arLeftBtn.setAttribute('visible', 'false');
        arSuperLeftBtn.setAttribute('visible', 'false');
        
      }

      if(isCenter){

        arRightBtn.setAttribute('visible', 'true');
        arLeftBtn.setAttribute('visible', 'true');

        arSuperRightBtn.setAttribute('visible', 'false');
        arSuperLeftBtn.setAttribute('visible', 'false');

      }

      if(isRight){

        arRightBtn.setAttribute('visible', 'false');
        arSuperRightBtn.setAttribute('visible', 'false');

        arLeftBtn.setAttribute('visible', 'true');
        arSuperLeftBtn.setAttribute('visible', 'true');

      }
    
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
