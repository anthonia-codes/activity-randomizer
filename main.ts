let random_number = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Feel...")
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    if (random_number == 1) {
        basic.showString("DANCE")
        basic.pause(2000)
    } else if (random_number == 2) {
        basic.showString("SING")
        basic.pause(2000)
    } else if (random_number == 3) {
        basic.showString("WAVE")
        basic.pause(2000)
    } else {
        basic.showString("" + (images.createBigImage(`
            # # . # # # . # # #
            # . # # . # . # . #
            # . # # # # . # # #
            # . # # . # . # . #
            # # . # . # . # # #
            `)))
        basic.pause(2000)
    }
})
basic.forever(function () {
    basic.showString("YOU'RE")
    basic.showIcon(IconNames.Sad)
    basic.pause(2000)
    random_number = randint(1, 4)
    if (random_number == 1) {
        basic.showString("" + (images.createBigImage(`
            # # . # # # . # # #
            # . . . # . . . # .
            # # . . # . . . # .
            . # . . # . . . # .
            # # . # # # . . # .
            `)))
        basic.pause(2000)
    } else if (random_number == 2) {
        basic.showString("SHRUG YOUR SHOULDERS")
        basic.pause(2000)
    } else if (random_number == 3) {
        basic.showString("" + (images.createBigImage(`
            # # . # # # . # # #
            . # . # . # . # . #
            . # . # . # . # # #
            # # . # . # . # . #
            # # . # # # . # # #
            `)))
        basic.pause(2000)
    } else {
        basic.showString("SNAP 5x")
        basic.pause(2000)
    }
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . # #
        # # # # #
        # # # # #
        `)
    basic.showString("PRESS A(WESOME)")
    basic.pause(2000)
})
