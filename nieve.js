const body = document.querySelector('body')

const crearNieve = () => {


    let copo = document.createElement("i")
    let x = innerWidth * Math.random() - 36;
    let size = (Math.random() * 8) + 2
    let z = Math.round(Math.random())
    let delay = Math.random() * 4
    let anima = (Math.random() * 9) + 4

    copo.style.left = x + "px"
    copo.style.width = size + "px"
    copo.style.height = size + "px"
    copo.style.zIndex = z
    copo.style.animationDelay = delay + "s"
    copo.style.animationDuration = anima + "s"

    body.appendChild(copo)

    setTimeout(() => {
        copo.remove()
    }, anima * 900)

}

setInterval(crearNieve, 100)


const screen = document.getElementById('')
keys = document.getElementById('')