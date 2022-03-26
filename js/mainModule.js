import * as editTools from "./editUtils.js";


let utilsName = new editTools.editClass("elemNameParent");
let utilsAge = new editTools.editClass("elemAgeParent");
let utilsBio = new editTools.editClass("elemBioParent");

//---------------------------------------------------------
//---------------------------------------------------------


let valName;
let valAge;
let valBio;



window.onload = ()=> {
    //console.log("test");
    
    document.getElementById("btnId").addEventListener("click", diKlik);
    function diKlik() {
        ubah();
    };

}






function inputElem() {
    utilsName.ubahJadiInput(valName); 
    utilsAge.ubahJadiInput(valAge); 
    utilsBio.ubahJadiTA(valBio);

}


function pElem() {
    utilsName.ubahJadiParagraf(valName);
    utilsAge.ubahJadiParagraf(valAge);
    utilsBio.ubahJadiParagraf(valBio);

}




//let bollean = false; // default  FAQ
let bollean;
function ubah() {
    if (bollean === true) {  

        valName = document.getElementById("elemNameParentChild").value;
        valAge = document.getElementById("elemAgeParentChild").value;
        valBio = document.getElementById("elemBioParentChild").value;

        pElem();
        bollean = false; 



    } else { 

        valName = document.getElementById("elemNameParentChild").innerHTML;
        valAge = document.getElementById("elemAgeParentChild").innerHTML;
        valBio = document.getElementById("elemBioParentChild").innerHTML;

        inputElem();
        bollean = true;
    }

}

