//Chapter 2
alert("Welcome to Quiz Ninja!");
const question = "What is Superman's real name?"
const answer = prompt(question); // Allows the user to type in response (prompt)
alert(`You answered ${answer}`);

//Chapter 3 Quiz
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"],
];

let score = 0
for (const [question, answer] of quiz){
    const response = prompt(question);
    if (response === answer){
        alert("Correct");
        score++;
    } else{
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
