const btn_cal = document.getElementById('calculate');
const btn_reset = document.getElementById('reset');

function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

btn_cal.addEventListener('click', (e) => {
  e.preventDefault();
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  if (!isNumber(num1) || !isNumber(num2)) {
    alert('숫자를 입력하세요.');
    return;
  }

  const op = document.getElementById('operator').value;
  const res = document.getElementById('result');

  let result;
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert('0으로 나눌 수 없습니다.');
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert('올바른 연산자를 입력하세요.');
      return;
  }

  res.value = result.toString();
  console.log(res.value);
});

btn_reset.addEventListener('click', () => {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('operator').value = '';
  document.getElementById('result').value = '';
});
