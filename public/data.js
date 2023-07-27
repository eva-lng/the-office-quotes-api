const quotes = [
    {
        "id": 1,
        "character": "Michael Scott",
        "season": 2,
        "episodeNumber": 2,
        "episodeName": "The Fight",
        "text": "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."
    },
    {
        "id": 2,
        "character": "Michael Scott",
        "season": 2,
        "episodeNumber": 3,
        "episodeName": "Office Olympics",
        "text": "I'm an early bird and a night owl. So I'm wise and have worms."
    },
    {
        "id": 3,
        "character": "Michael Scott",
        "season": 3,
        "episodeNumber": 12,
        "episodeName": "Traveling Salesmen",
        "text": "You know what they say, fool me once, strike one, but fool me twice… strike three."
    },
    {
        "id": 4,
        "character": "Michael Scott",
        "season": 4,
        "episodeNumber": 4,
        "episodeName": "Dunder Mifflin Infinity",        
        "text": "People will never be replaced by machines. In the end, life and business are about human connections. And computers are about trying to murder you in a lake. And to me the choice is easy."
    },
    {
        "id": 5,
        "character": "Michael Scott",
        "season": 1,
        "episodeNumber": 2,
        "episodeName": "Diversity Day",
        "text": "Abraham Lincoln once said that, 'If you're a racist, I will attack you with the North.' And those are the principles that I carry with me in the workplace."
    },
    {
        "id": 6,
        "character": "Michael Scott",
        "season": 5,
        "episodeNumber": 23,
        "episodeName": "Broke",
        "text": "Well, well, well, how the turntables."
    },
    {
        "id": 7,
        "character": "Michael Scott",
        "season": 2,
        "episodeNumber": 12,
        "episodeName": "The injury",
        "text": "I enjoy having breakfast in bed. I like waking up to the smell of bacon, sue me. And since I don't have a butler, I do it myself. So, most nights before I go to bed, I will lay six strips of bacon out on my George Foreman Grill. Then I go to sleep. When I wake up, I plug in the grill, I go back to sleep again. Then I wake up to the smell of crackling bacon."
    },
    {
        "id": 8,
        "character": "Michael Scott",
        "season": 5,
        "episodeNumber": 3,
        "episodeName": "Business Ethics",
        "text": "When I discovered YouTube, I didn't work for five days."
    },
    {
        "id": 9,
        "character": "Michael Scott",
        "season": 5,
        "episodeNumber": 11,
        "episodeName": "The Duel",
        "text": "My philosophy is, basically this. And this is something that I live by. And I always have. And I always will. Don't, ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who you are with, or, or where you are going, or, or where you've been. Ever. For any reason. Whatsoever."
    },
    {
        "id": 10,
        "character": "Michael Scott",
        "season": 3,
        "episodeNumber": 20,
        "episodeName": "Safety Training",
        "text": "Dwight, you ignorant slut!"
    },
    {
        "id": 11,
        "character": "Michael Scott",
        "season": 5,
        "episodeNumber": 11,
        "episodeName": "Moroccan Christmas",
        "text": "As it turns out, you can't just check someone into rehab against their will. They have to do it voluntarily. They have to hit rock bottom. So, I think I know what I need to do at this point. I need to find ways to push Meredith to the bottom. Um. I think I can do it. I did it with Jan."
    },
    {
        "id": 12,
        "character": "Michael Scott",
        "season": 3,
        "episodeNumber": 19,
        "episodeName": "The Negotiation",
        "text": "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information."
    },
    {
        "id": 13,
        "character": "Michael Scott",
        "season": 4,
        "episodeNumber": 1,
        "episodeName": "Fun Run",
        "text": "Guess what, I have flaws. What are they? Oh, I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me."
    },
    {
        "id": 14,
        "character": "Michael Scott",
        "season": 2,
        "episodeNumber": 21,
        "episodeName": "Boys and Girls",
        "text": "Now, you may look around and see two groups here. White-collar, blue-collar. But I don't see it that way. And you know why not? Because I am collar-blind."
    },
    {
        "id": 15,
        "character": "Michael Scott",
        "season": 3,
        "episodeNumber": 9,
        "episodeName": "The Convict",
        "text": "The worst thing about prison was the dementors."
    },
    {
        "id": 16,
        "character": "Michael Scott",
        "season": 3,
        "episodeNumber": 10,
        "episodeName": "A Benihana Christmas",
        "text": "Bros before hoes. Why? Because your bros are always there for you. They got your back after your ho rips your heart out for no good reason. And you were nothing but great to your ho, and you told her that she was the only ho for you. And that she was better than all the other hoes in the world. And then suddenly... she's not yo' ho no mo'."
    },
    {
        "id": 17,
        "character": "Dwight Schrute",
        "season": 3,
        "episodeNumber": 20,
        "episodeName": "Safety Training",
        "text": "Yes. I have decided to shun Andy Bernard for the next three years. Which I'm looking forward to. It's an Amish technique. It's like slapping someone with silence. I was shunned from the age of four until my sixth birthday for not saving the excess oil from a can of tuna."
    },
    {
        "id": 18,
        "character": "Dwight Schrute",
        "season": 6,
        "episodeNumber": 19,
        "episodeName": "New Leads",
        "text": "You couldn't handle my undivided attention."
    },
    {
        "id": 19,
        "character": "Dwight Schrute",
        "season": 5,
        "episodeNumber": 9,
        "episodeName": "Frame Toby",
        "text": "What is my perfect crime? I break into Tiffany's at midnight. Do I go for the vault? No, I go for the chandelier. It's priceless. As I'm taking it down, a woman catches me. She tells me to stop. It's her father's business. She's Tiffany. I say no. We make love all night. In the morning, the cops come, and I escape in one of their uniforms. I tell her to meet me in Mexico, but I go to Canada. I don't trust her. Besides, I like the cold. Thirty years later, I get a postcard. I have a son, and he's the chief of police. This is where the story gets interesting. I tell Tiffany to meet me in Paris by the Trocadero. She's been waiting for me all these years. She's never taken another lover. I don't care. I don't show up. I go to Berlin. That's where I stashed the chandelier."
    },
    {
        "id": 20,
        "character": "Dwight Schrute",
        "season": 7,
        "episodeNumber": 11,
        "episodeName": "Classy Christmas",
        "text": "In the end, the greatest snowball isn't a snowball at all. It's fear. Merry Christmas."
    },
    {
        "id": 21,
        "character": "Dwight Schrute",
        "season": 2,
        "episodeNumber": 12,
        "episodeName": "The Injury",
        "text": "I am faster than 80 percent of all snakes."
    },
    {
        "id": 22,
        "character": "Dwight Schrute",
        "season": 3,
        "episodeNumber": 4,
        "episodeName": "Grief Counseling",
        "text": "When my mother was pregnant with me, they did an ultrasound and found she was having twins. When they did another ultrasound a few weeks later, they discovered that I had absorbed the other fetus. Do I regret this? No, I believe his tissue has made me stronger. I now have the strength of a grown man and a little baby."
    },
    {
        "id": 23,
        "character": "Dwight Schrute",
        "season": 5,
        "episodeNumber": 12,
        "episodeName": "The Duel",
        "text": "There are three things you never turn your back on: bears, men you have wronged, and a dominant male turkey during mating season."
    },
    {
        "id": 24,
        "character": "Dwight Schrute",
        "season": 3,
        "episodeNumber": 8,
        "episodeName": "The Merger",
        "text": "I am fast. To give you a reference point, I am somewhere between a snake and a mongoose… and a panther."
    },
    {
        "id": 25,
        "character": "Dwight Schrute",
        "season": 8,
        "episodeNumber": 19,
        "episodeName": "Get the Girl",
        "text": "Those who can't farm, farm celery."
    },
    {
        "id": 26,
        "character": "Dwight Schrute",
        "season": 8,
        "episodeNumber": 19,
        "episodeName": "Get the Girl",
        "text": "Those who can't farm, farm celery."
    },
    {
        "id": 27,
        "character": "Dwight Schrute",
        "season": 1,
        "episodeNumber": 3,
        "episodeName": "Health Care",
        "text": "In the wild, there is no healthcare. Healthcare is oh, I broke my leg! A lion comes and eats you, you're dead. Well, I'm not dead, I'm the lion. You're dead!"
    },
    {
        "id": 28,
        "character": "Dwight Schrute",
        "season": 3,
        "episodeNumber": 21,
        "episodeName": "Product Recall",
        "text": "Identity theft is not a joke, Jim! Millions of families suffer every year!"
    },
    {
        "id": 29,
        "character": "Dwight Schrute",
        "season": 2,
        "episodeNumber": 21,
        "episodeName": "Conflict Resolution",
        "text": "Security in this office park is a joke. Last year I came to work with my spud-gun in a duffel bag. I sat at my desk all day with a rifle that shoots potatoes at 60 pounds per square inch. Can you imagine if I was deranged?"
    },
    {
        "id": 30,
        "character": "Dwight Schrute",
        "season": 2,
        "episodeNumber": 6,
        "episodeName": "The Fight",
        "text": "I come from a long line of fighters. My maternal grandfather was the toughest guy I ever knew. World War II veteran killed twenty men and spent the rest of the war in an allied prison camp. My father battled blood pressure and obesity all his life. Different kind of fight."
    },
    {
        "id": 31,
        "character": "Dwight Schrute",
        "season": 3,
        "episodeNumber": 19,
        "episodeName": "The Negotiation",
        "text": "No, don't call me a hero. Do you know who the real heroes are? The guys who wake up every morning and go into their normal jobs and get a distress call from the Commissioner and take off their glasses and change into capes and fly around fighting crime. Those are the real heroes."
    },
    {
        "id": 32,
        "character": "Dwight Schrute",
        "season": 4,
        "episodeNumber": 1,
        "episodeName": "Fun Run",
        "text": "As a farmer, I know that when an animal is sick, sometimes the right thing to do is put it out of its misery. With the electricity we are using to keep Meredith alive, we could power a small fan for two days. You tell me what's unethical."
    },
    {
        "id": 34,
        "character": "Dwight Schrute",
        "season": 3,
        "episodeNumber": 23,
        "episodeName": "The Job",
        "text": "Once I'm officially Regional Manager, my first order of business will be to demote Jim Halpert. So, I will need a new number two. My ideal choice? Jack Bauer. But he is unavailable. Fictional. And overqualified."
    },
    {
        "id": 35,
        "character": "Dwight Schrute",
        "season": 5,
        "episodeNumber": 26,
        "episodeName": "Casual Friday",
        "text": "When held over heat, the invisible ink will reveal that everyone should meet at the warehouse immediately. Do not ask me where I got the invisible ink... Urine. It was urine."
    },
    {
        "id": 36,
        "character": "Dwight Schrute",
        "season": 5,
        "episodeNumber": 14,
        "episodeName": "Stress Relief",
        "text": "Today, smoking is going to save lives."
    },
    {
        "id": 37,
        "character": "Dwight Schrute",
        "season": 3,
        "episodeNumber": 21,
        "episodeName": "Product Recall",
        "text": "I grew up on a farm. I have seen animals having sex in every position imaginable. Goat on chicken. Chicken on goat. Couple of chickens doing a goat, couple of pigs watching."
    },
    {
        "id": 38,
        "character": "Dwight Schrute",
        "season": 5,
        "episodeNumber": 4,
        "episodeName": "Baby Shower",
        "text": "Babies are one of my many areas of expertise. Growing up, I performed my own circumcision."
    },
    {
        "id": 39,
        "character": "Dwight Schrute",
        "season": 6,
        "episodeNumber": 8,
        "episodeName": "Koi Pond",
        "text": "Jim is my enemy. But it turns out that Jim is also his own worst enemy. And the enemy of my enemy is my friend. So, Jim is actually my friend. But because he is his own worst enemy, the enemy of my friend is my enemy so, actually, Jim is my enemy."
    },
    {
        "id": 40,
        "character": "Dwight Schrute",
        "season": 5,
        "episodeNumber": 4,
        "episodeName": "Baby Shower",
        "text": "Jan had the baby and Michael wasn't there to mark it. So the baby could be anybody's. Except Michael's."
    },
    {
        "id": 41,
        "character": "Angela Martin",
        "season": 5,
        "episodeNumber": 1,
        "episodeName": "Weight Loss",
        "text": "I have a nice comforter and several cozy pillows. I usually read a chapter of a book, and it's lights out by 8:30. That's how I sleep at night!"
    },
    {
        "id": 42,
        "character": "Angela Martin",
        "season": 4,
        "episodeNumber": 10,
        "episodeName": "Branch Wars",
        "text": "The Finer Things Club was not sanctioned by the Party Planning Committee. Renegade clubs are dangerous. I squashed the Weight Loss Buddy Support Group. They didn't need to gather. It was just gross."
    },
    {
        "id": 43,
        "character": "Angela Martin",
        "season": 5,
        "episodeNumber": 15,
        "episodeName": "Stress Relief",
        "text": "I normally don't enjoy making people laugh."
    },
    {
        "id": 44,
        "character": "Angela Martin",
        "season": 3,
        "episodeNumber": 2,
        "episodeName": "The Convention",
        "text": "In the Martin family, we like to say, 'Looks like someone took the slow train from Philly.' That's code for 'check out the slut'."
    },
    {
        "id": 45,
        "character": "Angela Martin",
        "season": 5,
        "episodeNumber": 14,
        "episodeName": "Stress Relief",
        "text": "I only weigh 82 pounds!"
    },
    {
        "id": 46,
        "character": "Angela Martin",
        "season": 9,
        "episodeNumber": 1,
        "episodeName": "New Guys",
        "text": "If you pray enough you can change yourself into a cat person."
    },
    {
        "id": 47,
        "character": "Angela Martin",
        "season": 3,
        "episodeNumber": 22,
        "episodeName": "Women's Appreciation",
        "text": "Sometimes the clothes at the GapKids are just too flashy. So, I am forced to go to American Girl store and order clothes for large colonial dolls."
    },
    {
        "id": 49,
        "character": "Angela Martin",
        "season": 8,
        "episodeNumber": 2,
        "episodeName": "The Incentive",
        "text": "A coworker of mine is drinking caffeine while pregnant and I don't know if I should call social services about it."
    },
    {
        "id": 50,
        "character": "Angela Martin",
        "season": 3,
        "episodeNumber": 10,
        "episodeName": "A Benihana Christmas",
        "text": "I don't back down. My sister and I used to be best friends. And we haven't spoken in sixteen years, over some disagreement I don't even remember. So, yeah, I'm pretty good."
    },
    {
        "id": 51,
        "character": "Angela Martin",
        "season": 4,
        "episodeNumber": 9,
        "episodeName": "Local Ad",
        "text": "I find the mystery genre disgusting. I hate being titillated."
    },
    {
        "id": 52,
        "character": "Angela Martin",
        "season": 1,
        "episodeNumber": 4,
        "episodeName": "The Alliance",
        "text": "I think green is kind of whoreish."
    },
    {
        "id": 53,
        "character": "Angela Martin",
        "season": 2,
        "episodeNumber": 8,
        "episodeName": "Performance Review",
        "text": "“I actually look forward to performance reviews. I did the youth beauty pageant circuit. And I enjoyed that quite a bit. I really enjoy being judged. I believe I hold up very well to even severe scrutiny."
    },
    {
        "id": 54,
        "character": "Angela Martin",
        "season": 2,
        "episodeNumber": 9,
        "episodeName": "Email Surveillance",
        "text": "I got sap on me."
    },
    {
        "id": 55,
        "character": "Angela Martin",
        "season": 2,
        "episodeNumber": 3,
        "episodeName": "Office Olympics",
        "text": "I do play games. I sing and I dangle things in front of my cats. I play lots of games. Just not at work."
    },
    {
        "id": 56,
        "character": "Angela Martin",
        "season": 2,
        "episodeNumber": 15,
        "episodeName": "Boys and Girls",
        "text": "I'm not gaining anything from this seminar. I'm a professional woman. The head of accounting. I'm in the healthiest relationship of my life. I just think it's insulting that Jan thinks we need this. And, apparently, judging from her outfit, Jan aspires to be a whore."
    },
    {
        "id": 57,
        "character": "Angela Martin",
        "season": 2,
        "episodeNumber": 21,
        "episodeName": "Conflict Resolution",
        "text": "I got this poster for Christmas, and I feel I want to see it everyday. It makes me feel like the babies are the true artists, and God has a really cute sense of humor."
    },
    {
        "id": 58,
        "character": "Angela Martin",
        "season": 3,
        "episodeNumber": 22,
        "episodeName": "Women's Appreciation",
        "text": "Malls are just awful and humiliating. They're just store after store of these horrible salespeople making a big fuss out of an adult shopping in a junior's section. There are petite adults who are sort of… smaller who need to wear… maybe a kids' size 10."
    },
    {
        "id": 59,
        "character": "Angela Martin",
        "season": 2,
        "episodeNumber": 22,
        "episodeName": "Casino Night",
        "text": "We are giving money that has been gambled. Why don't we just deal drugs or prostitute ourselves, and donate that money to charity?"
    },
    {
        "id": 60,
        "character": "Angela Martin",
        "season": 3,
        "episodeNumber": 10,
        "episodeName": "A Benihana Christmas",
        "text": "No, orange is whorish."
    },
    {
        "id": 61,
        "character": "Angela Martin",
        "season": 5,
        "episodeNumber": 7,
        "episodeName": "Customer Survey",
        "text": "I don't want to be married in a tent like a hobo."
    },
    {
        "id": 62,
        "character": "Angela Martin",
        "season": 4,
        "episodeNumber": 13,
        "episodeName": "Dinner Party",
        "text": "The thought of popping one of your beets into my mouth makes me want to vomit."
    },
    {
        "id": 63,
        "character": "Angela Martin",
        "season": 5,
        "episodeNumber": 20,
        "episodeName": "New Boss",
        "text": "Charles and Kelly? Absolutely not. He is a sophisticated man. He does not need to go dumpster-diving for companionship, OK?"
    },
    {
        "id": 16,
        "character": "Pam Beesly",
        "season": 4,
        "episodeNumber": 3,
        "episodeName": "Launch Party",
        "text": "Dwight mercy killed Angela's cat. It's very complicated. It's caused a lot of unpleasantness between Dwight and Angela. Who are both already prone to unpleasantness."
    },
    {
        "id": 16,
        "character": "Pam Beesly",
        "season": 5,
        "episodeNumber": 18,
        "episodeName": "Blood Drive",
        "text": "They have new phone systems now that can ring directly to a salesman, or someone presses 'star' and they go to accounting. Basically 95% of my job. But I'd like to see someone put out candy for everyone… Vending machine."
    },
    {
        "id": 16,
        "character": "Pam Beesly",
        "season": 5,
        "episodeNumber": 15,
        "episodeName": "Stress Relief",
        "text": "Once every hour someone is involved in an internet scam. That man is Michael Scott."
    },
    {
        "id": 16,
        "character": "Pam Beesly",
        "season": 2,
        "episodeNumber": 1,
        "episodeName": "The Dundies",
        "text": "You know what they say about a car wreck, where it's so awful you can't look away? The Dundies are like a car wreck that you want to look away from but you have to stare at it because your boss is making you."
    },
    {
        "id": 16,
        "character": "Pam Beesly",
        "season":4,
        "episodeNumber": 1,
        "episodeName": "Fun Run",
        "text": "They say if you're nervous around someone, picture them naked. I do not recommend this strategy. Try picturing them with more clothes on... or a funny coat."
    },
    {
        "id": 16,
        "character": "Pam Beesly",
        "season": 9,
        "episodeNumber": 2,
        "episodeName": "Roy's Wedding",
        "text": "The one thing the chore wheel doesn't have on it, is chores."
    },
    {
        "id": 16,
        "character": "Pam Beesly",
        "season": 2,
        "episodeNumber": 8,
        "episodeName": "Performance Review",
        "text": "Last year, my performance review started with Michael asking me what my hopes and dreams were, and it ended with him telling me he could bench press 190 pounds."
    },
    {
        "id": 16,
        "character": "Pam Beesly",
        "season": 2,
        "episodeNumber": 22,
        "episodeName": "Casino Night",
        "text": "Sometimes I don't put Michael through until he's already said something. I look at it as a practice run for him. He usually does better on the second attempt."
    },
    {
        "id": 16,
        "character": "Pam Beesly",
        "season": 4,
        "episodeNumber": 11,
        "episodeName": "Survivor Man",
        "text": "Michael wasn't invited. Apparently, they already knew everything they needed to know about him."
    },
    {
        "id": 16,
        "character": "Pam Beesly",
        "season": 2,
        "episodeNumber": 1,
        "episodeName": "The Dundies",
        "text": "I feel God in this Chili's tonight."
    },
    {
        "id": 17,
        "character": "Jim Halpert",
        "season": 4,
        "episodeNumber": 1,
        "episodeName": "Fun Run",
        "text": "One day, Michael came in complaining about a speed bump on the highway. I wonder who he ran over then."
    },
    {
        "id": 18,
        "character": "Phyllis Lapin-Smith",
        "season": 3,
        "episodeNumber": 7,
        "episodeName": "The Merger",
        "text": "You have a lot to learn about this town, sweetie."
    },
    {
        "id": 19,
        "character": "Stanley Hudson",
        "season": 2,
        "episodeNumber": 18,
        "episodeName": "Take Your Daughter To Work Day",
        "text": "Boy, have you lost your mind, cause I'll help you find it!!"
    },
    {
        "id": 20,
        "character": "Andy Bernard",
        "season": 3,
        "episodeNumber": 12,
        "episodeName": "Traveling Salesmen",
        "text": "It's like we're touring Willy Wonka's chocolate factory and dropping off one by one. Well, guess what? I'm not falling in a chocolate river."
    },
    {
        "id": 21,
        "character": "Creed Bratton",
        "season": 2,
        "episodeNumber": 22,
        "episodeName": "Casino Night",
        "text": "Oh, I steal things all the time. It's just something I do. I stopped caring a long time ago."
    }
]

module.exports = quotes;