function changeMenuStyle(newStyle){
    let menu = document.getElementById("menu");
    let alreadyStyle = menu.getAttribute("data-style");
    if(newStyle != alreadyStyle){
        menu.classList.remove(alreadyStyle);//remove a class do estilo anterior
        menu.classList.add(newStyle); //adiciona a classe do novo estilo
        menu.setAttribute("data-style",newStyle); 
        /*armazena a classe do novo estilo, para possibilitar a troca*/
    }
}

function panelControl(){
    let panel = document.getElementById("style-panel");
    let visibility = panel.getAttribute("data-visibility");
    if(visibility == "hidden"){
        panel.style.visibility = "visible";
        panel.setAttribute("data-visibility","visible");
    }else{
        panel.style.visibility = "hidden";
        panel.setAttribute("data-visibility","hidden");
    }
}

function menuControl (){
    let menu = document.getElementById("menu");
    let display = menu.style.display;
    do{
        menu.style.display = "block";
    }while(display == "none")

    let visibility = menu.getAttribute("data-visibility");

    if(visibility == "hidden"){
        menu.classList.remove("close-menu");
        menu.classList.add("show-menu");
        menu.setAttribute("data-visibility","visible");
        
    }else{
        menu.classList.remove("show-menu");
        menu.classList.add("close-menu");
        menu.setAttribute("data-visibility","hidden");
    }
    panelControl();
}