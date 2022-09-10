"use strict;"

document.getElementById("newtodo").innerHTML = "<p>test</p>";
let btn = document.getElementById("newtodobutton");
btn.addEventListener("click", addItems)
console.log(localStorage)
let myObj_convert = JSON.parse(localStorage.getItem("name")) // hämta de sparade listorna
console.log(myObj_convert);
if (myObj_convert != null) { // om localstorage är null skippa.
    let list = document.getElementById("todolist");
    list.innerHTML += myObj_convert;
    /* skapa en eventlyssnar för att ta bort de som sparas vid refresh */
    document.querySelectorAll(".item").forEach(e => {
        e.addEventListener("click", removeItems)
    })
}




function addItems(){
			let text = document.getElementById("newtodo").value;
            



    /* om strängen är större än 4 skapa en ny lista */
    if (text.length > 4){ 
    	let list = document.getElementById("todolist");
        list.innerHTML += `<article class="item"> ${text} </article>`;
        let text_serialized = JSON.stringify(list.innerHTML)
            console.log(text_serialized);
            localStorage.setItem("name", text_serialized)
            console.log(localStorage)

    }

    /* skapa en eventlyssnare för varje skapad lista */
    document.querySelectorAll(".item").forEach(e => {
    		e.addEventListener("click", removeItems)
    })


}

let reset = document.getElementById("clearbutton")
reset.addEventListener("click", resetList)

function resetList() {
		let list = document.getElementById("todolist");
		list.innerHTML = "";
        localStorage.clear();
}

function removeItems(){
    console.log(event.target);
    let list = document.getElementById("todolist");

    let text_serialized = JSON.stringify(list.innerHTML)

    localStorage.removeItem("name", text_serialized);
	event.target.remove();

}

