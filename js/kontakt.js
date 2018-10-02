// fyller textfälten med infon som fyllts i tidigare. 

function displayCred() {     
    var a = localStorage.getItem(1);
    var b = localStorage.getItem(2);
    var c = localStorage.getItem(3);
    var d = localStorage.getItem(4);
    
    

var a1 = document.getElementById("namnFalt").value
var b1 = document.getElementById("mailFalt").value
var c1 = document.getElementById("telFalt").value
var d1 = document.getElementById("medFalt").value

if (a1 === "") {
    document.getElementById("namnFalt").value = a;
    document.getElementById("mailFalt").value = b;
    document.getElementById("telFalt").value = c;
    document.getElementById("medFalt").value = d;

    rensaAllt();


}
}

// metod för att se om namnet är mindre än tre karaktärer vilket skapar röd text.
function checkNamn() {
    var strText = document.getElementById("namnFalt").value;
    var strText2 = document.getElementById("namnFalt");
    
    if(strText.length < 2) {
     strText2.style.color = "red";
    } else {
     strText2.style.color = "black";
    }
}
// hämtar input från olika fälten i kontaktformuläret och placerar dom i Local Storage, samt rensar fälten.
function saveInput() {

   // hämtar input och lagrar i variabler. 

    var namnFalt = document.getElementById("namnFalt").value;
    var mailFalt = document.getElementById("mailFalt").value;
    var telFalt = document.getElementById("telFalt").value;
    var medFalt = document.getElementById("medFalt").value;
    // placerar datan i Local Storage.
    localStorage.setItem("1", namnFalt);
    localStorage.setItem("2", mailFalt);
    localStorage.setItem("3", telFalt);
    localStorage.setItem ("4", medFalt);
    // rensar fälten.
    document.getElementById("namnFalt").value = "";
    document.getElementById("mailFalt").value = "";
    document.getElementById("telFalt").value = "";
    document.getElementById("medFalt").value = "";
}

// rensar Local Storage.

function rensaAllt() {
    localStorage.clear();
}

// metod för att säkerställa att man inte skickar in med tom namnfält.

function kollaNamn() {
    var a2 = document.getElementById("namnFalt").value
    
    if (a2 ==="") {
        console.log("nope");
    } else {
        kollaMail();
        
    }

}
// metod för att säkerställa att man inte skickar in med tom mailfält.
function kollaMail() {
    var b2 = document.getElementById("mailFalt").value

    if(b2 ==="") {
        console.log("nope");
    } else {
        kollaTel();
    }

}
// metod för att säkerställa att man inte skickar in med tomt telefonfält.

function kollaTel() {
    var c2 = document.getElementById("telFalt").value

    if(c2==="") {
        console.log("nope");
    } else {
        kollaMed();
    }

}

// metod för att säkerställa att man inte skickar in med tomt meddelandefält.
// om allt är OK skickar den formuläret samt anropar animeringen.

function kollaMed() {
    var d2 = document.getElementById("medFalt").value

    if(d2==="") {
        console.log("nope");
    } else {
        saveInput();
        flyttaVanster();
        fadeaUt();
        nyaIn();
        visaText();

      
    }
}

// animerar handen att gå vänster.

function flyttaVanster() {
 
    
    $("#handen").animate({
        left: '+=40px'
        
        
    },400,  );
    
}

// Animerar bort handen.

function fadeaUt() {
    $("#handen").fadeOut("fast");        
}

// animerar fram nya bilden.

function nyaIn() {
    $("#tummeUp").fadeIn("slow");

}


// fäster en text på bilden samt gör den synlig.

function visaText() {
    var tumme = document.getElementById("tummeUp");
    var skickat = document.getElementById("sentText")

    tumme.appendChild(skickat);

    $("#sentText").fadeIn("slow");

    
}

// KARTAN 

function initMap() {
       
    var uluru = {lat: 59.2552, lng: 15.2482};

 var map = new google.maps.Map(
 document.getElementById('map'), {zoom: 15, center: uluru});

var marker = new google.maps.Marker({position: uluru, map: map});
}
