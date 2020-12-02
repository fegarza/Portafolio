$(document).ready(function(){


    var darkMode = false;
    $('#mode').click(function(){
       
        let root = document.documentElement;

        if(darkMode){
            root.style.setProperty("--bgColor", "white");
            root.style.setProperty("--txtColor", "black");
        }else{
            root.style.setProperty("--bgColor", "black");
            root.style.setProperty("--txtColor", "white");
        }
        darkMode = !darkMode;
    })   
})