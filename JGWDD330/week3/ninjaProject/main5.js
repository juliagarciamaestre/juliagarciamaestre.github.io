//Store our questions as objects of an array
const quiz = [
    { name: "SuperMan", realName:"Clark Kent"},
    { name:"Wonder Woman", realName:"Diana Prince"},
    { name:"Batman", realName: "Bruce Wayne"}
];

function start(quiz){
    let score = 0;

    // main game loop
    for(const [question, answer] of quiz){
        const response = ask(question);
        check(response, answer);
    }

    // end the main game loop
    gameOver()

    //function declarations

    function ask(question){
        return prompt(question);
    }

    function check(response, answer){
        if(response === answer){
            alert("Correct!");
            score++;
        } else{
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }
    function gameOver(){
        alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`)
    }
}

start(quiz);