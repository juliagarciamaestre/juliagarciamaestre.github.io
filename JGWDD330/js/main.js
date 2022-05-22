
var list = document.getElementById("list")
const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html",
    },
    {
      label: "Week2 notes",
      url: "week2/index.html",
    },
    {
      label: "Week3 notes",
      url: "week3/week3.html",
    },
    {
      label: "Week4 notes",
      url: "week4/week4.html",
    },
    {
      label: 'Week 5 notes',
      url: 'week5/week5.html',
    }
  ]
for (let i=0; i<links.length; i++){
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = links[i].label;
    a.setAttribute("href", links[i].url);
    li.appendChild(a);
    list.appendChild(li);
    console.log(li);
} 
