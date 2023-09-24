// ==UserScript==
// @name         Agar.io Train Line Controller By CeyHun
// @namespace    https://www.youtube.com/channel/UCMf28IHMkAhEGv6wnU34mvw
// @version      1.2
// @description  Agar.io Train Line Controller By CeyHun.Press Num5 key freeze cell/Press Num4 key left line/Press Num6 key right line/Press Num2 key down line/Press Num8 key up line/Press Arrow up key up line/Press Arrow down key down line/Press Arrow left key left line/Press Arrow right key right line/Press End key cell freeze/Press F2 key diagonal line split(just Gota.io).
// @author       CeyHun
// @match        agar.io*
// @match        agma.io*
// @match        https://gota.io/web*
// @match        http://bubla.io*
// @grant        none
// @icon         http://i65.tinypic.com/mmzo9e.jpg
// @downloadURL none
// ==/UserScript==

alert('Train Line Controller ACTIVE!! \nTutorial Channel Link : https://youtu.be/c/ceyhun1 \n\nGood Luck :D');

window.addEventListener('keydown', keydown);

var Width
var Height
//NumKeys : ON
function keydown(event) {
switch (event.keyCode) {
        case 101: //Num5 key freeze cell
            X = window.innerWidth / 2;
            Y = window.innerHeight / 2;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;
        case 100: //Num4 key left line
            X = window.innerWidth / 3;
            Y = window.innerHeight / 2;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;
        case 102: //Num6 key right line
            X = window.innerWidth / 1;
            Y = window.innerHeight / 2;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;
        case 98: //Num2 key down line
            X = window.innerWidth / 2;
            Y = window.innerHeight / 1;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;
        case 104: //Num8 key up line
            X = window.innerWidth / 2;
            Y = window.innerHeight / 3;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;

        //NumKeys : OFF

        // Direction Keys : ON

        case 38: //Arrow Up key up line
            X = window.innerWidth / 2;
            Y = window.innerHeight / 3;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;
        case 40: //Arrow Down key down line
            X = window.innerWidth / 2;
            Y = window.innerHeight / 1;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;
        case 37: //Arrow Left key left line
            X = window.innerWidth / 3;
            Y = window.innerHeight / 2;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;
        case 39: //Arrow Right key right line
            X = window.innerWidth / 1;
            Y = window.innerHeight / 2;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;
        case 35: //End key freeze cell
            X = window.innerWidth / 2;
            Y = window.innerHeight / 2;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;
        //Direction Keys : OFF

        //Specials Keys : ON
        case 12: //KeyPad Off to num5 key freeze cell
            X = window.innerWidth / 2;
            Y = window.innerHeight / 2;
            $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
        break;
};
    if (event.keyCode == 113) { // Gota.io Diagonal Line Split Press F2 key
        split();
        split();
        split();
        esc();

        function split() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32}));
        }
        function esc() {
    $("body").trigger($.Event("keydown", { keyCode: 27}));
    //Specials Keys : OFF

    //Train Line Controller By CeyHun 1.2

}
    }
}
