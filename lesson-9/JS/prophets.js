const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function(response){
        return response.json()    
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const prophets = jsonObject["prophets"];
        for (let i = 0; i < prophets.length; i++ ) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            h2.textContent = prophets[i].name + " " + prophets[i].lastname;
            card.appendChild(h2);
            document.querySelector("div.cards").appendChild(card);
            let h3 = document.createElement("h3");
            h3.textContent = "Date of Birth: " + prophets[i].birthdate;
            card.appendChild(h3)
            let h4 = document.createElement("h4")
            h4.textContent = "Place of Birth" + prophets[i].birthplace;
            card.appendChild(h4);
            let img = document.createElement("img");
            img.setAttribute("src", prophets[i].imageurl);
            img.setAttribute("alt", prophets[i].name + " " + prophets[i].lastname + "-" + prophets[i].order)
            card.appendChild(img)
            };   
         
    })
