/*
** Get the users button
*/


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
for (let i = 0; i < images.length; i++) {
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = images[i];
    img.id = "img"+i;
    img.classList.add("slide");
    
//    img.onclick = function() {
//        const index = this.id.split("img")[1];
//       document.getElementById('q4').style.display = "none";
//       document.getElementById('q5').style.display = "block";
//    };
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("captions");
    caption.textContent = captions[i];
    imgContainer.appendChild(caption);
    
    body.appendChild(imgContainer);
}
//const questionButton4 = [
//    document.getElementById('TeaT'),
//    document.getElementById('CoffeeT'),
//    document.getElementById('WineT'),
//    document.getElementById('WaterT'),
//]
//questionButton4[0].onclick = function(){
//    const answer = document.getElementById('buttons4').value;
//    document.getElementById('q4').style.display = "block";
//    document.getElementById('q3').style.display = "none";
//};
//questionButton4[1].onclick = function(){
//    const answer = document.getElementById('buttons4').value;
//    document.getElementById('q4').style.display = "block";
//    document.getElementById('q3').style.display = "none";
//};
//questionButton4[2].onclick = function(){
//    const answer = document.getElementById('buttons4').value;
//    document.getElementById('q4').style.display = "block";
//    document.getElementById('q3').style.display = "none";
//};
//questionButton4[3].onclick = function(){
//    const answer = document.getElementById('buttons4').value;
//    document.getElementById('q4').style.display = "block";
//    document.getElementById('q3').style.display = "none";
//};
/*
** Question 5
*/
//const questionButton5 = [
//    document.getElementById('blue'),
//    document.getElementById('red'),
//    document.getElementById('grey'),
//    document.getElementById('yellow'),
//]
//questionButton5[0].onclick = function(){
//    const answer = document.getElementById('buttons5').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton5[1].onclick = function(){
//    const answer = document.getElementById('buttons5').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton5[2].onclick = function(){
//    const answer = document.getElementById('buttons5').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton5[3].onclick = function(){
//    const answer = document.getElementById('buttons5').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};