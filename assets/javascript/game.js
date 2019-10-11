//crystals
var crystal = ["blue", "red", "green", "orange"];

//variables
var yourScore = 0;
var number = 0;
var win = 0;
var lose = 0;

//random number function
var randomNumber = function (min, max) {
    return Math.floor((Math.random() * max - min + 1) + min);
};

var game = function () {
    yourScore = 0;
    //get random number for the random score
    number = randomNumber(19, 120);
    console.log(number);
    $("#randomNumber").html(number);
    $("#userScore").html(yourScore);

    for (var i = 0; i < 4; i++) {
        $(".image-" + i).attr("data-crystalvalue", randomNumber(1, 9));
    }
};


//get random number for each crystal
// crystal.blue.value = randomNumber(1, 100);
// crystal.red.value = randomNumber(1, 100);
// crystal.green.value = randomNumber(1, 100);
// crystal.orange.value = randomNumber(1, 100);

// console.log("blue:" + crystal.blue.value);
// console.log("red:" + crystal.red.value);
// console.log("green:" + crystal.green.value);
// console.log("orange:" + crystal.orange.value);

//function to add the value of the crystals to the random number
var crystalValue = function (crystal) {
    yourScore = yourScore + Number(crystal);
    $("#yourScore").html(yourScore);

    checkWins();
}

var checkWins = function () {
    // var lose = 0;
    if (yourScore > number) {
        alert("you lost");
        console.log("you lost");
        lose++;
        $("#losses").html(lose);
        //restart game
        game();
    }
    else if (yourScore === number) {
        // var win = 0;
        alert("you won");
        console.log("you won");
        win++;
        $("#win").html(win);
        //restart game
        game();
    }
};

//reinitialize game
game();

//on-click for the crystal images
$("#blue").on("click", function () {
    crystalValue($(this).attr("data-crystalvalue"));
    console.log($(this).attr("data-crystalvalue"));
});

$("#red").on("click", function () {
    crystalValue($(this).attr("data-crystalvalue"));
    console.log($(this).attr("data-crystalvalue"));
});

$("#green").on("click", function () {
    crystalValue($(this).attr("data-crystalvalue"));
    console.log($(this).attr("data-crystalvalue"));
});

$("#orange").on("click", function () {
    crystalValue($(this).attr("data-crystalvalue"));
    console.log($(this).attr("data-crystalvalue"));
});