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
            document.querySelector("div.rentals").appendChild(card);
            
            let h4 = document.createElement("h4");
            h4.textContent = "Max person: " + rentals[i].maxpersons;
            card.appendChild(h4);

            let h3 = document.createElement("h3");
            h3.textContent = "Reservation: "
            card.appendChild(h3);

            let p = document.createElement("p");
            p.textContent = "Half Day: " + rentals[i].reservationhalfday;
            card.appendChild(p);

            let p2 = document.createElement("p");
            p2.textContent = "Full Day: " + rentals[i].reservationfullday;
            card.appendChild(p2);

            let h3w = document.createElement("h3");
            h3w.textContent = "Walk-in: "
            card.appendChild(h3w);

            let p3 = document.createElement("p");
            p3.textContent = "Half Day: " + rentals[i].walkinhalfday;
            card.appendChild(p3);

            let p4 = document.createElement("p");
            p4.textContent = "Full Day: " + rentals[i].walkinfullday;
            card.appendChild(p4);

            let img = document.createElement("img");
            img.setAttribute("src", rentals[i].imageurl);
            img.setAttribute("alt", rentals[i].rentaltype + " image");
            card.appendChild(img);
        };
    })