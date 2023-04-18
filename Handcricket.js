var tot = 0;
function score(){
	var s = uchoice;
	tot += s;
	document.getElementById('score').innerHTML = tot;

}
function play1(){
	uchoice = 1;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 1){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "A Single Taken";
		document.getElementById("comments").innerHTML = c;
		score();
	}
}

function play2(){
	uchoice = 2;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 2){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "Batsman Went For A Two Runs...";
		document.getElementById("comments").innerHTML = c;
		score();
	}
}

function play3(){
	uchoice = 3;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 3){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "Batsmen Are Quick Between The Wickets....3 Runs Taken...";
		document.getElementById("comments").innerHTML = c;
		score();
	}
}

function play4(){
	uchoice = 4;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 4){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "It's A Four...";
		document.getElementById("comments").innerHTML = c;
		score();
	}
}

function play5(){
	uchoice = 5;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 5){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "No Ball And A Four";
		document.getElementById("comments").innerHTML = c;
	    score();
	}
}

function play6(){
	uchoice = 6;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 6){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "Over The Boundary Line...High Above...It's A Six!!";
		document.getElementById("comments").innerHTML = c;
		score();
	}
}