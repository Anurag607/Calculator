document.addEventListener("DOMContentLoaded", () => {
    var calc = document.querySelector('.calc-body')
    var turn = document.querySelector("#turn");
    var trigo = document.querySelector(".trig");
    var screen = document.querySelector(".screen");
    var keypad = document.querySelector(".keypad");
    var b1 = document.querySelector(".b1");
    var b2 = document.querySelector(".b2");
    var numkey = document.querySelectorAll(".numkey");
    var unary_operator = document.querySelectorAll(".unarykey");
    var binary_operator = document.querySelectorAll(".binarykey");
    var result = document.querySelector("#result");
    var del = document.querySelector("#del");
    var clear = document.querySelector("#clear");
    var bracket = document.querySelector(".bracket");
    var output = '';

    turn.onclick = () => {
        calc.classList.toggle('.turn');
        if (turn.dataset.toggle === "down") { 
            turn.style.transform = "rotate(0deg) translateX(1.75rem)";
            turn.dataset.toggle = "up";
            turn.style.background = "#76BA1B";
            trigo.style.display = "grid";
            setTimeout(() => {
                trigo.style.opacity = "1";
                calc.style.gridTemplateRows = 'repeat(11,1fr)';
                calc.style.gridTemplateAreas = '"1 1 1 1" "1 1 1 1" "1 1 1 1" "2 2 2 2" "3 3 3 3" "3 3 3 3" "4 4 4 4" "5 5 5 6" "5 5 5 6" "5 5 5 6" "5 5 5 6"';
                keypad.style.gridRow = "8 / span 4";
                b1.style.gridRow = "7";
                b2.style.gridRow = "8 / span 4";
            },0);
        }
        else {
            turn.style.transform = "rotate(180deg) translateX(-1.55rem)";
            turn.dataset.toggle = "down";
            turn.style.background = "#D2122E";
            trigo.style.opacity = "0";
            setTimeout(() => {
                trigo.style.display = "none";
                calc.style.gridTemplateRows = 'repeat(9,1fr)';
                calc.style.gridTemplateAreas = '"1 1 1 1" "1 1 1 1" "1 1 1 1" "2 2 2 2" "4 4 4 4" "5 5 5 6" "5 5 5 6" "5 5 5 6" "5 5 5 6"';
                keypad.style.gridRow = "6 / span 4";
                b1.style.gridRow = "5";
                b2.style.gridRow = "6 / span 4";
            },300);
        }
    }

    bracket.onclick = () => {
        if (bracket.dataset.type === 'left') {
            screen.innerHTML += '(';
            bracket.dataset.type = 'right';
        }
        else {
            screen.innerHTML += ')';
            bracket.dataset.type = 'left';
        }
    }

    clear.onclick = () => {
        screen.innerHTML = "";
        screen.dataset.state = "begin";
    }

    del.onclick = () => {
        screen.innerHTML = screen.innerHTML.slice(0,screen.innerHTML.length-1);
    }

    numkey.forEach((numkey) => {
        numkey.onclick = function() {
            let lastdigit = screen.innerHTML[screen.innerHTML.length - 1];
            if (screen.dataset.state === "cont" || lastdigit === ')') {
                alert('Invalid Entry');
            }
            else screen.innerHTML += this.innerHTML;
        }
    })

    binary_operator.forEach((binary_operator) => {
        binary_operator.onclick = function() {
            screen.dataset.state = "begin";
            let lastdigit = screen.innerHTML[screen.innerHTML.length - 1];
            if (isNaN(parseInt(lastdigit))) {
                alert('Invalid Entry');
            }
            else if (lastdigit === ')') screen.innerHTML += this.innerHTML;
            else screen.innerHTML += this.innerHTML;
        }
    })

    unary_operator.forEach((unary_operator) => {
        unary_operator.onclick = function() {
            let lastdigit = screen.innerHTML[screen.innerHTML.length - 1];
            if (this.innerHTML === '√') {
                if (!(isNaN(parseInt(lastdigit))) || lastdigit === ')') alert('Invalid Entry');
                else {
                    if (isNaN(parseInt(lastdigit))) {
                        screen.innerHTML += this.innerHTML;
                        // result.onclick = () => {
                        //     screen.innerHTML = String(Math.sqrt(parseInt(screen.innerHTML[0,screen.innerHTML.length - 2]))) + lastdigit;
                        // }
                    }
                }
            }
            else if (this.innerHTML === '^') {
                if (isNaN(parseInt(lastdigit))) alert('Invalid Entry');
                else {
                    let x = parseInt(screen.innerHTML[0,screen.innerHTML.length - 2]);
                    
                }
            }
            else if (this.innerHTML === '∏') {
                if (!(isNaN(parseInt(lastdigit))) || lastdigit === ')') alert('Invalid Entry');
                else screen.innerHTML += Math.PI;
            }
            else {}
        }
    })

    result.onclick = () => {
        screen.innerHTML = eval(screen.innerHTML);
        screen.dataset.state = "cont";
    }
});