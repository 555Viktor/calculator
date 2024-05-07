// Variable declaration 
const calcDisplay = document.getElementById('calc-displayJs');
const linkElement = document.getElementById('styleLinkTag');
let operatorUsed = false;

// Functions
function appendToDisplay(n){  
    if(Number(n) || n == 0){
        calcDisplay.innerHTML += `${n}`; 
        operatorUsed = false;      
    } else if(!Number(n) && !operatorUsed){
        calcDisplay.innerHTML += `${n}`;
        operatorUsed = true; 
    }
}

function calculate(){
    try{
        calcDisplay.innerHTML = eval(calcDisplay.innerHTML)
    } catch(error){
           calcDisplay.innerHTML = 'invalid'   
    }
    
}

function resetBtn(){
    calcDisplay.innerHTML = '';
}

function deleteBtn(){
    calcDisplay.innerHTML = calcDisplay.innerHTML.slice(0,-1);
}

function switchTheme() {
    if (linkElement.href.includes('style.css')) {
        linkElement.href = 'style2.css';
    } else {
        linkElement.href = 'style.css';
    }
}

