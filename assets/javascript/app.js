$(document).ready(function () {
    let correct = 0;
    let incorrect = 0;
    let answer;
    let done = false;
    let used = [];
    let seconds_left;
    let interval;
    
    //clicking Start or Play Again will send the game into an infinite loop; disable buttons?
    //the exception is if 10 questions have been answered. At that point it'll just start again as expected.

    //rearrange timer so that it doesn't interfere with buttons (shifting when timer re-starts)

    //refactor array and add pictures or facts
    //let currentArray;

    //This array is massive; I minimize it to navigate through the rest of the code more easily
    let questionsAndChoices = [{
        question: "What number did Michael Jordan wear at the end of the 1994-95 season?",
        choices: ["23","32","45","22"],
        answer: "45",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 45."
    }, {
        question: "Where did the Los Angeles Lakers originate?",
        choices: ["San Diego","Minneapolis","San Francisco","St. Louis"],
        answer: "Minneapolis",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Minneapolis."
    }, {
        question: "Which team won the 1999 NBA Finals?",
        choices: ["San Antonio Spurs","New York Knicks","Los Angeles Lakers","Chicago Bulls"],
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs."
    },
    {
        question: "As of 2018, who is the NBA's all-time points leader?",
        choices: ["LeBron James","Kobe Bryant","Kareem Abdul-Jabbar", "Michael Jordan"],
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar."
    },
    {
        question: "Whose silhouette is used for the NBA logo?",
        choices: ["Bill Russell","Larry Bird","Kareem Abdul-Jabbar", "Jerry West"],
        answer: "Jerry West",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Jerry West."
    },
    {
        question: "Which NBA player did not appear in the 1996 movie <em>Space Jam</em>?",
        choices: ["Patrick Ewing", "Charles Barkley", "Muggsy Bogues","Shaquille O'Neal"],
        answer: "Shaquille O'Neal",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Shaquille O'Neal."
    },
    {
        question: "Which player scored a record-setting 100 points in a single game?",
        choices: ["Wilt Chamberlain", "Klay Thompson", "Kobe Bryant","Michael Jordan"],
        answer: "Wilt Chamberlain",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Wilt Chamberlain."
    },
    {
        question: "Which team holds the record for highest number of wins in one season?",
        choices: ["Boston Celtics", "Golden State Warriors","San Antonio Spurs", "Los Angeles Lakers"],
        answer: "Golden State Warriors",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Golden State Warriors."
    },
    {
        question: "Where were the Seattle Supersonics moved to in the 2008-09 season, and what is the team's name?",
        choices: ["Charlotte Hornets", "New Orleans Pelicans", "Oklahoma City Thunder", "Memphis Grizzlies"],
        answer: "Oklahoma City Thunder",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Oklahoma City Thunder."
    },
    {
        question: "As of 2018, which player holds the record for most Finals MVP titles?",
        choices: ["Michael Jordan", "Tim Duncan","Kevin Durant", "Steph Curry"],
        answer: "Michael Jordan",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Michael Jordan."
    },
    {
        question: "Which team did Dennis Rodman play for prior to joining the Bulls in 1993?",
        choices: ["New York Knicks","San Antonio Spurs", "Detroit Pistons", "Los Angeles Lakers"],
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs."
    },
    {
        question: "As of 2018, what is Kevin Durant's jersey number?",
        choices: ["23", "0", "35", "2"],
        answer: "35",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 35."
    },
    {
        question: "As of 2018, which player has the highest career free-throw percentage?",
        choices: ["Dirk Nowitzki","Steph Curry","James Harden", "Steve Nash"],
        answer: "Steve Nash",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Steve Nash."
    },
    {
        question: "Two former San Antonio Spurs players have recorded a quadruple-double. Which player was one of the two?",
        choices: ["Tim Duncan","Manu Ginobili", "David Robinson","George Gervin"],
        answer: "David Robinson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is David Robinson."
    },
    {
        question: "Which former NBA player's nickname was 'The Answer'?",
        choices: ["Allen Iverson","Latrell Sprewell","David Robinson","James Worthy"],
        answer: "Allen Iverson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Allen Iverson."
    },
    {
        question: "Which former NBA player's nickname was 'The Iceman'?",
        choices: ["Julius Erving","Latrell Sprewell","George Gervin","Bill Russell"],
        answer: "George Gervin",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is George Gervin."
    },
    {
        question: "Which former NBA player's nickname was 'Dr. J'?",
        choices: ["Julius Erving","Jerry West","John Stockton","Jeff Hornacek"],
        answer: "Julius Erving",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Julius Erving."
    },
    {
        question: "Who played for Duke University?",
        choices: ["Kawhi Leonard","Shaquille O'Neal","Michael Jordan","Kyrie Irving"],
        answer: "Kyrie Irving",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kyrie Irving."
    },
    {
        question: "Which team won the 2016 NBA Finals?",
        choices: ["Golden State Warriors", "Cleveland Cavaliers", "Boston Celtics","Los Angeles Lakers"],
        answer: "Cleveland Cavaliers",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Cleveland Cavaliers."
    },
    {
        question: "In the NBA, how many seconds are on the shot clock for each possession?",
        choices: ["20","24", "30", "45"],
        answer: "24",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 24."
    },
    {
        question: "Which team has won the most titles?",
        choices: ["Boston Celtics","Los Angeles Lakers","Chicago Bulls","San Antonio Spurs"],
        answer: "Boston Celtics",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Boston Celtics."
    },
    {
        question: "Which team's mascot is a gorilla?",
        choices: ["Utah Jazz","Denver Nuggets","Portland Trail Blazers","Phoenix Suns"],
        answer: "Phoenix Suns",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Phoenix Suns."
    },
    {
        question: "Which two teams combined for the highest-scoring game on record?",
        choices: ["Utah Jazz vs. Chicago Bulls","Denver Nuggets vs. Detroit Pistons","Chicago Bulls vs. San Antonio Spurs","Phoenix Suns vs. Los Angeles Lakers"],
        answer: "Denver Nuggets vs. Detroit Pistons",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Denver Nuggets vs. Detroit Pistons."
    },
    {
        question: "Which team did Shaquille O'Neal <em>NOT</em> play for during his career?",
        choices: ["Miami Heat","Cleveland Cavaliers","Phoenix Suns","San Antonio Spurs"],
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs."
    },
    {
        question: "Which former NBA player changed his name to Metta World Peace?",
        choices: ["Ron Artest","Allen Iverson","Rasheed Wallace","Kareem Abdul-Jabbar"],
        answer: "Ron Artest",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Ron Artest."
    },
    {
        question: "Which former NBA player starred in the 1996 movie <em>Kazaam</em>?",
        choices: ["Michael Jordan","Shaquille O'Neal","Charles Barkley","Muggsy Bogues"],
        answer: "Shaquille O'Neal",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Shaquille O'Neal."
    },
    {
        question: "Where did the Grizzlies call home before they moved to Memphis?",
        choices: ["Seattle","St. Louis","San Diego","Vancouver"],
        answer: "Vancouver",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Vancouver."
    },
    ];

    let randQuestion = questionsAndChoices[Math.floor(Math.random() * questionsAndChoices.length)];
    for (let k = 0; k < 10; k++) {
        let currentArray = questionsAndChoices[k];
        console.log('New Array: ', currentArray);
    }

    function initializeGame() {
        correct = 0;
        incorrect = 0;
        randQuestion = questionsAndChoices[Math.floor(Math.random() * questionsAndChoices.length)];
        $(".question").append(randQuestion.question);
        $(".choice1").append(randQuestion.choices[0]);
        $(".choice1").css('background', 'orange');
        $(".choice2").append(randQuestion.choices[1]);
        $(".choice2").css('background', 'orange');
        $(".choice3").append(randQuestion.choices[2]);
        $(".choice3").css('background', 'orange');
        $(".choice4").append(randQuestion.choices[3]);
        $(".choice4").css('background', 'orange');
        used.push(randQuestion);
        seconds_left = 10;
        interval = setInterval(function () {
            document.getElementById('timer').innerHTML = --seconds_left;
            if (seconds_left <= 0) {
                document.getElementById('timer').innerHTML = "Time's up!";
                $(".question").empty();
                $(".choice1").empty();
                $(".choice1").css('background', 'black');
                $(".choice2").empty();
                $(".choice2").css('background', 'black');
                $(".choice3").empty();
                $(".choice3").css('background', 'black');
                $(".choice4").empty();
                $(".choice4").css('background', 'black');
                loadNextQuestion();
            }
        }, 1000);
    }
    function loadNextQuestion() {
        clearInterval(interval);
        randQuestion = questionsAndChoices[Math.floor(Math.random() * questionsAndChoices.length)];
        for (let i = questionsAndChoices.length - 1; i--;) {
            if (used.includes(questionsAndChoices[i]) === true) questionsAndChoices.splice(i, 1);
        }
        console.log("Questions and choices after splice: ", questionsAndChoices.length);
        seconds_left = 15;
        interval = setInterval(function () {
            document.getElementById('timer').innerHTML = --seconds_left;
            if (seconds_left <= 0) {
                document.getElementById('timer').innerHTML = "Time's up!";
                $(".question").empty();
                $(".choice1").empty();
                $(".choice1").css('background', 'black');
                $(".choice2").empty();
                $(".choice2").css('background', 'black');
                $(".choice3").empty();
                $(".choice3").css('background', 'black');
                $(".choice4").empty();
                $(".choice4").css('background', 'black');
                loadNextQuestion();
            }
        }, 1000);
        used.push(randQuestion);
        let clearResult = 4;
        let interval2 = setInterval(function () {
            $("#timer").html('0');
            --clearResult
            console.log('clear result', clearResult);
            if (clearResult <= 0) {
                clearInterval(interval2);
                $(".result").empty();
                $(".question").append(randQuestion.question);
                $(".choice1").append(randQuestion.choices[0]);
                $(".choice1").css('background', 'orange');
                $(".choice2").append(randQuestion.choices[1]);
                $(".choice2").css('background', 'orange');
                $(".choice3").append(randQuestion.choices[2]);
                $(".choice3").css('background', 'orange');
                $(".choice4").append(randQuestion.choices[3]);
                $(".choice4").css('background', 'orange');
            }
        }, 1000);
        console.log('used array:', used);
        if (parseInt(correct) + parseInt(incorrect) >= 10) {
            clearInterval(interval);
            console.log('all done!');
            $(".timer").html('0');
            $(".question").empty();
            $(".choice1").empty();
            $(".choice1").css('background', 'black');
            $(".choice2").empty();
            $(".choice2").css('background', 'black');
            $(".choice3").empty();
            $(".choice3").css('background', 'black');
            $(".choice4").empty();
            $(".choice4").css('background', 'black');
            $(".done").append("You got " + correct + " answers correct and " + incorrect + " answers incorrect.");
            done = true;
            console.log('done', done);
        }
    }
    $(".choice1").on('click', function () {
        clearInterval(interval);
        $("#timer").html('0');
        console.log('choice1 clicked');
        $(".question").empty();
            $(".choice1").empty();
            $(".choice1").css('background', 'black');
            $(".choice2").empty();
            $(".choice2").css('background', 'black');
            $(".choice3").empty();
            $(".choice3").css('background', 'black');
            $(".choice4").empty();
            $(".choice4").css('background', 'black');
            
        if (randQuestion.choices[0] === randQuestion.answer) {
            $("#timer").html('0');
            clearInterval(interval);
            console.log('correct');
            console.log(randQuestion.choice1);
            console.log(randQuestion.answer);
            correct++;
            document.querySelector(".correct").innerHTML = correct;
            document.querySelector(".result").innerHTML = randQuestion.ifRight;
            loadNextQuestion();
        }
        else {
            console.log('incorrect');
            clearInterval(interval);
            incorrect++;
            document.querySelector(".incorrect").innerHTML = incorrect;
            document.querySelector(".result").innerHTML = randQuestion.ifWrong;
            loadNextQuestion();
        }
    })
    $(".choice2").on('click', function () {
        clearInterval(interval);
        $("#timer").html('0');
        $(".question").empty();
            $(".choice1").empty();
            $(".choice1").css('background', 'black');
            $(".choice2").empty();
            $(".choice2").css('background', 'black');
            $(".choice3").empty();
            $(".choice3").css('background', 'black');
            $(".choice4").empty();
            $(".choice4").css('background', 'black');
        console.log('choice2 clicked');
        if (randQuestion.choices[1] === randQuestion.answer) {
            console.log('correct');
            console.log(randQuestion.choice2);
            console.log(randQuestion.answer);
            correct++;
            document.querySelector(".correct").innerHTML = correct;
            document.querySelector(".result").innerHTML = randQuestion.ifRight;
            loadNextQuestion();
        }
        else {
            clearInterval(interval);
            console.log('incorrect');
            incorrect++;
            document.querySelector(".incorrect").innerHTML = incorrect;
            document.querySelector(".result").innerHTML = randQuestion.ifWrong;
            loadNextQuestion();
        }
    })
    $(".choice3").on('click', function () {
        clearInterval(interval);
        $("#timer").html('0');
        $(".question").empty();
            $(".choice1").empty();
            $(".choice1").css('background', 'black');
            $(".choice2").empty();
            $(".choice2").css('background', 'black');
            $(".choice3").empty();
            $(".choice3").css('background', 'black');
            $(".choice4").empty();
            $(".choice4").css('background', 'black');
        console.log('choices clicked');
        if (randQuestion.choices[2] === randQuestion.answer) {
            console.log('correct');
            console.log(randQuestion.choice3);
            console.log(randQuestion.answer);
            correct++;
            document.querySelector(".correct").innerHTML = correct;
            document.querySelector(".result").innerHTML = randQuestion.ifRight;
            loadNextQuestion();
        }
        else {
            clearInterval(interval);
            console.log('incorrect');
            incorrect++;
            document.querySelector(".incorrect").innerHTML = incorrect;
            document.querySelector(".result").innerHTML = randQuestion.ifWrong;
            loadNextQuestion();
        }
    })
    $(".choice4").on('click', function () {
        console.log('choices clicked');
        $("#timer").html('0');
        $(".question").empty();
            $(".choice1").empty();
            $(".choice1").css('background', 'black');
            $(".choice2").empty();
            $(".choice2").css('background', 'black');
            $(".choice3").empty();
            $(".choice3").css('background', 'black');
            $(".choice4").empty();
            $(".choice4").css('background', 'black');
        clearInterval(interval);
        if (randQuestion.choices[3] === randQuestion.answer) {
            console.log('correct');
            console.log(randQuestion.choice4);
            console.log(randQuestion.answer);
            correct++;
            document.querySelector(".correct").innerHTML = correct;
            document.querySelector(".result").innerHTML = randQuestion.ifRight;
            loadNextQuestion();
        }
        else {
            clearInterval(interval);
            console.log('incorrect');
            incorrect++;
            document.querySelector(".incorrect").innerHTML = incorrect;
            document.querySelector(".result").innerHTML = randQuestion.ifWrong;
            loadNextQuestion();
        }
    })
    $(".play-again").on("click", function () {
        //loadNewQuestion();
        console.log('play again clicked');
        $(".result").empty();
        document.querySelector(".correct").innerHTML = 0;
        document.querySelector(".incorrect").innerHTML = 0;
        console.log('total score', parseInt(correct) + parseInt(incorrect));
        initializeGame();
    })
    $(".start").on("click", function () {
        initializeGame();
        console.log('game initialized');
    })
})
