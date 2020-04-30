// On clicking either 0 or 1, add the corresponding text to the result inner html
// On clicking any operator, add that operator text to the result inner html
// On clicking button clear, clear the results field
// On clicking equals, evaluate the expression

document.getElementById('btn0').addEventListener('click', function()
{
    document.getElementById('res').insertAdjacentHTML('beforeend', '0');
});

document.getElementById('btn1').addEventListener('click', function()
{
    document.getElementById('res').insertAdjacentHTML('beforeend', '1');
});

function operatorAction(eve)
{
    let btn = eve.target;
    // Add the inner html for the operator buttons into the results field
    document.getElementById('res').insertAdjacentHTML('beforeend', btn.innerHTML);
}

document.getElementById('btnSum').onclick = operatorAction;
document.getElementById('btnMul').onclick = operatorAction;
document.getElementById('btnDiv').onclick = operatorAction;
document.getElementById('btnSub').onclick = operatorAction;

document.getElementById('btnClr').onclick = function()
{
    (document.getElementById('res').innerHTML) = "";
};
document.getElementById('btnEql').onclick = (e) =>
{
    // e.target.textContent = operatorActio
    //(document.getElementById('res').innerHTML) = "";
    (document.getElementById('res').innerHTML) = "result";
};
function equal() {
    operand1 = parseInt(operand1, 2);
    operand2 = parseInt(operand2, 2);
    switch(operator) {
        case '+':
            operand1 += operand2;
            break;
        case '-':
            operand1 -= operand2;
            break;
        case '*':
            operand1 *= operand2;
            break;
        case '/':
            if(operand2)
                operand1 /= operand2;
            break;
        default:
            break;
    }
    operand1 = parseInt(operand1).toString(2);
    operator = operand2 = '';
    renderResDiv();
}

function assignOperator(val) {
    operator = val;
    renderResDiv();
}

function renderResDiv() {
    res.innerHTML = operand1 + operator + operand2;
}

