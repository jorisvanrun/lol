input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.compassHeading())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("G B A G C5 B A B ", 210)
    basic.showIcon(IconNames.Happy)
    music.playMelody("G B A G C5 B A B ", 210)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C D E F G A B C5 ", 777)
    basic.showNumber(input.soundLevel())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.lightLevel())
})
