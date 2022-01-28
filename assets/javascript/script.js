var highScores = document.getElementById('viewHighScores')
var timer = document.getElementById('timer');
var quiz = document.getElementById('quiz');
var results = document.getElementById('result');
var score = document.getElementById('score');
var startBtn = document.getElementById('startBtn');
var btn1 = document('btn1');
var btn2 = document('btn2');
var btn3 = document('btn3');
var btn4 = document('btn4');

const quizQuestions = [{
    question: "Commonly used data types DO Not \nInclude:",
    ans1: "strings",
    ans2: "booleans",
    ans3: "alerts",
    ans4: "numbers",
    correctAns: "3"
}, 
{
    question: "The condition in an if / else statement is \nenclosed with ___________. ",
    ans1: "quotes",
    ans2: "curly brackets",
    ans3: "parenthesis",
    ans4: "square brackets",
    correctAns: "3"
},
{
    question: "Arrays in JavaSCript can be used to store \n___________.",
    ans1: "numbers and strings",
    ans2: "other arrays",
    ans3: "booleans",
    ans4: "all of the above",
    correctAns: "4"
},
{
    question: "String values must be enclosed within _________\nwhen being assigned to variables.",
    ans1: "commas",
    ans2: "curly brackets",
    ans3: "quotes",
    ans4: "parenthesis",
    correctAns: "3"
},
{
    question: "A very useful tool used during development \nand debugging for printing content to the \ndebugger is:",
    ans1: "JavaScript",
    ans2: "terminal/bash",
    ans3: "for loops",
    ans4: "console.log",
    correctAns: "4"
}
]