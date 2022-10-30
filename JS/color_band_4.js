const band_4_color_1 = new Map([
    [0, 'black'],
    [1, 'brown'],
    [2, 'red'],
    [3, 'orange'],
    [4, 'yellow'],
    [5, 'green'],
    [6, 'blue'],
    [7, 'violet'],
    [8, 'grey'],
    [9, 'white'],
]);
const band_4_color_2 = new Map([
    [0, 'black'],
    [1, 'brown'],
    [2, 'red'],
    [3, 'orange'],
    [4, 'yellow'],
    [5, 'green'],
    [6, 'blue'],
    [7, 'violet'],
    [8, 'grey'],
    [9, 'white'],
]);
const band_4_color_3 = new Map([
    [0, 'black'],
    [1, 'brown'],
    [2, 'red'],
    [3, 'orange'],
    [4, 'yellow'],
    [5, 'green'],
    [6, 'blue'],
    [7, 'violet'],
    [8, 'grey'],
    [9, 'white'],
    [-1, 'gold'],
    [-2, 'silver'],
]);
const band_4_color_4 = new Map([
    [1, 'brown'],
    [2, 'red'],
    [0.5, 'green'],
    [0.25, 'blue'],
    [0.1, 'violet'],
    [0.05, 'grey'],
    [5, 'gold'],
    [10, 'silver'],
]);

// Element
let b_4_c_1 = document.querySelector('#band_4_color_1');
let b_4_c_2 = document.querySelector('#band_4_color_2');
let b_4_c_3 = document.querySelector('#band_4_color_3');
let b_4_c_4 = document.querySelector('#band_4_color_4');
let calculat = document.querySelector('.btn_calulate');
let output = document.querySelector('.output_section');



var color1_value;
var color2_value;
var color3_value;
var color4_value;
var final_ans;

// for color 1
let color1 = function () {
    color1_value = Number(b_4_c_1.value);

    // console.log(color1_value);

    b_4_c_1.style.setProperty("background-color", band_4_color_1.get(color1_value), "important");

};
b_4_c_1.addEventListener('click', color1);
//////////////////////////////////////////////////

// for color 2
let color2 = function () {
    color2_value = Number(b_4_c_2.value);

    // console.log(color2_value);

    b_4_c_2.style.setProperty("background-color", band_4_color_2.get(color2_value), "important");

};
b_4_c_2.addEventListener('click', color2);
/////////////////////////////////////////////////////////////

// for color 3
let color3 = function () {
    color3_value = Number(b_4_c_3.value);

    // console.log(color2_value);

    b_4_c_3.style.setProperty("background-color", band_4_color_3.get(color3_value), "important");

};
b_4_c_3.addEventListener('click', color3);
////////////////////////////////////////////////////////////

// for color 4
let color4 = function () {
    color4_value = Number(b_4_c_4.value);
    b_4_c_4.style.setProperty("background-color", band_4_color_4.get(color4_value), "important");

};
b_4_c_4.addEventListener('click', color4);
///////////////////////////////////////////////////////


// calculat

let ans = function () {
    final_ans = ((color1_value + '') + (color2_value + '')) + '×' + ((Math.pow(10, color3_value)) + '') + ' ± ' + ((color4_value + '')) + 'Ω';

    output.value = final_ans;
}

calculat.addEventListener('click', ans);
