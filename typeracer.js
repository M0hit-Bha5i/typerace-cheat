/*
Created by Mohit Bhasi

How to use it?

1) Go to play.typeracer.com
2) Join a game.
3) Right click and inspect element
4) Next to elements,network,sources,timeline there will be double arrow (>>)
5) Click and select console.
6) When the game begins copy paste the code and press enter.
7) Click on the textbox where you type the words.
8) Keep pressing space.

EnjoY 

*/

wnum = 0;
function PrintNextWord() {
    word = answerArr[wnum];
    inputs[0].value = word;
    wnum++;
}

document.onkeypress = PrintNextWord;

fword = null;
for (j=0; j<99; j++) {
    fword = document.getElementById("nhwMiddlegwt-uid-" + j);
    if (fword != null) {
        break;
    }
}

answer = null;
for (i=0; i<99; ++i) {
    answer = document.getElementById("nhwRightgwt-uid-" + i);
    if (answer != null) {
        break;
    }
}

answer = fword.innerHTML + answer.innerHTML;
answerArr = answer.split(" ");
inputs = document.getElementsByTagName("input");
PrintNextWord();