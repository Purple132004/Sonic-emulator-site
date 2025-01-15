function creaCard (){
    //creo array
    let card = [
        //creo oggetti dentro array
        {
            cardDiv: "div",
            cardClass: "card  p-3 mb-5 bg-body-tertiar shadow-leo ",
            imgCard:"img",
            imgSrc:"img/sonic.png",
            imgClass:"card-img-top",
            imgAlt:"gotta go fast",
            bodyCard: "div",
            bodyClass:"card-body",
            pCard:"p",
            pClass:"card-title fs-4 fw-bold",
            pTitolo:"Sonic",    
            pClassTesto:"card-text fs-5",
            pText:"Sonic the Hedgehog",
            aCard:"button",
            aType:"button",
            aClass:"btn btn-primary fw-bold text-light",
            aText:"PLAY THE GAME",
            buttonId:"sonic1"
        },

        {
            cardDiv: "div",
            cardClass: "card  p-3 mb-5 bg-body-tertiar shadow-amy ",
            imgCard:"img",
            imgSrc:"img/amy.png",
            imgClass:"card-img-top",
            imgAlt:"gotta go fast",
            bodyCard: "div",
            bodyClass:"card-body",
            pCard:"p",
            pClass:"card-title fs-4 fw-bold",
            pTitolo:"Amy",    
            pClassTesto:"card-text fs-5",
            pText:"Sonic the Hedgehog CD",
            aCard:"button",
            aType:"button",
            aClass:"btn btn-info fw-bold text-light",
           aText:"PLAY THE GAME",
           buttonId:"sonicCD"
        },

        {
            cardDiv: "div",
            cardClass: "card  p-3 mb-5 bg-body-tertiar shadow-tails ",
            imgCard:"img",
            imgSrc:"img/tails.png",
            imgClass:"card-img-top",
            imgAlt:"gotta go fast",
            bodyCard: "div",
            bodyClass:"card-body",
            pCard:"p",
            pClass:"card-title fs-4 fw-bold",
            pTitolo:"Tails",    
            pClassTesto:"card-text fs-5",
            pText:"Sonic the Hedgehog 2",
            Card:"button",
            aType:"button",
            aClass:"btn btn-warning fw-bold text-light",
            aText:"PLAY THE GAME",
            buttonId:"sonic2"
        },

        {
            cardDiv: "div",
            cardClass: "card  p-3 mb-5 bg-body-tertiar shadow-knu ",
            imgCard:"img",
            imgSrc:"img/knucles.png",
            imgClass:"card-img-top",
            imgAlt:"gotta go fast",
            bodyCard: "div",
            bodyClass:"card-body",
            pCard:"p",
            pClass:"card-title fs-4 fw-bold",
            pTitolo:"Knucles",    
            pClassTesto:"card-text fs-5",
            pText:"Sonic the Hedgehog 3 ",
            Card:"button",
            aType:"button",
            aClass:"btn btn-danger fw-bold text-light",
            aText:"PLAY THE GAME",
            buttonId:"sonic3"
        }


    ];

    //creo la row 
    let row = document.querySelector("#row")
    row.className = "row mt-4 d-flex justify-content-center";
    let titolo = document.createElement("h1");
    titolo.className = "p-5  fw-bold text-center h1"
    titolo.textContent = "Scegli un personaggio per giocare un emulatore";
    row.before(titolo);
    
    //creo il div per stampare l immagine
    for(let obj of card){
        let divTag = document.createElement("div");
        row.append(divTag);
        //dimensioni del div
        divTag.className = "col-2";
        let divCard = document.createElement(obj.cardDiv);
        divTag.append(divCard);
        divCard.className = obj.cardClass;
        let imgTag = document.createElement(obj.imgCard);
        divCard.append(imgTag);
        //metto gli attributi
        imgTag.src = obj.imgSrc;
        imgTag.className = obj.imgClass;
        imgTag.alt = obj.imgAlt;

        //preparo il div per scrivere titolo,sottotitolo e bottone
        let bodyTag = document.createElement(obj.bodyCard);
        //stampo tutto dopo l'img
        imgTag.after(bodyTag);


        bodyTag.classList = obj.bodyClass;

        //ptag per stampare il titolo(pTitolo)
        let pTag = document.createElement(obj.pCard);
        bodyTag.append(pTag);
        //attributi del sottotitolo,gli attributi li prendo citando obj e scegliendo poi dall'oggetto dentro l array
        pTag.className = obj.pClass;
        pTag.textContent = obj.pTitolo;

        //creo il tag "p"
        pTag = document.createElement(obj.pCard);
        //attributi del tag "p",gli attributi li prendo citando obj e scegliendo poi dall'oggetto dentro l array
        bodyTag.append(pTag);
        pTag.classList = obj.pClassTesto;
        pTag.textContent = obj.pText;

        //sezione bottone
        let aTag = document.createElement(obj.aCard);
        bodyTag.append(aTag);
        //attributi bottone,gli attributi li prendo citando obj e scegliendo poi dall'oggetto dentro l array
        aTag.type = obj.aType;
        aTag.className = obj.aClass;
        aTag.textContent = obj.aText;
        aTag.id = obj.buttonId;
        
        
    }
    
    
    
    let sonicUno = document.querySelector("#sonic1");
    sonicUno.addEventListener("click", creaEmulatore);
    
    let sonicCD = document.querySelector("#sonicCD");
    sonicCD.addEventListener("click", creaEmulatore1);

    let sonic2 = document.querySelector("#sonic2");
    sonic2.addEventListener("click", creaEmulatore2);

    let sonic3 = document.querySelector("#sonic3");
    sonic3.addEventListener("click", creaEmulatore3);
    
    
}



