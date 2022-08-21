const array = document.querySelectorAll('.card');
let button = document.querySelector('.shuffle');
let res = document.querySelector('.res')
let addCard = document.querySelector('.add')
let addCardTwo = document.querySelector('.addd')
let score = document.querySelector('.score')
let reset = document.querySelector('.reset')
let dataOne;
let dataTwo;
let dataDillerOne;
let dataDillerTwo;
let dataAdd;
let dataAddDiller;
let dillerSum;
let playerSum;
let hiddenCard;
let dataAddSecond;
let randomAddSecondCard = Math.floor(Math.random() * array.length);
let randomAddDillerCard = Math.floor(Math.random() * array.length);
let randomCard = Math.floor(Math.random() * array.length);
let randomCardTwo = Math.floor(Math.random() * array.length);
let randomDillerCardTwo = Math.floor(Math.random() * array.length);
let randomDillerCard = Math.floor(Math.random() * array.length);
let randomAddCard = Math.floor(Math.random() * array.length);


if (randomCard == randomCardTwo || randomCard == randomDillerCard || randomCard == randomDillerCardTwo || randomCard == randomAddCard || randomCard == randomAddSecondCard || randomCard == randomAddDillerCard) {
	randomCard = Math.floor(Math.random() * array.length);
}
if (randomCardTwo == randomDillerCard || randomCardTwo == randomDillerCardTwo || randomCardTwo == randomAddCard) {
	randomCardTwo = Math.floor(Math.random() * array.length);
}
if (randomDillerCard == randomDillerCardTwo || randomDillerCard == randomAddCard) {
	randomDillerCard = Math.floor(Math.random() * array.length);
}
if (randomDillerCardTwo == randomAddCard) {
	randomDillerCardTwo = Math.floor(Math.random() * array.length);
}



button.addEventListener('click', function shuffle() {
	showCard();
	if (dillerSum == 21) {
		console.log('Black Jack!')
	}
	if (playerSum == 21) {
		console.log('Black Jack!')
	}
	addCard.addEventListener('click', function carder() {
		addCardFunc();

	});
	res.addEventListener('click', function(){
		getResult();
		reset.addEventListener('click', function() {
			window.location.reload ();
		})
	});
});

function showCard() {
	for (i = 0; i < array.length; i++) {
		if (randomCard == i) {
			array[i].style.left = "40%";
			array[i].style.bottom = "130px";
			array[i].style.transform = 'rotateZ(0deg)'
			array[i].firstElementChild.style.transform = 'rotateY(360deg)';
			array[i].lastElementChild.style.transform = 'rotateY(180deg)';
			dataOne = +array[i].dataset.value;
		}

	}
	for (c = 0; c < array.length; c++) {
		if (randomCardTwo == c) {
			array[c].style.left = "46% ";
			array[c].style.bottom = "130px";
			array[c].style.transform = 'rotateZ(0deg)';
			array[c].style.transform = 'rotateY(0deg)';
			array[c].firstElementChild.style.transform = 'rotateY(360deg)';
			array[c].lastElementChild.style.transform = 'rotateY(180deg)';
			array[c].style.zIndex = '3';
			dataTwo = +array[c].dataset.value;
		}
	}
	console.log(dataOne + dataTwo);
	playerSum = dataOne + dataTwo

	for (d = 0; d < array.length; d++) {
		if (randomDillerCard == d) {
			hiddenCard = array[d];
			array[d].style.left = "40%";
			array[d].style.top = "20px";
			array[d].style.transform = 'rotateZ(0deg)'
			// array[d].firstElementChild.style.transform = 'rotateY(360deg)';
			// array[d].lastElementChild.style.transform = 'rotateY(180deg)';
			dataDillerOne = +array[d].dataset.value;
		}

	}
	for (f = 0; f < array.length; f++) {
		if (randomDillerCardTwo == f) {
			array[f].style.left = "46% ";
			array[f].style.top = "20px";
			array[f].style.transform = 'rotateZ(0deg)';
			array[f].style.transform = 'rotateY(0deg)';
			array[f].firstElementChild.style.transform = 'rotateY(360deg)';
			array[f].lastElementChild.style.transform = 'rotateY(180deg)';
			array[f].style.zIndex = '3';
			dataDillerTwo = +array[f].dataset.value;
		}
	}
	console.log(dataDillerOne + dataDillerTwo);
	dillerSum = dataDillerOne + dataDillerTwo;
}





function getResult(){
	hiddenCard.firstElementChild.style.transform = 'rotateY(360deg)';
	hiddenCard.lastElementChild.style.transform = 'rotateY(180deg)';

	if (dillerSum < 16) {
		while (dillerSum < 16){
		setTimeout(addDillerCardFunc(), 2000);
		}
	}

	if (dillerSum > 21){
		score.innerHTML = 'ПОБЕДА ИГРОКА';
		return;
	}

	if (playerSum < 22){
		if (playerSum > dillerSum) {
			score.innerHTML = 'ПОБЕДА ИГРОКА';
		} else if (playerSum < dillerSum) {
			score.innerHTML = 'ПОБЕДА ДИЛЛЕРА';
		} else {
			score.innerHTML = 'НИЧЬЯ';
		}
	} else {
		score.innerHTML = 'ПОБЕДА ДИЛЛЕРА';
	}
}





function addCardFunc() {
	for (let i = 0; i < array.length; i++){
		if (randomAddCard == i){
			array[i].style.left = "52% ";
			array[i].style.bottom = "130px";
			array[i].style.transform = 'rotateZ(0deg)';
			array[i].style.transform = 'rotateY(0deg)';
			array[i].firstElementChild.style.transform = 'rotateY(360deg)';
			array[i].lastElementChild.style.transform = 'rotateY(180deg)';
			array[i].style.zIndex = '4';
			dataAdd = +array[i].dataset.value;
		}
		
	}
	playerSum = playerSum + dataAdd;
	console.log(`Игрок: ${playerSum}`)
	addCardTwo.style.display = 'block';
	addCard.style.display = 'none';

}

addCardTwo.addEventListener('click', function addSecondCardFunc(){
		
		for (let i = 0; i < array.length; i++) {
		if (randomAddSecondCard == i){
			array[i].style.left = "58% ";
			array[i].style.bottom = "130px";
			array[i].style.transform = 'rotateZ(0deg)';
			array[i].style.transform = 'rotateY(0deg)';
			array[i].firstElementChild.style.transform = 'rotateY(360deg)';
			array[i].lastElementChild.style.transform = 'rotateY(180deg)';
			array[i].style.zIndex = '5';
			dataAddSecond = +array[i].dataset.value;
		}
		playerSum = playerSum + dataAddSecond;
	}
	})


function addDillerCardFunc() {
	
	for (let i = 0; i < array.length; i++) {
		if (randomAddDillerCard == i){
			array[i].style.left = "52% ";
			array[i].style.top = "20px";
			array[i].style.transform = 'rotateZ(0deg)';
			array[i].style.transform = 'rotateY(0deg)';
			array[i].firstElementChild.style.transform = 'rotateY(360deg)';
			array[i].lastElementChild.style.transform = 'rotateY(180deg)';
			array[i].style.zIndex = '4';
			dataAddDiller = +array[i].dataset.value;
		}
	}
	dillerSum = dillerSum + dataAddDiller;
	console.log(dillerSum)
}