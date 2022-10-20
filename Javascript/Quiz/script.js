//Question AND Answer Object
const quizData = [
    {
        question: 'What is Stephen Curry Number?',
        a: '30',
        b: '31',
        c: '32',
        d: '33',
        correct: 'a'
    },{
        question: 'Who Playing with Dallas Mavericks?',
        a: 'Trae Young',
        b: 'Luka Doncic',
        c: 'Devin Booker',
        d: 'Zion Williams',
        correct: 'b'
    },{
        question: 'Who is 2022 NBA Finals MVP?',
        a: 'Jayson Tatum',
        b: 'Jaylen Brown',
        c: 'Andrew Wiggins',
        d: 'Stephen Curry',
        correct: 'd'
    },{
        question: 'Who is 2022 NBA Most Valuable Player?',
        a: 'Joel Embiid',
        b: 'Nikola Jokic',
        c: 'Ja Morant',
        d: 'LeBron James',
        correct: 'b'
    },{
        question: 'Who never won NBA Championship?',
        a: 'Jordan Poole',
        b: 'Patrick McCaw',
        c: 'Chris Paul',
        d: 'Jeremy Lin',
        correct: 'c' 
    }
]
//declared 
const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();
//load Quiz Function
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

//select answer function
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

//deselect answer function
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

//Event when Submit
submitBtn.addEventListener("click", () => {
    // check you see the answer
    const answer = getSelected();
    if(answer){   
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        //load Quiz
        if (currentQuiz < quizData.length){
            loadQuiz();
        //Counting AND Showing Score AND Reload Page
        }else{
            quiz.innerHTML = `<h2>You Score is ${score}/${quizData.length} Points.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }

});