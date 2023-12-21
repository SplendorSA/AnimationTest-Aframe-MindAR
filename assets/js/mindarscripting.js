// Función de creación, aparición y eventos de los botones
const ShowButtons = () => {

}

//Eventos al registrar el Target
AFRAME.registerComponent('mytarget', {

  //Se inicia esta función cuando el Target es encontrado
  init: function () {

    // Hace la lectura de la señal de que el Target fue encontrado
    this.el.addEventListener('targetFound', event => {

      // Avisa en la consola que el Target fue encontrado
      console.log("Target Found");

      });

      // Hace la lectura de la señal de que el Target se perdió
      this.el.addEventListener('targetLost', event => {

        //Avisa en la consola que el Target se perdió
      console.log("Target Lost");

    });

  }

});
