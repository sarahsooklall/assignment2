/*
** To Get The User Buttons
*/
/**** Question 1 ****/
const q1SweetBtn = document.getElementById('sweet');
const q1SourBtn = document.getElementById('sour');
const q1SpicyBtn = document.getElementById('spicy');
const q1MildBtn = document.getElementById('mild');
/**** Question 2 ****/
const q2BrownRiceBtn = document.getElementById('brownRice');
const q2WhiteRiceBtn = document.getElementById('whiteRice');
const q2GreenSaladBtn = document.getElementById('greenSalad');
const q2PastaBtn = document.getElementById('pasta');
/**** Question 3 ****/
const q3TeaBtn = document.getElementById('tea');
const q3CoffeeBtn = document.getElementById('coffee');
const q3WineBtn = document.getElementById('wine');
const q3WaterBtn = document.getElementById('water');
/**** Question 4 ****/
const container = document.getElementById("button4");
/**** Question 5 ****/

/**** Question 6 ****/

/**** Question 7 ****/


/*
** CSS - To Display One Question At A Time
*/
document.getElementById('q1').style.display = "block";
document.getElementById('q2').style.display = "none";
document.getElementById('q3').style.display = "none";
document.getElementById('q4').style.display = "none";
document.getElementById('q5').style.display = "none";
document.getElementById('q6').style.display = "none";
document.getElementById('q7').style.display = "none";

/*
** Array - For Gathering Questions
*/
const questions = [
    document.getElementById('q1'),
    document.getElementById('q2'),
    document.getElementById('q3'),
    document.getElementById('q4'),
]

/*
** Array - For Clickable Images
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

/*
** Array - For End Result
*/
const results = [
	"BUBBLY!",
	"COOL KID!",
	"LOVABLE!",
	"EXTRAVAGANT!",
	"DOUBLED!",
];
const descriptions = [
	"You are sugary and sweet, just like the things you eat.",
	"Oh my god. You're effortlessly cool. You have very few enemies.",
	"Everybody loves you. Everybody wants you. You just make people feel good.",
	"You're extreme in a good way. You're really living. We should all applaud you for doing what everyone else can't.",
	"You hide the fact that you're smart, sophisticated, and fancy - to not intimidate the people around you. Aw, you care!",
];
const result = [
	"Africa",
	"Europe",
	"Asia",
	"America",
];

/*
** Question 1
** Show All Buttons. When Button Click, Move On To Next Question.
*/
q1SweetBtn.onclick = function()
{
    const anwser = document.getElementById('button1').value;
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "block";
};
q1SourBtn.onclick = function()
{
    const anwser = document.getElementById('button1').value;
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "block";
};
q1SpicyBtn.onclick = function()
{
    const anwser = document.getElementById('button1').value;
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "block";
};
q1MildBtn.onclick = function()
{
    const anwser = document.getElementById('button1').value;
    document.getElementById('q1').style.display = "none";
    document.getElementById('q2').style.display = "block";
};

/*
** Question 2
** Show All Buttons. When Button Click, Move On To Next Question.
*/
q2BrownRiceBtn.onclick = function()
{
    const anwser = document.getElementById('button2').value;
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "block";
};
q2WhiteRiceBtn.onclick = function()
{
    const anwser = document.getElementById('button2').value;
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "block";
};
q2GreenSaladBtn.onclick = function()
{
    const anwser = document.getElementById('button2').value;
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "block";
};
q2PastaBtn.onclick = function()
{
    const anwser = document.getElementById('button2').value;
    document.getElementById('q2').style.display = "none";
    document.getElementById('q3').style.display = "block";
};

/*
** Question 3
** Show All Buttons. When Button Click, Move On To Next Question.
*/
q3TeaBtn.onclick = function()
{
    const anwser = document.getElementById('button3').value;
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "block";
};
q3CoffeeBtn.onclick = function()
{
    const anwser = document.getElementById('button3').value;
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "block";
};
q3WineBtn.onclick = function()
{
    const anwser = document.getElementById('button3').value;
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "block";
};
q3WaterBtn.onclick = function()
{
    const anwser = document.getElementById('button3').value;
    document.getElementById('q3').style.display = "none";
    document.getElementById('q4').style.display = "block";
};

/*
** Question 4 Option 1
** Show All Buttons. When Button Click, Move On To Next Question.
*/
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
	caption.classList.add("caption");
	caption.textContent = captions[i];
	imgContainer.appendChild(caption);
	
	container.appendChild(imgContainer);
}

/*
** End Result
*/
//var userAnswer = '';
//var numCorrect = 0;
//
//for(var i=0; i<questions.length; i++){














//-------------------------------------------------------------------------------









/*
** Question 4 Option 2
** Show All Buttons. When Button Click, Move On To Next Question.
*/
//const q4__Btn = document.getElementById('__');
//q4__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button4').value;
//    document.getElementById('q4').style.display = "none";
//    document.getElementById('q5').style.display = "block";
//};
//const q4__Btn = document.getElementById('__');
//q4__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button4').value;
//    document.getElementById('q4').style.display = "none";
//    document.getElementById('q5').style.display = "block";
//};
//const q4__Btn = document.getElementById('__');
//q4__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button4').value;
//    document.getElementById('q4').style.display = "none";
//    document.getElementById('q5').style.display = "block";
//};
//const q4__Btn = document.getElementById('__');
//q4__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button4').value;
//    document.getElementById('q4').style.display = "none";
//    document.getElementById('q5').style.display = "block";
//};

