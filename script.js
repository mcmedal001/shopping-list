const input = document.getElementById("inputfield");
const button = document.getElementById("addNewButton");
const ul = document.querySelector("ul");
const deleteBtns = document.getElementsByClassName("delete");

function inputLenght() {
	return input.value.length;
}

function toAddNew() {
	var btn = document.createElement("button");
	btn.innerHTML = "Remove x";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(btn);


	ul.appendChild(li);
	
	input.value = "";
}



function clickToAddNewItem() {
	if(inputLenght() > 0) {
		toAddNew();
	}
}

function enterToAddNewItem(){
	if (inputLenght() > 0 && event.keyCode === 13) {
		toAddNew();
	}
}

button.addEventListener("click", clickToAddNewItem);
input.addEventListener("keypress", enterToAddNewItem);

//add event listener to first 5 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}

//from StackOverflow:
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}

//function to add the 'line through' style

document.addEventListener("click", function(e) {
  if(e.target && e.target.nodeName == "LI") {
  e.target.classList.toggle("done");
  }
});

//Varianble for list elements
var list = document.querySelectorAll("li");

//adds events listener to each list item
for(var i = 0; i < list.length; i++) {
    list[i].addEventListener("click", liClick); 
}

