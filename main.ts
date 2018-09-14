/**
 * microbit makecode Package: Scroll Text.
 * Author: shao ziyang, 2018.Sept
 * From microbit/micropython Chinese community.
 * http://www.micropython.org.cn
 */

enum SCROLL_DIR {
    //% block="LEFT"
    LEFT,
    //% block="UP"
    UP,
    //% block="RIGHT"
    RIGHT,
    //% block="DOWN"
    DOWN
}

enum SCROLL_ROTATE {
    //% block="0"
    SR_0,
    //% block="90"
    SR_90,
    //% block="180"
    SR_180,
    //% block="270"
    SR_270
}

//% weight=100 color=#Ffbc11 icon="T" block="ScrollText"
namespace ScrolText {
    let FONTS = [
        [0x00, 0x00, 0x00, 0x00, 0x00], //0: 
        [0x00, 0x00, 0x00, 0x00, 0x00], //1: 
        [0x00, 0x00, 0x00, 0x00, 0x00], //2: 
        [0x00, 0x00, 0x00, 0x00, 0x00], //3: 
        [0x00, 0x00, 0x00, 0x00, 0x00], //4: 
        [0x00, 0x00, 0x00, 0x00, 0x00], //5: 
        [0x00, 0x00, 0x00, 0x00, 0x00], //6: 
        [0x00, 0x00, 0x00, 0x00, 0x00], //7: 
        [0x00, 0x00, 0x00, 0x00, 0x00], //8: 
        [0x00, 0x00, 0x00, 0x00, 0x00], //9:
        [0x00, 0x00, 0x00, 0x00, 0x00], //10:
        [0x00, 0x00, 0x00, 0x00, 0x00], //11:
        [0x00, 0x00, 0x00, 0x00, 0x00], //12:
        [0x00, 0x00, 0x00, 0x00, 0x00], //13:
        [0x00, 0x00, 0x00, 0x00, 0x00], //14:
        [0x00, 0x00, 0x00, 0x00, 0x00], //15:
        [0x00, 0x00, 0x00, 0x00, 0x00], //16:
        [0x00, 0x00, 0x00, 0x00, 0x00], //17:
        [0x00, 0x00, 0x00, 0x00, 0x00], //18:
        [0x00, 0x00, 0x00, 0x00, 0x00], //19:
        [0x00, 0x00, 0x00, 0x00, 0x00], //20:
        [0x00, 0x00, 0x00, 0x00, 0x00], //21:
        [0x00, 0x00, 0x00, 0x00, 0x00], //22:
        [0x00, 0x00, 0x00, 0x00, 0x00], //23:
        [0x00, 0x00, 0x00, 0x00, 0x00], //24:
        [0x00, 0x00, 0x00, 0x00, 0x00], //25:
        [0x00, 0x00, 0x00, 0x00, 0x00], //26:
        [0x00, 0x00, 0x00, 0x00, 0x00], //27:
        [0x00, 0x00, 0x00, 0x00, 0x00], //28:
        [0x00, 0x00, 0x00, 0x00, 0x00], //29:
        [0x00, 0x00, 0x00, 0x00, 0x00], //30:
        [0x00, 0x00, 0x00, 0x00, 0x00], //31:
        [0x00, 0x00, 0x00, 0x00, 0x00], //32:
        [0x02, 0x02, 0x02, 0x00, 0x02], //33: !
        [0x0A, 0x0A, 0x00, 0x00, 0x00], //34: "
        [0x0A, 0x1F, 0x0A, 0x1F, 0x0A], //35: #
        [0x0E, 0x13, 0x0E, 0x19, 0x0E], //36: $
        [0x13, 0x09, 0x04, 0x12, 0x19], //37: %
        [0x06, 0x09, 0x06, 0x09, 0x16], //38: &
        [0x02, 0x02, 0x00, 0x00, 0x00], //39: '
        [0x04, 0x02, 0x02, 0x02, 0x04], //40: (
        [0x02, 0x04, 0x04, 0x04, 0x02], //41: )
        [0x00, 0x0A, 0x04, 0x0A, 0x00], //42: *
        [0x00, 0x04, 0x0E, 0x04, 0x00], //43: +
        [0x00, 0x00, 0x00, 0x04, 0x02], //44: ,
        [0x00, 0x00, 0x0E, 0x00, 0x00], //45: -
        [0x00, 0x00, 0x00, 0x02, 0x00], //46: .
        [0x10, 0x08, 0x04, 0x02, 0x01], //47: /
        [0x06, 0x09, 0x09, 0x09, 0x06], //48: 0
        [0x04, 0x06, 0x04, 0x04, 0x0E], //49: 1
        [0x07, 0x08, 0x06, 0x01, 0x0F], //50: 2
        [0x0F, 0x08, 0x04, 0x09, 0x06], //51: 3
        [0x0C, 0x0A, 0x09, 0x0F, 0x08], //52: 4
        [0x1F, 0x01, 0x0F, 0x10, 0x0F], //53: 5
        [0x08, 0x04, 0x0E, 0x11, 0x0E], //54: 6
        [0x1F, 0x08, 0x04, 0x02, 0x01], //55: 7
        [0x0E, 0x11, 0x0E, 0x11, 0x0E], //56: 8
        [0x0E, 0x11, 0x0E, 0x04, 0x02], //57: 9
        [0x00, 0x02, 0x00, 0x02, 0x00], //58: :
        [0x00, 0x04, 0x00, 0x04, 0x02], //59: ;
        [0x08, 0x04, 0x02, 0x04, 0x08], //60: <
        [0x00, 0x0E, 0x00, 0x0E, 0x00], //61: =
        [0x02, 0x04, 0x08, 0x04, 0x02], //62: >
        [0x0E, 0x11, 0x0C, 0x00, 0x04], //63: ?
        [0x0E, 0x11, 0x15, 0x19, 0x06], //64: @
        [0x06, 0x09, 0x0F, 0x09, 0x09], //65: A
        [0x07, 0x09, 0x07, 0x09, 0x07], //66: B
        [0x0E, 0x01, 0x01, 0x01, 0x0E], //67: C
        [0x07, 0x09, 0x09, 0x09, 0x07], //68: D
        [0x0F, 0x01, 0x07, 0x01, 0x0F], //69: E
        [0x0F, 0x01, 0x07, 0x01, 0x01], //70: F
        [0x0E, 0x01, 0x19, 0x11, 0x0E], //71: G
        [0x09, 0x09, 0x0F, 0x09, 0x09], //72: H
        [0x07, 0x02, 0x02, 0x02, 0x07], //73: I
        [0x1F, 0x08, 0x08, 0x09, 0x06], //74: J
        [0x09, 0x05, 0x03, 0x05, 0x09], //75: K
        [0x01, 0x01, 0x01, 0x01, 0x0F], //76: L
        [0x11, 0x1B, 0x15, 0x11, 0x11], //77: M
        [0x11, 0x13, 0x15, 0x19, 0x11], //78: N
        [0x06, 0x09, 0x09, 0x09, 0x06], //79: O
        [0x07, 0x09, 0x07, 0x01, 0x01], //80: P
        [0x06, 0x09, 0x09, 0x06, 0x0C], //81: Q
        [0x07, 0x09, 0x07, 0x09, 0x11], //82: R
        [0x0E, 0x01, 0x06, 0x08, 0x07], //83: S
        [0x1F, 0x04, 0x04, 0x04, 0x04], //84: T
        [0x09, 0x09, 0x09, 0x09, 0x06], //85: U
        [0x11, 0x11, 0x11, 0x0A, 0x04], //86: V
        [0x11, 0x11, 0x15, 0x1B, 0x11], //87: W
        [0x09, 0x09, 0x06, 0x09, 0x09], //88: X
        [0x11, 0x0A, 0x04, 0x04, 0x04], //89: Y
        [0x0F, 0x04, 0x02, 0x01, 0x0F], //90: Z
        [0x0E, 0x02, 0x02, 0x02, 0x0E], //91: [
        [0x01, 0x02, 0x04, 0x08, 0x10], //92: \
        [0x0E, 0x08, 0x08, 0x08, 0x0E], //93: ]
        [0x04, 0x0A, 0x00, 0x00, 0x00], //94: ^
        [0x00, 0x00, 0x00, 0x00, 0x1F], //95: _
        [0x02, 0x04, 0x00, 0x00, 0x00], //96: `
        [0x00, 0x0E, 0x09, 0x09, 0x1E], //97: a
        [0x01, 0x01, 0x07, 0x09, 0x07], //98: b
        [0x00, 0x0E, 0x01, 0x01, 0x0E], //99: c
        [0x08, 0x08, 0x0E, 0x09, 0x0E], //100: d
        [0x06, 0x09, 0x07, 0x01, 0x0E], //101: e
        [0x0C, 0x02, 0x07, 0x02, 0x02], //102: f
        [0x0E, 0x09, 0x0E, 0x08, 0x06], //103: g
        [0x01, 0x01, 0x07, 0x09, 0x09], //104: h
        [0x02, 0x00, 0x02, 0x02, 0x02], //105: i
        [0x08, 0x00, 0x08, 0x08, 0x06], //106: j
        [0x01, 0x05, 0x03, 0x05, 0x09], //107: k
        [0x02, 0x02, 0x02, 0x02, 0x0C], //108: l
        [0x00, 0x1B, 0x15, 0x11, 0x11], //109: m
        [0x00, 0x07, 0x09, 0x09, 0x09], //110: n
        [0x00, 0x06, 0x09, 0x09, 0x06], //111: o
        [0x00, 0x07, 0x09, 0x07, 0x01], //112: p
        [0x00, 0x0E, 0x09, 0x0E, 0x08], //113: q
        [0x00, 0x0E, 0x01, 0x01, 0x01], //114: r
        [0x00, 0x0C, 0x02, 0x04, 0x03], //115: s
        [0x02, 0x02, 0x0E, 0x02, 0x1C], //116: t
        [0x00, 0x09, 0x09, 0x09, 0x1E], //117: u
        [0x00, 0x11, 0x11, 0x0A, 0x04], //118: v
        [0x00, 0x11, 0x11, 0x15, 0x1B], //119: w
        [0x00, 0x09, 0x06, 0x06, 0x09], //120: x
        [0x00, 0x11, 0x0A, 0x04, 0x03], //121: y
        [0x00, 0x0F, 0x04, 0x02, 0x0F], //122: z
        [0x0C, 0x04, 0x06, 0x04, 0x0C], //123: {
        [0x02, 0x02, 0x02, 0x02, 0x02], //124: |
        [0x03, 0x02, 0x06, 0x02, 0x03], //125: }
        [0x00, 0x00, 0x06, 0x18, 0x00], //126: ~
        [0x00, 0x00, 0x00, 0x00, 0x00]  //127: 
    ]
    let img: Image = null
    img = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)

    function _Rotate(font: number[], rotate: SCROLL_ROTATE) {
        let m: number[][] = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ]
        let r: number[] = [font[0], font[1], font[2], font[3], font[4]]
        switch (rotate) {
            case SCROLL_ROTATE.SR_0:
                return r;
            case SCROLL_ROTATE.SR_90:
                for (let i = 0; i < 5; i++) {
                    m[4 - i][0] = (r[i] & 0x01)
                    m[4 - i][1] = (r[i] & 0x02)
                    m[4 - i][2] = (r[i] & 0x04)
                    m[4 - i][3] = (r[i] & 0x08)
                    m[4 - i][4] = (r[i] & 0x10)
                }
                break;
            case SCROLL_ROTATE.SR_180:
                for (let i = 0; i < 5; i++) {
                    m[4][4 - i] = (r[i] & 0x01)
                    m[3][4 - i] = (r[i] & 0x02)
                    m[2][4 - i] = (r[i] & 0x04)
                    m[1][4 - i] = (r[i] & 0x08)
                    m[0][4 - i] = (r[i] & 0x10)
                }
                break;
            case SCROLL_ROTATE.SR_270:
                for (let i = 0; i < 5; i++) {
                    m[i][4] = (r[i] & 0x01)
                    m[i][3] = (r[i] & 0x02)
                    m[i][2] = (r[i] & 0x04)
                    m[i][1] = (r[i] & 0x08)
                    m[i][0] = (r[i] & 0x10)
                }
                break;
        }
        for (let n = 0; n <= 4; n++) {
            let d = 0
            if (m[0][n]) d |= 1
            if (m[1][n]) d |= 2
            if (m[2][n]) d |= 4
            if (m[3][n]) d |= 8
            if (m[4][n]) d |= 16
            r[n] = d
        }
        return r
    }

    function _ToImg(dat: number[]): void {
        for (let i = 0; i < 5; i++) {
            img.setPixel(0, i, (dat[i] & 0x01) == 0x01)
            img.setPixel(1, i, (dat[i] & 0x02) == 0x02)
            img.setPixel(2, i, (dat[i] & 0x04) == 0x04)
            img.setPixel(3, i, (dat[i] & 0x08) == 0x08)
            img.setPixel(4, i, (dat[i] & 0x10) == 0x10)
        }
    }

    /**
     * show a scroll string
     * @param s      , eg: "Hello"
     * @param dir    , eg: SCROLL_DIR.LEFT
     * @param rotate , eg: SCROLL_ROTATE.SR_0
     * @param delay  , eg: 100
     */
    //% blockId="SCROLL_SHOWSTRING" block="scroll string %s|dir %dir|rotate %rotate|delay %delay"
    //% weight=100 blockGap=8
    export function showString(s: string, dir: SCROLL_DIR, rotate: SCROLL_ROTATE, delay: number): void {
        let L = s.length + 1
        let a: number[] = [0, 0, 0, 0, 0]
        let b: number[] = [0, 0, 0, 0, 0]

        if (s == '') return

        s = ' ' + s + ' '

        switch (dir) {
            case SCROLL_DIR.LEFT:
                for (let i = 0; i < L; i++) {
                    a = _Rotate(FONTS[s.charCodeAt(i)], rotate)
                    b = _Rotate(FONTS[s.charCodeAt(i + 1)], rotate)
                    let c: number[] = [0, 0, 0, 0, 0]
                    for (let j = 0; j < 5; j++) {
                        for (let k = 0; k < 5; k++)
                            c[k] = (a[k] >> j) | ((b[k] << (8 - j)) >> 3)
                        _ToImg(c)
                        img.showImage(0, delay)
                    }
                }
                break;
            case SCROLL_DIR.RIGHT:
                for (let i = 0; i < L; i++) {
                    a = _Rotate(FONTS[s.charCodeAt(i)], rotate)
                    b = _Rotate(FONTS[s.charCodeAt(i + 1)], rotate)
                    let c: number[] = [0, 0, 0, 0, 0]
                    for (let j = 0; j < 5; j++) {
                        for (let k = 0; k < 5; k++)
                            c[k] = (a[k] << j) | ((b[k] >> (5 - j)))
                        _ToImg(c)
                        img.showImage(0, delay)
                    }
                }
                break;
            case SCROLL_DIR.UP:
                for (let i = 0; i < L; i++) {
                    a = _Rotate(FONTS[s.charCodeAt(i)], rotate)
                    b = _Rotate(FONTS[s.charCodeAt(i + 1)], rotate)
                    let c: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    for (let j = 0; j < 5; j++) {
                        c[j] = a[j]
                        c[j + 6] = b[j]
                    }
                    for (let j = 0; j < 6; j++) {
                        _ToImg(c)
                        img.showImage(0, delay)
                        c.removeAt(0)
                    }
                }
                break;
            case SCROLL_DIR.DOWN:
                for (let i = 0; i < L; i++) {
                    a = _Rotate(FONTS[s.charCodeAt(i)], rotate)
                    b = _Rotate(FONTS[s.charCodeAt(i + 1)], rotate)
                    let c: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    for (let j = 0; j < 5; j++) {
                        c[j] = a[j]
                        c[j + 6] = b[j]
                    }
                    for (let j = 0; j < 6; j++) {
                        _ToImg(c)
                        img.showImage(0, delay)
                        for (let k = 5; k > 0; k--) {
                            c[k] = c[k - 1]
                        }
                        c[0] = c[11 - j]
                    }
                }
                break;
        }
    }

    /**
      * show a scroll number
      * @param n      , eg: 123
      * @param dir    , eg: SCROLL_DIR.LEFT
      * @param rotate , eg: SCROLL_ROTATE.SR_90
      * @param delay  , eg: 100
      */
    //% blockId="SCROLL_SHOWNUMBER" block="scroll number %n|dir %dir|rotate %rotate|delay %delay"
    //% weight=100 blockGap=8
    export function showNumber(n: number, dir: SCROLL_DIR, rotate: SCROLL_ROTATE, delay: number): void {
        showString(n.toString(), dir, rotate, delay)
    }
}
