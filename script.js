// variables
const body = document.querySelector('body')
const check = document.querySelector('.btn--check')
const again = document.querySelector('.btn--again')
const labelScore = document.querySelector('.label--score-number')
const labelHighscore = document.querySelector('.label--highscore-number')
const guessTitle = document.querySelector('.guess--title')
let guess = document.querySelector('.guess')
let number = document.querySelector('.number')
let secretNumber = Math.trunc(Math.random() * 20) + 1

//functions for textContent
let guessTitleTxt = (txt) => {
  guessTitle.textContent = txt
}
let numberTxt = (txt) => {
  number.textContent = txt
}

let labelScoreTxt = (txt) => {
  labelScore.textContent = txt
}

//starting conditions
guess.value = ''
numberTxt('?')

let score = 20
let highscore = 0

//handle check
check.addEventListener('click', (e) => {
  guess = Number(document.querySelector('.guess').value)
  if (!guess) {
    guessTitleTxt('⛔️ Please Choose a number')
  } else if (guess === secretNumber) {
    guessTitleTxt("That's correct!")
    numberTxt('Win!')
    number.classList.add('number--win')
    body.style.backgroundColor = '#60b347'
    if (score > highscore) {
      highscore = score
      labelHighscore.textContent = highscore
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guessTitleTxt(guess > secretNumber ? 'too high' : 'too low')
      score--
      labelScoreTxt(score)
    } else {
      guessTitleTxt('Please try again')
      labelScoreTxt(0)
      number.style.backgroundColor = '#fff'
    }
  }
})

again.addEventListener('click', (e) => {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1
  guess = document.querySelector('.guess')

  guess.value = ''
  numberTxt('?')
  labelScoreTxt(score)
  guessTitleTxt('Start Guessing...')
  number.classList.remove('number--win')
  body.style.backgroundColor = 'var(--very-dark-gray)'
})
