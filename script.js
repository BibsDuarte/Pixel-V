//Busca um elemento no HTML e salva em uma variavel
let menu = document.getElementById("menu")
let iconebarras = document.getElementById("icone-barras")
let iconex = document.getElementById("icone-x")

//Função que vai abrir e fechar o menu
function abrefechamenu(){

    //Se o menu está fechado
    if(menu.classList.contains("menu-fechado")){

        //Abrir o menu
        menu.classList.remove("menu-fechado")

        //mostrar icone X
        iconex.style.display = "inline"

        //Esconder o icone barras
        iconebarras.style.display = "none"
    }

    //senão
    else{

    //Fechar o menu
    menu.classList.add("menu-fechado")

    //esconder icone X
    iconex.style.display = "none"

    //mostrar icone barras
    iconebarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")

    //Mostrar icone X
    iconex.style.display = "inline"

    //Esconder icone barras
    iconebarras.style.display = "none"
}