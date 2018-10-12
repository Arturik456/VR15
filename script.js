let btn1 = document.getElementById("btn1"),
		btn2 = document.getElementById("btn2"),
		main = document.getElementById("main"),
		myList = document.getElementById("list"),
		ul = document.getElementsByTagName("ul"),
		story = myList.getElementsByClassName("item"),
		popup = document.getElementsByClassName("popup")[0],
		close = document.querySelector(".close");

function addItem() {
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
}

function delItem() {
	myList.removeChild(story[0]);
	
	if (story.length == 0) {
		popup.style.display = "block";
	}
}

function closePupop() {
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePupop);

function getWalking () {
	age = +prompt("Ваш возраст?");

	if(age >= 18) {
		userName = prompt("Добавте ваше имя");
		mailling = confirm("Подпишитесь на рассылку")
	} else {
		alert("В доступе отказанно!")
	} if(mailling == true) {
		alert("Welcom_" +  userName);
	} else {
		alert("Офомите подписку для доступа к сайту")
	}
	
}
getWalking();
