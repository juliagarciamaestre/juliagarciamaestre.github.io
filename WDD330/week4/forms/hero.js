const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

//NOT WORKING
function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value

    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    return hero;
}

