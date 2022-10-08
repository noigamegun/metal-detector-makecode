input.onButtonPressed(Button.A, function () {
    microtesla += 25
    basic.showNumber(microtesla)
    basic.showString("Microtesla",100)
})
input.onButtonPressed(Button.B, function () {
    microtesla += -25
    basic.showNumber(microtesla)
    basic.showString("Microtesla",100)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(input.magneticForce(Dimension.Strength))
})
let microtesla = 0
microtesla = 75
basic.showString("METAL DETECTOR")
basic.forever(function () {
    serial.writeValue("e", input.magneticForce(Dimension.Strength))
    if (input.magneticForce(Dimension.Strength) > microtesla) {
        basic.showIcon(IconNames.No)
        music.playTone(784, music.beat(BeatFraction.Eighth))
        serial.writeValue("t", 1)
    } else {
        basic.showIcon(IconNames.Yes)
        serial.writeValue("t", 0)
    }
})
