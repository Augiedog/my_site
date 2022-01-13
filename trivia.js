let userName = window.prompt('Please enter your name:')
let userScore = 0;

for(let i = 0; i < questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        userScore = userScore + 5
    }
}

window.alert('Your score is: '+userScore)

let serializedGames = localStorage.getItem('trivia')

let games;
if(serializedGames === null){
    games = [] 
} else {
    games = JSON.parse(serializedGames)
}

let game = {
    user: userName,
    score: userScore
}

games.push(game)

serializedGames = JSON.stringify(games)
localStorage.setItem('trivia', serializedGames)

let highestScoringGame = games[0]
for(let i = 0; i < games.length; i++){
    let game = games[i]
    if(game.score > highestScoringGame.score){
        highestScoringGame = game
    }
}
window.alert('The high score is: '+highestScoringGame.score)
// Play again button
document.getElementById('playAgain').addEventListener('click', function() {
    location.reload()
})
// Go Back Button
document.getElementById('goBack').addEventListener('click', function() {
    window.location='./index.html'
    window.alert("Taking you Back!!")
  })