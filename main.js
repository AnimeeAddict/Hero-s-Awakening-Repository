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


//Advise from using innerHTML due to XSS attacks but for this project it should be fine
function uiButton(uiText, decision) {
    var button = document.createElement('button'); //creates a button
    button.innerHTML = uiText;
    uiButtons.appendChild(button);

    button.addEventListener("click", function () { //When the button is clicked, this action will occur
        decisions.push(choice);
        developStory();
    })
}

function developStory(text) {
    let updatePage = decisions[decisions.length - 1];
    interactArea.innerHTML = ''; //play area will empty
    uiButtons.innerHTML = ''; //The button areas will empty and be updated
    
    for (let choice of decisions) { //This line of code is referenced by Andrew Burca and Zachary Her
        storyPush(story[choice].text) //When a button is clicked, screen will update
    }
    for (let choice of story[updatePage].options) { //creates variables utilized for the choices and user interactions
        uiButton(choice[1], choice[0]); //button creations
    }
}

function storyPush(text) {
    interactArea.innerHTML = text;
}

startOverBtn.addEventListener('click', function() { //screen will be reloaded
    location.reload();
});

startOverBtn.style.display = 'none'; //restart button hidden

enterBtn.addEventListener("click", function() {
    developStory(story.prologue.text); //story will run
    startOverBtn.style.display = '';
})


// a1: {
//     text: `I picked up the torch and dagger and proceeded down the stairs to the gate. The gate had no keyhole or any entry latch, but was held only by a rusted and old chain. Using the dagger handle, I budged the chain with a quick strike and it broke, scattering into dust. I opened the gate and proceeded cautiously.`
//     options: [[`miniBossFight1`, `Proceed Cautiously`]]
// }

// a2: {
//     text: `I picked up the dagger and proceeded down the stairs. Seeing that the gate was held by a rusty old chain only, I used the handle of the dagger to budge at it. Swiftly striking the chain scattered it into dust and the gate creaked open. I cautiously continued on.`
//     options: [[`miniBossFight1`, `Proceed Cautiously`]]
// }

// a3: {
//     text: `I picked up the torch and walked down the stairs to the gate. I saw that the gate was held only by a rusted chain which looked deteriorated. Seeing how using the torch would snap the wooden body, I decided to place the flame among the chain. The chain progressively turned molten red, indicating it was weak to break. I took a step back, making certain my foot was well layered or encased in somewhat protection. I gave a strong kick to the chain and it snapped into dust. Seeing that the kick also broke the gate down, I proceeded carefully.`
//     options: [[`miniBossFight1`, `Proceed Cautiously`]]
// }

// a4: {
//     text: `I leave them there and continue walking down the stairs to the gate. The gate had no keyholes or any entry, but an old rusted chain. I rattled the gate a bit to see if it would open. Considering how powder dusted off the chain a bit, I thought to myself that it might be weak enough to snap. Taking a step back, I lunged forward sweeping my leg up into a frontal kick. Thrusting my leg into the gate, the chain rattled a bit. I checked and it definitely cracked a bit. Taking another lean back, I repeated the same kick and succeeded in opening the gate. The gate kicked open and the chain snapped and slithered down to the ground. Taking a few breaths after exhausting myself over the two kicks, I noticed a long cut on my leg. It rather stung and I winced in a slight groan of pain. I had no bandages or such to close the bleeding. Either way, I proceeded down the stairs cautiously.`
//     options: [[`miniBossFight1`, `Proceed Cautiously`]]
// }

// miniBossFight1: {
//     text: `As you proceed down the stairs into a large room the size of a gym, the light from above starts disappearing. The only light shown is emitted from your torch. Surrounded by the darkness, a large circle glows bright white below my feet. The circle was connected by a triangle within the center and had lines that smuggled out. From the opposite of me, a large creature emerged from the rune. It appeared to be a goblin knight with a long sword. The longsword appeared to have a wolf crest on its hilt with silver guards curving out. Its blade began turning purple and the goblin knight lunged at me, angling the blade and aiming towards my lower abdominal on its right side.`
//     options: [[`c1`, `Lunge Forward and Attempt to Counter Attack with the Torch`], [`c2`, `Dodge and Step to the Left`], [`c3`, `Dodge and Step to the Right`], [`c4`, `Lunge Forward and Attempt to Counter Attack with the Dagger`]]
// }

// c1: {
//     text: `I thrust the torch in my hand forward at the Goblin Knight as it strikes me. Feeling the torch press up against my enemy, it winced a slight groan while minorly slashing my side."Argh. . ." I grunted, backing up and readying myself for the next attack. The Goblin Knight seeing how big of a threat I was.`
//     options: [[`d1`, `Bring My Arms Up to Guard`], [`d2`, `Roll Out of the Attack Range`]]
// }
// c2: {
//     text: `I sidestepped towards the left in my attempt to dodge. \n *Shluk!!* \n Realizing what had happened, the blade had sunken through me. \n Game Over...`
// }
// c3: {
//     text: `I sidestepped towards the right in my attempt to dodge. Successfully dodging, the Goblin Knight turned towards me, charging what looked like to be a magic attack. The Goblin Knight's blade glistened instantly in bright purple. Seeing how that couldn't be good, I prepared myself to dodge again or perhaps counterattack. The Goblin Knight instantaneously dashed towards me. Barely reacting to the blade, I. . .`
//     options: [[`d3`, `Block the Attack with the Torch`], [`d4`, `Block the Attack with the Dagger`]]
// }

