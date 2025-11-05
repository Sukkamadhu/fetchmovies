let questions = [
    {
        question: "What is fullform js?",
        options: ["JavaScript", "JavaScript Object Notation", "JavaScript Standard", "JavaScript Syntax"],
        answer: "JavaScript"
    }

    {
        question: "What is fullform html?",
        options: ["JavaScript", "hyper text markup language", "JavaScript Standard", "JavaScript Syntax"],
        answer: "hyper text markup language"
    }
 {
        question: "What is fullform sql?",
        options: ["JavaScript", "hyper text markup language", "structural query language", "JavaScript Syntax"],
        answer: "structural query language"
    }


]





let instruction =document.getElementById("instruction.cointainer")
let question = document.getElementById("question.cointainer")
let answer = document.getElementById("quizOver.cointainer")

let startButton = document.getElementById("bt");
let

instruction.style.display = "block";
question.style.display = "none";
answer.style.display = "none";

bt.Onclick = function()=>{
    instruction.style.display = "none";
    question.style.display = "block";
    answer.style.display = "none";
    bt.textContent = "Next";
    question.textContent = questions[0].question;
    for (let i=0;i<4;i++){
        
    }
}