//Store our questions as objects of an array
const quiz = [
    { name: "SuperMan", realName:"Clark Kent"},
    { name:"Wonder Woman", realName:"Diana Prince"},
    { name:"Batman", realName: "Bruce Wayne"}
];

//namespace the functions 

const game = {
    start(quiz){
        this.questions = [...quiz]; //... is a selector here
        this.score = 0;

        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }

        // end the main game loop
        this.gameOver()

        //function declarations
    },
    
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response)
    },

    check(response){

        const answer = this.question.realName; 
        if(response === answer){
        alert("Correct!");
        this.score++;
        } else{
        alert(`Wrong! The correct answer was ${answer}`);
        }
    },    
    
    gameOver(){
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`)
        }
}


game.start(quiz);