// c4: {
//     text: `I lunge forward and swing through with my dagger in an attempt to counterattack. \n *Twaang!* \n The Goblin Knight's blade bounces back. I lauch forward a series of three horizontal slashes. \n *Slash slash slash* \n I land all three attacks, severely damaging the Goblin Knight on its left arm. The Goblin Knight lets out a shout, tremendously filling the air with heavy pressure around me. Sweat starts to drip more frequently as I lift my blade up for another attack. The Goblin Knight suddenly slams its foot into the ground, unleashing a disrupting wave of rubble at me. I . . .`
//     options: [[`d1`, `Bring My Arms Up to Guard`], [`d2`, `Roll Out of the Attack Range`]]
// }

// c5: {
//     text: `I sidestepped towards the right in my attempt to dodge. Successfully dodging, the Goblin Knight turned towards me, charging what looked like to be a magic attack. The Goblin Knight's blade glistened instantly in bright purple. Seeing how that couldn't be good, I prepared myself to dodge again or perhaps counterattack. The Goblin Knight instantaneously dashed towards me. Barely reacting to the blade, I. . .`
//     options: [[`d4`, `Block the Attack with the Dagger`]]
// }

// c6: {
//     text: `I sidestepped towards the right in my attempt to dodge. Successfully dodging, the Goblin Knight turned towards me, charging what looked like to be a magic attack. The Goblin Knight's blade glistened instantly in bright purple. Seeing how that couldn't be good, I prepared myself to dodge again or perhaps counterattack. The Goblin Knight instantaneously dashed towards me. Barely reacting to the blade, I. . .`
//     options: [[`d3`, `Block the Attack with the Torch`]]
// }

// c7: {
//     text: `I throw a right hook, twisting my lower abdominal slightly to my right, which barely dodges the blade. The Goblin Knight slightly dazed from my punch, slashes its blade at me from the top.`
//     options: [[`d5`, `Catch the Blade With My Bare Hands`], [`d6`, `Swing Another Right Hook, Followed Up By a Left Jab`]]
// }

// c8: {
//     text: ` I sidestepped towards the right in my attempt to dodge. Successfully dodging, the Goblin Knight turned towards me, charging what looked like to be a magic attack. Its blade began glowing with bright red. The Goblin Knight instantaneously dashed towards me. Barely reacting to the blade, I catch the blade in between my palms. Looking at how my hands clasped the blade, I could feel the heat radiating off it by the skin of my forehead. The blade began searing my hands and my palms burnt. Groaning in pain, 'Agghhh', I couldn't let go otherwise it would mean the end of me. \n I hear a voice instructing me to select a rune for my class but if I try to move my hands then the blade will slice me. Gambling my life on the runes, I try to grab it. \n *Ssshink* \n Game Over`
// }

d1: {
    text: `Guarded against the rubble with my arms. Small cuts are inflicted against my arms and they begin to bruise up after the impact of attack. I gasped deeply to let air from my lungs out as I trembled to fold my arms down. Not letting me catch a break, the Goblin Knight dashes towards me and releases a frontal kick which launches me three meters away from him. I got up with my hand clenching my rib as it was injured by the kick. A voice is suddenly heard addressing me.`
    options: [[`e1`, `Continue`]]
}

d2: {
    text: `Rolled to the side in an attempt to dodge the incoming attack. However, the rubbles speed is too fast and I end up getting hit and blown three meters away from the Goblin Knight. I coughed with difficulty as I lifted myself up to my feet. A voice suddenly speaks out to me as if it were by my side.`
    options: [[`e1`, `Continue`]]
}

d3: {
    text: `Raise up the torch to block the incoming attack from the Goblin Knight. For the mere moment, time slowed down, and I vividly saw as the blade slashed my torch in half and striked me.`
    options: [[`e1`, `Continue`]]
}

d4: {
    text: `Raise up the dagger to block the attack. The Goblin Knight's imbued blade blows me three meters away with a mild explosion. The impact from blocking and the blades hitting must've unleashed its magic. \n Trying to recover back on to my feet, my arm is slightly burnt and stings with pain. My hand starts to shake while still clutching onto my dagger. \n Getting up on my feet, I hear a voice speak out to me.`
    options: [[`e1`, `Continue`]]
}

d5: {
    text: `I throw my hands up and catch the blade but the Goblin Knight overpowers me and slashes me regardless. \n Game Over`
    options: [[`e1`, `Continue`]]
}

d6: {
    text: `I throw a right hook against the blade, knocking it out of the Goblin Knight's hand and following a jab from my left straight to its face. The Goblin Knight falls back a bit, stuttering over its own movements. I pick up the blade, and with one swift slash against the Goblin Knight, the battle is over. Taking heavy breaths, I walk on towards the end of the room where lies a floating orb with a symbol inside of it. A voice faintly reaching out to me states:`
    options: [[`e1`, `Continue`]]
}

e1: {
    text: `"Behind you, strange being. Grasp the levitating orb, absorb its essence and ascend."`
    options: [[`succOrb`, `Absorb the Orb`]]
}
succOrb: {
    text: `I turn around and see the orb. I reach my hands towards it and grasp it. The orb lights up and starts to sink into my body. Immediately, I feel as if natural knowledge, abilities, reflexes. and power reside inside of me. For all I could know, is that I am now a mage.`
    options: [[``, ``], [``, ``]]
}

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



}