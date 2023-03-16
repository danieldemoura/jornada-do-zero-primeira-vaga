const cards = document.querySelectorAll(".card")
const body = document.querySelector("body")
const figure = document.querySelectorAll(".figure-image")

cards.forEach((card, index) => {
    let number = index
    number++
    card.addEventListener("mouseover", () => {
        figure[index].classList.toggle("animation")
        body.style.backgroundImage = `url(./assets/background/background_0${number}.png)`
    })
})

