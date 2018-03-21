const circle = document.querySelector(".circle");
const info = document.querySelector(".info");

const move = (e) => {
    console.log(e.keyCode)

    info.textContent = `wartość x: ${circle.offsetLeft}, wartość y: ${circle.offsetTop}`

    switch (e.keyCode) {

        case 37:
            circle.style.left = circle.offsetLeft - 4 + "px";
            break;
        case 38:
            circle.style.top = circle.offsetTop - 4 + "px";
            break;
        case 39:
            circle.style.left = circle.offsetLeft + 4 + "px";
            break;
        case 40:
            circle.style.top = circle.offsetTop + 4 + "px";
            break;
        case 32:
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);


            circle.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
            break;
        default:
            info.textContent = "cokolwiek";
            break;

    }
}

window.addEventListener("keydown", move)
