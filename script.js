//User input option
var CharacterArray = [
    ["0123456789"],
    ["abcdefghijklmnopqrstuvwxyz"],
    ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    ["!\"#$%'()*+,-./:=>?@[\\]/^_`{|}~"]
];

// slider choice
var slider = document.getElementById("slider");
var output = document.getElementById("ShowNum");

output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = slider.value;
}

//Copy
var CopyPW = document.getElementById("copy-button")

function Copy() {
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // console.log(copyText.value);
    if (copyText.value < 8) {
        alert("Please Generate your Password");
    }
    else {
        alert("Your Password has been copied to your clipboard");
    }
}

//User choice
function generate() {
    console.log("Test");
    let strength = document.getElementById("slider").value;
    let values = "";
    let password = "";

    if (document.getElementById("Numeric").checked) {
        values += CharacterArray[0];
        console.log("Numeric");
    }
    if (document.getElementById("LowerCase").checked) {
        values += CharacterArray[1];
        console.log("LowerCase");
    }
    if (document.getElementById("UpperCase").checked) {
        values += CharacterArray[2];
        console.log("UpperCase");
    }
    if (document.getElementById("Special").checked) {
        values += CharacterArray[3];
        console.log("Special");
    }

    // slider calculation
    var slider = document.getElementById("slider");
    var output = document.getElementById("ShowNum");
    output.innerHTML = slider.value;
    console.log(slider.value)

    slider.oninput = function () {
        output.innerHTML = this.value;
    }

    // Select an option alert

    console.log("confirmation");

    if ((document.getElementById("Numeric").checked == false) && (document.getElementById("LowerCase").checked == false) &&
        (document.getElementById("UpperCase").checked == false) && (document.getElementById("Special").checked == false)) {
        alert("Please select at least one option");
        console.log("Test2");
    }

    // Promt - You chose xyz please confirm options
    else {
        var r = confirm("You have Chosen:\n" + "Chracter Count: " + strength + "\n" + "Character Types: " + values +"\n If you happy with your selection, Please click ok" );

        if (r == true) {
            for (var i = 0; i < strength; i++) {
                password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
            }
            document.getElementById("output").value = password;
        }
        else { location.reload() }
    }
}


/* Pseudo
 Step 1 - User prompts - use checkbox

can choose:
1. length  min 8 max 128

js -counter - set from 8-128

2.Character types
Special characters ([see examples](https://www.owasp.org/index.php/Password_special_characters))
Numeric characters
Lowercase characters
Uppercase characters

min 1 character type
max all 4 types

alart - please select at least one charachter type

Step 2 - generate password button

new - Confirm selection yes no -
yes-show password on page
no-refresh

Step 3 - copy to clipboard button
js- copy


Tri notes:
Add the alart at the start of the code*/