//emulatore sonic 1
function creaEmulatore() {
    
    //creazione div per contenere l'emulatore
    let emuBox = document.querySelector("#emulatore");
    let emuDiv = document.createElement("div");
    emuBox.append(emuDiv);
    emuDiv.id = "sonicuno";
    emuDiv.className = "w-100 d-flex flex-column justify-content-center";
    console.log(emuBox, emuDiv);
    /////////////////////////////////////////
    
    //iframe dell'emulatore
    let iframeTag = document.createElement("iframe");
    iframeTag.src = "https://megadrive-emulator.com/game/?game=Sonic_the_Hedgehog.bin"; 
    iframeTag.width = "780";
    iframeTag.height = "600";
    iframeTag.className = "mx-auto border border-primary border-5 rounded";
    //////////////////////////////////////////
    
     //div per bottone
     let bottoneDiv = document.createElement("div");
     bottoneDiv.className = "d-flex justify-content-center";
     //////////////////////////////////////////
     
     //bottone per ricaricare la pagina
     let restart = document.createElement("a");
     restart.href = "home.html";
     restart.className = "mx-auto fw-bold my-5 bg-light border border-primary text-primary border-3 rounded p-3 link-offset-2 link-underline link-underline-opacity-0";
     restart.type = "button";
     restart.textContent = "Cambia gioco";
     bottoneDiv.append(restart);
     ///////////////////////////////////
     
     //comandi
     let comandi = document.createElement("p");
     comandi.textContent = "su giu";
     comandi.innerHTML = " SCHEMA COMANDI <br> ↑ = up  → = right   ↓ = down  ← = left <br> Z = A Button  X = B Button";
     comandi.className = "mx-auto fw-bold mt-1 mb-5 text-center fs-6 text-primary p-3 bg-light border border-primary text-primary border-3 rounded p-3";
     emuDiv.append(comandi);
     
     iframeTagflag = false;
     if(iframeTagflag == false) {
         emuDiv.append(iframeTag);
     }
     
     emuDiv.append(bottoneDiv);
    
}
///////////////////////////////////////////////



//emulatore sonic CD

