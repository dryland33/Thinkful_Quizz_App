/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */

let myQuiz = {
    currentQuestion: 0,
    correctTally: 0,
    percent:['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%', ],
    result: ['You\'re correct!', 'You\'re wrong!'],
    images: [
      "img/sun.jpg",
      "img/Uranus.jpg",
      "img/moon.jpg",
      "img/jupiter.jpg",
      "img/mars.jpg",
      ],
    trivia: [
      "Light travels at a speed of 299,792 kilometers per second; 186,287 miles per second. It takes 499.0 seconds for light to travel from the Sun to the Earth, a distance called 1 Astronomical Unit.",
      "Uranus is the seventh planet from the Sun, orbiting at a distance of 2.88 billion km. But it’s still much closer than Neptune, which averages a distance of 4.5 billion km from the Sun.",
      "The Moon has much weaker gravity than Earth, due to its smaller mass, so you would weigh about one sixth (16.5%) of your weight on Earth. This is why the lunar astronauts could leap and bound so high in the air.",
      "Jupiter’s interior is made of rock, metal, and hydrogen compounds. Below Jupiter’s massive atmosphere (which is made primarily of hydrogen), there are layers of compressed hydrogen gas, liquid metallic hydrogen, and a core of ice, rock, and metals.",
      "Mars has a very thin atmosphere. The resulting atmospheric pressure is only about 1% of that found at sea level on Earth. That is the equivalent pressure found at 35 km above the Earth’s surface.",
    ],
    questionList: [
        {
            question: "What is the sun mostly made up of?",
            answers: { a: "Uranium", b: "Oxygen", c: "Chromium", d: "Hydrogen" },
            correct: "d"
        },
        {
            question: "What is seventh planet in order of distance from the sun?",
            answers: { a: "Uranus", b: "Mars", c: "Jupiter", d: "Earth" },
            correct: "a"
        },
        {
            question: "What is Earth's nearest neighbor in space?",
            answers: { a: "Sun", b: "Jupiter", c: "Moon", d: "Mars" },
            correct: "c"
        },
        {
            question: "What is Jupiter mostly made of?",
            answers: { a: "Water", b: "Gas", c: "M&M's", d: "Rock" },
            correct: "b"
        },

        {
            question: "This 'red planet' is named after the Roman god of war.",
            answers: { a: "Jupiter", b: "Sun", c: "Venus", d: "Mars" },
            correct: "d"
        },
    ]
};

$('#begin').click(function (e) {
    $('.intro').toggleClass('js-hidden');
    $('.questionForms').toggleClass('js-hidden');
    firstQuestion();
});

$('#submit').click(function (e) {
    e.preventDefault();
    if ($('input[value="a"]').is(':checked') || $('input[value="b"]').is(':checked') || $('input[value="c"]').is(':checked') || $('input[value="d"]').is(':checked')) {
        let choice = $('input[name="myAnswer"]:checked').val();

        if (choice === myQuiz.questionList[myQuiz.currentQuestion].correct) {
            correctAnswer();
            myQuiz.currentQuestion++;
            myQuiz.correctTally++;
        }
        else {
            wrongAnswer();
            myQuiz.currentQuestion++;
        }

        if (myQuiz.currentQuestion >= myQuiz.questionList.length) {
            $('.next').toggleClass('js-hidden');
            $('.goToScore').toggleClass('js-hidden');
        }
    }
    else {
        alert('Please choose an answer!');
    }
});

$('.resultsPage').on('click', '.next', function (e) {
    $('.resultsPage').toggleClass('js-hidden');
    $('.questionForms').toggleClass('js-hidden');
    restOfTheQuestions();
});

$('.resultsPage').on('click', '.goToScore', function (e) {
    $('.resultsPage').toggleClass('js-hidden');
    $('.end').toggleClass('js-hidden');
    endPage();
});

$('.end').on('click', '#restart', function (e) {
    restartQuiz();
});


// declared functions are listed below


//display the first set of question and answer
function firstQuestion() {
    let firstPage = myQuiz.questionList[0];
    $('#question').text(firstPage.question);
    $('.a1').text(firstPage.answers.a);
    $('.b2').text(firstPage.answers.b);
    $('.c3').text(firstPage.answers.c);
    $('.d4').text(firstPage.answers.d);
    $('input').prop('checked', false);
}


//displays the rest of the question when invoked and uses the currentQuestion index to display which set of question and answer
function restOfTheQuestions() {
    let restOfQues = myQuiz.questionList[myQuiz.currentQuestion];
    $('#question').text(restOfQues.question);
    $('.a1').text(restOfQues.answers.a);
    $('.b2').text(restOfQues.answers.b);
    $('.c3').text(restOfQues.answers.c);
    $('.d4').text(restOfQues.answers.d);
    $('input').prop('checked', false);
}

//displays the score based on correctTally #
function endPage() {
    $('#score').text(`You scored ${myQuiz.correctTally} out of ${myQuiz.questionList.length} questions.`);
    if (myQuiz.correctTally === myQuiz.questionList.length) {
        $('#scorepic').attr('src', 'img/lucky.gif');
    }
    else if (myQuiz.correctTally / myQuiz.questionList.length > .50) {
        $('#scorepic').attr('src', 'img/soso.gif');
    }
    else {
        $('#scorepic').attr('src', 'img/facepalm.gif');
    }
}

//displays the resultsPage with the feedback text for correct answer
function correctAnswer() {
    progressBarTotal();
    progressBarCorrect();
    $('.questionForms').toggleClass('js-hidden');
    $('.resultsPage').toggleClass('js-hidden');
    $('#resultText').text(myQuiz.result[0]).css('color', '#00FF33');
    $('#picTrivia').attr('src', myQuiz.images[myQuiz.currentQuestion]);
    $('p#textTrivia').text(myQuiz.trivia[myQuiz.currentQuestion]);
}

//displays the resultsPage with the feedback text for correct answer
function wrongAnswer() {
    progressBarTotal();
    $('.questionForms').toggleClass('js-hidden');
    $('.resultsPage').toggleClass('js-hidden');
    $('#resultText').text(myQuiz.result[1]).css('color', 'red');
    $('#picTrivia').attr('src', myQuiz.images[myQuiz.currentQuestion]);
    $('p#textTrivia').text(myQuiz.trivia[myQuiz.currentQuestion]);
}

//resets the counters
function restartQuiz() {
    myQuiz.correctTally = 0;
    myQuiz.currentQuestion = 0;
    $('.correctBar').css('width', '0%');
    $('.totalBar').css('width', '0%');
    $('.end').toggleClass('js-hidden');
    $('.intro').toggleClass('js-hidden');
    $('.goToScore').toggleClass('js-hidden');
    $('.next').toggleClass('js-hidden');
}

//moves the progress bar as user gets correct answer
function progressBarCorrect() {
    let width1 = ((myQuiz.correctTally + 1) / myQuiz.questionList.length) * 100;
    $('.correctBar').css('width', `${width1}%`);
}

//moves the progress bar as user moves through the questions
function progressBarTotal() {
    let width2 = ((myQuiz.currentQuestion + 1) / myQuiz.questionList.length) * 100;
    $('.totalBar').css('width', `${width2}%`);
}