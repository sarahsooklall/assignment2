/*
** Get the users button
*/
const questionButton = [
    document.getElementById('sweet'),
    document.getElementById('sour'),
    document.getElementById('spicy'),
    document.getElementById('mild'),
    document.getElementById('blue'),
    document.getElementById('red'),
    document.getElementById('grey'),
    document.getElementById('yellow'),
];

/*
** Question 1
*/
questionButton[0].onclick = function(){
    const answer = document.getElementById('buttons').value;
    document.getElementById('q2').style.display = "block";
    document.getElementById('q1').style.display = "none";
};

/*
** Question 2
*/
questionButton[1].onclick = function(){
    const answer = document.getElementById('buttons').value;
    document.getElementById('q3').style.display = "block";
    document.getElementById('q2').style.display = "none";
};
