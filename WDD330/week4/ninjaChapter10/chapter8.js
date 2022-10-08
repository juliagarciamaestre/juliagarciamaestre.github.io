
//Store our questions as objects of an array
const quiz = [
    { name: "SuperMan", realName:"Clark Kent"},
    { name:"Wonder Woman", realName:"Diana Prince"},
    { name:"Batman", realName: "Bruce Wayne"},
    { name: "The Hulk",realName: "Bruce Banner" },
    { name: "Spider-man",realName: "Peter Parker" },
    { name: "Cyclops",realName: "Scott Summers" }
];

function random(a,b=1){
    if(b===1){
        [a,b] = [b,a];
    }
    return Math.floor((b-a+1) * Math.random()) + a;
}
function shuffle(array){
    for (let i= array.length; i; i--){
        let j =random(i) -1;
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}

//View Object (document.getElementById())

const view = {
    score: document.querySelector("#score strong"),
    question: document.getElementById("question"), // can be acess like view.question
    info: document.getElementById("info"),
    result: document.getElementById("result"),
    start: document.getElementById("start"),
    response: document.querySelector('#response'), //add response as a property of view object

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
    },
    buttons(array){
        return array.map(value => `<button>${value}</button>`).join('');
    }
};


//namespace the functions 

const game = {
    start(quiz){
        console.log('start() invoked');
        this.score = 0;
        this.questions = [...quiz]; //... is a selector here
        view.setup();
        this.ask();
    },
    
    ask(name){
        console.log('ask() invoked');
        if(this.questions.length> 2){
            shuffle(this.questions);
            this.question = this.questions.pop(); //pop() method to remove each question
            const options = [this.questions[0].realName, this.questions.realName];
            shuffle(options);
            const question = `What is ${this.question.name}'s real name?`;
            view.render(view.question, question);
            view.render(view.response, view.buttons(options));
        }
        else{
            this.gameOver();
        }
       
},

    check(event){
        console.log('check(event) invoked');
        const response = event.target.textContent;
        const answer = this.question.realName; 
        if(response === answer){
            view.render(view.result, "Correct", {"class":"correct"});
            this.score++;
            view.render(view.score, this.score);
        } else{
            view.render(view.result, `Wrong! The correct answer was ${answer}`, {"class": "wrong"});
        }

        this.ask();
    },    
    
    gameOver(){
        console.log('gameOver() invoked');
        view.render(view.info, `Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
        view.teardown();
}
}

view.start.addEventListener("click", ()=> game.start(quiz), false);
view.response.addEventListener('click', (event)=> game.check(event), false);
