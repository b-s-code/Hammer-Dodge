var character = document.getElementById("character");
var block = document.getElementById("block");

document.onkeypress = jump;

function jump() {
	// if character is not already jumping, add "jumping" class to it
	if (character.classList == "") {
		character.classList.add("jumping");
	}
	
	// call a function which removes "animate" class from character
	// after the duration of animation elapses
	setTimeout(() => {character.classList.remove("jumping")}, 500);
}


// check if character and block are colliding
function collisionOccuring() {
	var topOfCharacter = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	var leftOfBlock = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	
	if (leftOfBlock < 20 && leftOfBlock > 0 && topOfCharacter >= 130) 
	{
		return true
	}
	
	else
	{
	return false;
	}
}

// function that checks if collision is occuring and ends game if so
function gameEnding() {
	if (collisionOccuring()) {
		block.style.animation = "none";
		block.style.animation = "none";
		alert("GAME OVER");
	}
}

// every 10ms, call gameEnding function to check if game should end
// and respond appropriately if so
setInterval(gameEnding, 10);
