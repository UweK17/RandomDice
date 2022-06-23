function warten(){
    var img = document.getElementById("bild");
    img.src= "./assets/eins.png";
        setTimeout(function(){
            img.setAttribute("class", "rotated-image");
        }, 500);
       warten2();
}
function warten2(){
    var img = document.getElementById("bild");
        setTimeout(function(){
            img.setAttribute("class", "rotated-image1");
        }, 1000);
        warten3();
}
function warten3(){
    var img = document.getElementById("bild");
    img.setAttribute("class", "rotated-image2");
}
function wuerfeln(){
   zahl = Math.floor(Math.random() * 6 +1); 
   
   
    switch (zahl) {
        case 1:
            warten()
            setTimeout(function(){
                document.getElementById("bild").setAttribute("class", "rotated-image2");
                document.getElementById("bild").src = "./assets/eins.png";
            }, 2000);       
        break;
        case 2:
            warten();
            setTimeout(function(){
                document.getElementById("bild").setAttribute("class", "rotated-image2");
            document.getElementById("bild").src = "./assets/zwei.png";
        }, 2000);
        break;
        case 3:
            warten();
            setTimeout(function(){
                document.getElementById("bild").setAttribute("class", "rotated-image2");
            document.getElementById("bild").src = "./assets/drei.png";
        }, 2000);
        break;
        case 4:
            warten();
            setTimeout(function(){
                document.getElementById("bild").setAttribute("class", "rotated-image2");
            document.getElementById("bild").src = "./assets/vier.png";
        }, 2000);
        break;
        // case 5:
        //     warten();
        //     setTimeout(function(){
        //         document.getElementById("bild").setAttribute("class", "rotated-image2");
        //     document.getElementById("bild").src = "./assets/fuenf.png";
        // }, 2000);
        // break;
        // case 6:
        //     warten();
        //     setTimeout(function(){
        //         document.getElementById("bild").setAttribute("class", "rotated-image2");
        //     document.getElementById("bild").src = "./assets/sechs.png";
        // }, 2000);
        // break;
    }
}
