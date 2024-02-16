let circle1 = document.getElementById("cir1");
let circle2 = document.getElementById("cir2");
let button = document.getElementById("BTN");
let start = document.getElementById("Start");
let input = document.getElementById("input");
let Corrects = document.getElementById("C");
let InCorrects = document.getElementById("IC");
let Timer = document.getElementById("timer");
let resault;
let Cor = 0;
let InCor = 0;
let Time = 15;
let isStarted = false;
Timer.innerText = Time;
let width = 100;

function MainProgram() {
    start.addEventListener("click", function () {
        if (isStarted === false) {
            isStarted = true;
            if (Time === 0) {
                window.alert("Too late , Your Time is up!")
                Time = 10;
                width = 100;
                resault = CalculateResault();
            }

            function CreateRandomNumb() {
                let Numb1 = Math.round(Math.random() * 101)
                let Numb2 = Math.round(Math.random() * 101)
                let Numbers = [Numb1, Numb2];
                circle1.innerText = Numbers[0];
                circle2.innerText = Numbers[1];
                return Numbers;
            }

            function CalculateResault() {
                let Numbers = CreateRandomNumb();
                console.log(Numbers)
                let Resault = Numbers[0] + Numbers[1];
                console.log(Resault)
                return Resault;
            }

            resault = CalculateResault();

            button.addEventListener("click", function () {

                if (input.value !== "") {
                    let Answer = Number(input.value);
                    if (Answer === resault) {
                        let WinSound = new Audio("../Audio/Win.wav");
                        WinSound.play();
                        resault = CalculateResault();
                        // window.alert("You answered correctly! You got 1 point")
                        Time += 5;
                        width += 15;
                        Timer.style.width = width + "%";
                        input.value = "";
                        Cor++;
                        Corrects.innerText = Cor;
                    } else if (Answer !== resault) {
                        let LoseSound = new Audio("../Audio/Lose.wav");
                        LoseSound.play();
                        resault = CalculateResault();
                        // window.alert("Your Answer was Incorrect!")
                        Time -= 3;
                        width -= 5;
                        Timer.style.width = width + "%";
                        input.value = "";
                        InCor++;
                        InCorrects.innerText = InCor;
                    }
                } else {
                    window.alert("Please Enter a Number!")
                }
            })
            let inter = setInterval(function () {
                let TimerSound = new Audio("../Audio/Timer.mp3");
                Time = Time - 1;
                Timer.innerText = Time;
                TimerSound.play();
                width = width - 4;
                Timer.style.width = width + "%";
                if (Time === 0) {
                    window.alert("Too late , Your Time is up!")
                    Time = 10;
                    width = 100;
                    resault = CalculateResault();
                    Cor = 0;
                    Corrects.innerText = Cor;
                    InCor = 0;
                    InCorrects.innerText = InCor;
                }

            }, 1000)
        }

    })

}

MainProgram()
