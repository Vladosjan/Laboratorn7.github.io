document.addEventListener("DOMContentLoaded", ()=>{  
let firstDiv  = document.querySelector("body");
    firstDiv.style.width = "100%";  
	firstDiv.style.height = "100%";  
	firstDiv.style.backgroundColor = "green"; 
let firstDiv1 = document.createElement("div"); 
firstDiv1.style.width = "90%";   
firstDiv1.style.height = "50%";   
firstDiv1.style.backgroundColor = "yellow"; 
 firstDiv1.style.marginLeft = "500px";  
firstDiv1.style.marginTop = "50px";   
firstDiv.appendChild(firstDiv1); 
let mark = document.createElement("label"); 
mark.innerText = "Input a question: ";   
mark.style.color = "red";
mark.style.marginTop = "10px";   
mark.style.fontFamily = "Times New Roman"; 
mark.style.fontSize = "30px";  
mark.style.fontWeight = "bold"; 
firstDiv1.appendChild(mark); 
let firstDiv2 = document.createElement("input");  
firstDiv2.style.marginLeft = "50px";  
firstDiv2.style.marginTop = "70px"; 
firstDiv1.appendChild(firstDiv2);
let magic_ball = document.createElement("div"); 
magic_ball.style.width = "850px";  
magic_ball.style.height = "850px";   
magic_ball.style.backgroundImage = "url(ball.png)";  
magic_ball.style.marginTop = "10vh";  
magic_ball.style.marginLeft = "5vw";  
firstDiv1.appendChild(magic_ball); 
let random = Math.floor(Math.random() * 1);
if((firstDiv2.value == "") && (random == 0)){
alert("Please, enter the question!");
magic_ball.onclick = moveMents;  
}if((firstDiv2.value != "") && (random == 1)){ 
magic_ball.onclick = notMoveMents;  
 } 
function moveMents(){  
let answers = document.createElement("label"); 
answers.innerHTML = "Yes";  
answers.style.fontFamily = "Times New Roman";  
answers.style.fontSize = "80px";   
answers.style.marginLeft = "350px";   
answers.style.marginTop = "750px";  
answers.style.textAlign = "center"; 
answers.style.color = "#FF0000";
magic_ball.appendChild(answers); 
 magic_ball.style.boxShadow = "35vw #D2691E";  
} 
function notMoveMents(){  
let answers = document.createElement("label");
answers.innerHTML = "No";  
answers.style.fontFamily = "Times New Roman";  
answers.style.fontSize = "80px";   
answers.style.marginLeft = "350px";   
answers.style.marginTop = "750px";  
answers.style.textAlign = "center"; 
answers.style.color = "#FF0000";
magic_ball.appendChild(answers); 
 magic_ball.style.boxShadow = "35vw #D2691E";  
} 
} 
);




