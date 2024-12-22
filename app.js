

function getelement(str){
    var element=document.getElementById(str)
    return element
}

let currentValue ='';// Define inputField
const inputField = getelement('inputField');

function getnumbers(){
    number=document.querySelectorAll('.number')
    number.forEach((num)=>{
        num.addEventListener('click',()=>{
            currentValue+=num.textContent
            updateinputfield(currentValue)
        })
    })
}
getnumbers()

// Add event listeners to number buttons


// Add event listeners to operator buttons
add.addEventListener('click', () => setOperator('+'));
sub.addEventListener('click', () => setOperator('-'));
mul.addEventListener('click', () => setOperator('*'));

function setOperator(op) {
    if (currentValue !== '') {
        result = parseFloat(currentValue);
        currentValue = '';
        operator = op;
        updateinputfield('');
    }
}

// Function to handle equals button
const equals = getelement('=');
equals.addEventListener('click', () => {
    if (currentValue !== '' && operator !== null) {
        const currentNumber = parseFloat(currentValue);
        switch (operator) {
            case '+':
                result += currentNumber;
                break;
            case '-':
                result -= currentNumber;
                break;
            case '*':
                result *= currentNumber;
                break;
            // Add more cases for other operators
        }
        updateinputfield(result);
        currentValue = '';
        operator = null;
    }
});

let result=0;
let operator = null;

const updateinputfield=(value)=>{
    inputField.value=value;
}

// Function to handle clear button
const clear = getelement('clr');
clear.addEventListener('click', () => {
    currentValue = '';
    operator = null;
    result = 0;
    updateinputfield('');
});