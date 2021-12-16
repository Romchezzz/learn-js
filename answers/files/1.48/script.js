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
  switch (operator) {
    case'ADDITION':
      expression =  (`(${expression || leftOperand} + ${rightOperand})`);
      result = leftOperand + rightOperand;
      break;

    case'SUBTRACTION':
      expression = (`(${expression || leftOperand} - ${rightOperand})`);
      result = leftOperand - rightOperand
       break;

    case'MULTIPLICATION':
      expression = (`(${expression || leftOperand} * ${rightOperand})`);
      result = leftOperand * rightOperand
      break;

    case'EXPONENTIATION':
      expression = (`(${expression || leftOperand}xª ${rightOperand})`);
      result = leftOperand ** rightOperand
      break;

    case'DIVISION':
      expression = (`(${expression || leftOperand}/ ${rightOperand})`);
      result = leftOperand / rightOperand
      break;

    case'MODULUS':
      expression = (`(${expression || leftOperand}% ${rightOperand})`);
      result = leftOperand % rightOperand
      break;

    case'ROOT':
      expression = (`(${expression || leftOperand}√ ${rightOperand})`);
      result = rightOperand ** (1/leftOperand)
      break;

  }

  setExpression(`${expression} = ${result}` && '');
  setResult(result);
}

function onClear () {
  expression = '';
}


