let leftOperand;
let rightOperand;
let result;
let operator;
let expression;


function onLeftOperandChange(value) {
  leftOperand = +value;
}

function onRightOperandChange(value) {
  rightOperand = +value;
}

function onOperatorChange(value) {
  operator = value;
}

function onSubmit () {
    let previousExp = expression || leftOperand;
  switch (operator) {
    case 'ADDITION':
      expression =  (`(${previousExp} + ${rightOperand})`);
      result = leftOperand + rightOperand;
      break;

    case 'SUBTRACTION':
      expression = (`(${previousExp} - ${rightOperand})`);
      result = leftOperand - rightOperand;
       break;

    case 'MULTIPLICATION':
      expression = (`(${previousExp} * ${rightOperand})`);
      result = leftOperand * rightOperand;
      break;

    case 'EXPONENTIATION':
      expression = (`(${previousExp}xª ${rightOperand})`);
      result = leftOperand ** rightOperand;
      break;

    case 'DIVISION':
      expression = (`(${previousExp}/ ${rightOperand})`);
      result = leftOperand / rightOperand;
      break;

    case 'MODULUS':
      expression = (`(${previousExp}% ${rightOperand})`);
      result = leftOperand % rightOperand;
      break;

    case 'ROOT':
      expression = (`(${previousExp}√ ${rightOperand})`);
      result = rightOperand ** (1/leftOperand);
      break;

  }

  setExpression (`${expression} = ${result}`);
  setResult (result);
}

function onClear () {
  expression = '';
}


