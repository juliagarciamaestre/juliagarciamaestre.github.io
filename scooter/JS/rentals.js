const requestdoc = "https://juliagarciamaestre.github.io/scooter/data/rentals.json" 
fetch(requestdoc)
    .then(function(response){
        return response.json()
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const rentals = jsonObject["rentals"];
        for (let i = 0; i < rentals.length; i++ ) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            h2.textContent = rentals[i].rentaltype;
            card.appendChild(h2);
            document.querySelector("div.cards").appendChild(card);
        };
    })