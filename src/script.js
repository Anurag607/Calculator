document.addEventListener("DOMContentLoaded", () => {
    var screen = document.querySelector(".screen");
    var numkey = document.querySelectorAll(".numkey");
    var binary_operator = document.querySelectorAll(".binarykey");
    var result = document.querySelector("#result");
    var del = document.querySelector("#del");
    var clear = document.querySelector("#clear");
    var pie = document.querySelector("#pi");
    var percentage = document.querySelector("#percentage");
    var lastdigit;

    clear.onclick = () => {
        screen.innerHTML = "";
        screen.dataset.state = "begin";
    }

    del.onclick = () => {
        screen.innerHTML = screen.innerHTML.slice(0,screen.innerHTML.length-1);
    }

    numkey.forEach((numkey) => {
        numkey.onclick = function() {
            lastdigit = screen.innerHTML[screen.innerHTML.length - 1];
            if (screen.dataset.state === "cont") {
                screen.innerHTML = this.innerHTML;
                screen.dataset.state = "begin";
            }
            else screen.innerHTML += this.innerHTML;
        }
    })

    binary_operator.forEach((binary_operator) => {
        binary_operator.onclick = function() {
            screen.dataset.state = "begin";
            lastdigit = screen.innerHTML[screen.innerHTML.length - 1];
            if (isNaN(parseInt(lastdigit))) {
                alert('Invalid Entry');
            }
            else screen.innerHTML += this.innerHTML;
        }
    })

    pie.onclick = function() {
        lastdigit = screen.innerHTML[screen.innerHTML.length - 1];
        if (!(isNaN(parseInt(lastdigit)))) screen.innerHTML += '*' + Math.PI;
        else screen.innerHTML += Math.PI;
    }

    percentage.onclick = function() {
        lastdigit = screen.innerHTML[screen.innerHTML.length - 1];
        if (!(isNaN(parseInt(lastdigit)))) screen.innerHTML += '*0.01';
        else screen.innerHTML += '0.01';
    }

    result.onclick = () => {
        screen.innerHTML = eval(screen.innerHTML).toFixed(5);
        screen.dataset.state = "cont";
    }
});