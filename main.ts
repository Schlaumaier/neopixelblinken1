let strip = neopixel.create(DigitalPin.P0, 20, NeoPixelMode.RGB)
/**
 * Der ganze Streifen wird jeweils auf Rot, gelb, grün gesetzt
 */
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(1000)
})
