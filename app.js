/*
** Get the users button
*/
const startButton = document.getElementById('start')
startButton.onclick = function (){
    document.getElementById('q1').style.display = "block";
    document.getElementById('box').style.display = "none";
}
/*
** Question 1
*/
const questionButton1 = [
    document.getElementById('sweet'),
    document.getElementById('sour'),
    document.getElementById('spicy'),
    document.getElementById('mild'),
];
for(let i = 0; i < 4; i++){
    questionButton1[i].onclick = function(){
    const answer = document.getElementById('buttons1').value;
    document.getElementById('q2').style.display = "block";
    document.getElementById('q1').style.display = "none";
};
}

/*
** Question 2
*/
const questionButton2 = [
    document.getElementById('brownRice'),
    document.getElementById('whiteRice'),
    document.getElementById('greenSalad'),
    document.getElementById('pasta'),
]
for(let i = 0; i < 4; i++){
    questionButton2[i].onclick = function(){
    const answer = document.getElementById('buttons2').value;
    document.getElementById('q3').style.display = "block";
    document.getElementById('q2').style.display = "none";
};
}


/*
** Question 3
*/
const questionButton3 = [
    document.getElementById('tea'),
    document.getElementById('coffee'),
    document.getElementById('wine'),
    document.getElementById('water'),
]
for(let i = 0; i < 4; i++){
    questionButton3[i].onclick = function(){
    const answer = document.getElementById('buttons3').value;
    document.getElementById('q4').style.display = "block";
    document.getElementById('q3').style.display = "none";
};
}

/*
** Question 4
*/
const images = [
    "images/vanilla.jpg", 
    "images/milkchocolate.jpg", 
    "images/whitechocolate.jpeg", 
    "images/darkchocolate.jpg"
];
const captions = [
    "Vanilla", 
    "Milk Chocolate", 
    "White Chocolate", 
    "Dark Chocolate"
];
const container = document.getElementById("q4");
for (let i = 0; i < images.length; i++) {
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = images[i];
    img.id = "img"+i;
    img.classList.add("slide");
    
    img.onclick = function() {
        const index = this.id.split("img")[1];
       document.getElementById('q4').style.display = "none";
       document.getElementById('q5').style.display = "block";
    };
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("captions");
    caption.textContent = captions[i];
    imgContainer.appendChild(caption);
    
    container.appendChild(imgContainer);
}
/*
** Question 
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
for (let i = 0; i < images.length; i++) {
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = meatImages[i];
    img.id = "img"+i;
    img.classList.add("slide");
    
    img.onclick = function() {
        const index = this.id.split("img")[1];
       document.getElementById('q5').style.display = "none";
       document.getElementById('q6').style.display = "block";
    };
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("meatCaptions");
    caption.textContent = meatCaptions[i];
    imgContainer.appendChild(caption);
    
    meatContainer.appendChild(imgContainer);
}

