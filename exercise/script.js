var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll("li");

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    input.value = ""
}
 function inputLengthTrue(){
     return (input.value.length > 0)
 }

function addAfterClick(){
    if (inputLengthTrue()){
        createListElement();
    }
}

function addAfterEnter(event){
    if (inputLengthTrue() && event.keyCode === 13){
        createListElement();
    }
}

function addClass(){
    
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterEnter);

for(i=0; i < list.length; i++){
    list[i].addEventListener("click", addClass)
}