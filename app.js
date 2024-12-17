
const inputField = document.getElementById('calculator-input');

function getelement(str){
    var element=document.getElementById(str)
    return element
}

let currentValue = '';
let result=0;
let operator = null;

const updateinputfield=(value)=>{
    inputField.value=value;
}

var no_1=getelement('1')
var no_2=getelement('2')
var no_3=getelement('3')
var no_4=getelement('4')
var no_5=getelement('5')
var no_6=getelement('6')
var no_7=getelement('7')
var no_8=getelement('8')
var no_9=getelement('9')
var no_0=getelement('0')


//visuals




//OPERATORS
var add=getelement('+')
var sub=getelement('-')
var mul=getelement('*')
var divide=getelement('/')
var solve=getelement('=')
var clear=getelement('clr')

//numbers
no_1.addEventListener('click', ()=>{ currentValue+='1'; updateinputfield(currentValue)})
no_2.addEventListener('click', ()=>{ currentValue+='2'; updateinputfield(currentValue)})
no_3.addEventListener('click', ()=>{ currentValue+='3'; updateinputfield(currentValue)})
no_4.addEventListener('click', ()=>{ currentValue+='4'; updateinputfield(currentValue)})
no_5.addEventListener('click', ()=>{ currentValue+='5'; updateinputfield(currentValue)})
no_6.addEventListener('click', ()=>{ currentValue+='6'; updateinputfield(currentValue)})
no_7.addEventListener('click', ()=>{ currentValue+='7'; updateinputfield(currentValue)})
no_8.addEventListener('click', ()=>{ currentValue+='8'; updateinputfield(currentValue)})
no_9.addEventListener('click', ()=>{ currentValue+='9'; updateinputfield(currentValue)})
no_0.addEventListener('click', ()=>{ currentValue+='0'; updateinputfield(currentValue)})


//operators
add.addEventListener('click',()=>{

    if (currentValue){
        
        result+=parseFloat(currentValue)
        currentValue=''
        updateinputfield(result)

    }
})

sub.addEventListener('click',()=>{

    if (currentValue){
        previousvalue=currentValue
        result=result-parseFloat(currentValue)
        currentValue=''
        updateinputfield(result)

    }
})
mul.addEventListener('click',()=>{

    if (currentValue){
        result*=parseFloat(currentValue)
        currentValue=''
        updateinputfield(result)
    }
})
divide.addEventListener('click',()=>{

    if (currentValue){
        previousvalue=currentValue
        result=parseFloat((previousvalue)/currentValue)
        currentValue=''
        updateinputfield(result)
    }
})


solve.addEventListener(
    'click',()=>{
        if (currentValue) {
            result += parseFloat(currentValue); // Add the last entered number
            currentValue = '';                  // Reset current value
            updateinputfield(result);           // Show the final result
        }
        else if (operator='*'){
            result=result*parseFloat(currentValue)
            currentValue=''
            updateinputfield(result)
        }
       updateinputfield(result)
        operator = null; 
    }
)
clear.addEventListener('click', () => {
    currentValue = ''; // Reset everything
    result = 0;
    operator = null;
    updateinputfield(''); // Clear the input field
});




