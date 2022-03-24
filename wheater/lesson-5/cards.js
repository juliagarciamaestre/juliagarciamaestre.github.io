const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
    .then(function(response){
        return response.json()
    })
    .then(function(jsonObject){
        const towns = jsonObject["towns"];
        for (let i =0; i < towns.length; i++ ) {
            let card = document.createElement("section");
            let h1 = document.createElement("h1");
            h1.textContent = towns[i].name;
            card.appendChild(h1);
            document.querySelector("div.cards").appendChild(card);
            let h4 = document.createElement("h4");
            h4.textContent = towns[i].motto;
            card.appendChild(h4)
            let p = document.createElement("p");
            p.textContent = "Year Founded: " + towns[i].yearFounded;
            card.appendChild(p)
            let p2 = document.createElement("p");
            p2.textContent = "Population: " + towns[i].currentPopulation;
            card.appendChild(p2)
            let p3 = document.createElement("p");
            p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
            card.appendChild(p3)
            let img = document.createElement("img");
            img.setAttribute("src", "lesson-5/" + towns[i].photo);
            img.setAttribute("alt", towns[i].name + " photo");
            card.appendChild(img)
        }
    })