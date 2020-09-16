
var myQuiz = {
    currentQuestion:0,
    correctTally: 0,
    percent:['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%', ],
    result: ['You\'re correct!', 'You\'re wrong!'],
    images: [
      "https://nypdecider.files.wordpress.com/2015/06/spielberg2.png?w=600",
      "https://www.jonathanrosenbaum.net/wp-content/uploads/2010/12/saving_private_ryan_poster.jpg",
      "https://c1.staticflickr.com/3/2482/4024923936_e6ddf1c07f_z.jpg?zz=1",
      "https://pbs.twimg.com/media/CL0NIgRUMAAaUvm.jpg",
      "http://www.ruthlessreviews.com/wp-content/uploads/2017/06/tombstone-meta.jpg",
      "http://zidbits.com/wp-content/uploads/2011/01/Pulp-Fiction-Briefcase.jpg",
      "https://s-media-cache-ak0.pinimg.com/736x/f7/4c/6b/f74c6ba3ff801317bc13e19d46169603--william-wallace-celtic-pride.jpg",
     "https://vignette3.wikia.nocookie.net/disney/images/c/ce/Dick_Tracy_Wallpapers.jpg/revision/latest?cb=20120501024038",
      "https://s-media-cache-ak0.pinimg.com/736x/f9/f3/7d/f9f37df3b59c0af1d68c07f6249c0c0c--twister--beautiful-actresses.jpg",
      "http://2.bp.blogspot.com/-i03dWHqsKuY/Ucw2YpUKlOI/AAAAAAAAAFQ/NqfUh7pHZZQ/s1456/forrest-gump-poster-1994-tom-hanks.png"
      ],
    trivia: [
      "While Spielberg worked on Schindler\'s List in early 1993 in Europe, he found time to edit Jurassic Park during the night. Yes, Spielberg almost had a nervous breakdown, but he got both projects done. Jurassic Park premiered on June 11, 1993 and Schindler\'s List debuted on November 30, 1993.",
      "Its rival \'Shakespeare in Love\', a period romantic comedy with a literate, witty Tom Stoppard script and sumptuous production values won the award, which many Oscar-watchers still found outrageous.",
      "Including revenue from the 2012 reissue, Titanic earned a worldwide total of $2,185,372,302. It became the highest-grossing film of all time worldwide in 1998, and remained so for twelve years, until Avatar (2009), also written and directed by Cameron, surpassed it in 2010.",
      "The photo of her is from the film One Million B.C. and was apparently one of the most, if not the most, popular pin up of the 60s. Other posters he used were of Rita Hayworth and Monroe.",
      "In the classic Western movie \"Tombstone\" (1993) Val Kilmer, as Doc Holliday, says to Johnny Ringo, \"I'm your Huckleberry, that's just my game.\"",
      "In fiction, a MacGuffin is a plot device in the form of some goal, desired object, or other motivator that the protagonist pursues, often with little or no narrative explanation. ",
      "That line is part of the answer Gibson gives after one nervous Scottish soldier suggests out loud that it might be better to retreat and live to fight another day.",
      "The song was used in the parent film, Dick Tracy. \"Sooner or Later\" was composed to evoke the theatrical nature and style of the film.",
      "Based on the The Saffir-Simpson Hurricane Wind Scale, category 5 has sustained winds of 157 mph or higher, which means a catastrophic damage will occur, including a high percentage of destructed framed homes.",
      "One of the more memorable scenes in \"Forrest Gump\" happens when the title character's shrimping money is invested by his partner, Lt. Dan, in what Forrest describes as \"some kind of fruit company\"."
    ],
    questionList: [
      {
      question: "What year did Stephen Spielberg\'s films Jurassic Park AND Schindler\'s List premier?",
      answers: {a: "1992", b: "1993", c: "1994", d: "1995"},
      correct: "b"
      },
      {
      question: "Which of these films did NOT win the Oscar for \"Best Original Screenplay?\"" ,
      answers: {a: "Saving Private Ryan", b: "Good Will Hunting", c: "The Usual Suspects", d: "Ghost"},
      correct: "a"
      },
      {
      question: "What was the highest grossing movie of the decade?",
      answers: {a: "Jurassic Park", b: "Star Wars Episdoe I: The Phantom Menace", c: "The Matrix", d: "Titanic"},
      correct: "d"
      },
      {
      question: "In The Shawshank Redemption, who was on Andy Dufresne\'s final poster?",
      answers: {a: "Raquel Welch", b: "Rita Hayworth", c: "Marilyn Monroe", d: "Elizabeth Taylor"},
      correct: "a"
      },
      {
      question: "Which Western film contained the classic line \"I\'m your Huckleberry?\"",
      answers: {a: "Unforgiven", b: "Dances with Wolves", c: "Tombstone", d: "City Slickers"},
      correct: "c"
      },
      {
      question: "What is the famous \"MacGuffin\" from Pulp Fiction?",
      answers: {a: "The Heart of the Ocean", b: "The Holy Grail", c: "The Secret Video Tape", d: "The Briefcase"},
      correct: "d"
      },
      {
      question: "Finish this famous quote: \"They may take our lives, but they\'ll never take __________!\"",
      answers: {a: "our American beauty", b: "our Independence Day", c: "our freedom", d: "our dead people"},
      correct: "c"
      },
      {
      question: "Which of these songs won the Oscar for \"Best Original Song\"?",
      answers: {a: "\"Sooner or Later\" by Stephen Sondheim", b: "\"I Don\'t Want to Miss a Thing\" by Diane Warren", c: "\"You\'ve Got a Friend in Me\" by Randy Newman", d: "\"Circle of Life\" by Elton John and Tim Rice"},
      correct: "a"
      },
      {
      question: "What category is the hurricane at the end of Twister?",
      answers: {a: "F1", b: "F5", c: "F12", d: "F8"},
      correct: "b"
      },
      {
      question: "Which of these things did Forrest Gump NOT do?",
      answers: {a: "Play College Football", b: "Captain a Shrimp Boat", c: "Invest in Microsoft", d: "Meet more than one U.S. President"},
      correct: "c"
      },
    ]
  };
  
  $('#begin').click(function(e){
    $('.intro').toggleClass('js-hidden');
    $('.questionForms').toggleClass('js-hidden');
    console.log(firstQuestion());
  });
    
  $('#submit').click(function(e){
    e.preventDefault();
    if ($('input[value="a"]').is(':checked') || $('input[value="b"]').is(':checked') || $('input[value="c"]').is(':checked') || $('input[value="d"]').is(':checked')){
      let choice = $('input[name="myAnswer"]:checked').val();
      
      if (choice === myQuiz.questionList[myQuiz.currentQuestion].correct){
        correctAnswer();
        myQuiz.currentQuestion++;
        myQuiz.correctTally++;
      }
      else{
        wrongAnswer();
        myQuiz.currentQuestion++;
      }
      
      if (myQuiz.currentQuestion >= myQuiz.questionList.length){
            $('.next').toggleClass('js-hidden');
            $('.goToScore').toggleClass('js-hidden');
      }
    }
    else{
      alert('Please choose an answer!');
    }
  });
    
  $('.resultsPage').on('click', '.next', function (e){
    $('.resultsPage').toggleClass('js-hidden');
    $('.questionForms').toggleClass('js-hidden');
    restOfTheQuestions();
  });
  
  $('.resultsPage').on('click', '.goToScore', function (e){
    $('.resultsPage').toggleClass('js-hidden');
    $('.end').toggleClass('js-hidden');
    endPage();
  });
  
  $('.end').on('click', '#restart', function (e) {
    restartQuiz();
  });
  
  
  // declared functions are listed below
  
  
  //display the first set of question and answer
  function firstQuestion(){
    let firstPage = myQuiz.questionList[0];
    $('#question').text(firstPage.question);
    $('.a1').text(firstPage.answers.a);
    $('.b2').text(firstPage.answers.b);
    $('.c3').text(firstPage.answers.c);
    $('.d4').text(firstPage.answers.d);
    $('input').prop('checked', false);
  }
  
  
  //displays the rest of the question when invoked and uses the currentQuestion index to display which set of question and answer
  function restOfTheQuestions(){
    let restOfQues = myQuiz.questionList[myQuiz.currentQuestion];
    $('#question').text(restOfQues.question);
    $('.a1').text(restOfQues.answers.a);
    $('.b2').text(restOfQues.answers.b);
    $('.c3').text(restOfQues.answers.c);
    $('.d4').text(restOfQues.answers.d);
    $('input').prop('checked', false);
  }
  
  //displays the score based on correctTally #
  function endPage(){
    $('#score').text(`You scored ${myQuiz.correctTally} out of ${myQuiz.questionList.length} questions.`);
    if(myQuiz.correctTally === myQuiz.questionList.length){
       $('#scorepic').attr('src', 'https://s-media-cache-ak0.pinimg.com/736x/ef/9e/3c/ef9e3c2faf229f595b6a59fb8731e30a--disney-cats-disney-cruiseplan.jpg');
    }
    else if (myQuiz.correctTally/myQuiz.questionList.length > .50 ){
       $('#scorepic').attr('src', 'https://i.imgflip.com/1jm073.jpg');
    }
    else {
      $('#scorepic').attr('src', 'https://s-media-cache-ak0.pinimg.com/736x/62/37/0b/62370b0061eb6c4f2b62389c1116982c--grumpy-kitty-grumpy-cat-meme.jpg');
    }
  }
  
  //displays the resultsPage with the feedback text for correct answer
  function correctAnswer(){
    progressBarTotal();
    progressBarCorrect();
    $('.questionForms').toggleClass('js-hidden');
    $('.resultsPage').toggleClass('js-hidden');
    $('#resultText').text(myQuiz.result[0]).css('color', 'green');
    $('#picTrivia').attr('src', myQuiz.images[myQuiz.currentQuestion]);
    $('p#textTrivia').text(myQuiz.trivia[myQuiz.currentQuestion]);
  }
  
  //displays the resultsPage with the feedback text for correct answer
  function wrongAnswer(){
    progressBarTotal();
    $('.questionForms').toggleClass('js-hidden');
    $('.resultsPage').toggleClass('js-hidden');
    $('#resultText').text(myQuiz.result[1]).css('color', 'red');
    $('#picTrivia').attr('src', myQuiz.images[myQuiz.currentQuestion]);
    $('p#textTrivia').text(myQuiz.trivia[myQuiz.currentQuestion]);
  }
  
  //resets the counters
  function restartQuiz(){
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
  function progressBarCorrect(){
    let width1 = ((myQuiz.correctTally + 1) / myQuiz.questionList.length) * 100;
    $('.correctBar').css('width', `${width1}%`);
  }
  
  //moves the progress bar as user moves through the questions
  function progressBarTotal(){
    let width2 = ((myQuiz.currentQuestion + 1) / myQuiz.questionList.length) * 100;
    $('.totalBar').css('width', `${width2}%`);
  }
  
  
  
  
  