const questions = [
    {
        que:"What does the abbreviation HTML stand for?",
        a:"HyperText Markup Languages",
        b:"HighText Markup Languages",
        c:"HighText Markdown Languages",
        d:"None of the above",
        correct:"a"
    },
    {
        que:"How many sizes of headers are available in HTML by default?",
        a:"5",
        b:"1",
        c:"3",
        d:"6",
        correct:"d"
    },
    {
        que:"What is the smallest header in HTML by default?",
        a:"h1",
        b:"h2",
        c:"h6",
        d:"h4",
        correct:"c"
    },
    {
        que:"How to create an ordered list in HTML?",
        a:"<ul>",
        b:"<ol>",
        c:"<href>",
        d:"<b>",
        correct:"b"
    },
    
]
let total = questions.length, right=0, wrong=0 , index=0;
let question = document.getElementById("question");
let opiton = document.querySelectorAll(".option");
function startQuiz(){
    right=0;
    wrong=0;
    index=0;
    loadQuestion();
}
function loadQuestion(){
    if(index===total){
        return endQuiz();
    }
    else{
    reset();
    let data=questions[index];
    question.innerText=`${index+1}. ${data.que}`; 
    opiton[0].nextElementSibling.innerText=data.a;
    opiton[1].nextElementSibling.innerText=data.b;
    opiton[2].nextElementSibling.innerText=data.c;
    opiton[3].nextElementSibling.innerText=data.d;
    }
}
function submit(){
    let data=questions[index];
    ans = getAnswer();
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
}
function getAnswer(){
    let ans;  
    opiton.forEach((index)=>{
        if(index.checked){
           ans = index.value;
        }
        
    })
    return ans;
}
function reset(){
    opiton.forEach((input)=>{
        input.checked=false;
    })
}
function endQuiz(){
    let box = document.getElementById("box");
    box.innerHTML=`
        <h2>Quiz is finished</h2>
        <h3>you score ${right} out of ${total}</h3>`;
        const btn=  document.getElementById("btn");
        btn.style.display="block";
}
startQuiz();
