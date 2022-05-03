
var list = document.getElementById("list")
const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html",
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
