const easy = document.getElementById('easy');
const words = ["Creative Designer", "Dynamic website"];
let wordindex = 0;
function changeText(){
    easy.textContent = words[wordindex], wordindex = (wordindex + 1) % words.length;
}
setInterval(changeText,2000); 
const greeting = document.getElementById('smart');
const hour = new Date().getHours;
let current = "welcome to my website";
if (hour >= 5 && hour <= 12){
    console.log("Good Morning") ;
}
else if (hour >=12 && hour <=16) {
    console.log("Good Afternoon");

}
else if(hour >= 16 || hour <= 5)
{
    console.log("good Evenving") ;
}