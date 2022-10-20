let random_number = 0
input.onButtonPressed(Button.A, function () {
    random_number = randint(1, 6)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.ForeverInBackground)
    if (random_number == 1) {
        basic.showString("MICROBIT SAYS: Touch your hair")
    } else if (random_number == 2) {
        basic.showString("MICROBIT SAYS: Cover your eyes")
    } else if (random_number == 3) {
        basic.showString("MICROBIT SAYS: Jump 3x")
    } else if (random_number == 4) {
        basic.showString("MICROBIT SAYS: Wave")
    } else if (random_number == 5) {
        basic.showString("MICROBIT SAYS: Dab")
    } else {
        basic.showString("MICROBIT SAYS: Dance")
    }
})
input.onButtonPressed(Button.B, function () {
    random_number = randint(1, 6)
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.ForeverInBackground)
    if (random_number == 1) {
        basic.showString("Sit Down")
    } else if (random_number == 2) {
        basic.showString("Type your favourite movie in the chat")
    } else if (random_number == 3) {
        basic.showString("Shrug your shoulders")
    } else if (random_number == 4) {
        basic.showString("Name a job in STEM")
    } else if (random_number == 5) {
        basic.showString("Give yourself a high five")
    } else {
        basic.showString("Snap 5x")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("INCORRECT")
})
