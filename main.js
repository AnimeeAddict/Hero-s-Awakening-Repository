window.onload = function(){//Directly checks to ensure JavaScript loads first before any code is processed. (This part of code is referenced by Choice of Adventure replit) (https://interactive-story-cartwebapp-8.cartwebapp.repl.co/)
    const player = {
        name: "Name" //The name of the reader/player
    }    
    
    const story = {//story cointainer
        prologue: {
            text: "Under the midnight moon, slumber awaits for me as I return back home to my apartment. \n I rattle the key to which unlocks my front door out of my pocket and gently insert it into the keyhole. As I opened the door, the lights blinkered on with my AI system welcoming me home." ,
        text: "Welcome home " + player.name + ". The time is currently 12:12AM, 47 degrees fahrenheit." ,
        text: "In response, I say, 'Yes, yes. Thank you Mari. I am heading to bed now. See you tomorrow.' I closed laid in bed, filled with exhaustion, and closed my eyes. I wondered what tomorrow would bring to me."
        }
        
}

//Variables and function algorithm
const decisions = ['prologue']; //this holds all variables of text and choices

//UI variables
var enterBtn = document.getElementById('enterButton'); //Enter button
var startOverBtn = document.getElementById('startOverButton'); //Restart button
var interactArea = document.getElementById('uiArea'); //Area where users will interact
var uiButtons = document.getElementById('uiButtons'); //Buttons for users

let header = document.getElementsByClassName('titleCont')[0].cloneNode();
document.getElementsByClassName('main-header-content')[0].appendChild(header);
let line = document.createElement('div'); line.className = 'line';
document.getElementsByClassName('main-header-content')[0].appendChild(line);

let tl = new TimelineMax({repeat:-1});

for (var i; i = 50; i--) {
    tl.to(titleCont, R(0.03, 0.17), {opacity:R(0, 1), y:R(-1.5, 1.5)})
}

tl.to(line, tl.duration()/2), {
    opacity:R(0.1, 1), x:R(0, 300), ease:RoughEase.ease.config({strength:0.5, points:10, randomize:true, taper: "none",}), repeat: 1, yoyo: true}, 0;
}

function R(max,min) {
    return Math.random()*(max-min)+min
};

//Advise from using innerHTML due to XSS attacks but for this project it should be fine
function uiButton(uiText, decision) {
    var button = document.createElement('button'); //creates a button
    button.innerHTML(button);
    uiButtons.innerHTML(button);

    button.addEventListener("click", function () { //When the button is clicked, this action will occur
        decisions.push(choice);
        developStory();
    })
}

function storyPush(text) {
    interactArea.innerHTML = text;
}

function developStory(text) {
    let updatePage = decisions(decisions.length-1);
    interactArea.innerHTML = ''; //play area will empty
    uiButtons.innerHTML = ''; //The button areas will empty and be updated
    for (let choice of decisions) { //This line of code is referenced by Andrew Burca and Zachary Her
        storyPush(story[choice].text) //When a button is clicked, screen will update
    }
    for (let choice of story[pageNow].options) { //creates variables utilized for the choices and user interactions
        uiButton(choice[1], choice[0]); //button creations
    }
}

startOverBtn.addEventListener('click', function() { //screen will be reloaded
    location.reload();
});

startOverBtn.style.display = 'none'; //restart button hidden

a1: {
    text: `I picked up the torch and dagger and proceeded down the stairs to the gate. The gate had no keyhole or any entry latch, but was held only by a rusted and old chain. Using the dagger handle, I budged the chain with a quick strike and it broke, scattering into dust. I opened the gate and proceeded cautiously.`
    options: [[`miniBossFight1`, `Proceed Cautiously`]]
}

miniBossFight1: {
    text: `As you proceed down the stairs into a large room the size of a gym, the light from above starts disappearing. The only light shown is emitted from your torch. Surrounded by the darkness, a large circle glows bright white below my feet. The circle was connected by a triangle within the center and had lines that smuggled out. From the opposite of me, a large creature emerged from the rune. It appeared to be a goblin knight with a long sword. The longsword appeared to have a wolf crest on its hilt with silver guards curving out. Its blade began turning purple and the goblin knight lunged at me, angling the blade and aiming towards my lower abdominal on its right side.`
    options: [[`c1`, `Lunge Forward and Attempt to Counter Attack with the Torch`], [`c2`, `Dodge and Step to the Left`], [`c3`, `Dodge and Step to the Right`], [`c4`, `Lunge Forward and Attempt to Counter Attack with the Dagger`]]
}

c1: {
    text: `I thrust the torch in my hand forward at the Goblin Knight as it strikes me. Feeling the torch press up against my enemy, it winced a slight groan while minorly slashing my side."Argh. . ." I grunted, backing up and readying myself for the next attack. The Goblin Knight seeing how big of a threat I was.`
    options: [[`d1`, `Bring My Arms Up to Guard`], [`d2`, `Roll Out of the Attack Range`]]
}
c2: {
    text: `I sidestepped towards the left in my attempt to dodge. \n ⭑Shluk!!⭑ \n Realizing what had happened, the blade had sunken through me. \n game Over`
}
// : {
//     text:
//     options: [[], []]
// }
// : {
//     text:
//     options: [[], []]
// }
// : {
//     text:
//     options: [[], []]
// }

//username select
// let ;

// function 


enterBtn.addEventListener("click", function() {
    developStory(story.prologue.text); //story will run
    startOverBtn.style.display = '';
})





