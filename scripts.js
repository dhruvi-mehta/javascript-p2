//MAGIC 8 BALL RESPONSE SCRIPT

//Create an ARRAY of possible responses. Separate each 'string' with a comma.
var responses = [
    'totally.',
    'YES.',
    'a million %.',
    'for sure.',
    'yep.',
    'you are doing great!',
    'most probably.',
    'most probably yes.',
    'GET EXCITED.',
    'try in a bit',
    'i will tell you later',
    'Are you bored?',
    'I cannot tell you.',
    'I am busy right now, come back later.',
    'Dont even bother trying.',
    'just no.',
    'sorry better luck next time.',
    'are you really asking me this right now.',
    ':(',
    'highly unlikely.'
]

//Create a variable that randomly selects a positive whole between 0 and the number of total responses.
var randomResponse = responses[Math.floor(Math.random() * responses.length)];

//Select the HTML element with the id '#display' and replace its contents with the result of the randomResponse equation
document.querySelector('#display').innerHTML = randomResponse;