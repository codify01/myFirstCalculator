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
 const negation = () => {
     document.getElementById('screen').innerHTML = eval(document.getElementById('screen').innerHTML / -1) 
 }
 const calculate = () => {
     document.getElementById('screen').innerHTML = eval(document.getElementById('screen').innerHTML);
 }
 const percentage = () => {
     document.getElementById('screen').innerHTML = eval(document.getElementById('screen').innerHTML / 100) 
 }