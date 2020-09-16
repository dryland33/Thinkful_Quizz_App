/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable strict */

let myQuiz = {
    currentQuestion: 0,
    correctTally: 0,
    result: ['You\'re correct!', 'You\'re wrong!'],
    
    questionList: [
        {
            question: "",
            answers: { a: "", b: "", c: "", d: "" },
            correct: ""
        },
        {
            question: "",
            answers: { a: "", b: "", c: "", d: "" },
            correct: ""
        },
        {
            question: "",
            answers: { a: "", b: "", c: "", d: "" },
            correct: ""
        },
        {
            question: "",
            answers: { a: "", b: "", c: "", d: "" },
            correct: ""
        },

        {
            question: "",
            answers: { a: "", b: "", c: "", d: "" },
            correct: ""
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
        $('#scorepic').attr('src', 'https://s-media-cache-ak0.pinimg.com/736x/ef/9e/3c/ef9e3c2faf229f595b6a59fb8731e30a--disney-cats-disney-cruiseplan.jpg');
    }
    else if (myQuiz.correctTally / myQuiz.questionList.length > .50) {
        $('#scorepic').attr('src', 'https://i.imgflip.com/1jm073.jpg');
    }
    else {
        $('#scorepic').attr('src', 'https://s-media-cache-ak0.pinimg.com/736x/62/37/0b/62370b0061eb6c4f2b62389c1116982c--grumpy-kitty-grumpy-cat-meme.jpg');
    }
}

//displays the resultsPage with the feedback text for correct answer
function correctAnswer() {
    progressBarTotal();
    progressBarCorrect();
    $('.questionForms').toggleClass('js-hidden');
    $('.resultsPage').toggleClass('js-hidden');
    $('#resultText').text(myQuiz.result[0]).css('color', 'green');
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




