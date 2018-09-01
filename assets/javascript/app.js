$(document).ready(function () {
    let correct = 0;
    let incorrect = 0;
    let choice1;
    let choice2;
    let choice3;
    let choice4;
    let answer;
    let done = false;
    let used = [];
    //loop through without duplicating
    //let currentArray;

    //This array is massive; I minimize it to navigate through the rest of the code more easily
    let questionsAndChoices = [{
        question: "What number did Michael Jordan wear at the end of the 1994-95 season?",
        choice1: "23",
        choice2: "32",
        choice3: "45",
        choice4: "22",
        answer: "45",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 45."
    }, {
        question: "Where did the Los Angeles Lakers originate?",
        choice1: "San Diego",
        choice2: "Minneapolis",
        choice3: "San Francisco",
        choice4: "St. Louis",
        answer: "Minneapolis",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Minneapolis."
    }, {
        question: "Which team won the 1999 NBA Finals?",
        choice1: "San Antonio Spurs",
        choice2: "New York Knicks",
        choice3: "Los Angeles Lakers",
        choice4: "Chicago Bulls",
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs."
    },
    {
        question: "As of 2018, who is the NBA's all-time points leader?",
        choice1: "LeBron James",
        choice2: "Kobe Bryant",
        choice3: "Kareem Abdul-Jabbar",
        choice4: "Michael Jordan",
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar."
    },
    {
        question: "Whose silhouette is used for the NBA logo?",
        choice1: "Bill Russell",
        choice2: "Larry Bird",
        choice3: "Kareem Abdul-Jabbar",
        choice4: "Jerry West",
        answer: "Jerry West",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Jerry West."
    },
    {
        question: "Which NBA player did not appear in the 1996 movie <em>Space Jam</em>?",
        choice1: "Patrick Ewing",
        choice2: "Charles Barkley",
        choice3: "Muggsy Bogues",
        choice4: "Shaquille O'Neal",
        answer: "Shaquille O'Neal",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Shaquille O'Neal."
    },
    {
        question: "Which player scored a record-setting 100 points in a single game?",
        choice1: "Wilt Chamberlain",
        choice2: "Klay Thompson",
        choice3: "Kobe Bryant",
        choice4: "Michael Jordan",
        answer: "Wilt Chamberlain",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Wilt Chamberlain."
    },
    {
        question: "Which team holds the record for highest number of wins in one season?",
        choice1: "Boston Celtics",
        choice2: "Golden State Warriors",
        choice3: "San Antonio Spurs",
        choice4: "Los Angeles Lakers",
        answer: "Golden State Warriors",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Golden State Warriors."
    },
    {
        question: "Where were the Seattle Supersonics moved to in the 2008-09 season, and what is the team's name?",
        choice1: "Charlotte Hornets",
        choice2: "New Orleans Pelicans",
        choice3: "Oklahoma City Thunder",
        choice4: "Memphis Grizzlies",
        answer: "Oklahoma City Thunder",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Oklahoma City Thunder."
    },
    {
        question: "As of 2018, which player holds the record for most Finals MVP titles?",
        choice1: "Michael Jordan",
        choice2: "Tim Duncan",
        choice3: "Kevin Durant",
        choice4: "Steph Curry",
        answer: "Michael Jordan",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Michael Jordan."
    },
    {
        question: "Which team did Dennis Rodman play for prior to joining the Bulls in 1993?",
        choice1: "New York Knicks",
        choice2: "San Antonio Spurs",
        choice3: "Detroit Pistons",
        choice4: "Los Angeles Lakers",
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs."
    },
    {
        question: "As of 2018, what is Kevin Durant's jersey number?",
        choice1: "23",
        choice2: "0",
        choice3: "35",
        choice4: "2",
        answer: "35",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 35."
    },
    {
        question: "As of 2018, which player has the highest career free-throw percentage?",
        choice1: "Dirk Nowitzki",
        choice2: "Steph Curry",
        choice3: "James Harden",
        choice4: "Steve Nash",
        answer: "Steve Nash",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Steve Nash."
    },
    {
        question: "As of 2018, who holds the most coaching titles?",
        choice1: "Phil Jackson",
        choice2: "Gregg Popovich",
        choice3: "Larry Brown",
        choice4: "Pat Riley",
        answer: "Phil Jackson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Phil Jackson."
    },
    {
        question: "Two former San Antonio Spurs players have recorded a quadruple-double. Which player was one of the two?",
        choice1: "Tim Duncan",
        choice2: "Manu Ginobili",
        choice3: "David Robinson",
        choice4: "George Gervin",
        answer: "David Robinson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is David Robinson."
    },
    {
        question: "Which former NBA player's nickname was 'The Answer'?",
        choice1: "Allen Iverson",
        choice2: "Latrell Sprewell",
        choice3: "David Robinson",
        choice4: "James Worthy",
        answer: "Allen Iverson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Allen Iverson."
    },
    {
        question: "Which former NBA player's nickname was 'The Iceman'?",
        choice1: "Julius Erving",
        choice2: "Latrell Sprewell",
        choice3: "George Gervin",
        choice4: "Bill Russell",
        answer: "George Gervin",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is George Gervin."
    },
    {
        question: "Which former NBA player's nickname was 'Dr. J'?",
        choice1: "Julius Erving",
        choice2: "Jerry West",
        choice3: "John Stockton",
        choice4: "Jeff Hornacek",
        answer: "Julius Erving",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Julius Erving."
    },
    {
        question: "Which former NBA player's nickname was 'Dr. J'?",
        choice1: "Julius Erving",
        choice2: "Jerry West",
        choice3: "John Stockton",
        choice4: "Jeff Hornacek",
        answer: "Julius Erving",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Julius Erving."
    },
    {
        question: "Who played for Duke University?",
        choice1: "Kawhi Leonard",
        choice2: "Shaquille O'Neal",
        choice3: "Michael Jordan",
        choice4: "Kyrie Irving",
        answer: "Kyrie Irving",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kyrie Irving."
    },
    {
        question: "Which team won the 2016 NBA Finals?",
        choice1: "Golden State Warriors",
        choice2: "Cleveland Cavaliers",
        choice3: "Boston Celtics",
        choice4: "Los Angeles Lakers",
        answer: "Cleveland Cavaliers",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Cleveland Cavaliers."
    },
    {
        question: "In the NBA, how many seconds are on the shot clock for each possession?",
        choice1: "20",
        choice2: "24",
        choice3: "30",
        choice4: "45",
        answer: "24",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 24."
    },
    {
        question: "Which team has won the most titles?",
        choice1: "Boston Celtics",
        choice2: "Los Angeles Lakers",
        choice3: "Chicago Bulls",
        choice4: "San Antonio Spurs",
        answer: "Boston Celtics",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Boston Celtics."
    },
    {
        question: "Which team's mascot is a gorilla?",
        choice1: "Utah Jazz",
        choice2: "Denver Nuggets",
        choice3: "Portland Trail Blazers",
        choice4: "Phoenix Suns",
        answer: "Phoenix Suns",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Phoenix Suns."
    },
    {
        question: "Which two teams combined for the highest-scoring game on record?",
        choice1: "Utah Jazz vs. Chicago Bulls",
        choice2: "Denver Nuggets vs. Detroit Pistons",
        choice3: "Chicago Bulls vs. San Antonio Spurs",
        choice4: "Phoenix Suns vs. Los Angeles Lakers",
        answer: "Denver Nuggets vs. Detroit Pistons",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Denver Nuggets vs. Detroit Pistons."
    },
    {
        question: "How long is an NBA overtime period?",
        choice1: "2 minutes",
        choice2: "3 minutes",
        choice3: "5 minutes",
        choice4: "10 minutes",
        answer: "5 minutes",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 5 minutes."
    },
    {
        question: "Which player is famous for his 'sky-hook'?",
        choice1: "Kareem Abdul-Jabbar",
        choice2: "Scottie Pippen",
        choice3: "Michael Jordan",
        choice4: "Larry Bird",
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar."
    },
    {
        question: "Which team did Shaquille O'Neal <em>NOT</em> play for during his career?",
        choice1: "Miami Heat",
        choice2: "Cleveland Cavaliers",
        choice3: "Phoenix Suns",
        choice4: "San Antonio Spurs",
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs."
    },
    {
        question: "Which former NBA player changed his name to Metta World Peace?",
        choice1: "Ron Artest",
        choice2: "Allen Iverson",
        choice3: "Rasheed Wallace",
        choice4: "Kareem Abdul-Jabbar",
        answer: "Ron Artest",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Ron Artest."
    },
    {
        question: "Which former NBA player starred in the 1996 movie <em>Kazaam</em>?",
        choice1: "Michael Jordan",
        choice2: "Shaquille O'Neal",
        choice3: "Charles Barkley",
        choice4: "Muggsy Bogues",
        answer: "Shaquille O'Neal",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Shaquille O'Neal."
    },
    {
        question: "Where did the Grizzlies call home before they moved to Memphis?",
        choice1: "Seattle",
        choice2: "St. Louis",
        choice3: "San Diego",
        choice4: "Vancouver",
        answer: "Vancouver",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Vancouver."
    },
    {
        question: "Which team won the 2009 and 2010 NBA Finals back-to-back?",
        choice1: "San Antonio Spurs",
        choice2: "Boston Celtics",
        choice3: "Miami Heat",
        choice4: "Los Angeles Lakers",
        answer: "Los Angeles Lakers",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Los Angeles Lakers."
    },
    {
        question: "Which team's mascot is a bear named Clutch?",
        choice1: "Memphis Grizzlies",
        choice2: "Denver Nuggets",
        choice3: "Portland Trail Blazers",
        choice4: "Houston Rockets",
        answer: "Houston Rockets",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Houston Rockets."
    },
    {
        question: "Which current or former team's mascot is/was Rocky the Mountain Lion?",
        choice1: "Seattle SuperSonics",
        choice2: "Denver Nuggets",
        choice3: "Portland Trail Blazers",
        choice4: "Utah Jazz",
        answer: "Denver Nuggets",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Denver Nuggets."
    },
    {
        question: "Which team's mascot is named Benny?",
        choice1: "Chicago Bulls",
        choice2: "Brooklyn Nets",
        choice3: "Portland Trail Blazers",
        choice4: "Utah Jazz",
        answer: "Chicago Bulls",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Chicago Bulls."
    },
    {
        question: "Where were the Nets based before moving to Brooklyn?",
        choice1: "New Jersey",
        choice2: "Pittsburgh",
        choice3: "Cincinnati",
        choice4: "St. Louis",
        answer: "New Jersey",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is New Jersey."
    },
    {
        question: "In the 1990s, which former player/current coach was punched in the face by Michael Jordan at practice following a disagreement on a play?",
        choice1: "Steve Kerr",
        choice2: "Luke Walton",
        choice3: "Doc Rivers",
        choice4: "Tyronn Lue",
        answer: "Steve Kerr",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Steve Kerr."
    },
    {
        question: "Which team won the 2011 NBA Finals?",
        choice1: "Miami Heat",
        choice2: "Dallas Mavericks",
        choice3: "Boston Celtics",
        choice4: "Los Angeles Lakers",
        answer: "Dallas Mavericks",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Dallas Mavericks."
    },
    {
        question: "Which NBA player has won the most championship rings?",
        choice1: "Robert Horry",
        choice2: "Michael Jordan",
        choice3: "Bill Russell",
        choice4: "LeBron James",
        answer: "Bill Russell",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Bill Russell."
    },
    {
        question: "Which team won the NBA championships during two consecutive seasons while Michael Jordan was temporarily retired for the first time?",
        choice1: "Utah Jazz",
        choice2: "Detroit Pistons",
        choice3: "Houston Rockets",
        choice4: "San Antonio Spurs",
        answer: "Houston Rockets",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Houston Rockets."
    },
    {
        question: "Which team has not won back-to-back NBA championships?",
        choice1: "Golden State Warriors",
        choice2: "Chicago Bulls",
        choice3: "Houston Rockets",
        choice4: "San Antonio Spurs",
        answer: "San Antonio Spurs",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is San Antonio Spurs."
    },
    {
        question: "Which former player was nicknamed 'The Admiral'?",
        choice1: "Tim Duncan",
        choice2: "David Robinson",
        choice3: "Larry Bird",
        choice4: "Magic Johnson",
        answer: "David Robinson",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is David Robinson."
    },
    {
        question: "How long is a quarter in an NBA game?",
        choice1: "10 minutes",
        choice2: "12 minutes",
        choice3: "15 minutes",
        choice4: "20 minutes",
        answer: "12 minutes",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 12 minutes."
    },
    {
        question: "Which city does not currently have an NBA team",
        choice1: "Salt Lake City",
        choice2: "Phoenix",
        choice3: "Charlotte",
        choice4: "Baltimore",
        answer: "Baltimore",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Baltimore."
    },
    {
        question: "California is home to how many NBA teams?",
        choice1: "2",
        choice2: "3",
        choice3: "4",
        choice4: "5",
        answer: "4",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 4."
    },
    {
        question: "Which NBA player's first name is Wardell?",
        choice1: "James Harden",
        choice2: "Russell Westbrook",
        choice3: "Stephen Curry",
        choice4: "Kevin Durant",
        answer: "Stephen Curry",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Stephen Curry."
    },
    {
        question: "Which former NBA player was not a member of the 1992 U.S. Olympic Dream Team?",
        choice1: "David Robinson",
        choice2: "Scottie Pippen",
        choice3: "Hakeem Olajuwon",
        choice4: "Larry Bird",
        answer: "Hakeem Olajuwon",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Hakeem Olajuwon."
    },
    {
        question: "When Michael Jordan left the NBA to play baseball in the mid-1990s, which major-league team's affiliate did he play for?",
        choice1: "Chicago Cubs",
        choice2: "Baltimore Orioles",
        choice3: "Chicago White Sox",
        choice4: "Philadelphia Phillies",
        answer: "Chicago White Sox",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Chicago White Sox."
    },
    {
        question: "Which team has had the most appearances in the NBA Finals? (City name is not included, as all 4 teams originated elsewhere.)",
        choice1: "Lakers",
        choice2: "Warriors",
        choice3: "76ers",
        choice4: "Pistons",
        answer: "Lakers",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Lakers."
    },
    {
        question: "What is the name of the Golden State Warriors' home arena?",
        choice1: "Oracle Arena",
        choice2: "Apple Arena",
        choice3: "Cisco Arena",
        choice4: "Intel Arena",
        answer: "Oracle Arena",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Oracle Arena."
    },
    {
        question: "The Boston Celtics dynasty started in the decade prior and spanned all of which decade?",
        choice1: "1960s",
        choice2: "1970s",
        choice3: "1980s",
        choice4: "1990s",
        answer: "1960s",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 1960s."
    },
    {
        question: "Between 1980 and 1990, only 4 teams won the finals. Which is not one of those teams?",
        choice1: "Boston Celtics",
        choice2: "Detroit Pistons",
        choice3: "Philadelphia 76ers",
        choice4: "Chicago Bulls",
        answer: "Chicago Bulls",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Chicago Bulls."
    },
    {
        question: "How many divisions are there in the NBA?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "8",
        answer: "6",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 6."
    },
    {
        question: "How many teams are in the NBA?",
        choice1: "28",
        choice2: "30",
        choice3: "32",
        choice4: "36",
        answer: "30",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 30."
    },
    {
        question: "Which former NBA player made an appearance in the 1980 movie <em>Airplane!</em>?",
        choice1: "Kareem Abdul-Jabbar",
        choice2: "Larry Bird",
        choice3: "Wilt Chamberlain",
        choice4: "Kevin McHale",
        answer: "Kareem Abdul-Jabbar",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Kareem Abdul-Jabbar."
    },
    {
        question: "Which former NBA player was head coach of the Indiana Pacers in the late 1990s?",
        choice1: "Robert Parish",
        choice2: "Kevin McHale",
        choice3: "Magic Johnson",
        choice4: "Larry Bird",
        answer: "Larry Bird",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Larry Bird."
    },
    {
        question: "Which state does not currently have an NBA team?",
        choice1: "Georgia",
        choice2: "North Carolina",
        choice3: "Colorado",
        choice4: "Washington",
        answer: "Washington",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Washington."
    },
    {
        question: "Which former NBA player starred in the 1998 movie <em>My Giant</em>?",
        choice1: "Shaquille O'Neal",
        choice2: "Kareem Abdul-Jabbar",
        choice3: "Gheorghe Muresan",
        choice4: "Charles Barkley",
        answer: "Gheorghe Muresan",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is Gheorghe Muresan."
    },
    {
        question: "How many NBA teams are based outside the United States?",
        choice1: "0",
        choice2: "1",
        choice3: "2",
        choice4: "3",
        answer: "1",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 1."
    },
    {
        question: "What is LeBron James' jersey number?",
        choice1: "22",
        choice2: "23",
        choice3: "32",
        choice4: "33",
        answer: "23",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 23."
    },
    {
        question: "How many teams start out in the NBA Playoffs each year?",
        choice1: "12",
        choice2: "16",
        choice3: "18",
        choice4: "20",
        answer: "16",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 16."
    },
    {
        question: "The Utah Jazz originated in which city?",
        choice1: "New Orleans",
        choice2: "Memphis",
        choice3: "St. Louis",
        choice4: "Atlanta",
        answer: "New Orleans",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is New Orleans."
    },
    {
        question: "Although basketball was invented in the 1800s, the NBA wasn't established until what year?",
        choice1: "1920",
        choice2: "1946",
        choice3: "1957",
        choice4: "1962",
        answer: "1946",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is 1946."
    },
    {
        question: "Which NBA superstar was drafted out of high school?",
        choice1: "Michael Jordan",
        choice2: "Shaquille O'Neal",
        choice3: "LeBron James",
        choice4: "Kevin Durant",
        answer: "LeBron James",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is LeBron James."
    },
    /*
    {
        question: "",
        choice1: "",
        choice2: "",
        choice3: "",
        choice4: "",
        answer: "",
        ifRight: "Correct!",
        ifWrong: "Wrong! The correct answer is ."
    },*/
    ];

    let randQuestion = questionsAndChoices[Math.floor(Math.random() * questionsAndChoices.length)];
    for (let k = 0; k < 10; k++) {
        let currentArray = questionsAndChoices[k];
        console.log('New Array: ',currentArray);
    }
    //randQuestion.push(used);
    //console.log(used);
    // console.log("questions: ", questions);

    //create a "currentGame" array, push [0-9] from questionsAndChoices to that array

    //*set initialize function following start to set parameters (or get rid of start button)
    //***initialize isn't working

    //first question
    randQuestion = questionsAndChoices[Math.floor(Math.random() * questionsAndChoices.length)];
    console.log(questionsAndChoices.length);
    //console.log("Current Array: ", currentArray.question);
    $(".question").append(randQuestion.question);
    $(".choice1").append(randQuestion.choice1);
    $(".choice1").css('background', 'orange');
    $(".choice2").append(randQuestion.choice2);
    $(".choice2").css('background', 'orange');
    $(".choice3").append(randQuestion.choice3);
    $(".choice3").css('background', 'orange');
    $(".choice4").append(randQuestion.choice4);
    $(".choice4").css('background', 'orange');
    $(".play-again").empty();
    used.push(randQuestion);
    console.log(used);

    //trying to clear result


    //***times out, but doesn't load next question. set it for the full game for now
    let seconds_left = 90;
    let interval = setInterval(function () {
        document.getElementById('timer').innerHTML = --seconds_left;

        if (seconds_left <= 0) {
            document.getElementById('timer').innerHTML = "Time's up! Click the logo below to play again";
            clearInterval(interval);
            $(".question-wrapper").empty();
            $(".play-again").append("<img src =assets/images/nbalogo.jpg><br>Click the image to play again.");
        }
    }, 1000);

    function initializeGame() {
        correct = 0;
        incorrect = 0;
        randQuestion = questionsAndChoices[Math.floor(Math.random() * questionsAndChoices.length)];
        
        $(".question").append(randQuestion.question);
        $(".choice1").append(randQuestion.choice1);
        $(".choice1").css('background', 'orange');
        $(".choice2").append(randQuestion.choice2);
        $(".choice2").css('background', 'orange');
        $(".choice3").append(randQuestion.choice3);
        $(".choice3").css('background', 'orange');
        $(".choice4").append(randQuestion.choice4);
        $(".choice4").css('background', 'orange');
        used.push(randQuestion);
    }

    function loadNextQuestion() {
        randQuestion = questionsAndChoices[Math.floor(Math.random() * questionsAndChoices.length)];
        //testing below - seems to work 8/26
        for( let i = questionsAndChoices.length-1; i--;){
            if (used.includes(questionsAndChoices[i]) === true) questionsAndChoices.splice(i, 1);
            }
            console.log("Questions and choices after splice: ", questionsAndChoices.length);
            console.log("New Q&Choice Array: ", questionsAndChoices);
           // console.log("Current Array after 1st loop: ", currentArray.question);
        //let i = randQuestion;
        
        //set timer here to have question/choices appear in 1 sec...
        //...the choice buttons still show

        //testing below... timer is working but it very briefly shows another number, then the actual time

    //     let guessTimer = 30;
    // let interval3 = setInterval(function () {
    //     document.getElementById('timer').innerHTML = --guessTimer;

    //     if (guessTimer <= 0) {
    //         document.getElementById('timer').innerHTML = 'times up';
    //         clearInterval(interval3);
    //         $(".question-wrapper").empty();
    //     }
    //      else {
    //      guessTimer = 30;
    //     }
    // }, 1000);
        /*let guessTimer = 30; 
        let interval3 = setInterval(function() {
            --guessTimer
        console.log('load',guessTimer);
        if (guessTimer <= 0) {
            clearInterval(interval3);
            $(".question").append(randQuestion.question);
            //$(".choices").append();
        $(".choice1").append(randQuestion.choice1);
        $(".choice2").append(randQuestion.choice2);
        $(".choice3").append(randQuestion.choice3);
        $(".choice4").append(randQuestion.choice4);
        $(".result").empty();
        }
        else {
            guessTimer = 30;
        }
    }, 1000);*/

    used.push(randQuestion);
        //set timeout for result to disappear in 1 sec
        let clearResult = 4;
        let interval2= setInterval(function () {
             //$("#test").append(--clearResult);
             --clearResult
             console.log('clear result',clearResult);
             if (clearResult <= 0) {
                 clearInterval(interval2);
                 $(".result").empty();
                 $(".question").append(randQuestion.question);
        $(".choice1").append(randQuestion.choice1);
        $(".choice1").css('background', 'orange');
        $(".choice2").append(randQuestion.choice2);
        $(".choice2").css('background', 'orange');
        $(".choice3").append(randQuestion.choice3);
        $(".choice3").css('background', 'orange');
        $(".choice4").append(randQuestion.choice4);
        $(".choice4").css('background', 'orange');
        
             }
         }, 1000);
        
        
        console.log('used array:', used);
        
        if (parseInt(correct) + parseInt(incorrect) >= 10) {
            console.log('all done!');
            $(".question-wrapper").empty();//populate new message
            $(".done").append("You got " + correct + " answers correct and " + incorrect + " answers incorrect.");
            done = true;
            console.log('done', done);
            $(".play-again").append("<img src =assets/images/nbalogo.jpg><br>Click the image to play again.");
        }
    }
    $(".choice1").on('click', function () {
        console.log('choice1 clicked');
        if (randQuestion.choice1 === randQuestion.answer) {
            console.log('correct');
            console.log(randQuestion.choice1);
            console.log(randQuestion.answer);
            correct++;
            document.querySelector(".correct").innerHTML = correct;
            document.querySelector(".result").innerHTML = randQuestion.ifRight;
            //$(".choices").empty();
            $(".question").empty();
            $(".choice1").empty();
            $(".choice1").css('background', 'black');
            $(".choice2").empty();
            $(".choice2").css('background', 'black');
            $(".choice3").empty();
            $(".choice3").css('background', 'black');
            $(".choice4").empty();
            $(".choice4").css('background', 'black');
            //$(".choice1").append('<img src=assets/images/nbalogo.jpg>');
            loadNextQuestion();
        }
        else {
            console.log('incorrect');
            //$(".choices").empty();
            incorrect++;
            document.querySelector(".incorrect").innerHTML = incorrect;
            document.querySelector(".result").innerHTML = randQuestion.ifWrong;
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
    })
    $(".choice2").on('click', function () {
        console.log('choice2 clicked');
        if (randQuestion.choice2 === randQuestion.answer) {
            console.log('correct');
            console.log(randQuestion.choice2);
            console.log(randQuestion.answer);
            correct++;
            document.querySelector(".correct").innerHTML = correct;
            document.querySelector(".result").innerHTML = randQuestion.ifRight;
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
        else {
            console.log('incorrect');
            incorrect++;
            document.querySelector(".incorrect").innerHTML = incorrect;
            document.querySelector(".result").innerHTML = randQuestion.ifWrong;
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
    })
    $(".choice3").on('click', function () {
        console.log('choices clicked');
        if (randQuestion.choice3 === randQuestion.answer) {
            console.log('correct');
            console.log(randQuestion.choice3);
            console.log(randQuestion.answer);
            correct++;
            document.querySelector(".correct").innerHTML = correct;
            document.querySelector(".result").innerHTML = randQuestion.ifRight;
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
        else {
            console.log('incorrect');
            incorrect++;
            document.querySelector(".incorrect").innerHTML = incorrect;
            document.querySelector(".result").innerHTML = randQuestion.ifWrong;
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
    })
    $(".choice4").on('click', function () {
        console.log('choices clicked');
        if (randQuestion.choice4 === randQuestion.answer) {
            console.log('correct');
            console.log(randQuestion.choice4);
            console.log(randQuestion.answer);
            correct++;
            document.querySelector(".correct").innerHTML = correct;
            document.querySelector(".result").innerHTML = randQuestion.ifRight;
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
        else {
            console.log('incorrect');
            incorrect++;
            document.querySelector(".incorrect").innerHTML = incorrect;
            document.querySelector(".result").innerHTML = randQuestion.ifWrong;
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
    })

    $(".play-again").on("click", function () {
        //loadNewQuestion();
        console.log('play again clicked');
        $(".result").empty();
        document.querySelector(".correct").innerHTML = 0;
        document.querySelector(".incorrect").innerHTML = 0;
        //correct = 0; //this reset the score, but nothing happens when start is clicked after a game resets
        //incorrect = 0;
        console.log('total score', parseInt(correct) + parseInt(incorrect));
        //initializeGame();
        location.reload();
    })
    $(".timeout").on("click", function () {
        console.log('clicked');
        loadNextQuestion();
    })
})

