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
  var num1 = document.getElementById("num1");
  var num2 = document.getElementById("num2");
  var sum = 0;

  for (var i = 0; i <= num2; i++) {
    sum += Math.pow(num1, i);
  }
  console.log(sum);
  document.getElementById("sum").innerHTML = sum ;
}
