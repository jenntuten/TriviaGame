$(document).ready(function () {
    let correct = 0;
    let incorrect = 0;
    let answer;
    let done = false;
    let used = [];
    let seconds_left;
    let interval;
    
    //add "the answer was..." to result after timeout. (and picture, if applicable)
    
    //refactor array and add pictures or facts
    //let currentArray;

    //This array is massive; I minimize it to navigate through the rest of the code more easily
    let questionsAndChoices = [{
        question: "What number did Michael Jordan wear at the end of the 1994-95 season?",
        choices: ["23","32","45","12"],
        answer: "45",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 45.",
        image: "<img src=Jordan_45jersey.jpg><br>",
        tidbit: "Jordan wore jersey #45 after his first retirement from basketball."
    }, {
        question: "Where did the Los Angeles Lakers originate?",
        choices: ["San Diego","Minneapolis","San Francisco","St. Louis"],
        answer: "Minneapolis",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Minneapolis.",
        image: "<img src=mpls-lakers.jpg><br>",
        tidbit: "The team name was derived from Minnesota's nickname, the 'Land of 10,000 Lakes.'"
    }, {
        question: "Which team won the 1999 NBA Finals?",
        choices: ["San Antonio Spurs","New York Knicks","Los Angeles Lakers","Chicago Bulls"],
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
        image: "<img src=spurs-1999-champs.jpg><br>",
        tidbit: "The San Antonio Spurs won their first NBA title playing against the New York Knicks."
    },
    {
        question: "Who is the NBA's all-time points leader?",
        choices: ["LeBron James","Kobe Bryant","Kareem Abdul-Jabbar", "Michael Jordan"],
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar.",
        image: "<img src=kareem.jpg><br>",
        tidbit: "Abdul-Jabbar scored 38,387 points throughout his NBA career."
    },
    /*{
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
   },*/
    {
        question: "Which player scored a record-setting 100 points in a single game?",
        choices: ["Wilt Chamberlain", "Klay Thompson", "Kobe Bryant","Michael Jordan"],
        answer: "Wilt Chamberlain",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Wilt Chamberlain.",
        image: "<img src=wilt-100pt.jpg><br>",
        tidbit: "Chamberlain scored 100 points for the Philadelphia Warriors in a 169–147 win vs. the New York Knicks on March 2, 1962."
    },
    /*{
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
    },*/
    {
        question: "Which team did Dennis Rodman play for prior to joining the Bulls in 1993?",
        choices: ["New York Knicks","San Antonio Spurs", "Detroit Pistons", "Los Angeles Lakers"],
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
        image: "<img src=rodman-spurs.jpg><br>",
        tidbit: "Rodman's personality clashed with that of head coach Gregg Popovich, resulting in a brief stint with San Antonio."
    },
    /*{
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
    },*/
    {
        question: "Two former San Antonio Spurs players have recorded a quadruple-double. Which player was one of the two?",
        choices: ["Tim Duncan","Manu Ginobili", "David Robinson","George Gervin"],
        answer: "David Robinson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is David Robinson.",
        image: "<img src=david-robinson.jpg><br>",
        tidbit: "Robinson recorded 34 points, 10 rebounds, 10 assists and 10 blocks on Feb. 17, 1994 against the Detroit Pistons."
    },
    {
        question: "Which former NBA player's nickname was 'The Answer'?",
        choices: ["Allen Iverson","Latrell Sprewell","David Robinson","James Worthy"],
        answer: "Allen Iverson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Allen Iverson.",
        image: "<img src=allen-iverson.jpg><br>",
        tidbit: "Although he had the nickname since high school, it became more of an answer to the Sixers' questions of regaining their place in the NBA."
    },
    /*{
        question: "Which former NBA player's nickname was 'The Iceman'?",
        choices: ["Julius Erving","Latrell Sprewell","George Gervin","Bill Russell"],
        answer: "George Gervin",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is George Gervin."
    },*/
    {
        question: "Which former NBA player's nickname was 'Dr. J'?",
        choices: ["Julius Erving","Jerry West","John Stockton","Jeff Hornacek"],
        answer: "Julius Erving",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Julius Erving.",
        image: "<img src=drj.jpg><br>",
        tidbit: "The origins of this nickname are unclear but it's said that he has had the nickname since high school."
    },
    {
        question: "Who played for Duke University?",
        choices: ["Kawhi Leonard","Shaquille O'Neal","Michael Jordan","Kyrie Irving"],
        answer: "Kyrie Irving",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kyrie Irving.",
        image: "<img src=kyrie-irvin.jpg><br>",
        tidbit: "Leonard attended San Diego State, O'Neal attended LSU, and Michael Jordan attended UNC."
    },
    /*{
        question: "Which team won the 2016 NBA Finals?",
        choices: ["Golden State Warriors", "Cleveland Cavaliers", "Boston Celtics","Los Angeles Lakers"],
        answer: "Cleveland Cavaliers",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Cleveland Cavaliers."
    },*/
    {
        question: "In the NBA, how many seconds are on the shot clock for each possession?",
        choices: ["20","24", "30", "45"],
        answer: "24",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 24.",
        image: "<img src=shot-clock.jpg><br>",
        tidbit: "Each team has 24 seconds to score before the opposing team gets the ball."
    },
    {
        question: "Which team has won the most titles?",
        choices: ["Boston Celtics","Los Angeles Lakers","Chicago Bulls","San Antonio Spurs"],
        answer: "Boston Celtics",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Boston Celtics.",
        image: "<img src=celtics.jpg><br>",
        tidbit: "Boston has won 17 championships."
    },
    /*{
        question: "Which team's mascot is a gorilla?",
        choices: ["Utah Jazz","Denver Nuggets","Portland Trail Blazers","Phoenix Suns"],
        answer: "Phoenix Suns",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Phoenix Suns."
    },*/
    {
        question: "Which two teams combined for the highest-scoring game on record?",
        choices: ["Utah Jazz vs. Chicago Bulls","Denver Nuggets vs. Detroit Pistons","Chicago Bulls vs. San Antonio Spurs","Phoenix Suns vs. Los Angeles Lakers"],
        answer: "Denver Nuggets vs. Detroit Pistons",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Denver Nuggets vs. Detroit Pistons.",
        image: "<img src=pistons-nuggets.jpg><br>",
        tidbit: "The Pistons beat the Nuggets by 2 points in a 186-184 matchup."
    },
    /*{
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
    },*/
    {
        question: "Which former NBA player starred in the 1996 movie <em>Kazaam</em>?",
        choices: ["Michael Jordan","Shaquille O'Neal","Charles Barkley","Muggsy Bogues"],
        answer: "Shaquille O'Neal",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Shaquille O'Neal.",
        image: "<img src=kazaam.jpg><br>",
        tidbit: "Shaq has dabbled in many other ventures besides basketball in his career, including a rap album and numerous TV and film appearances."
    },
    {
        question: "Where did the Grizzlies call home before they moved to Memphis?",
        choices: ["Seattle","St. Louis","San Diego","Vancouver"],
        answer: "Vancouver",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Vancouver.",
        image: "<img src=grizzlies.png><br>",
        tidbit: ""
    },
    {
        question: "Which team won the 2009 and 2010 NBA Finals back-to-back?",
        choices: ["San Antonio Spurs", "Boston Celtics", "Miami Heat", "Los Angeles Lakers"],
        answer: "Los Angeles Lakers",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Los Angeles Lakers.",
        image: "<img src=lakers.jpg><br>",
        tidbit: "They also had a three-peat in the early 2000s."
    },
    {
        question: "Which team has not won back-to-back NBA championships?",
        choices: ["Golden State Warriors", "Chicago Bulls", "Houston Rockets", "San Antonio Spurs"],
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
        image: "<img src=spurs-champs.jpg><br>",
        tidbit: "Golden State Warriors most recently had back-to-back championships in 2017 and 2018, Houston in 1994 and 1995, and Chicago dominated the 1990s with several titles."
    },
    {
        question: "Which former player was nicknamed 'The Admiral'?",
        choices: ["Tim Duncan", "David Robinson", "Larry Bird", "Magic Johnson"],
        answer: "David Robinson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is David Robinson.",
        image: "<img src=theadmiral.jpg><br>",
        tidbit: "Robinson attended the Naval Academy and ranked as a Lieutenant Junior Grade."
    },
    {
        question: "Which NBA player's first name is Wardell?",
        choices: ["James Harden", "Russell Westbrook", "Stephen Curry", "Kevin Durant"],
        answer: "Stephen Curry",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Stephen Curry.",
        image: "<img src=steph-curry.jpg><br>",
        tidbit: "Named after his father, Curry's full name is Wardell Stephen Curry."
    },
    {
        question: "Which former NBA player was not a member of the 1992 U.S. Olympic Dream Team?",
        choices: ["Magic Johnson", "Karl Malone", "Hakeem Olajuwon", "Patrick Ewing"],
        answer: "Hakeem Olajuwon",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Hakeem Olajuwon.",
        image: "<img src=dream-team.jpg><br>",
        tidbit: "Magic Johnson, Karl Malone and Patrick Ewing were on the Dream Team."
    },
    {
        question: "What is the name of the Golden State Warriors' home arena?",
        choices: ["Oracle Arena", "Apple Arena", "Cisco Arena", "Intel Arena"],
        answer: "Oracle Arena",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Oracle Arena.",
        image: "<img src=oracle-arena.jpg><br>",
        tidbit: "Oracle Arena, nicknamed 'Roaracle', is located in Oakland, CA."
    },
    {
        question: "Which former NBA player made an appearance in the 1980 movie <em>Airplane!</em>?",
        choices: ["Kareem Abdul-Jabbar", "Larry Bird", "Wilt Chamberlain", "Kevin McHale"],
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar.",
        image: "<img src=kareem-airplane.jpg><br>",
        tidbit: "Kareem played a co-pilot in the film."
    },
    {
        question: "How many NBA teams are based outside the United States?",
        choices: ["0", "1", "2", "3"],
        answer: "1",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 1.",
        image: "<img src=raptors.png><br>",
        tidbit: "The Toronto Raptors are the only team currently based outside the U.S."
    },
    {
        question: "Which NBA superstar was drafted out of high school?",
        choices: ["Michael Jordan", "Shaquille O'Neal", "LeBron James", "Kevin Durant"],
        answer: "LeBron James",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is LeBron James.",
        image: "<img src=lebron.jpg><br>",
        tidbit: "Michael Jordan attended UNC, Shaq played for LSU and Kevin Durant attended University of Texas."
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
        $('.start').hide();
        $('.answer-image').empty();
        $('.tidbit').empty();
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
        seconds_left = 11; //10 seconds put the counter starting at 9
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
                $('.answer-image').empty();
                $('.tidbit').empty();
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
            clearInterval(interval2);
            $('.start').show();
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
        $('.tidbit').append(randQuestion.tidbit);
        $('.answer-image').append(randQuestion.image);
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
        $('.tidbit').append(randQuestion.tidbit);
        $('.answer-image').append(randQuestion.image);
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
        $('.tidbit').append(randQuestion.tidbit);
        $('.answer-image').append(randQuestion.image);
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
        $('.tidbit').append(randQuestion.tidbit);
        $("#timer").html('0');
        $('.answer-image').append(randQuestion.image);
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
        correct=0;
        incorrect=0;
        console.log('game initialized');
        $(".result").empty();
        $(".done").empty();
        document.querySelector(".correct").innerHTML = 0;
        document.querySelector(".incorrect").innerHTML = 0;
    })
})
