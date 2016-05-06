function keyPressEvent(e){
    e = e || window.event;
    console.log(e);
    switch (e.keyCode) {
        case 37:
            console.log("Right Key press fire bullets");
            fireBullets();
            break;
        case 38:
            console.log("Up key press");
            playerMoveUp();
            break;
        case 40:
            console.log("Down key press");
            playerMoveDown();
            break;
        default:
            // code
    }
};


document.onkeydown = keyPressEvent;
createEnemies();
