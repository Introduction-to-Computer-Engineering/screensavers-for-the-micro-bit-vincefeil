//uses shake to start the function
input.onGesture(Gesture.Shake, function () {
    F = 1
    arrowsI()
})
//function has arrows the travel accross the screen from right to left.
function arrowsI () {
    //while loop is the timer using variable ArrowTimer as the counter
    while (ArrowTimeI > 0) {
        if (F == 1) {
            //leds are plotted using a variable for X that has 1 added each time through and a constant Y
            for (let xindex00 = 0; xindex00 <= 4; xindex00++) {
                led.plot(xindex00, 0)
                led.plot(xindex11, 1)
                led.plot(xindex22, 2)
                led.plot(xindex33, 3)
                led.plot(xindex44, 4)
                xindex11 += 1
                xindex22 += 1
                xindex33 += 1
                xindex44 += 1
                //the pause and clear screen make it look like more then one arrow
                basic.pause(200)
                basic.clearScreen()
                if (xindex11 > 4) {
                    xindex11 = 0
                }
                if (xindex22 > 4) {
                    xindex22 = 0
                }
                if (xindex33 > 4) {
                    xindex33 = 0
                }
                if (xindex44 > 4) {
                    xindex44 = 0
                }
            }
            ArrowTimeI += -500
        }
    }
    basic.clearScreen()
}
//setting up variables
let xindex44 = 0
let F = 0
let ArrowTimeI = 0
let xindex33 = 0
let xindex22 = 0
let xindex11 = 0
let xindex022 = 0
xindex11 = 1
xindex22 = 2
xindex33 = 1
ArrowTimeI = 5000
F = 0
