class editClass {
    constructor(id){

        this.id = id;

    }


    ubahJadiInput(val){
        let elem = `<Input id="`+this.id+`Child" class="classInput" type="text" value="`+val+`"></Input>`;
        //console.log(elem);
        document.getElementById(this.id).innerHTML = elem;

        document.getElementById("btnId").innerHTML = "SAVE" ;
    }


    ubahJadiTA(val){
        let elem = `<textarea id="`+this.id+`Child" class="classInput" type="text">`+val+`</textarea>`;
        //console.log(elem);
        document.getElementById(this.id).innerHTML = elem;

        document.getElementById("btnId").innerHTML = "SAVE" ;
    }



    ubahJadiParagraf(val){
        let elem = `<p id="`+this.id+`Child" class="classA">`+val+`</p> `;
        //console.log(elem);
        document.getElementById(this.id).innerHTML = elem;

        document.getElementById("btnId").innerHTML = "EDIT" ;
    }


}


export { editClass };