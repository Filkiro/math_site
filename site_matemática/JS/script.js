let card3_btn = document.getElementById("btn_card3");
let card3 = document.getElementById("text_card");
let card3_old_text = card3.textContent;
let wait = document.getElementById("wait")

card3_btn.addEventListener("click", function(){
	if (card3.textContent == card3_old_text){
		wait;
		card3.textContent = 'hahaha';
		
	}else{
		card3.textContent = card3_old_text;
	}

});
