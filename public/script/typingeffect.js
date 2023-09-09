const textElement = document.querySelector(".typingeffect");
let words = ["Hello World", "My name is Sagar Sharma and I am a freelance"];
let i = 0;
let timer;

if(window.innerWidth < 450){
	words = ["Hello World", "My name is Sagar Sharma"]
}

function typingEffect() {
	let word = words[i].split("");
	let loopTyping = () => {
		if (word.length > 0) {
			textElement.innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 75);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	let loopDeleting = () => {
		if (word.length > 0) {
			word.pop();
			textElement.innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 50);
	};
	loopDeleting();
};

typingEffect();