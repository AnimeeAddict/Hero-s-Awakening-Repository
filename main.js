window.onload = function () {//Directly checks to ensure JavaScript loads first before any code is processed. (This part of code is referenced by Choice of Adventure replit) (https://interactive-story-cartwebapp-8.cartwebapp.repl.co/)
    const player = {
        name: "" //The name of the reader/player
    }

    const story = {//story cointainer
        prologue: {
            text: "Under the midnight moon, slumber awaits for me as I return back home to my apartment. I rattle the key to which unlocks my front door out of my pocket and gently insert it into the keyhole. As I opened the door, the lights blinkered on with my AI system welcoming me home.",
            options: [['continue', 'Continue']]
        },

        continue: {
            text: "Mari: 'Welcome home '" + player.name + '. The time is currently 12:12AM, 47 degrees fahrenheit.' 
            + '\n' + "In response, I say, 'Yes yes. Thank you Mari. I am heading to bed now. See you tomorrow.' I closed my eyes, waiting to see what tomororow will bring for me.",
            options: [['narration', 'Continue']]
        },
        
        narration: {
          text: "My name is " + player.name + ", I am a 28 year old game designer. I'm not very much of a sport or athletic person but I am considerably average I think. I received a monthly income of money as a pension due to my absent parents ever since the beginning of elementary school and grew up only with my grandfather who would tell me wild tales about how he lived within another world. I didn't believe him as I thought it was pure madness. Soon after he passed away, I found myself imbued within an empty black hole of nothing my whole high school years. However, I am mainly a shut-in gamer and to pass the time I played video games to escape that emptiness. I really love to play video games, especially mmorpgs. The only time I am happy is when I'm playing games. If only I could enter another world that is easier than this life.",
          options: [['sleep', 'Go to sleep.']]
        },

        sleep: {
          text: "I woke up amidst my slumber after hearing a combination of what seems to be a man and woman's voice. It sounded mildly distorted but I was able to make up the words." + "\n" + "'Here ye enter to the new world. I have summoned you here to test your resolve. Come forth, the way back is shut. But return awaits you if you defeat me.'" + "\n" + "Hearing this passage from the anonymous voice gave me the absolute chills. I questioned whether or not it had been my imagination or not. Nonetheless, I need to find a way back home."
        },

        a1: {
            text: `I picked up the torch and dagger and proceeded down the stairs to the gate. The gate had no keyhole or any entry latch, but was held only by a rusted and old chain. Using the dagger handle, I budged the chain with a quick strike and it broke, scattering into dust. I opened the gate and proceeded cautiously.`,
            options: [[`miniBossFight1`, `Proceed Cautiously`]]
        },

        a2: {
            text: `I picked up the dagger and proceeded down the stairs. Seeing that the gate was held by a rusty old chain only, I used the handle of the dagger to budge at it. Swiftly striking the chain scattered it into dust and the gate creaked open. I cautiously continued on.`,
            options: [[`miniBossFight1`, `Proceed Cautiously`]]
        },

        a3: {
            text: `I picked up the torch and walked down the stairs to the gate. I saw that the gate was held only by a rusted chain which looked deteriorated. Seeing how using the torch would snap the wooden body, I decided to place the flame among the chain. The chain progressively turned molten red, indicating it was weak to break. I took a step back, making certain my foot was well layered or encased in somewhat protection. I gave a strong kick to the chain and it snapped into dust. Seeing that the kick also broke the gate down, I proceeded carefully.`,
            options: [[`miniBossFight1`, `Proceed Cautiously`]]
        },

        a4: {
            text: `I leave them there and continue walking down the stairs to the gate. The gate had no keyholes or any entry, but an old rusted chain. I rattled the gate a bit to see if it would open. Considering how powder dusted off the chain a bit, I thought to myself that it might be weak enough to snap. Taking a step back, I lunged forward sweeping my leg up into a frontal kick. Thrusting my leg into the gate, the chain rattled a bit. I checked and it definitely cracked a bit. Taking another lean back, I repeated the same kick and succeeded in opening the gate. The gate kicked open and the chain snapped and slithered down to the ground. Taking a few breaths after exhausting myself over the two kicks, I noticed a long cut on my leg. It rather stung and I winced in a slight groan of pain. I had no bandages or such to close the bleeding. Either way, I proceeded down the stairs cautiously.`,
            options: [[`miniBossFight1`, `Proceed Cautiously`]]
        },

        miniBossFight1: {
            text: `As you proceed down the stairs into a large room the size of a gym, the light from above starts disappearing. The only light shown is emitted from your torch. Surrounded by the darkness, a large circle glows bright white below my feet. The circle was connected by a triangle within the center and had lines that smuggled out. From the opposite of me, a large creature emerged from the rune. It appeared to be a goblin knight with a long sword. The longsword appeared to have a wolf crest on its hilt with silver guards curving out. Its blade began turning purple and the goblin knight lunged at me, angling the blade and aiming towards my lower abdominal on its right side.`,
            options: [[`c1`, `Lunge Forward and Attempt to Counter Attack with the Torch`], [`c2`, `Dodge and Step to the Left`], [`c3`, `Dodge and Step to the Right`], [`c4`, `Lunge Forward and Attempt to Counter Attack with the Dagger`]]
        },

        c1: {
            text: `I thrust the torch in my hand forward at the Goblin Knight as it strikes me. Feeling the torch press up against my enemy, it winced a slight groan while minorly slashing my side."Argh. . ." I grunted, backing up and readying myself for the next attack. The Goblin Knight seeing how big of a threat I was.`,
            options: [[`d1`, `Bring My Arms Up to Guard`], [`d2`, `Roll Out of the Attack Range`]]
        },
        c2: {
            text: `I sidestepped towards the left in my attempt to dodge. \n *Shluk!!* \n Realizing what had happened, the blade had sunken through me. \n Game Over...`
        },
        c3: {
            text: `I sidestepped towards the right in my attempt to dodge. Successfully dodging, the Goblin Knight turned towards me, charging what looked like to be a magic attack. The Goblin Knight's blade glistened instantly in bright purple. Seeing how that couldn't be good, I prepared myself to dodge again or perhaps counterattack. The Goblin Knight instantaneously dashed towards me. Barely reacting to the blade, I. . .`,
            options: [[`d3`, `Block the Attack with the Torch`], [`d4`, `Block the Attack with the Dagger`]]
        },

        c4: {
            text: `I lunge forward and swing through with my dagger in an attempt to counterattack. \n *Twaang!* \n The Goblin Knight's blade bounces back. I lauch forward a series of three horizontal slashes. \n *Slash slash slash* \n I land all three attacks, severely damaging the Goblin Knight on its left arm. The Goblin Knight lets out a shout, tremendously filling the air with heavy pressure around me. Sweat starts to drip more frequently as I lift my blade up for another attack. The Goblin Knight suddenly slams its foot into the ground, unleashing a disrupting wave of rubble at me. I . . .`,
            options: [[`d1`, `Bring My Arms Up to Guard`], [`d2`, `Roll Out of the Attack Range`]]
        },

        c5: {
            text: `I sidestepped towards the right in my attempt to dodge. Successfully dodging, the Goblin Knight turned towards me, charging what looked like to be a magic attack. The Goblin Knight's blade glistened instantly in bright purple. Seeing how that couldn't be good, I prepared myself to dodge again or perhaps counterattack. The Goblin Knight instantaneously dashed towards me. Barely reacting to the blade, I. . .`,
            options: [[`d4`, `Block the Attack with the Dagger`]]
        },

        c6: {
            text: `I sidestepped towards the right in my attempt to dodge. Successfully dodging, the Goblin Knight turned towards me, charging what looked like to be a magic attack. The Goblin Knight's blade glistened instantly in bright purple. Seeing how that couldn't be good, I prepared myself to dodge again or perhaps counterattack. The Goblin Knight instantaneously dashed towards me. Barely reacting to the blade, I. . .`,
            options: [[`d3`, `Block the Attack with the Torch`]]
        },

        c7: {
            text: `I throw a right hook, twisting my lower abdominal slightly to my right, which barely dodges the blade. The Goblin Knight slightly dazed from my punch, slashes its blade at me from the top.`,
            options: [[`d5`, `Catch the Blade With My Bare Hands`], [`d6`, `Swing Another Right Hook, Followed Up By a Left Jab`]]
        },

        c8: {
            text: ` I sidestepped towards the right in my attempt to dodge. Successfully dodging, the Goblin Knight turned towards me, charging what looked like to be a magic attack. Its blade began glowing with bright red. The Goblin Knight instantaneously dashed towards me. Barely reacting to the blade, I catch the blade in between my palms. Looking at how my hands clasped the blade, I could feel the heat radiating off it by the skin of my forehead. The blade began searing my hands and my palms burnt. Groaning in pain, 'Agghhh', I couldn't let go otherwise it would mean the end of me. \n I hear a voice instructing me to select a rune for my class but if I try to move my hands then the blade will slice me. Gambling my life on the runes, I try to grab it. \n *Ssshink* \n Game Over`
        },

        d1: {
            text: `Guarded against the rubble with my arms. Small cuts are inflicted against my arms and they begin to bruise up after the impact of attack. I gasped deeply to let air from my lungs out as I trembled to fold my arms down. Not letting me catch a break, the Goblin Knight dashes towards me and releases a frontal kick which launches me three meters away from him. I got up with my hand clenching my rib as it was injured by the kick. A voice is suddenly heard addressing me.`,
            options: [[`e1`, `Continue`]]
        },

        d2: {
            text: `Rolled to the side in an attempt to dodge the incoming attack. However, the rubbles speed is too fast and I end up getting hit and blown three meters away from the Goblin Knight. I coughed with difficulty as I lifted myself up to my feet. A voice suddenly speaks out to me as if it were by my side.`,
            options: [[`e1`, `Continue`]]
        },

        d3: {
            text: `Raise up the torch to block the incoming attack from the Goblin Knight. For the mere moment, time slowed down, and I vividly saw as the blade slashed my torch in half and striked me.`,
            options: [[`e1`, `Continue`]]
        },

        d4: {
            text: `Raise up the dagger to block the attack. The Goblin Knight's imbued blade blows me three meters away with a mild explosion. The impact from blocking and the blades hitting must've unleashed its magic. \n Trying to recover back onto my feet, my arm is slightly burnt and stings with pain. My hand starts to shake while still clutching onto my dagger. \n Getting up on my feet, I hear a voice speak out to me.`,
            options: [[`e1`, `Continue`]]
        },

        d5: {
            text: `I throw my hands up and catch the blade but the Goblin Knight overpowers me and slashes me regardless. \n Game Over`,
            options: [[`e1`, `Continue`]]
        },

        d6: {
            text: `I throw a right hook against the blade, knocking it out of the Goblin Knight's hand and following a jab from my left straight to its face. The Goblin Knight falls back a bit, stuttering over its own movements. I pick up the blade, and with one swift slash against the Goblin Knight, the battle is over. Taking heavy breaths, I walk on towards the end of the room where lies a floating orb with a symbol inside of it. A voice faintly reaching out to me states:`,
            options: [[`e2`, `Continue`]]
        },

        e1: {
            text: `"Behind you, strange being. Grasp the levitating orb, absorb its essence and ascend."`,
            options: [[`succOrb1`, `Absorb the Orb`]]
        },

        e2: {
            text: `"Behind you, strange being. Grasp the levitating orb, absorb its essence and ascend."`,
            options: [[`succOrb2`, `Absorb the Orb`]]
        },

        succOrb1: {
            text: `I turn around and see the orb. I reach my hands towards it and grasp it. The orb lights up and starts to sink into my body. Immediately, I feel as if natural knowledge, abilities, reflexes. and power reside inside of me. For all I could know, is that I am now a mage.`,
            options: [[`m1`, `Continue`]]
        },

        succOrb2: {
            text: `I turn around and see the orb. I reach my hands towards it and grasp it. The orb lights up and starts to sink into my body. Immediately, I feel as if natural knowledge, abilities, reflexes. and power reside inside of me. For all I could know, is that I am now a mage.`, options: [[`m2`, `Continue`]]
        },

        m1: {
            text: `I start to feel a slight tingle in my hands. I wanted to test out my new magic abilities. In my head, I imagined a large icicle in my hand. I look down at my right and I see the icicle start forming. However, it stopped when it was around half the size I imagined. Using that icicle, I lunge towards him and successfully defeat him.`,
            options: [[`m2`, `Continue`]]
        },

        m2: {
            text: `After defeating him, I see his body slowly fall down to my feet, vanishing into ashes. I look up and around trying to find an exit. I see a door appear onto one of the walls. The door slid open to the bright outside world. I decide to:`,
            options: [[`m3`, `Go Outside`], [`m4`, `Stay in the Dungeon`]]
        },

        m3: {
            text: `I decided to go outside. Once I'm outside, the only thing I could see is trees and shrubs that look to go on for miles. Suddenly, I hear a voice call out to me but this was a different voice. It was a very calm and soft spoken voice. The female voice said, "Congratulations on defeating the Goblin Knight. Come out of the ruins, take the middle path and find me near a river." <br> After hearing that, I walk a little further into the forest and see that the path separates into three different paths. I decide to take:`,
            options: [[`m5`, `Left Path`], [`m6`, `Middle Path`], [`m7`, `Right Path`]]
        },

        m4: {
            text: `I decided to stay in the dungeon to explore anything else that had appeared. I walk deeper into the room and see another door but it seems like it is closed. I get curious and decide to open the door. Inside I see a table in the middle of the room. I walk closer and see a brewing potion set. Right in front of it, I see a potion with the label saying, "Immortality Potion". Believing it was real, I drank it and immediately felt nauseous. I looked up and everything started blurring out. I close my eyes and feel my body fall to the ground. \n Game Over`
        },

        m5: {
            text: `I decided to take the left path. Along the way, I see a small town. It seems like a little community of people live there. They look pretty friendly and kind. Should I go in and explore the town?`,
            options: [[`m8`, `Go`], [`m9`, `Don't Go`]]
        },

        m6: {
            text: `I decided to take the middle path, bearing in mind what the mysterious voice had told me. Walking down the path, I approached a river and rested upon the ledge of flat grass where the river calmly streamed by. \n "I see you have made it to us properly. . . hero. I'm down here floating by you if you didn't notice." \n I looked downward towards the voice only to see a pink-pray mantis on top of a tortoise. The two companions explain to me, declaring that they will train me to be the fated hero I am to be.`,
            options: [[`m15`, `Accept`], [`m16`, `Decline`], [`m17`, `Attack Them`]]
        },

        m7: {
            text: `I decided to take the right path. I walk down and see a river but it was a darker color then I remember. It looks like more of a swamp. I walk closer towards it and look down at the river. The river looks very murky. I reached out my hand in an attempt to summon the female voice from earlier. However, you see a large shadow appear over you and catch you off guard. You turn and quickly try to summon an element but it's already too late. The monster quickly reaches for you and kills you. \n Game Over`,
        },

        m8: {
            text: `I decided to explore the town and see if there is anything useful there. I look around and see there is a building where they see food. \n *Growl* \n "Mmm I could really go for some food right now." I walk over and see what food they are selling there. After walking closer, I noticed there was freshly baked bread and freshly picked apples.`,
            options: [[`m10`, `Ask for Food`], [`m11`, `Steal Their Food`]]
        },

        m9: {
            text: `I decided to not go into town since appearances can be deceiving. Walking down the path, I approached a river and rested upon the ledge of flat grass where the river calmly streamed by. \n "I see you have made it to us properly. . . hero. I'm down here floating by you if you didn't notice." \n I looked downward towards the voice only to see a pink-pray mantis on top of a tortoise. The two companions explain to me, declaring that they will train me to be the fated hero I am to be.`,
            options: [[`m15`, `Accept`], [`m16`, `Decline`], [`m17`, `Attack Them`]]
        },

        m10: {
            text: `I decided to walk in and ask for food. Opening the door, the owner of the store greets me. I ask politely, "Hello there sir, I don't really have money right now but have gone through quite a battle. Could you spare some food?" \n They replied, "Hmm you do look pretty wounded. I can spare you some scraps from last week that never got sold. They are going to get old pretty soon. Here take some and also take some Sugmas (the currently in this world). You will need some if you want to continue going around the village." \n My face lights up, "Thank you so much! I appreciate that so much. I don't know how I will repay you." I take the food and money and walk towards the exit door. Turning around, I thank him again by lowering my head and walking out.`,
            options: [[`m12`, `Exit the Store`]]
        },

        m11: {
            text: `I notice the window is open and the food is displayed which can be easily swiped. I quickly walk up trying to avoid being seen. Once I take the food I quickly take off and while running away, I see a villager who saw what I did. They shout making everyone notice that I am stealing food. While running as fast as I can, I summon a magical portal to help me escape. In an attempt to escape I try to teleport myself to my room wanting to go home. Unfortunately, a car zooms out and crashes into me. \n Game Over`,
        },

        m12: {
            text: `As I exit, I start eating the bread and continue exploring the rest of the town. There seems to be a clothing store. Looking down I realize after defeating the Goblin Knight, my clothes are completely ruined. Do I walk in or go back to the  path before?`,
            options: [[`m13`, `Go in the Store`], [`m14`, `Go Back to the Path`]]
        },

        m13: {
            text: `I decided to explore the clothes store. I walk and the store owner quickly gets up and greets me. \n "Hello there. Nice to meet you. Are you looking for anything specific?" \n "No no. I just want some new clothes for me to travel in." \n "Ahh yes. I may have the thing you are looking for." She walks in the storage room of the store and walks back out. She hands me a really nice set of clothes. I really like it since it seems to be really comfortable and nicely styled. I decided to take and use the Sugmas I got earlier to pay. I quickly change into them and she thanks me as I exit out the store. I decide this is enough and I can finally walk back to the path. `,
            options: [[`m14`, `Go Back to the Path`]]
        },

        m14: {
            text: `You decide to leave the town and continue down the path. I decided to not go into town since appearances can be deceiving. Walking down the path, I approached a river and rested upon the ledge of flat grass where the river calmly streamed by. \n "I see you have made it to us properly. . . hero. I'm down here floating by you if you didn't notice." \n I looked downward towards the voice only to see a pink-pray mantis on top of a tortoise. The two companions explain to me, declaring that they will train me to be the fated hero I am to be.`,
            options: [[`m15`, `Accept`], [`m16`, `Decline`], [`m17`, `Attack Them`]]
        },

        m15: {
            text: `Hearing the two creatures out, I figured that somehow they may be right. Within my gut, my instinctual thought told me, perhaps I was meant to be the hero they are talking about. Since the opportunity of them arriving here now, it must mean they are meant to empower me. If I can save this world being the 'hero' they proclaim, I can find a way back home. They began honing more details and explaining to me the Divine Goddess that has been eradicating the world they know of. \n "I accept your teachings. Lend me your strength to know how I can defeat this Divine Goddess." I said. \n Responding back to me, both mentors told me, "Pass our test and we will give you our strength. You can use magic right? Then it should be as natural as breathing when you obtain it. The orb that you absorbed, its unknown power flows within you." \n Questioning them, I asked, "What test?" \n In coordination as I said that, a beast of sort emerged from the river, creating a strong impact in the ground, shaking it and distorting the flow of the wind. Slightly grinning at the beast, it transfigured into a dragon as its scales began lighting up, flames radiating off of it and becoming vividly more clear to my eyes. \n 
    "I am Astreus Bolg. As the Divine Goddess seeks, I will destroy you!" \n 
    I put my hood on from my cloak, and prepared to attack.`,
            options: [[`m27`, `Thrust a Spear of Lightning`], [`m26`, `Launch a Bolt of Water`], [`m23`, `Push an Ice Shard`], [`m24`, `Sling a Great Fireball`]]
        },

        m16: {
            text: `After politely hearing the two out, I stated that I did not want to be the hero. I insisted I was only trying to find a way back to my home world. Turning around, I venture out into the woods seeking for unknown answers. By nightfall, I set up a shelter to camp for the night. Around midnight, I hear a giant collapse and thud several miles away from my camp. Dashing out from my shelter using minimal magic to enhance my speed, I come to a stop. In front of my eyes is a woman with glazed and crumbly skin shining as bright as moonlight. She catches sight of me, furiously gesturing a face of rage. \n "How dare you look at me, you inferior creature. I am the Moon Princess, submit to treason!" \n She draws a large greatsword with magic and launches it directly at me.`,
            options: [[`m20`, `Absorb It Using Dark Magic`], [`m21`, `Use a Light Magic Blast`]]
        },

        m17: {
            text: `I ignore their words and uncontrollably spout out a magical attack towards them, destroying the area within a one mile radius of flames. After smoke and debris within the air uncovers itself, you see the tortoise standing taller than you in a human figure, seeing its skin unharden. The pink-pray mantis as well, in a human form emerges from behind the tortoise and slashes air at me, leaving my arms with cuts and lashes. The pray-mantis instantaneously appears in front of me, thrusting her bladed arms at me. In between the timing of the attack, I. . .`,
            options: [[`m18`, `Cast a Protective Barrier`], [`m19`, `Unleash a Flash of Magic`]]
        },

        m18: {
            text: `Casting the protective spell, it surrounds my body, however, it is futile and the prey-mantis's sharp precision pierces through and strikes your heart. \n Game Over`
        },

        m19: {
            text: `I unleashed a full on magical attack, which scales out and flashes from my hands. With no control over my magic, all elements of fire, earth, wind, water, light, shadow, and matter combust in a spiral flash, slowly disintegrating the area along with myself. With one last look as you collapse to the floor feeling your essence turn to dust, the prey-mantis and tortoise vividly crumble to dust. You defeated them. \n Special \n G̸a̴m̴e̷ ̸O̶v̷e̴r̴!̶ ̴T̶h̶e̴ ̴L̷a̷s̴t̶ ̶L̶a̶u̵g̷h̵`
        },


        m20: {
            text: `Enveloping my hand in dark magic, I compress it into a large hollow space, swallowing up the blade. I sense that the blade is made of lunar magic and quickly reconstructs the same greatsword as an equinox blade mixed with dark, light, and lunar magic. Creating the same spell as her was natural as breathing, but it still drained my stamina a bit. I pushed off the ground, dashing towards the woman and performed an overhead swing with two hands, slashing my greatsword down at her. The greatsword slashes down, releasing a burst of magic it's made of. However, she phases through it and extends her arm out at me, grasping my neck and choking me above the ground. I convert the greatsword into a blade and try to pierce her, but she still phases through it. Releasing the magical blade from my hands, I attempt to grab her hand from my neck but she throws me several feet against a tree.`,
            options: [[`m22`, `Try to Stand Up`]]
        },

        m21: {
            text: `Quickly compressing light magic in my palm, I send it forth in a wide pressurized beam against the greatsword, deflecting it out of the way. I imbue my legs in lightning magic, using it to accelerate my speed and leap towards the woman instantly trying to close the gap between us. I charge the lighting back to my arms and send a flurry of punches. She blocks every blow of mine at the same speed and punches me in the abdomen, sending me in the air for some time. Trying to catch my breath, the Moon Princess jumps up and smashes her elbow into my back. I landed on the ground, destroying part of it.`,
            options: [[`m22`, `Try to Stand Up`]]
        },

        m22: {
            text: `I try to stand on my feet, but my head is discombobulated slightly and the strength from my fingers dissipates. With a blink of an eye, I witness a silent slash cut through the Moon Princess and blink again to see myself on the back of a shell. Feeling my consciousness fade, an orb from the Moon Princess streams into my body before I faint. Not knowing how long I have been unconscious, I hear a voice speak out to me. \n "Wake up hero. Your fate is near. Come find me soon and our battle will be marvelous."`,
            options: [[`m23`, `Wake Up`]]
        },

        m23: {
            text: "I awoke to find myself completely bandaged on my head and arm near a campfire. Slightly wincing in fatigue, the injuries seemed to have healed almost instantly as I felt only a little pain. I turned my head and left, noticing a small movement." +
             "\n" + "'I see you have woken up, hero.' The pink-pray mantis spoke to me emerging from the shadows" +
             "\n" + "In response, I said, 'Why do you keep calling me 'hero'? I am just an ordinary person trying to find my way home."
             + "\n" + "A branch swings down and the tortoise slides down near the mantis's side. 'Because it is your destiny! It is your destiny to become the hero of this ill-fated world dreaded by that so called 'Divine Goddess'!" + 
            "\n" + "Following up from what the toirtoise said, the mantis explains, 'The Divine Goddess he is referring to, is the one who brought you here. Perhaps if you seek answers to go back home, she can give it to you. But be wary, she carries a foul omen and only seeks power. Should it come to the point you defeat her, you will return home." + 
            "\n" + "In a quiet moment of silence, I knelt down, recollecting my thoughts and emotions. If this 'Divine Goddess' hadn't brought me here, I wouldn't have had to struggle fighting for my life and finding a way home. Even with all this power I had, I wouldn't have needed to use it had I not been summoned here. I distinctly let out a face of disgust and annoyance. I let out a shout to release my frustration, lashing a lunar fireball towards the open sky which immediately burned the trees and caused it to petrify within fractions of a second. Taking a deep breathe, I resumed speaking. 'Tell me where this Divine Goddess is." 
            + "\n" + "The mantis and tortoise both responded, 'Travel west, you will come to a stretched valley where half the land is decimated and the other half is flourished full of green. We thank you hero. Take this dragon orb as a gift as well. It's name is Astreus Bolg.' In the mere moments after they said this to me, they faded into spirals of magic, flowing around my feet and up to my head, slowly sinking into my body. As it naturally came to me, I gained the mantis's offensive abilities and the tortoise's defensive magic which will aid me. Moving forward, I traveled west quickly, using spatial magic to traverse quickly. I approached the valley and land they described to me. Seeing I was in the right place, I ventured continuously down the straight path the border depicted between life and barren land. Coming across to a desolate and ruined gate with no doors or other side, chunks of it had broken off but remained intact still. Etched into one side of the gate, it read, 'forbidden port. . .'",
            options: [[`m37`, `Search Around`], [`m38`, `Investigate the Gate More Closely`]]
        },

        m24: {
            text: `Immediately casting out a great fireball, I launched it against the dragon's main body. On point of impact the fireball expanded out and bursted. Damage was dealt, but it was very minimal. The dragon began forming a fireball from its mouth and shot it at me.`,
            options: [[`m28`, `Try to Absorb It`], [`m29`, `Cancel It Out`], [`m30`, `Use a Spellblade`]]
        },

        m25: {
            text: `Pushing my palm within the ground, I sent forth a spray of ice towards the dragon. The spray of ice froze everything in its path instantly and upon reaching the dragon, large spiked structures rose up in fast velocity. Ice began flurrying everywhere in mist due to the temperature change from the dragon's heat as well. From within the mist, the dragon let out a roar of flames in anguish.
            `,
            options: [[`m35`, `Spray the Dragon with Ice`]]
        },
        
        m26: {
            text: `Forming a spiraling bolt of water, I increased its pressure 100x times its normal state and hurled it at the dragon's head. Upon impact the dragon's head darted as if it were hit hard and pieces of its scaling cracked off. The dragon jumped into the air, aiming to crush me.
            `,
            options: [[`m34`, `Raise a Giant Body of Water`]]
        },
        
        m27: {
            text: `Generating lightning from my hands, I shaped it into a long spear. The crackling electricity began whipping and lashing out, gaining kinetic energy. Charging up my swing, I thrusted the spear towards the dragon, piercing severely straight through it. Seeing the dragon drop straight to the ground, it must've been severely weak to lightning and the kinetic energy it had amassed through the spear. The dragon began immediately turning into dust, leaving nothing behind but an orb.`,
            options: [[`m36`, `Absorb the Dragon Orb`]]
        },
        
        m28: {
            text: `Using absorption magic, I braced myself, held my arm out and began absorbing the fireball. Analyzing its magic components, I reconstructed its contents according to my magic.`,
            options: [[`m31`, `Cast Partial Dragonslayer Magic`]]
        },
        
        m29: {
            text: `I formulated the same size variation of the fireball and increased its temperature, hoping to exceed hotter than the dragon's flames. The air pressure rose, the heat radiated off the fireballs, and blasted the area away. Using wind magic to fan out the debris, the dragon's own magic and mine seemed to have damaged it severely. The dragon laid restlessly on its side.
            `,
            options: [[`m32`, `Deliever the Finishing Blow`]]
        },
        
        m30: {
            text: `Creating a large spellblade, its immeasurable size was greater than what I visualized. Conducting through the blade was elemental magic. Grasping the handle with my hand, I slashed it downward, splitting the dragon's fireball and it absorbed within my blade. In one swift motion, my body moved on its own and I punctured the blade into the dragon. The dragon's body dissipated into steam, vanishing away and leaving an orb of essence behind.`,
            options: [[`m36`, `Absorb the Dragon Orb`]]
        },

        m31: {
            text: `With flames crackling in the palms of my hand, my hands began to turn into scales, feeling as if my hands itself became gauntlets themselves. The flames felt way more intense than my fire magic, but I felt that I could add elements into the flames. In admiration of this newfound ability, the dragon bellowed a loud roar, extending its head to bite down at me into the ground.`,
            options: [[`m33`, `Unleash a New Attack`]]
        },

        m32: {
            text: `Reaching into the sky, I used rock magic, creating a meteor from space itself and pulled it down through the atmosphere. My face began smiling, I laughed maniacally knowing this attack would destroy everything there could be in this world. I didn't care, I just wanted to win here. With the meteor crashing through the atmosphere, the world caved in, and my vision scattered full of black and white. \n Special \n G̸͈̋a̴̮͠m̶̬̓é̴͜ ̴̠̓ò̷̪v̶͚͋ė̷ͅr̸̽͜!̷̜̃ ̴͖͊I̴̻͆m̸̼̂m̸̥̎ỉ̵͇n̵͎͘e̵͒ň̷̞ť̵̟ ̶̲̄Ḍ̴́o̵͓͊ȏ̸̮m̸̴̲̍̕͜` 
        },

        m33: {
            text: `Adding more controlled magic to the dragonslayer magic, I combined it with dark magic. In short I clasped the magic into a singular point between my two hands, charging it and adding more power into it. The ball point of energy began turning purple with black flames sprouting out wildly. Converting the energy into the most dense singular point, it became smaller and smaller, but became more difficult to hold. As the dragon's jaws widened up and was merely above my head, I pushed my hands up above, directly shooting the dark dragon slayer magic in a beam. The attack was so powerful it blasted me downward, breaking apart the ground and expanding outwards towards the direction of the beam. After my attack had ended, no remains of the dragon had been present. All there had been was a giant hole in the clouds, causing it to rain.
            `,
            options: [[`m36`, `Absorb the Dragon Orb`]]
        },

        m34: {
            text: `Upon watching the dragon soar into the air as it draws closer to crush me, I stomp into the ground. A huge mass of water rises up into a singular point, rotating violently into a drill and straight through the dragon. With the dragon's body still falling down towards me, I cast water transformation, turning myself into a body of water. The dragon lands on me, splashing my body of water around. I cast all parts of water into my original body by the dragon, watching it disintegrate and leave an orb.`,
            options: [[`m36`, `Absorb the Dragon Orb`]]
        },

        m35: {
            text: `With no merciful regard, I sprayed the dragon with continuous ice emitting from my hands. Frost began to build over my body but I felt no pain, no cold, nothing. I focused all my concentration on freezing the dragons' body to an impossible freezing point. As ice rapidly spread over the dragon's scales and skin, its molecular structure broke apart and the dragon broke into a vast amount of frost. Among the pile of frost, an orb was the only thing that remained.`,
            options: [[`m36`, `Absorb the Dragon Orb`]]
        },

        m36: {
            text: `I absorbed the dragon's orb it had left behind. Feeling its power draw inside of me. I felt the dragon's raging power, but it was easy to contain and control. Confirming I had just acquired dragonslayer magic, I felt confident I could beat the Divine Goddess I was destined to fight. I quickly turned around, looking to see if the mantis and tortoise remained where they were. They were gone, physically, but in essence of magic they were still there. \n Two voices aligned, both in unison, reached out to me. "You are ready to be a hero. Astreus Bolg has been defeated.Travel west, you will come to a stretched valley where half the land is decimated and the other half is flourished full of green. Lastly, we thank you hero. As a parting gift, please use our abilities to the fullest and defeat the Divine Goddess." \n Feeling the power of my mentors imbued into my body, I carried their will and strength that they gifted to me. Using lightning magic and traversing west in several hours, I approached the valley where a side of life existed and on the other side it wreaked decomposed land. I ventured continuously down the straight path the border depicted between life and barren land. Coming across to a desolate and ruined gate, a chunk of it had broken off but remained intact still. Etched into one side of the gate, it read: "forbidden port. . ."`,
            options: [[`m37`, `Search Around`], [`m38`, `Investigate the Gate Closely`]]
        },

        m37: {
            text: `Deciding to search around, I used gravitational magic to lift the broken chunks of the gate around. Repiecing the gate together whole, the message completed itself. The full message was deciphered, but was vague. It read: "Devil itself, forbidden portal here. . . turn back." Eager to find more answers, I went back to the gate. As I reached the foothold of the gate, I placed my hand against it. I closed my eyes, concentrated and focused my magic into the gate. My body became cold and numb. Surrounded by darkness vigorously flashing in my consciousness, I trembled. Suddenly, screams and terrors reached out to my ears. My heart filled with fear. In advert, I tried to take my hand off the gate but I couldn't! It must've been an illusion! A trick! A hoax, trying to deceive me. Within the next mere moments, however, I started to see images. A silhouette of a person, standing high and mighty among people worshiping them appeared faintly. Then next, the peoples face were filled with terror. Gestures began with cries and yells on their faces, the person that was being worshiped earlier became vivid. It was a woman. She had ashen white hair, red scarlet armor, and with every step she took, vegetation seemed to grow and decompose instantly. I realized the gate was showing me memories of the past through my magic. My blood began to boil. My body was hot, I was angry yet sorrowful. The woman was the Divine Goddess my mentors had been talking about. I remembered I need to go home too. I wanted to go home. But this Divine Goddess could no longer be allowed to rule this world. It would mean only a world filled of ruination. My hand was finally free and portal threading from the top of the gate to the bottom had formed. I made a decision, deciding where I wanted this gate to take me. I just had a hunch, that wherever I decided to go, it would take me there.`,
            options: [[`m38`, `Investigate the Gate Closely`], [`m39`, `Decide to Return Home`], [`m40`, `Decide to Pay the Divine Goddess a Visit`]]
        },

        m38: {
            text: `Moving closer to the gate, I placed my hand against it. I closed my eyes, concentrated and focused my magic into the gate. My body became cold and numb. Surrounded by darkness vigorously flashing in my consciousness, I trembled. Suddenly, screams and terrors reached out to my ears. My heart filled with fear. In advert, I tried to take my hand off the gate but I couldn't! It must've been an illusion! A trick! A hoax, trying to deceive me. Within the next mere moments, however, I started to see images. A silhouette of a person, standing high and mighty among people worshiping them appeared faintly. The next the peoples face were filled with terror. Gestures began showing cries and yells on their faces, the person that was being worshiped earlier became vivid. It was a woman. She had ashen white hair, red scarlet armor, and with every step she took, vegetation seemed to grow and decompose instantly to a pool of red. I realized the gate was showing me memories of the past through my magic. My blood began to boil. My body was hot, I was angry yet sorrowful. The woman was the Divine Goddess my mentors had been talking about. Her name would be revealed as, Seraph, Seraph the Scarlet Queen. I remembered I need to go home too. I wanted to go home. But this Divine Goddess could no longer be allowed to rule this world. It would mean only a world filled of ruination. My hand was finally free and portal threading from the top of the gate to the bottom had formed. I made a decision, deciding where I wanted this gate to take me. I just had a hunch, that wherever I decided to go, it would take me there.`,
            options: [[`m39`, `Decide to Return Home`], [`m40`, `Decide to Pay the Divine Goddess a Visit`]]
        },

        m39: {
            text: `Deciding how much I wanted to return home at all cost, even considering the cruel Divine Goddess that will rule over this world, I wanted to return back to mine. Upon deciding to return home, my body began to wither into an astral version of myself. My astral projection began uplifting itself into a stream of light, full of shards and bits of my life from the world I was transported to. Within that time, my sight had gone completely white, like a blank empty space. I closed my eyes, seeing all black, and peered them open. At last, I was back home. It was the next morning. The morning light softly entered my room through the blinds. Everything seemed as if it was just a dream. Perhaps, it was just a dream. \n You Found Your Way Home! Victory!`
        },

        m40: {
            text: `Considering my own thoughts and feelings, paying the Divine Goddess a visit would be quite enjoyable. If she is enjoying her reign of rule, I wouldn't mind ruining her godly rule. Deciding to reach where the Divine Goddess was, my body turned into an astral projection. Launching into a burst of light, shards of this new world began recollecting as if it were broken and memories of my own filled into those shards. Within the blink of an eye, I appeared at what seemed to be the Seraphs realm. Standing upon a flat surface of water, its reflection mirrored the sky equally. Stretched into the distance, a castle of white decor covered with gold and silver began closing in my view.`,
            options: [[`m41`, `Obliterate the Castle`], [`m42`, `Walk through the Front Gate`]]
        },

        m41: {
            text: `Forming a katana spellblade created by elemental magic, I turned the blade into dark and gravitational magic. With my blade the shade of black and purple energy reaching the tip of the blade, I held it with two hands. Poistering myself at an angle, blade titled horizontally, I let out a swift slash, throwing an arc of dark energy which hit the castle. As the castle split right in half, it began corroding, turning into rubble and conversing into a ball of energy. The gravitational magic from the slash began rupturing and scattered the rubble everywhere. With the large explosion of the rupture, the sky turned gray, the realm started to rain. Lightning crashed from the skies, the water surface I stood upon all turned into crimson red. The instinctual thought to defend followed my mind. I turned around, switching my blade into a reverse handle and grasped the neck of the blade right as a spear thrusted at me. The spear continuously pushed me back as I kept my guard up. My grip tensed, I held tightly and slashed upward, deflecting the spear into the air and it punctured straight into the ground. \n A voice from the open was pronounced, "I had no doubt you would come for me. . . Hero. I've been expecting you, although, I never accounted that the measure of your power would destroy my home." It was the Seraph. She appeared mysteriously in front of me. She kept a good distance away from me, it would be difficult to close the gap between her and I. I grinned a bit, I decided how I would try to attack her.`,
            options: [[`m42`, `Teleport and Strike`], [`m43`, `Unleash a Ranged Attack`]]
        },

        m42: {
            text: `I flashed myself next to the Seraph, thrusting my blade into her but failed as she blocked my blade in between her spear tip. As expected of a godly being, it couldn't be that easy to defeat her. As for power however, I'm more than capable of beating her!`,
            options: [[`m47`, `Release`]]
        },

        m: {
            text: ``,
            options: [[`m`, ``]]
        },

        m: {
            text: ``,
            options: [[`m`, ``]]
        },

        m: {
            text: ``,
            options: [[`m`, ``]]
        },

        m: {
            text: ``,
            options: [[`m`, ``]]
        },

        m: {
            text: ``,
            options: [[`m`, ``]]
        },

        m: {
            text: ``,
            options: [[`m`, ``]]
        }

    }

    //Variables and function algorithm
    let storyOptions = ['prologue']; //this holds all variables of text and choices

    //UI variables
    var enterBtn = document.getElementById('enterButton'); //Enter button
    var startOverBtn = document.getElementById('startOverButton'); //Restart button
    var chapterHeader = document.getElementById('chapter');
    var overview = document.getElementById('overview');
    var uiArea = document.getElementById('uiArea'); //Area where users will interact
    var uiButtons = document.getElementById('uiButtons'); //Buttons for users


    //Advise from using innerHTML due to XSS attacks but for this project it should be fine
    function uiButton(uiText, decision) {
        var button = document.createElement('button'); //creates a button
        button.innerHTML = uiText;
        uiButtons.appendChild(button);
        button.addEventListener("click", function () { //When the button is clicked, this action will occur
            storyOptions.push(decision);
            developStory();
        });
    }

    function storyPush(text) {
        uiArea.innerHTML = text;
    }

    function developStory(text) {
        let nextPage = storyOptions[storyOptions.length - 1];
        chapterHeader.innerHTML = '';
        overview.innerHTML = ''; //Overview will disappear
        uiArea.innerHTML = ''; //play area will empty
        uiButtons.innerHTML = ''; //The button areas will empty and be updated
        for (let context of storyOptions) { //This line of code is referenced by Andrew Burca and Zachary Her
            storyPush(story[context].text) //When a button is clicked, screen will update
        }
        for (let context of story[nextPage].options) { //creates variables utilized for the choices and user interactions
            uiButton(context[1], context[0]); //button creations
        }
    }

    startOverBtn.addEventListener('click', function () { //screen will be reloaded
        location.reload();
    });

    startOverBtn.style.display = 'none'; //restart button hidden

    enterBtn.addEventListener("click", function () {
        developStory(story.prologue.text); //story will run
        startOverBtn.style.display = '';
    });
}