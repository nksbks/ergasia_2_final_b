basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . # . .
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # . .
        . . # . .
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . . # . .
        # # # # #
        `)
    basic.pause(500)
    if (input.lightLevel() > 128) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . # . .
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # #
            . . . . .
            # # . # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            # # . # #
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # . # #
        `)
    basic.pause(2000)
})
