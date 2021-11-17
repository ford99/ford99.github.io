function check(){
	
	var choice=document.getElementById("RPSchoice").value;
	var randElement=["Rock", "Paper","Scissors"];
	var randIndex=Math.floor(Math.random()*randElement.length);
	var P2choice=randElement[randIndex];
	
	
	if (choice=="Rock" && P2choice=="Paper"){
		document.getElementById("RPScheck").innerHTML="P1 chose Rock and P2 chose Paper so P2 has won";
		hide()
	}
	else if (choice=="Rock" && P2choice=="Scissors"){
		document.getElementById("RPScheck").innerHTML="P1 chose Rock and P2 chose Scissors so P1 has won";
		hide()
	}
	else if (choice=="Rock" && P2choice=="Rock"){
		document.getElementById("RPScheck").innerHTML="P1 chose Rock and so did P2 so it's a draw";
		hide()
	}
	
	else if (choice=="Paper" && P2choice=="Rock"){
		document.getElementById("RPScheck").innerHTML="P1 chose Paper and P2 chose Rock so P1 has won";
		hide()
	}
	else if (choice=="Paper" && P2choice=="Scissors"){
		document.getElementById("RPScheck").innerHTML="P1 chose Paper and P2 chose Scissors so P2 has won";
		hide()
	}
	else if (choice=="Paper" && P2choice=="Paper"){
		document.getElementById("RPScheck").innerHTML="P1 chose Paper and so did P2 so it's a draw";
		hide()
	}
	else if (choice=="Scissors" && P2choice=="Rock"){
		document.getElementById("RPScheck").innerHTML="P1 chose Scissors and P2 chose Rock so P2 has won";
		hide()
	}
	else if (choice=="Scissors" && P2choice=="Scissors"){
		document.getElementById("RPScheck").innerHTML="P1 chose Scissors and so did P2 so it's a draw";
		hide()
	}
	else if (choice=="Scissors" && P2choice=="Paper"){
		document.getElementById("RPScheck").innerHTML="P1 chose Scissors and P2 chose Paper so P1 has won";
		hide()
	}
	else {
		alert("That entry is invalid try again");
	
}

function hide(){
	document.getElementById("button").style.visibility='hidden';
}

}