function creaEmulatore1() {

//creazione div per contenere l'emulatore
let emuBox = document.querySelector("#emulatore");
let emuDiv = document.createElement("div");
emuBox.append(emuDiv);
emuDiv.id = "sonicCD";
emuDiv.className = "w-100 d-flex flex-column justify-content-center";
console.log(emuBox, emuDiv);
//////////////////////////////////////////


//iframe dell'emulatore
let iframeTag = document.createElement("iframe");
iframeTag.src = "https://www.retrogames.cc/embed/40754-sonic-cd.html"; 
iframeTag.width = "780";
iframeTag.height = "600";
iframeTag.className = "mx-auto border border-info border-5 rounded";
/////////////////////////

 //div per bottone
 let bottoneDiv = document.createElement("div");
 bottoneDiv.className = "d-flex justify-content-center";
 //////////////////////////////////////////
 
 //bottone per ricaricare la pagina
 let restart = document.createElement("a");
 restart.href = "home.html";
 restart.className = "mx-auto fw-bold my-5 bg-light border border-info text-info border-3 rounded p-3 link-offset-2 link-underline link-underline-opacity-0";
 restart.type = "button";
 restart.textContent = "Cambia gioco";
 bottoneDiv.append(restart);
 ///////////////////////////////////
 
 //comandi
 let comandi = document.createElement("p");
 comandi.textContent = "su giu";
 comandi.innerHTML = " SCHEMA COMANDI <br> ↑ = up  → = right   ↓ = down  ← = left <br> Z = A Button  X = B Button";
 comandi.className = "mx-auto fw-bold mt-1 mb-5 text-center fs-6 text-info p-3 bg-light border border-info text-info border-3 rounded p-3";
 emuDiv.append(comandi);
 
 iframeTagflag = false;
 if(iframeTagflag == false) {
     emuDiv.append(iframeTag);
 }
 
 emuDiv.append(bottoneDiv);

}
//////////////////////////////////////////////



//emulatore sonic 2
function creaEmulatore2() {

    //creazione div per contenere l'emulatore
    let emuBox = document.querySelector("#emulatore");
    let emuDiv = document.createElement("div");
    emuBox.append(emuDiv);
    emuDiv.id = "sonic2";
    emuDiv.className = "w-100 d-flex flex-column justify-content-center";
    console.log(emuBox, emuDiv);
    //////////////////////////////////////////
    
    
    //iframe dell'emulatore
    let iframeTag = document.createElement("iframe");
    iframeTag.src = "https://megadrive-emulator.com/game/?game=Sonic_the_Hedgehog_2_JUE.bin"; 
    iframeTag.width = "780";
    iframeTag.height = "600";
    iframeTag.className = "mx-auto border border-warning border-5 rounded";
    /////////////////////////
    
     //div per bottone
     let bottoneDiv = document.createElement("div");
     bottoneDiv.className = "d-flex justify-content-center";
     //////////////////////////////////////////
     
     //bottone per ricaricare la pagina
     let restart = document.createElement("a");
     restart.href = "home.html";
     restart.className = "mx-auto fw-bold my-5 bg-light border border-warning text-warning border-3 rounded p-3 link-offset-2 link-underline link-underline-opacity-0";
     restart.type = "button";
     restart.textContent = "Cambia gioco";
     bottoneDiv.append(restart);
     ///////////////////////////////////
     
     //comandi
     let comandi = document.createElement("p");
     comandi.textContent = "su giu";
     comandi.innerHTML = " SCHEMA COMANDI <br> ↑ = up  → = right   ↓ = down  ← = left <br> Z = A Button  X = B Button";
     comandi.className = "mx-auto fw-bold mt-1 mb-5 text-center fs-6 text-warning p-3 bg-light border border-warning text-warning border-3 rounded p-3";
     emuDiv.append(comandi);
     
     iframeTagflag = false;
     if(iframeTagflag == false) {
         emuDiv.append(iframeTag);
     }
     
     emuDiv.append(bottoneDiv);
    
}
//////////////////////////////////////////////////////////////


