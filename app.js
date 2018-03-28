/*
** Button to start quiz
*/
const startButton = document.getElementById('start')
startButton.onclick = function (){
    document.getElementById('q1').style.display = "grid";
    document.getElementById('box').style.display = "none";
    console.log("Let's Begin :)");
    console.log("Note: CLICK ON THE IMAGES." + " Finish the game to get your result.");
}

//For Score - To Start At Zero
var answerContinent = {
    africa: 0,
    europe: 0,
    asia: 0,
    america: 0
};
/*
** Question 1
*/
const images = [
    "images/sweet.jpg", 
    "images/sour.jpg", 
    "images/spicy.png", 
    "images/mild.jpg"
];
const captions = [
    "Sweet", 
    "Sour", 
    "Spicy", 
    "Mild"
];
const container = document.getElementById("q1");
//Loop for Images and captions
for (let i = 0; i < 4; i++) {
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = images[i];
    img.id = "img"+i;
    img.classList.add("slide");
        
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("captions");
    caption.textContent = captions[i];
    imgContainer.appendChild(caption);
    
    container.appendChild(imgContainer);
};
// For clickable images lead to the next page, and display No.
document.getElementById("img0").onclick = function() {
	answerContinent.asia++;
    console.log(answerContinent);
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "grid";
};
document.getElementById("img1").onclick = function() {
    answerContinent.america++;
    console.log(answerContinent);
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "grid";
};
document.getElementById("img2").onclick = function() {
    answerContinent.africa++;
    console.log(answerContinent);
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "grid";
};
document.getElementById("img3").onclick = function() {
    answerContinent.europe++;
    console.log(answerContinent);
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "grid";
};

/*
** Question 2
*/
const baseImages = [
    "images/brownrice.jpg", 
    "images/whiterice.jpeg", 
    "images/greensalad.jpeg", 
    "images/pasta.jpg"
];
const baseCaptions = [
    "Brown Rice", 
    "White Rice", 
    "Green Salad", 
    "Pasta"
];
const baseContainer = document.getElementById("q2");
//Loop for Images and captions
for (let i = 0; i < 4; i++) {
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = baseImages[i];
    img.id = "baseimg"+i;
    img.classList.add("slide");
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("baseCaptions");
    caption.textContent = baseCaptions[i];
    imgContainer.appendChild(caption);
    
    baseContainer.appendChild(imgContainer);
};
// For clickable images lead to the next page, and display No.
document.getElementById("baseimg0").onclick = function() {
	answerContinent.africa++;
    console.log(answerContinent);
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "grid";
};
document.getElementById("baseimg1").onclick = function() {
    answerContinent.asia++;
    console.log(answerContinent);
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "grid";
};
document.getElementById("baseimg2").onclick = function() {
    answerContinent.america++;
    console.log(answerContinent);
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "grid";
};
document.getElementById("baseimg3").onclick = function() {
    answerContinent.europe++;
    console.log(answerContinent);
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "grid";
};

/*
** Question 3
*/
const beverageImages = [
    "images/tea.jpg", 
    "images/coffee.jpg", 
    "images/wine.jpg", 
    "images/water.jpg"
];
const beverageCaptions = [
    "Tea", 
    "Coffee", 
    "Wine", 
    "Water"
];
const beverageContainer = document.getElementById("q3");
//Loop for Images and captions
for (let i = 0; i < 4; i++) {
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = beverageImages[i];
    img.id = "beverageimg"+i;
    img.classList.add("slide");
    beverageImages[i];
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("beverageCaptions");
    caption.textContent = beverageCaptions[i];
    imgContainer.appendChild(caption);
    
    beverageContainer.appendChild(imgContainer);
};
// For clickable images lead to the next page, and display No.
document.getElementById("beverageimg0").onclick = function() {
	answerContinent.asia++;
    console.log(answerContinent);
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "grid";
};
document.getElementById("beverageimg1").onclick = function() {
    answerContinent.america++;
    console.log(answerContinent);
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "grid";
};
document.getElementById("beverageimg2").onclick = function() {
    answerContinent.europe++;
    console.log(answerContinent);
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "grid";
};
document.getElementById("beverageimg3").onclick = function() {
    answerContinent.africa++;
    console.log(answerContinent);
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "grid";
};

