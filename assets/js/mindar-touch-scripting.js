let startX, startY;

document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    // console.log("Presión");
    isPress = true;
    isNotPress = false;
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
            
            // console.log("Movimiento hacia la derecha");
            isRightGest = true;
            isLeftGest = false;
            isUpGest = false;
            isDownGest = false;

        } else if (deltaX < -umbral) {
            
            // console.log("Movimiento hacia la izquierda");
            isRightGest = false;
            isLeftGest = true;
            isUpGest = false;
            isDownGest = false;
            
        }
    } else {
        // Movimiento vertical
        if (deltaY > umbral) {

            // console.log("Movimiento hacia abajo");
            isRightGest = false;
            isLeftGest = false;
            isUpGest = false;
            isDownGest = true;

        } else if (deltaY < -umbral) {
            
            // console.log("Movimiento hacia arriba");
            isRightGest = false;
            isLeftGest = false;
            isUpGest = true;
            isDownGest = false;

        }
    }

    startX = currentX;
    startY = currentY;
});

document.addEventListener("touchend", e => {
    // console.log("NoPresión");
    isPress = false;
    isNotPress = true;
});