//emulatore sonic 3
function creaEmulatore3() {

    //creazione div per contenere l'emulatore
    let emuBox = document.querySelector("#emulatore");
    let emuDiv = document.createElement("div");
    emuBox.append(emuDiv);
    emuDiv.id = "sonic3";
    emuDiv.className = "w-100 d-flex flex-column justify-content-center";
    console.log(emuBox, emuDiv);
    //////////////////////////////////////////
    
    
    //iframe dell'emulatore
    let iframeTag = document.createElement("iframe");
    iframeTag.src = "https://megadrive-emulator.com/game/?game=Sonic_the_Hedgehog_2_JUE.bin"; 
    iframeTag.width = "780";
    iframeTag.height = "600";
    iframeTag.className = "mx-auto border border-danger border-5 rounded";
    /////////////////////////
    

    //div per bottone
    let bottoneDiv = document.createElement("div");
    bottoneDiv.className = "d-flex justify-content-center";
    //////////////////////////////////////////
    
    //bottone per ricaricare la pagina
    let restart = document.createElement("a");
    restart.href = "home.html";
    restart.className = "mx-auto fw-bold my-5 bg-light border border-danger text-danger border-3 rounded p-3 link-offset-2 link-underline link-underline-opacity-0";
    restart.type = "button";
    restart.textContent = "Cambia gioco";
    bottoneDiv.append(restart);
    ///////////////////////////////////
    
    //comandi
    let comandi = document.createElement("p");
    comandi.textContent = "su giu";
    comandi.innerHTML = " SCHEMA COMANDI <br> ↑ = up  → = right   ↓ = down  ← = left <br> Z = A Button  X = B Button";
    comandi.className = "mx-auto fw-bold mt-1 mb-5 text-center fs-6 text-danger p-3 bg-light border border-danger text-danger border-3 rounded p-3";
    emuDiv.append(comandi);
    
    iframeTagflag = false;
    if(iframeTagflag == false) {
        emuDiv.append(iframeTag);
    }
    
    emuDiv.append(bottoneDiv);
}
//////////////////////////////////////////////////////////////



document.addEventListener("DOMContentLoaded",creaCard)


