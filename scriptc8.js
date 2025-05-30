function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function calculate() {
    try {
        const display = document.getElementById('display');
        const result = eval(display.value.replace(/Math.pow/g, 'pow')); 
        display.value = result;

        // Add animation class to display
        display.classList.add('result-animation');

        // Remove the animation class after the animation ends
        setTimeout(() => {
            display.classList.remove('result-animation');
        }, 500);
    } catch (error) {
        display.value = "Error";
    }
}

function pow(base, exponent) {
    return Math.pow(base, exponent);
}

function memoryClear() {
    memoryValue = 0;
}

function memoryRecall() {
    const display = document.getElementById('display');
    display.value += memoryValue;
}

function memoryAdd() {
    const display = document.getElementById('display');
    memoryValue += parseFloat(display.value) || 0;
}

function memorySubtract() {
    const display = document.getElementById('display');
    memoryValue -= parseFloat(display.value) || 0;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Functions for special buttons
function powerOf10() {
    const display = document.getElementById('display');
    display.value = `Math.pow(10,${display.value})`;
    calculate();  // Directly calculate the result
}

function powerOfX() {
    const display = document.getElementById('display');
    display.value += '**'; 
}

function reciprocal() {
    const display = document.getElementById('display');
    display.value = `1/(${display.value})`;
    calculate();  
}


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        calculate();
    }
});

function factorial() {
    const display = document.getElementById('display');
    let n = parseInt(display.value);
    
    if (n < 0) {
        display.value = "Error";
        return;
    }
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    display.value = result;
}

function square() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    display.value = Math.pow(value, 2);
}

function cube() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    display.value = Math.pow(value, 3);
}


