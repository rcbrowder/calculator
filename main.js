var value1 = ''; // First number user entered
var value2 = ''; // Second number user entered
var SelectedFunc = null; // Function button user clicked
var display = document.getElementById('display')
var LastClicked = null;

// Wait for page to laod before allowing user to click buttons
document.onreadystatechange = function() {
    if (document.readyState == 'interactive') {
        // Initialize buttons
        var buttons = document.getElementsByClassName('key');
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', ButtonLogic);
        }
    }
}


function ButtonLogic(evt) {
    var BtnValue = evt.target.innerHTML;

    if ((0 <= BtnValue && BtnValue <= 9) || BtnValue === '.') {
        ProcessNumber(BtnValue);
    }
    else {
        ProcessFunction(BtnValue);
    }

    LastClicked = BtnValue;
}


function ProcessNumber(value) {

    var skipStuff = false;

    if (value == "." && SelectedFunc == null && (toString(value1).indexOf('.') !== -1)) {
        skipStuff = true;
    }
    if (value == "." && SelectedFunc != null && (toString(value2).indexOf('.') !== -1)) {
        skipStuff = true;
    }

    if (!skipStuff) {
        if (LastClicked == '=') {
            Clear();
        }
        if (SelectedFunc == null) {
            value1 = value1 + value;
            display.innerHTML = value1;
        }
        else {
            value2 = value2 + value;
            display.innerHTML = value2;
        }
    }
}

function ProcessFunction(value) {

    console.log(value);
    if (value == 'C') {
        Clear();
    }
    else {
        if (value2 != '') {
            Calculate();
        }
        if (value != '=') {
            SelectedFunc = value;
        }
    }
}


function Calculate() {
    var solution = 0;
    // Run: solution = value1 SelectedFunc value2
    switch (SelectedFunc) {
        case "/":
            solution = Number(value1) / Number(value2);
            break;
        case "X":
            solution = Number(value1) * Number(value2);
            break;
        case "-":
            solution = Number(value1) - Number(value2);
            break;
        case "+":
            solution = Number(value1) + Number(value2);
            break;
        case "=":
            // ???
            break;
        case "C":
            Clear();
            break;
        default:
            alert("No function selected!");
            break;
    }


    // Update display with solution
    display.innerHTML = solution;
    value1 = solution;
    value2 = '';
    SelectedFunc = null;

    // Save solution in value1
}


function Clear() {
    value1 = '';
    value2 = '';
    display.innerHTML = 0;
    SelectedFunc = null;
}
