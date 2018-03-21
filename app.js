/*
** Button to start quiz
*/
const startButton = document.getElementById('start')
startButton.onclick = function (){
    document.getElementById('q1').style.display = "block";
    document.getElementById('box').style.display = "none";
}

//for score
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
for (let i = 0; i < 4; i++) {
    
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = images[i];
    img.id = "img"+i;
    img.classList.add("slide");
    
    window.onload = function () {
        document.getElementById("img0").onclick = function () {
            answerContinent.africa++;
            console.log(answerContinent);
            document.getElementById('q1').style.display = "none";
            document.getElementById('q2').style.display = "block";
        };

        document.getElementById("img1").onclick = function () {
            answerContinent.europe++;
            console.log(answerContinent);
            document.getElementById('q1').style.display = "none";
            document.getElementById('q2').style.display = "block";
        };

        document.getElementById("img2").onclick = function () {
            answerContinent.asia++;
            console.log(answerContinent);
            document.getElementById('q1').style.display = "none";
            document.getElementById('q2').style.display = "block";
        };

        document.getElementById("img3").onclick = function () {
            answerContinent.america++;
            console.log(answerContinent);
            document.getElementById('q1').style.display = "none";
            document.getElementById('q2').style.display = "block";
        };
    };
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("captions");
    caption.textContent = captions[i];
    imgContainer.appendChild(caption);
    
    container.appendChild(imgContainer);
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
for (let i = 4; i < 8; i++) {
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = baseImages[i];
    img.id = "img"+i;
    img.classList.add("slide");
    
    window.onload = function () {
        document.getElementById("img4").onclick = function () {
            answerContinent.africa++;
            console.log(answerContinent);
            document.getElementById('q2').style.display = "none";
            document.getElementById('q3').style.display = "block";
        };

        document.getElementById("img5").onclick = function () {
            answerContinent.europe++;
            console.log(answerContinent);
            document.getElementById('q2').style.display = "none";
            document.getElementById('q3').style.display = "block";
        };

        document.getElementById("img6").onclick = function () {
            answerContinent.asia++;
            console.log(answerContinent);
            document.getElementById('q2').style.display = "none";
            document.getElementById('q3').style.display = "block";
        };

        document.getElementById("img7").onclick = function () {
            answerContinent.america++;
            console.log(answerContinent);
            document.getElementById('q2').style.display = "none";
            document.getElementById('q3').style.display = "block";
        };
    };
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("baseCaptions");
    caption.textContent = baseCaptions[i];
    imgContainer.appendChild(caption);
    
    baseContainer.appendChild(imgContainer);
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
for (let i = 8; i < 12; i++) {
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = beverageImages[i];
    img.id = "img"+i;
    img.classList.add("slide");
    
    window.onload = function () {
        document.getElementById("img8").onclick = function () {
            answerContinent.africa++;
            console.log(answerContinent);
            document.getElementById('q3').style.display = "none";
            document.getElementById('q4').style.display = "block";
        };

        document.getElementById("img9").onclick = function () {
            answerContinent.europe++;
            console.log(answerContinent);
            document.getElementById('q3').style.display = "none";
            document.getElementById('q4').style.display = "block";
        };

        document.getElementById("img610").onclick = function () {
            answerContinent.asia++;
            console.log(answerContinent);
            document.getElementById('q3').style.display = "none";
            document.getElementById('q4').style.display = "block";
        };

        document.getElementById("img11").onclick = function () {
            answerContinent.america++;
            console.log(answerContinent);
            document.getElementById('q3').style.display = "none";
            document.getElementById('q4').style.display = "block";
        };
    };
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("beverageCaptions");
    caption.textContent = beverageCaptions[i];
    imgContainer.appendChild(caption);
    
    beverageContainer.appendChild(imgContainer);
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
for (let i = 12; i < 16; i++) {
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = perferImages[i];
    img.id = "img"+i;
    img.classList.add("slide");
    
    window.onload = function () {
        document.getElementById("img12").onclick = function () {
            answerContinent.africa++;
            console.log(answerContinent);
            document.getElementById('q4').style.display = "none";
            document.getElementById('q5').style.display = "block";
        };

        document.getElementById("img13").onclick = function () {
            answerContinent.europe++;
            console.log(answerContinent);
            document.getElementById('q4').style.display = "none";
            document.getElementById('q5').style.display = "block";
        };

        document.getElementById("img14").onclick = function () {
            answerContinent.asia++;
            console.log(answerContinent);
            document.getElementById('q4').style.display = "none";
            document.getElementById('q5').style.display = "block";
        };

        document.getElementById("img15").onclick = function () {
            answerContinent.america++;
            console.log(answerContinent);
            document.getElementById('q4').style.display = "none";
            document.getElementById('q5').style.display = "block";
        };
    };
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("perferCaptions");
    caption.textContent = perferCaptions[i];
    imgContainer.appendChild(caption);
    
    perferContainer.appendChild(imgContainer);
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
for (let i = 16; i < 20; i++) {
    
const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = meatImages[i];
    img.id = "img"+i;
    img.classList.add("slide");
    
    window.onload = function () {
        document.getElementById("img16").onclick = function () {
            answerContinent.africa++;
            console.log(answerContinent);
            document.getElementById('q5').style.display = "none";
            document.getElementById('q6').style.display = "block";
        };

        document.getElementById("img17").onclick = function () {
            answerContinent.europe++;
            console.log(answerContinent);
            document.getElementById('q5').style.display = "none";
            document.getElementById('q6').style.display = "block";
        };

        document.getElementById("img18").onclick = function () {
            answerContinent.asia++;
            console.log(answerContinent);
            document.getElementById('q5').style.display = "none";
            document.getElementById('q6').style.display = "block";
        };

        document.getElementById("img19").onclick = function () {
            answerContinent.america++;
            console.log(answerContinent);
            document.getElementById('q5').style.display = "none";
            document.getElementById('q6').style.display = "block";
        };
    };
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("meatCaptions");
    caption.textContent = meatCaptions[i];
    imgContainer.appendChild(caption);
    
    meatContainer.appendChild(imgContainer);
};

/*
** Question 6
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
const comfortContainer = document.getElementById("q6");
for (let i = 20; i < 24; i++) {
    
//    images[i];
    
    const imgContainer = document.createElement('div');
    
    const img = new Image();
    img.src = comfortImages[i];
    img.id = "img"+i;
    img.classList.add("slide");
    
    window.onload = function () {
        document.getElementById("img20").onclick = function () {
            answerContinent.africa++;
            console.log(answerContinent);
            document.getElementById('q6').style.display = "none";
            document.getElementById('endResult').style.display = "block";
        };

        document.getElementById("img21").onclick = function () {
            answerContinent.europe++;
            console.log(answerContinent);
            document.getElementById('q6').style.display = "none";
            document.getElementById('endResult').style.display = "block";
        };

        document.getElementById("img22").onclick = function () {
            answerContinent.asia++;
            console.log(answerContinent);
            document.getElementById('q6').style.display = "none";
            document.getElementById('endResult').style.display = "block";
        };

        document.getElementById("img23").onclick = function () {
            answerContinent.america++;
            console.log(answerContinent);
            document.getElementById('q6').style.display = "none";
            document.getElementById('endResult').style.display = "block";
        };
    };
    
    imgContainer.appendChild(img);
    
    const caption = document.createElement('p');
    caption.classList.add("comfortCaptions");
    caption.textContent = comfortCaptions[i];
    imgContainer.appendChild(caption);
    
    comfortContainer.appendChild(imgContainer);
};

/*
** End Result
*/
function end() {
    
    var answerCont = [
    "Africa",
    "Europe",
    "Asia",
    "America"
    ];
    
    // Creating new element for answer
    var answer = document.createElement("h4");
    document.body.appendChild(answer);
    
    var score;
    
    if (answerContinent.africa < 2 ){
        answer.textContent = answerCont[0];
    }else if (answerContinent.europe < 2 ){
        answer.textContent = answerCont[1];
    }else if (answerContinent.asia < 2 ){
        answer.textContent = answerCont[2];
    }else if (answerContinent.america < 2 ){
        answer.textContent = answerCont[3];
    }else {
        answer.textContent != answerCont;
    }
    
    document.getElementById('endResult').style.display = "block";
    
};
