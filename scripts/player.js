function fireBullets(){
    var currentSpace = document.getElementById("enemies");
    var createNewEnemy = document.createElement("IMG");
    var bulletId = new Date().getTime();
    createNewEnemy.setAttribute("src", "./images/fire.gif");
    createNewEnemy.setAttribute("id",bulletId);
    createNewEnemy.setAttribute("class","firebullet");
    createNewEnemy.setAttribute("alt", "I am going to kill you.");
    createNewEnemy.style.top = document.getElementById("player").offsetTop+"px";
    currentSpace.appendChild(createNewEnemy);
    changeBulletPosition(bulletId);
};


function playerMoveUp(){
    var currentTop = document.getElementById("player").offsetTop;
    document.getElementById("player").style.top = (currentTop-10)+"px";
};


function playerMoveDown(){
    var currentTop = document.getElementById("player").offsetTop;
    document.getElementById("player").style.top = (currentTop+10)+"px";
    //console.log(currentTop);
};


function changeBulletPosition(id){
    var currentLeft = document.getElementById(id).offsetLeft;
    if(currentLeft>0){
        document.getElementById(id).style.left = (currentLeft-5)+"px";
        setTimeout(function(){ 
            changeBulletPosition(id);
        }, 7);
    }else{
        document.getElementById(id).remove();
    }
}


function changeEnemyPosition(id){
    var currentLeft = document.getElementById(id).offsetLeft;
    if(currentLeft< document.getElementById("player").offsetLeft){
        document.getElementById(id).style.left = (currentLeft+5)+"px";
        setTimeout(function(){ 
            changeEnemyPosition(id);
        }, 30);
    }else{
        document.getElementById(id).remove();
    }
}


function createEnemies(){
    var x =1, y=5, xTop = 0, yTop=500;
    var imageName = Math.floor(Math.random() * ((y-x)+1) + x);
    var currentSpace = document.getElementById("enemies");
    var createNewEnemy = document.createElement("IMG");
    var bulletId = new Date().getTime()+"enm";
    createNewEnemy.setAttribute("src", "images/enemies/"+imageName+".gif");
    createNewEnemy.setAttribute("id",bulletId);
    createNewEnemy.setAttribute("height","50px");
    createNewEnemy.setAttribute("class","firebullet");
    createNewEnemy.setAttribute("alt", "I am going to kill you.");
    createNewEnemy.style.left = 0;
    createNewEnemy.style.top = Math.floor(Math.random() * ((yTop-xTop)+1) + xTop)+"px";
    currentSpace.appendChild(createNewEnemy);
    changeEnemyPosition(bulletId);
    setTimeout(function(){ 
        createEnemies();
    }, 1500);
}