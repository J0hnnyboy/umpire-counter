input.onButtonPressed(Button.A, function () {
    Strikes += 1
    basic.showNumber(Strikes)
    if (Strikes > 2) {
        Strikes = 2
    }
})
input.onButtonPressed(Button.AB, function () {
    Balls += 0
    Strikes += 0
})
input.onButtonPressed(Button.B, function () {
    Balls += 1
    basic.showNumber(Balls)
    if (Balls > 3) {
        Balls = 3
    }
})
let Balls = 0
let Strikes = 0
Strikes = 0
Balls = 0
basic.forever(function () {
	
})
