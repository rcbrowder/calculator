var value1 = ''; // First number user entered
var value2 = ''; // Second number user entered
var SelectedFunc = null; // Function button user clicked
var display = document.getElementById('display')

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
}


function ProcessNumber(value) {
    value1 = value1 + value;
    display.innerHTML = value1;
}

function ProcessFunction(value) {
    SelectedFunc = value;
    console.log('Function clicked: ' + value);
}
