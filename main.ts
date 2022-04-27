input.onButtonPressed(Button.A, function () {
    Countdown()
})
function Countdown () {
    for (let index = 0; index <= 2; index++) {
        basic.showNumber(3 - index)
    }
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showString("GO!")
}
basic.forever(function () {
	
})
