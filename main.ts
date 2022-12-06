input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature())
})
music.playMelody("C5 - - - - - - - ", 400)
basic.showString("ON")
basic.showIcon(IconNames.Heart)
basic.showNumber(input.temperature())
basic.pause(200)
if (input.temperature() <= 4) {
    basic.showIcon(IconNames.Sad)
    music.playMelody("- - - G A B C5 - ", 441)
} else if (input.temperature() >= 4) {
    basic.showIcon(IconNames.Happy)
    music.playMelody("C5 B A G - - - - ", 441)
}
