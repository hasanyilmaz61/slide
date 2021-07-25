var bild1 =document.getElementById("bild1");
var bild2 =document.getElementById("bild2");
var bild3 =document.getElementById("bild3");
var yazi1 =document.getElementById("yazi1");
var yazi2 =document.getElementById("yazi2");
var yazi3 =document.getElementById("yazi3");

var slide=1;

function zuruck(){

    slide++;

    



 if(slide==2){
        bild1.style.display="none";
        bild2.style.display="block";
        yazi1.style.display="none";
        yazi2.style.display="block";

    }
    else if(slide==3){
    bild2.style.display="none";
    bild3.style.display="block";
    yazi2.style.display="none";
    yazi3.style.display="block";

    }
    else{

        bild3.style.display="none";
    bild1.style.display="block";
    yazi3.style.display="none";
    yazi1.style.display="block";
    slide=1;
    }


   
}


function next(){

    slide--;
    
    
    if(slide==0){
        bild1.style.display="none";
        bild3.style.display="block";

        yazi1.style.display="none";
        yazi3.style.display="block";
    slide=3;
    }
    else if(slide==1){
        bild3.style.display="none";
        bild2.style.display="block";
        yazi3.style.display="none";
        yazi2.style.display="block";
    
    }

    else if(slide==2){
        
        
        
        bild2.style.display="none";
    bild1.style.display="block";}
    yazi2.style.display="none";
    yazi1.style.display="block";
    
}
