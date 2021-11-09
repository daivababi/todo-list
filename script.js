var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButton = document.getElementsByClassName("deleteButton");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	// Add Delete btn
	var newButton = document.createElement("button");
	newButton.innerHTML = "Delete";
	li.appendChild(newButton);

	input.value = "";

	// Click on a list item and it strikethroughs the text
	li.addEventListener("click", function() {
		li.classList.toggle("done");	
})
	// Remove an item when clicked on Delete btn
	newButton.addEventListener("click", function() {
		ul.removeChild(li);
})
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Click on a list item and it strikethroughs the text

for(var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", function() {
		this.classList.toggle("done");
	})
} 

// Add event listener to first 6 btns in HTML file and remove an item when clicked on Delete btn

for(var i = 0; i < deleteButton.length; i++) {
	deleteButton[i].addEventListener("click", function() {
		this.parentNode.remove();
	})
}


