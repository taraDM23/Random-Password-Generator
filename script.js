//User input option

var CharacterArray = [
    ["0123456789"],
    ["abcdefghijklmnopqrstuvwxyz"],
    ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    ["!\"#$%'()*+,-./:=>?@[\\]/^_`{|}~"]
];

var Numeric = document.getElementById("Numeric");

//generation

function generate() {
    console.log("Test");
    let compexity = document.getElementById("slider").value;
    let values = "";
    let password = "";

    if (document.getElementById("Numeric").checked) {
        values += CharacterArray[0];
        console.log(values);
    }
    if (document.getElementById("UpperCase").checked == true) {
        values += CharacterArray[2];
        console.log(values);
    }
    if (document.getElementById("LowerCase").checked == true) {
        values += CharacterArray[1];
        console.log(values);
    }
    if (document.getElementById("Special").checked == true) {
        values += CharacterArray[3];
        console.log(values);
    }
   // else {
    //    alert("Please select an option");
  //  }

    // slider
    var slider = document.getElementById("slider");
    var output = document.getElementById("ShowNum");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }
    for (var i = 0; i < compexity; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }
    document.getElementById("output").value = password;

}