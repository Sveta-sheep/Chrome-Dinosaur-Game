const dinosaur = document.getElementsByClassName("dinosaur")[0];
const cactus = document.getElementsByClassName("cactus")[0];
const points = document.getElementsByTagName("input")[0];

let jumpingDino = false;

document.addEventListener('keyup', event => {
    if (!jumpingDino) {
        if (event.code === 'Space') {
            dinosaur.classList.add("jump");
            jumpingDino = true;
            setTimeout(() => {
                dinosaur.classList.remove("jump");
                jumpingDino = false;
            }, 1000)
        }
    }
})

function islose() {
    if ((cactus.offsetLeft >= -65) && (cactus.offsetLeft <= 23) && (dinosaur.offsetTop >= 535)) {
        return true;
    } 

    return false;
}

setInterval(() => {
    if (islose()) {
        alert("You lose");
        window.location.reload();
    } 
}, 50);

setInterval(() => {
    points.value = +points.value + 1;
}, 500)