/*
** Question 4
*/
const perferImages = [
    "images/vanilla.jpg", 
    "images/milkchocolate.jpg", 
    "images/whitechocolate.jpeg", 
    "images/darkchocolate.jpg"
]
const perferCaptions = [
    "Vanilla", 
    "Milk Chocolate", 
    "White Chocolate", 
    "Dark Chocolate"
]
const perferContainer = document.getElementById("q4");
//Loop for Images and captions
for (let i = 0; i < 4; i++) {
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = perferImages[i];
    img.id = "perferimg"+i;
    img.classList.add("slide");
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("perferCaptions");
    caption.textContent = perferCaptions[i];
    imgContainer.appendChild(caption);
    
    perferContainer.appendChild(imgContainer);
};
// For clickable images lead to the next page, and display No.
document.getElementById("perferimg0").onclick = function() {
	answerContinent.asia++;
    console.log(answerContinent);
    document.getElementById('q4').style.display = "none";
    document.getElementById('q5').style.display = "grid";
};
document.getElementById("perferimg1").onclick = function() {
    answerContinent.africa++;
    console.log(answerContinent);
    document.getElementById('q4').style.display = "none";
    document.getElementById('q5').style.display = "grid";
};
document.getElementById("perferimg2").onclick = function() {
    answerContinent.europe++;
    console.log(answerContinent);
    document.getElementById('q4').style.display = "none";
    document.getElementById('q5').style.display = "grid";
};
document.getElementById("perferimg3").onclick = function() {
    answerContinent.america++;
    console.log(answerContinent);
    document.getElementById('q4').style.display = "none";
    document.getElementById('q5').style.display = "grid";
};

/*
** Question 5
*/
const meatImages = [
    "images/Peking-Duck.jpg", 
    "images/steak.jpg", 
    "images/Wild-Game.jpg", 
    "images/lamb.jpg"
];
const meatCaptions = [
    "Peking-Duck", 
    "Steak", 
    "Wild-Game", 
    "Lamb"
];
const meatContainer = document.getElementById("q5");
//Loop for Images and captions
for (let i = 0; i < 4; i++) {
    
const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = meatImages[i];
    img.id = "meatimg"+i;
    img.classList.add("slide");
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("meatCaptions");
    caption.textContent = meatCaptions[i];
    imgContainer.appendChild(caption);
    
    meatContainer.appendChild(imgContainer);
};
// For clickable images lead to the next page, and display No.
document.getElementById("meatimg0").onclick = function() {
	answerContinent.asia++;
    console.log(answerContinent);
    document.getElementById('q5').style.display = "none";
    document.getElementById('q6').style.display = "grid";
};
document.getElementById("meatimg1").onclick = function() {
    answerContinent.america++;
    console.log(answerContinent);
    document.getElementById('q5').style.display = "none";
    document.getElementById('q6').style.display = "grid";
};
document.getElementById("meatimg2").onclick = function() {
    answerContinent.africa++;
    console.log(answerContinent);
    document.getElementById('q5').style.display = "none";
    document.getElementById('q6').style.display = "grid";
};
document.getElementById("meatimg3").onclick = function() {
    answerContinent.europe++;
    console.log(answerContinent);
    document.getElementById('q5').style.display = "none";
    document.getElementById('q6').style.display = "grid";
};
/*
** Question 5
*/
const dishImages = [
    "images/african-dish.jpg", 
    "images/asian-dish.jpg", 
    "images/europ-dish.jpg", 
    "images/american-dish.jpeg"
];
const dishCaptions = [
   
];
const dishContainer = document.getElementById("q6");
//Loop for Images and captions
for (let i = 0; i < 4; i++) {
    
const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = dishImages[i];
    img.id = "dishing"+i;
    img.classList.add("slide");
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("dishCaptions");
    caption.textContent = dishCaptions[i];
    imgContainer.appendChild(caption);
    
    dishContainer.appendChild(imgContainer);
};
// For clickable images lead to the next page, and display No.
document.getElementById("dishing0").onclick = function() {
	answerContinent.africa++;
    console.log(answerContinent);
    document.getElementById('q6').style.display = "none";
    document.getElementById('q7').style.display = "grid";
};
document.getElementById("dishing1").onclick = function() {
    answerContinent.asia++;
    console.log(answerContinent);
    document.getElementById('q6').style.display = "none";
    document.getElementById('q7').style.display = "grid";
};
document.getElementById("dishing2").onclick = function() {
    answerContinent.europe++;
    console.log(answerContinent);
    document.getElementById('q6').style.display = "none";
    document.getElementById('q7').style.display = "grid";
};
document.getElementById("dishing3").onclick = function() {
    answerContinent.america++;
    console.log(answerContinent);
    document.getElementById('q6').style.display = "none";
    document.getElementById('q7').style.display = "grid";
};

/*
** Question 7
*/
const comfortImages = [
    "images/pizza.jpg", 
    "images/dumpling.jpg", 
    "images/icecream.jpg", 
    "images/friedchicken.jpg"
];
const comfortCaptions = [
    "Pizza", 
    "Dumpling", 
    "Ice Cream", 
    "Fried Chicken"
];
   
