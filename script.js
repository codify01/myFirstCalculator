const clickTapSay = (text) => {
    document.getElementById('screen').innerHTML += text; 
 }
 const clearScreen = () => {
    document.getElementById('screen').innerHTML = ""; 
 }
 const backSpace = () => {
     let text = document.getElementById('screen').innerHTML;
     newText = text.slice(0,-1);
     document.getElementById('screen').innerHTML = newText;
 }
 function negation() {
     document.getElementById('screen').innerHTML = eval(document.getElementById('screen').innerHTML / -1) 
 }
 function calculate() {
     document.getElementById('screen').innerHTML = eval(document.getElementById('screen').innerHTML);
 }
 function percentage() {
     document.getElementById('screen').innerHTML = eval(document.getElementById('screen').innerHTML / 100) 
 }