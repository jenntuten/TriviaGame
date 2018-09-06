$(document).ready(function () {
    let correct = 0;
    let incorrect = 0;
    let used = [];
    let secondsLeft;
    let interval;
    $(".start").append('Start');

    //This array is massive; I minimize it to navigate through the rest of the code more easily.
    let questionsAndChoices = [{
        question: "What number did Michael Jordan wear at the end of the 1994-95 season?",
        choices: ["23", "32", "45", "12"],
        answer: "45",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is 45.",
        image: "<img src=assets/images/Jordan_45jersey.jpg><br>",
        funFact: "Jordan wore jersey #45 after his first retirement from basketball."
    }, {
        question: "Where did the Grizzlies call home before they moved to Memphis?",
        choices: ["Seattle", "St. Louis", "San Diego", "Vancouver"],
        answer: "Vancouver",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Vancouver.",
        image: "<img src=assets/images/grizzlies.png><br>",
        funFact: "The Grizzlies moved from Vancouver, BC to Memphis in 2001."
    },  {
        question: "Which state does not currently have an NBA team?",
        choices: ["Georgia", "North Carolina", "Colorado", "Washington"],
        answer: "Washington",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Washington.",
        image: "<img src=assets/images/sonics.png><br>",
        funFact: "The Seattle SuperSonics moved to Oklahoma City and were renamed the Thunder."
    },  {
        question: "Which team won the NBA championships during two consecutive seasons while Michael Jordan was temporarily retired for the first time?",
        choices: ["Utah Jazz", "Detroit Pistons", "Houston Rockets", "San Antonio Spurs"],
        answer: "Houston Rockets",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Houston Rockets.",
        image: "<img src=assets/images/rockets.jpg><br>",
        funFact: "The Rockets won consecutive championships in 1994 and 1995."
    },  
    {
        question: "The infamous brawl known as 'Malice at the Palace' took place between players of which two NBA teams?",
        choices: ["Indiana Pacers and Detroit Pistons", "Chicago Bulls and Detroit Pistons", "Houston Rockets and Utah Jazz", "Miami Heat and Chicago Bulls"],
        answer: "Indiana Pacers and Detroit Pistons",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Indiana Pacers and Detroit Pistons.",
        image: "<img src=assets/images/malice-at-the-palace.jpg><br>",
        funFact: "A brawl broke out between players and fans following a foul on Pistons center Ben Wallace and a fan throwing a drink at Pacers forward Ron Artest. The game was shut down with 45.9 seconds remaining in the game."
    },
    {
        question: "Where did the Los Angeles Lakers originate?",
        choices: ["San Diego", "Minneapolis", "San Francisco", "St. Louis"],
        answer: "Minneapolis",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Minneapolis.",
        image: "<img src=assets/images/mpls-lakers.jpg><br>",
        funFact: "The team name was derived from Minnesota's nickname, the 'Land of 10,000 Lakes.'"
    }, {
        question: "Which team won the 1999 NBA Finals?",
        choices: ["San Antonio Spurs", "New York Knicks", "Los Angeles Lakers", "Chicago Bulls"],
        answer: "San Antonio Spurs",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
        image: "<img src=assets/images/spurs-1999-champs.jpg><br>",
        funFact: "The San Antonio Spurs won their first NBA title in a 4-1 series against the New York Knicks."
    },
    {
        question: "Who is the NBA's all-time points leader?",
        choices: ["LeBron James", "Kobe Bryant", "Kareem Abdul-Jabbar", "Michael Jordan"],
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar.",
        image: "<img src=assets/images/kareem.jpg><br>",
        funFact: "Abdul-Jabbar scored 38,387 points throughout his NBA career."
    },
    {
        question: "Which team won the 2011 NBA Finals?",
        choices: ["Miami Heat", "Dallas Mavericks", "Boston Celtics", "Los Angeles Lakers"],
        answer: "Dallas Mavericks",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Dallas Mavericks.",
        image: "<img src=assets/images/mavs-championship.jpg><br>",
        funFact: "The Mavericks won their first title in a 4-2 series against the heavily-favored Miami Heat."
    },
    {
        question: "Which player scored a record-setting 100 points in a single game?",
        choices: ["Wilt Chamberlain", "Klay Thompson", "Kobe Bryant", "Michael Jordan"],
        answer: "Wilt Chamberlain",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Wilt Chamberlain.",
        image: "<img src=assets/images/wilt-100pt.jpg><br>",
        funFact: "Chamberlain scored 100 points for the Philadelphia Warriors in a 169–147 win vs. the New York Knicks on March 2, 1962."
    },
    {
        question: "What is Magic Johnson's first name?",
        choices: ["Michael", "Earvin", "Marvin", "Marcus"],
        answer: "Earvin",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Earvin.",
        image: "<img src=assets/images/magic1.jpg><br>",
        funFact: "Johnson earned his nickname in high school as a triple-double threat and continued the magic with the 'Showtime Lakers'."
    },
    {
        question: "Which team holds the record for highest number of wins in one season?",
        choices: ["Boston Celtics", "Golden State Warriors", "San Antonio Spurs", "Los Angeles Lakers"],
        answer: "Golden State Warriors",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Golden State Warriors.",
        image: "<img src=assets/images/warriors73-9.jpg><br>",
        funFact: "The Warriors' 73-9 record surpassed the Bulls' previous 72-10 record set in the 1995-96 season."
    },
    {
        question: "Which team did Dennis Rodman play for prior to joining the Bulls in 1993?",
        choices: ["New York Knicks", "San Antonio Spurs", "Detroit Pistons", "Los Angeles Lakers"],
        answer: "San Antonio Spurs",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
        image: "<img src=assets/images/rodman-spurs.jpg><br>",
        funFact: "Rodman's personality clashed with that of head coach Gregg Popovich, resulting in a brief stint with San Antonio."
    },
    {
        question: "As of 2018, which player has the highest career free-throw percentage?",
        choices: ["Dirk Nowitzki", "Steph Curry", "James Harden", "Steve Nash"],
        answer: "Steve Nash",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Steve Nash.",
        image: "<img src=assets/images/steve-nash.jpg><br>",
        funFact: "Steve Nash finished his career with a 90.4% free-throw percentage."
    },
    {
        question: "Two former San Antonio Spurs players have recorded a quadruple-double. Which player was one of the two?",
        choices: ["Tim Duncan", "Manu Ginobili", "David Robinson", "George Gervin"],
        answer: "David Robinson",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is David Robinson.",
        image: "<img src=assets/images/david-robinson.jpg><br>",
        funFact: "Robinson recorded 34 points, 10 rebounds, 10 assists and 10 blocks on Feb. 17, 1994 against the Detroit Pistons."
    },
    {
        question: "Which former NBA player's nickname was 'Dr. J'?",
        choices: ["Julius Erving", "Jerry West", "John Stockton", "Jeff Hornacek"],
        answer: "Julius Erving",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Julius Erving.",
        image: "<img src=assets/images/drj.jpg><br>",
        funFact: "Erving was nicknamed “The Doctor” by a childhood friend because of the way he sliced through defenses to the rim and ‘operated’ on his opponents; the nickname was later shortened to Dr. J."
    },
    {
        question: "Who played for Duke University?",
        choices: ["Kawhi Leonard", "Shaquille O'Neal", "Michael Jordan", "Kyrie Irving"],
        answer: "Kyrie Irving",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Kyrie Irving.",
        image: "<img src=assets/images/kyrie-irvin.jpg><br>",
        funFact: "Leonard attended San Diego State, O'Neal attended LSU, and Michael Jordan attended UNC."
    },
    {
        question: "Which team won the 2016 NBA Finals?",
        choices: ["Golden State Warriors", "Cleveland Cavaliers", "Boston Celtics", "Los Angeles Lakers"],
        answer: "Cleveland Cavaliers",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Cleveland Cavaliers.",
        image: "<img src=assets/images/cavs-16.jpg><br>",
        funFact: "With Golden State leading the series 3-1, the Cavs forced 7 games and won their first championship in franchise history."
    },
    {
        question: "In the NBA, how many seconds are on the shot clock for each possession?",
        choices: ["20", "24", "30", "45"],
        answer: "24",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is 24.",
        image: "<img src=assets/images/shot-clock.jpg><br>",
        funFact: "Each team has 24 seconds to score before the opposing team gets the ball."
    },
    {
        question: "Which team has won the most titles?",
        choices: ["Boston Celtics", "Los Angeles Lakers", "Chicago Bulls", "San Antonio Spurs"],
        answer: "Boston Celtics",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Boston Celtics.",
        image: "<img src=assets/images/celtics.jpg><br>",
        funFact: "Boston has won 17 championships."
    },
    {
        question: "Which two teams combined for the highest-scoring game on record?",
        choices: ["Utah Jazz vs. Chicago Bulls", "Denver Nuggets vs. Detroit Pistons", "Chicago Bulls vs. San Antonio Spurs", "Phoenix Suns vs. Los Angeles Lakers"],
        answer: "Denver Nuggets vs. Detroit Pistons",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Denver Nuggets vs. Detroit Pistons.",
        image: "<img src=assets/images/pistons-nuggets.jpg><br>",
        funFact: "The Pistons won in triple overtime with a final score of 186-184 on the Nuggets' home court."
    },
    {
        question: "Which former NBA player starred in the 1996 movie <em>Kazaam</em>?",
        choices: ["Michael Jordan", "Shaquille O'Neal", "Charles Barkley", "Muggsy Bogues"],
        answer: "Shaquille O'Neal",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Shaquille O'Neal.",
        image: "<img src=assets/images/kazaam.jpg><br>",
        funFact: "Shaq has dabbled in many other ventures besides basketball in his career, including 4 rap albums and numerous TV and film appearances."
    },
    {
        question: "Which team has not won back-to-back NBA championships?",
        choices: ["Golden State Warriors", "Chicago Bulls", "Houston Rockets", "San Antonio Spurs"],
        answer: "San Antonio Spurs",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs.",
        image: "<img src=assets/images/spurs-champs.jpg><br>",
        funFact: "Golden State most recently won back-to-back titles in 2017 and 2018, Houston in 1994 and 1995, and Chicago dominated the 1990s with several titles."
    },
    {
        question: "Which former player was nicknamed 'The Admiral'?",
        choices: ["Tim Duncan", "David Robinson", "Larry Bird", "Magic Johnson"],
        answer: "David Robinson",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is David Robinson.",
        image: "<img src=assets/images/theadmiral.jpg><br>",
        funFact: "Robinson earned the nickname following his service in the U.S. Navy."
    },
    {
        question: "Which NBA player's first name is Wardell?",
        choices: ["James Harden", "Russell Westbrook", "Stephen Curry", "Kevin Durant"],
        answer: "Stephen Curry",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Stephen Curry.",
        image: "<img src=assets/images/steph-curry.jpg><br>",
        funFact: "Named after his father, former NBA player Dell Curry, Stephen's full name is Wardell Stephen Curry II."
    },
    {
        question: "Which former NBA player was not a member of the 1992 U.S. Olympic Dream Team?",
        choices: ["Magic Johnson", "Karl Malone", "Hakeem Olajuwon", "Patrick Ewing"],
        answer: "Hakeem Olajuwon",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Hakeem Olajuwon.",
        image: "<img src=assets/images/dream-team.jpg><br>",
        funFact: "Magic Johnson, Karl Malone and Patrick Ewing were on the 1992 Dream Team; Olajuwon later played for the U.S. at the 1996 Olympics in Atlanta."
    },
    {
        question: "What is the name of the Golden State Warriors' home arena?",
        choices: ["Oracle Arena", "Apple Arena", "Cisco Arena", "Intel Arena"],
        answer: "Oracle Arena",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Oracle Arena.",
        image: "<img src=assets/images/oracle-arena.jpg><br>",
        funFact: "Oracle Arena, nicknamed 'Roaracle', is located in Oakland, CA."
    },
    {
        question: "Which former NBA player made an appearance in the 1980 movie <em>Airplane!</em>?",
        choices: ["Kareem Abdul-Jabbar", "Larry Bird", "Wilt Chamberlain", "Kevin McHale"],
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar.",
        image: "<img src=assets/images/kareem-airplane.jpg><br>",
        funFact: "Kareem played a co-pilot in the film."
    },
    {
        question: "How many NBA teams are based outside the United States?",
        choices: ["0", "1", "2", "3"],
        answer: "1",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is 1.",
        image: "<img src=assets/images/raptors.png><br>",
        funFact: "The Toronto Raptors are the only team based outside the U.S."
    },
    {
        question: "Which NBA superstar was drafted out of high school?",
        choices: ["Michael Jordan", "Shaquille O'Neal", "LeBron James", "Kevin Durant"],
        answer: "LeBron James",
        ifRight: "Congrats! You got it!",
        ifWrong: "Wrong! The correct answer is LeBron James.",
        image: "<img src=assets/images/lebron.jpg><br>",
        funFact: "Michael Jordan attended UNC, Shaq played for LSU and Kevin Durant attended the University of Texas."
    },
    ];
    //Generate questions at random, displayed one at a time.
    let randQuestion = questionsAndChoices[Math.floor(Math.random() * questionsAndChoices.length)];
    for (let k = 0; k < 10; k++) {
        let currentArray = questionsAndChoices[k];
        console.log('New Array: ', currentArray);
    }
    function initializeGame() {
        correct = 0;
        incorrect = 0;
        $('.start').empty();
        $('.start').hide();
        $('.answer-image').empty();
        $('.fun-fact').empty();
        $(".buttons").show();

        //Select random questions to display one at a time on the screen.
        randQuestion = questionsAndChoices[Math.floor(Math.random() * questionsAndChoices.length)];
        $(".question").append(randQuestion.question);
        for (let i = 0; i < randQuestion.choices.length; i++) {
            console.log(randQuestion.choices[i]);
            //Dynamically create buttons for each choice.
            let choice = $("<div>");
            choice.addClass("choice-btn");
            choice.attr("data-choices", randQuestion.choices[i]);
            choice.text(randQuestion.choices[i]);
            $(".buttons").append(choice);
        }

        //Push questions to blank array as they're used.
        used.push(randQuestion);
        //Timer gives the player 10 seconds to answer the question.
        secondsLeft = 10;
        interval = setInterval(function () {
            document.getElementById('timer').innerHTML = --secondsLeft;
            if (secondsLeft <= 0) {
                document.getElementById('timer').innerHTML = "0";
                $('.fun-fact').append(randQuestion.funFact);
                $('.answer-image').append(randQuestion.image);
                document.querySelector(".result").innerHTML = "Time's up! Answer: " + randQuestion.answer;
                $(".question").empty();
                $('.buttons').empty();
                loadNextQuestion();
            }
        }, 1000);
    }
    function loadNextQuestion() {
        clearInterval(interval);
        //This loop was intended to clear out questions already asked within a game, but it appears there are still some occasional duplicates.
        randQuestion = questionsAndChoices[Math.floor(Math.random() * questionsAndChoices.length)];
        for (let i = questionsAndChoices.length - 1; i--;) {
            if (used.includes(questionsAndChoices[i]) === true) questionsAndChoices.splice(i, 1);
        }
        console.log("Questions and choices after splice: ", questionsAndChoices.length);
        //This interval includes the countdown for the result clearing, plus the time allotted to answer each question.
        //There are some times that the countdown will flash on the screen, but for the most part the clock doesn't reset until the next question is displayed.
        secondsLeft = 15;
        interval = setInterval(function () {
            document.getElementById('timer').innerHTML = --secondsLeft;
            if (secondsLeft <= 0) {
                document.getElementById('timer').innerHTML = "0";
                $('.fun-fact').append(randQuestion.funFact);
                $('.answer-image').append(randQuestion.image);
                document.querySelector(".result").innerHTML = "Time's up! Answer: " + randQuestion.answer;
                $(".question").empty();
                $('.buttons').empty();
                loadNextQuestion();
            }
        }, 1000);
        used.push(randQuestion);
        //Set a few seconds for user to view answer and wait for the next question.
        let clearResult = 4;
        let interval2 = setInterval(function () {
            $("#timer").html('0');
            --clearResult
            if (clearResult <= 0) {
                clearInterval(interval2);
                $(".result").empty();
                $('.answer-image').empty();
                $('.fun-fact').empty();
                $(".question").append(randQuestion.question);
                for (let i = 0; i < randQuestion.choices.length; i++) {
                    console.log(randQuestion.choices[i]);
                    let choice = $("<div>");
                    choice.addClass("choice-btn");
                    choice.attr("data-choices", randQuestion.choices[i]);
                    choice.text(randQuestion.choices[i]);
                    $(".buttons").append(choice);
                }
            }
        }, 1000);
        console.log('used array:', used);
        //Game ends when player has answered 10 questions.
        if (parseInt(correct) + parseInt(incorrect) >= 10) {
            clearInterval(interval);
            clearInterval(interval2);
            $('.start').show();
            $('.start').append('Play Again?');
            $(".timer").html('0');
            $(".question").empty();
            $(".done").append("Congrats! A " + correct + "-" + incorrect + " record--not bad!");
        }
    }

    $(".start").on("click", function () {
        initializeGame();
        correct = 0;
        incorrect = 0;
        console.log('game initialized');
        $(".result").empty();
        $(".done").empty();
        document.querySelector(".correct").innerHTML = 0;
        document.querySelector(".incorrect").innerHTML = 0;
    })

    $(".buttons").on('click', 'div', function () {
        let guess = $(this).attr("data-choices");
        console.log(guess);
        $('.buttons').empty();
        clearInterval(interval);
        $("#timer").html('0');
        $('.fun-fact').append(randQuestion.funFact);
        $('.answer-image').append(randQuestion.image);
        $(".question").empty();
        if (guess === randQuestion.answer) {
            console.log('correct');
            correct++;
            document.querySelector(".correct").innerHTML = correct;
            document.querySelector(".result").innerHTML = randQuestion.ifRight;
            loadNextQuestion();
        }
        else {
            console.log('incorrect');
            incorrect++;
            document.querySelector(".incorrect").innerHTML = incorrect;
            document.querySelector(".result").innerHTML = randQuestion.ifWrong;
            loadNextQuestion();
        }
    })
})
