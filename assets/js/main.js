const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice?t=' + Math.random())
    const advice = await response.json()
    
    return advice
}

const setAdvice = () => {
    const adviceId = document.getElementById("advice-number")
    const adviceText = document.getElementById("advice")

    const advice = getAdvice().then((advice) => {
        adviceId.textContent = advice.slip.id
        adviceText.textContent = '"' + advice.slip.advice + '"'  
    })
}

document.addEventListener("DOMContentLoaded", () => {
    setAdvice()
})

document.getElementById("generate-button").addEventListener("click", () => {
    setAdvice()
})