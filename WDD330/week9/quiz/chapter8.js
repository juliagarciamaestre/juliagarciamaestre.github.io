
//Store our questions as objects of an array
const quiz = [
    { name: "SuperMan", realName:"Clark Kent"},
    { name:"Wonder Woman", realName:"Diana Prince"},
    { name:"Batman", realName: "Bruce Wayne"}
];


//View Object (document.getElementById())
const view = {
    score: document.querySelector('#score strong'),
    question: document.querySelector('#question'),// can be acess like view.question
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),
    start: document.querySelector('#start'),
    response: document.querySelector('#response'),//add response as a property of view object
    timer: document.querySelector('#timer strong'),

    //Helper Function (can be used to update the content of an element)
    render(target,content,attributes) {
        for(const key in attributes) {//attributes parameter is an object that can be added to the element.
          target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;//target displays the content. Content parameter is for the content to be updated with  
    },

    //Utility functions that whill show and hide elements
    show(element){
      element.style.display = 'block';
    },

    hide(element){
      element.style.display = 'none';
    },

    resetForm(){
      this.response.answer.value = '';
      this.response.answer.focus();
    },

    setup(){
        this.show(this.question);
        this.show(this.response);
        this.show(this.result);
        this.hide(this.start);
        this.render(this.score,game.score);
        this.render(this.result,'');
        this.render(this.info,'');
        this.resetForm();
    },

    teardown(){
      this.hide(this.question);
      this.hide(this.response);
      this.show(this.start);
    }
};


//namespace the functions 

const game = {
    start(quiz){
        this.score = 0;
        this.questions = [...quiz]; //... is a selector here
        view.setup();
        this.secondsRemaining = 20;
        this.timer = setInterval( this.countdown , 1000 );
        this.ask();
    },

    countdown() {
        game.secondsRemaining--;
        view.render(view.timer,game.secondsRemaining);
        if(game.secondsRemaining < 0) {
            game.gameOver();
        }
    },
    
    
    ask(name){
        if(this.questions.length> 0){
            this.question = this.questions.pop(); //pop() method to remove each question
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);
        }
        else{
            this.gameOver();
        }
       
    },

    check(event){
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName; 
        if(response === answer){
            view.render(view.result, "Correct", {"class":"correct"});
            this.score++;
            view.render(view.score, this.score);
        } else{
            view.render(view.result, `Wrong! The correct answer was ${answer}`, {"class": "wrong"});
        }
        view.resetForm();
        this.ask();
    },   
    
  
    gameOver(){
        view.render(view.info,`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
        clearInterval(this.timer);
    }
}

view.start.addEventListener("click", ()=> game.start(quiz), false);
view.response.addEventListener('submit', (event)=> game.check(event), false);
view.hide(view.response);