/*
** Question 5
** Show All Buttons. When Button Click, Move On To Next Question.
*/
//const q5__Btn = document.getElementById('__');
//q5__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button5').value;
//    document.getElementById('q5').style.display = "none";
//    document.getElementById('q6').style.display = "block";
//};
//const q5__Btn = document.getElementById('__');
//q5__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button5').value;
//    document.getElementById('q5').style.display = "none";
//    document.getElementById('q6').style.display = "block";
//};
//const q5__Btn = document.getElementById('__');
//q5__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button5').value;
//    document.getElementById('q5').style.display = "none";
//    document.getElementById('q6').style.display = "block";
//};
//const q5__Btn = document.getElementById('__');
//q5__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button5').value;
//    document.getElementById('q5').style.display = "none";
//    document.getElementById('q6').style.display = "block";
//};

/*
** Question 6
** Show All Buttons. When Button Click, Move On To Next Question.
*/
//const q6__Btn = document.getElementById('__');
//q6__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button6').value;
//    document.getElementById('q6').style.display = "none";
//    document.getElementById('q7').style.display = "block";
//};
//const q6__Btn = document.getElementById('__');
//q6__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button6').value;
//    document.getElementById('q6').style.display = "none";
//    document.getElementById('q7').style.display = "block";
//};
//const q6__Btn = document.getElementById('__');
//q6__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button6').value;
//    document.getElementById('q6').style.display = "none";
//    document.getElementById('q7').style.display = "block";
//};
//const q6__Btn = document.getElementById('__');
//q6__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button6').value;
//    document.getElementById('q6').style.display = "none";
//    document.getElementById('q7').style.display = "block";
//};

/*
** Question 7
** Show All Buttons. When Button Click, Move On To End Result.
*/
//const q7__Btn = document.getElementById('__');
//q7__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button7').value;
//    document.getElementById('q7').style.display = "none";
//    document.getElementById('q8').style.display = "block";
//};
//const q7__Btn = document.getElementById('__');
//q7__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button7').value;
//    document.getElementById('q7').style.display = "none";
//    document.getElementById('q8').style.display = "block";
//};
//const q7__Btn = document.getElementById('__');
//q7__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button7').value;
//    document.getElementById('q7').style.display = "none";
//    document.getElementById('q8').style.display = "block";
//};
//const q7__Btn = document.getElementById('__');
//q7__Btn.onclick = function()
//{
//    const anwser = document.getElementById('button7').value;
//    document.getElementById('q7').style.display = "none";
//    document.getElementById('q8').style.display = "block";
//};

/*
** End Result
** Use Of Array And Loop To Diplay The Result
*/






//-----------------------------------------------------------------------------------








/*
** Get the users button
*/
/*
** Question 1
*/
//const questionButton1 = [
//    document.getElementById('sweet'),
//    document.getElementById('sour'),
//    document.getElementById('spicy'),
//    document.getElementById('mild'),
//];
//
//questionButton1[0].onclick = function(){
//    const answer = document.getElementById('buttons1').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton1[1].onclick = function(){
//    const answer = document.getElementById('buttons1').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton1[2].onclick = function(){
//    const answer = document.getElementById('buttons1').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton1[3].onclick = function(){
//    const answer = document.getElementById('buttons1').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
/*
** Question 2
*/
//const questionButton2 = [
//    document.getElementById('brownRice'),
//    document.getElementById('whiteRice'),
//    document.getElementById('greenSalad'),
//    document.getElementById('Pasta'),
//]
//questionButton2[0].onclick = function(){
//    const answer = document.getElementById('buttons2').value;
//    document.getElementById('q3').style.display = "block";
//    document.getElementById('q2').style.display = "none";
//};
//questionButton2[1].onclick = function(){
//    const answer = document.getElementById('buttons2').value;
//    document.getElementById('q3').style.display = "block";
//    document.getElementById('q2').style.display = "none";
//};
//questionButton2[2].onclick = function(){
//    const answer = document.getElementById('buttons2').value;
//    document.getElementById('q3').style.display = "block";
//    document.getElementById('q2').style.display = "none";
//};
//questionButton2[3].onclick = function(){
//    const answer = document.getElementById('buttons2').value;
//    document.getElementById('q3').style.display = "block";
//    document.getElementById('q2').style.display = "none";
//};
/*
** Question 3
*/
//const questionButton3 = [
//    document.getElementById('tea'),
//    document.getElementById('coffee'),
//    document.getElementById('wine'),
//    document.getElementById('water'),
//]
//questionButton3[0].onclick = function(){
//    const answer = document.getElementById('buttons3').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton3[1].onclick = function(){
//    const answer = document.getElementById('buttons3').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton3[2].onclick = function(){
//    const answer = document.getElementById('buttons3').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton3[3].onclick = function(){
//    const answer = document.getElementById('buttons3').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
/*
** Question 4
*/
//const questionButton4 = [
//    document.getElementById('blue'),
//    document.getElementById('red'),
//    document.getElementById('grey'),
//    document.getElementById('yellow'),
//]
//questionButton4[0].onclick = function(){
//    const answer = document.getElementById('buttons4').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton4[1].onclick = function(){
//    const answer = document.getElementById('buttons4').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton4[2].onclick = function(){
//    const answer = document.getElementById('buttons4').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
//};
//questionButton4[3].onclick = function(){
//    const answer = document.getElementById('buttons4').value;
//    document.getElementById('q2').style.display = "block";
//    document.getElementById('q1').style.display = "none";
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