
//Store our questions as objects of an array
const quiz = [
    { name: "SuperMan", realName:"Clark Kent"},
    { name:"Wonder Woman", realName:"Diana Prince"},
    { name:"Batman", realName: "Bruce Wayne"}
];


//View Object (document.getElementById())

const view = {
    score: document.querySelector("#score strong"),
    question: document.getElementById("question"), // can be acess like view.question
    info: document.getElementById("info"),
    result: document.getElementById("result"),
    start: document.getElementById("start"),

    //Helper Function (can be used to update the content of an element)
    render(target, content, attributes){
        for(const key in attributes){//attributes parameter is an object that can be added to the element.
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;//target displays the content. Content parameter is for the content to be updated with  
    },

    //Utility functions that whill show and hide elements
    show(element){
        element.style.display = "block";
    },
    hide(element){
        element.style.display = "none";
    }
}


//namespace the functions 

const game = {
    start(quiz){
        this.score = 0;
        this.questions = [...quiz]; //... is a selector here
        view.hide(view.start);
        // main game loop
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }

        // end the main game loop
        this.gameOver();    
    },
    
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        view.render(view.question, question);
        const response = prompt(question);
        this.check(response);
    },

    check(response){

        const answer = this.question.realName; 
        if(response === answer){
        view.render(view.result, "Correct", {"class":"correct"});
        alert("Correct!");
        this.score++;
        } else{
        view.render(view.result, `Wrong! The correct answer was ${answer}`, {"class": "wrong"});
        alert(`Wrong! The correct answer was ${answer}`);
        }
    },    
    
    gameOver(){
        view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.show(view.start);
}
}

view.start.addEventListener("click", ()=> game.start(quiz), false);