const comfortContainer = document.getElementById("q7");
const result = document.getElementById('endResult');
const message = document.createElement('article');
// To display images and captions
for (let i = 0; i < 4; i++) {
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = comfortImages[i];
    img.id = "comfortimg"+i;
    img.classList.add("slide");
    comfortImages[i];
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("comfortCaptions");
    caption.textContent = comfortCaptions[i];
    imgContainer.appendChild(caption);
    
    comfortContainer.appendChild(imgContainer);
};
// For clickable images lead to the next page, and display No.
document.getElementById("comfortimg0").onclick = function() {
	answerContinent.america++;
    console.log(answerContinent);
    document.getElementById('q7').style.display = "none";
    document.getElementById('endResult').style.display = "grid";
    endResult.appendChild(message);
    
    var img = document.createElement('img');
    
    img.classList.add("IMAGES");

     if (answerContinent.asia++ >= 3) {
         img.src = "images/asian-food.jpg";
            document.body.appendChild(img);
            message.textContent ="Travel to Asian! Your stomach will be satisfied with their food!";
        }else if(answerContinent.europe >= 3){
            img.src = "images/europe-food.jpg";
            message.textContent ="Travel to Europe! Your stomach will be satisfied with their food!";
            document.body.appendChild(img);   
        }else if(answerContinent.africa >= 3){
            img.src = "images/african-food.png";
            message.textContent ="Travel to African! Your stomach will be satisfied with their food!";
            document.body.appendChild(img);  
        }else if(answerContinent.america >= 3){
            img.src = "images/america-food.jpg";
            document.body.appendChild(img);
            message.textContent ="Travel to America! Your stomach will be satisfied with their food!";
        }
};
document.getElementById("comfortimg1").onclick = function(){
    answerContinent.asia++;
    console.log(answerContinent);
    document.getElementById('q7').style.display = "none";
    document.getElementById('endResult').style.display = "grid";
    endResult.appendChild(message);
    var img = document.createElement('img');
    
    img.classList.add("IMAGES");
    
 if (answerContinent.asia++ >= 3) {
         img.src = "images/asian-food.jpg";
            document.body.appendChild(img);
            message.textContent ="Travel to Asian! Your stomach will be satisfied with their food!";
        }else if(answerContinent.europe >= 3){
            img.src = "images/europe-food.jpg";
            message.textContent ="Travel to Europe! Your stomach will be satisfied with their food!";
            document.body.appendChild(img);   
        }else if(answerContinent.africa >= 3){
            img.src = "images/african-food.png";
            message.textContent ="Travel to African! Your stomach will be satisfied with their food!";
            document.body.appendChild(img);  
        }else if(answerContinent.america >= 3){
            img.src = "images/america-food.jpg";
            document.body.appendChild(img);
            message.textContent ="Travel to America! Your stomach will be satisfied with their food!";
        }
};
document.getElementById("comfortimg2").onclick = function() {
    answerContinent.europe++;
    console.log(answerContinent);
    document.getElementById('q7').style.display = "none";
    document.getElementById('endResult').style.display = "grid";
    endResult.appendChild(message);
    
    var img = document.createElement('img');
    
    img.classList.add("IMAGES");

   if (answerContinent.asia++ >= 3) {
         img.src = "images/asian-food.jpg";
            document.body.appendChild(img);
            message.textContent ="Travel to Asian! Your stomach will be satisfied with their food!";
        }else if(answerContinent.europe >= 3){
            img.src = "images/europe-food.jpg";
            message.textContent ="Travel to Europe! Your stomach will be satisfied with their food!";
            document.body.appendChild(img);   
        }else if(answerContinent.africa >= 3){
            img.src = "images/african-food.png";
            message.textContent ="Travel to African! Your stomach will be satisfied with their food!";
            document.body.appendChild(img);  
        }else if(answerContinent.america >= 3){
            img.src = "images/america-food.jpg";
            document.body.appendChild(img);
            message.textContent ="Travel to America! Your stomach will be satisfied with their food!";
        }
};
document.getElementById("comfortimg3").onclick = function() {
    answerContinent.africa++;
    console.log(answerContinent);
    document.getElementById('q7').style.display = "none";
    document.getElementById('endResult').style.display = "grid";
    endResult.appendChild(message);
    
    var img = document.createElement('img');
  
    img.classList.add("IMAGES");
    
 if (answerContinent.asia++ >= 3) {
         img.src = "images/asian-food.jpg";
            document.body.appendChild(img);
            message.textContent ="Travel to Asian! Your stomach will be satisfied with their food!";
        }else if(answerContinent.europe >= 3){
            img.src = "images/europe-food.jpg";
            message.textContent ="Travel to Europe! Your stomach will be satisfied with their food!";
            document.body.appendChild(img);   
        }else if(answerContinent.africa >= 3){
            img.src = "images/african-food.png";
            message.textContent ="Travel to African! Your stomach will be satisfied with their food!";
            document.body.appendChild(img);  
        }else if(answerContinent.america >= 3){
            img.src = "images/america-food.jpg";
            document.body.appendChild(img);
            message.textContent ="Travel to America! Your stomach will be satisfied with their food!";
        }
};
