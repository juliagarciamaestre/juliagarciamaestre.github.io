
let newTaskButton = document.getElementById('addButton');
let list = document.getElementById('list')
newTaskButton.addEventListener('click', (e) =>{
    let task = document.getElementById('newTask').value;
    let newTask = document.createElement('li');
    let p = document.createElement('p')

    p.textContent = task;

    newTask.appendChild(p);
    list.appendChild(newTask);
    newTask.appendChild(eraseButton())
})

function eraseButton(){
    let btnErase = document.createElement('button');
    btnErase.textContent = 'X';
    btnErase.addEventListener('click', (e) =>{
        var item = document.querySelector('li');
        list.removeChild(item);
        });
    return btnErase
}


//Trying to make a count of the tasks
// let buttonValue = "0";
// increseNumber = () =>{
//     buttonValue = parseInt(document.getElementById('number').innerHTML) + 1;
//     document.getElementById('number').innerHTML = buttonValue
//     console.log(buttonValue);
//     return;
// }
