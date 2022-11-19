function ex1() {
  var sum = 0;
  var i = 0;

  while (sum <= 10000) {
    i++;
    sum += i;
  }
  console.log(i, sum);
}
ex1();

function handleCalSum() {
  var num1 = +document.getElementById("num1").value;
  var num2 = +document.getElementById("num2").value;
  var sum = 0;

  for (var i = 0; i <= num2; i++) {
    sum += Math.pow(num1, i);
  }
  console.log(sum);
  document.getElementById("sum").innerHTML = sum;
}

function handleCal() {
  var number = document.getElementById("number").value;
  var result = 1;

  for (var i = 1; i <= number; i++) {
    result *= i;
  }
  console.log(result);
  document.getElementById("factorial").innerHTML = result;
}

function handleRenderDiv() {
  var type = 0;
  var render = "";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      type = 1;
      render += `<div style="background-color: red;">div chẵn</div>`;
    } else {
      type = 2;
      render += `<div style="background-color: blue;">div lẻ</div>`;
    }
  }
  document.getElementById("divRender").innerHTML = render;
}

function checkInteger(n) {
  // Biến cờ hiệu
  var check = true;

  // Nếu n bé hơn 2 tức là không phải số nguyên tố
  if (n < 2) {
    check = false;
  } else if (n == 2) {
    check = true;
  } else if (n % 2 == 0) {
    check = false;
  } else {
    // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
    for (var i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i == 0) {
        check = false;
        break;
      }
    }
  }
return check

  
}

function handleRenderNumber() {
  var num = document.getElementById("number3").value;
  var integerNum = "";
  num = parseInt(num);

  for (i = 1; i <= num; i++) {
    if (checkInteger(i) === true  ) {
      integerNum += i + " ";
    }
  }
  document.getElementById("renderNumber").innerHTML = integerNum;
}
