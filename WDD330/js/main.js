//Get the element using the ID and store to a variable call list
var list = document.getElementById("order_list")
//Create an array with the links of the weeks
const links = [
    {
        label: "Week1 notes",
        url: "week1/index.html",
    },
    {
        label: "Week2 notes",
        url: "week2/index.html",
    }
]

//Using a for loop to create elements and create the list of the links.
for (let i=0; i<links.length; i++){
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = links[i].label;
    a.setAttribute("href", links[i].url);
    li.appendChild(a);
    list.appendChild(li);
    console.log(li);
}

