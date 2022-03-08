const adviceId = document.querySelector('#adviceID')
const adviceContent = document.querySelector('#adviceContent')
const randomBtn = document.querySelector('#randomBtn')

async function setRandomAdvice() {
    let res = await fetch('https://api.adviceslip.com/advice').then((resp) => resp.json())

    adviceId.innerHTML = `ADVICE #${res.slip.id}`
    adviceContent.innerHTML = res.slip.advice
}

setRandomAdvice()
randomBtn.addEventListener('click', setRandomAdvice)