function creaHeader() {
    let header = [
        {
            headerNav: "nav",
            headerClass: "navbar navbar-expand-lg p-0",
            aHeader: "a",
            imgHeader: "img/soniclogo.png",
            imgHeaderclass: "header-img",
            aClass: "navbar-brand text-light text-hover p-0",
            aHref: "https://sonicthehedgehog.com/it-it/author/sonic-team/",
            aText: "Sonic Team",
            buttonHeader: "button",
            buttonClass: "navbar-toggler",
            buttonType: "button",
            buttonSpanClass: "navbar-toggler-icon",
            ulHeader: "ul",
            ulClass: "navbar-nav ",
            liHeader: "li",
            liClass: "nav-item ",
        }
    ];

    let elem = [
        {
            href: "#",
            class: "nav-link active text-light text-hover",
            testo: "Home"
        },
        {
            href: "#",
            class: "nav-link text-light text-hover",
            testo: "Emulatori"
        },
        {
            href: "#",
            class: "nav-link text-light text-hover",
            testo: "Licenze"
        }
    ]


    let headerBox = document.querySelector("#header");

    for (let obj of header) {
        let headerBar = document.createElement("nav");
        headerBar.className = obj.headerClass;
        headerBox.append(headerBar);
        let imgLogo = document.createElement("img");
        imgLogo.src = obj.imgHeader;
        imgLogo.className = obj.imgHeaderclass;
        let aBrand = document.createElement("a");
        aBrand.className = obj.aClass;
        aBrand.href = obj.aHref;
        aBrand.append(imgLogo);
        headerBar.append(aBrand);
        let button = document.createElement("button");
        button.className = obj.buttonClass;
        button.type = obj.buttonType;
        headerBar.append(button);
        let buttonSpan = document.createElement("span");
        buttonSpan.className = obj.buttonSpanClass;
        button.append(buttonSpan);
        let ulDiv = document.createElement("div");
        ulDiv.className = "collapse navbar-collapse";
        ulDiv.id = "navbarNav";
        headerBar.append(ulDiv);
        let ulTag = document.createElement("ul");
        ulTag.className = obj.ulClass;
        ulDiv.append(ulTag);
        for (let obj of elem) {
            let liTag = document.createElement("li");
            liTag.className = "nav-item";
            ulTag.append(liTag);
            let aTag = document.createElement("a");
            liTag.append(aTag);
            for (let indice in obj) {
                if(indice == "testo") {
                    aTag.textContent = obj[indice];
                }
                else {
                    aTag.setAttribute(indice, obj[indice]);
                }
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", creaHeader);








function creaFooter (){

    let footer = [

    {
        footDiv: "nav",
        footClass: "navbar ",
        afoot:"a",
        aClass:"navbar-brand",
        aHref:"#",
        aTesto:"coco",


        ulFoot: "ul",
        ulClass: "navbar-nav",
        liFoot: "li",
        liClass: "nav-item",
    }

    ];

    let elem = [


        {
            href:"https://it.wikipedia.org/wiki/Sonic_the_Hedgehog",
            class: "nav-link text-primary fs-3 fw-bold text-hover",
            testo:"Sonic"
        },
        {
            href:"https://it.wikipedia.org/wiki/Amy_Rose",
            class: "nav-link text-info fs-3 fw-bold text-hover",
            testo:"Amy"
        },
        {
            href:"https://it.wikipedia.org/wiki/Tails_(Sonic_the_Hedgehog)",
            class: "nav-link text-warning fs-3 fw-bold text-hover",
            testo:"Tails"
            
        },
        {
            href:"https://it.wikipedia.org/wiki/Knuckles_the_Echidna",
            class: "nav-link text-danger fs-3 fw-bold text-hover",
            testo:"Knucles"
        }
    ]


    let footerBox = document.querySelector("#footer");

    let divFoot = document.createElement("div");
    footerBox.append(divFoot);
    divFoot.className = "d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top";

    let atag = document.createElement("a");
    atag.textContent = "© Sega, Inc";
    atag.href = "https://www.sega.com/homepage"
    atag.className = "col-md-4 mb-0 text-body-secondary fs-2 link-offset-2 link-underline link-underline-opacity-0";
    divFoot.append(atag);

    let imgLink = document.createElement("a");
    imgLink.href = "https://sonicthehedgehog.com/it-it/author/sonic-team/";
    imgLink.className = "col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none text-light"
    divFoot.append(imgLink)
    let imgFoot = document.createElement("img");
    imgFoot.src = "img/soniclogo.png";
    imgFoot.className = "w-75"
    imgLink.append(imgFoot);
    
    let ulTag = document.createElement("ul");
    divFoot.append(ulTag);
    ulTag.className = footer.ulClass;
    ulTag.className = "nav col-md-4 justify-content-end";
    for (let obj of elem) {
        let liTag = document.createElement("li");
        liTag.className = "nav-item";
        ulTag.append(liTag);
        let aTag = document.createElement("a");
        liTag.append(aTag);
        for (let indice in obj) {
            if(indice == "testo") {
                aTag.textContent = obj[indice];
            }
            else {
                aTag.setAttribute(indice, obj[indice]);
            }
        }
        
        
    }
    
    let copytag = document.createElement("p");
    copytag.innerHTML = "Sito creato a solo scopo intrattenitivo <br> Senza alcuno scopo di lucro <br> TUTTI I DIRITTI SONO RISERVATI A SEGA";
    copytag.className = "col-md-4 mb-0 text-body-dark border border-secondary text-secondary border-3 rounded fs-6 text-center mx-auto";
    divFoot.append(copytag);
    
}

document.addEventListener("DOMContentLoaded", creaFooter);


//creare un container, creare dentro una row, dentro una row fare i 3 elementi utilizzando le col,senza l utilizzo di array
//dentro la row tramite append aggiungo un tag P, un immagine e un ul,tutti con la row vengono messi affiancati
