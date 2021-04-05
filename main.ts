input.onButtonPressed(Button.A, function () {
    if (ggtdgeff) {
        basic.showString("B")
    } else {
        basic.showString("A")
    }
})
input.onButtonPressed(Button.B, function () {
    if (ggtdgeff) {
        basic.showString("A")
    } else {
        basic.showString("B")
    }
})
let ggtdgeff = false
let force = Math.abs(input.magneticForce(Dimension.Strength))
ggtdgeff = force > 100
basic.forever(function () {
    force = Math.abs(input.magneticForce(Dimension.Strength))
    ggtdgeff = force > 100
})
