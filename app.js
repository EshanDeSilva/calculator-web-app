let value = 0;
let txt = document.getElementById("txt");
txt.value = 0;
let isDecimal = false;

function ac() {
  value = 0;
  txt.value = value;
  count = 0;
  isDecimal = false;
}
function clearValue(){
  if(!isDecimal){
    value /= 10;
    value = parseInt(value);
    txt.value = value;
    // console.log(value);
  }else{
    let primeNumber = value.split(".")[0];
    // console.log(primeNumber);
    let floatingPoints = value.split(".")[1];
    // console.log(floatingPoints);
    floatingPoints /= 10;
    floatingPoints = parseInt(floatingPoints);
    if(floatingPoints>0){
      value = primeNumber+"."+floatingPoints;
      txt.value = value;
    }else{
      value = primeNumber;
      txt.value = value;
      isDecimal = false;
      count = 0;
    }
    // console.log(value);
  }
}
function zero() {
  if (isDecimal) {
    value = value + "0";
    // console.log(value);
    txt.value = value;
  } else {
    value *= 10;
    txt.value = value;
  }
}
function one() {
  if (isDecimal) {
    value = value + "1";
    // console.log(value);
    txt.value = value;
  } else{
    value *= 10;
    value += 1;
    txt.value = value;
  }
}
function two() {
  if (isDecimal) {
    value = value + "2";
    // console.log(value);
    txt.value = value;
  } else{
    value *= 10;
    value += 2;
    txt.value = value;
  }
}
function three() {
  if (isDecimal) {
    value = value + "3";
    // console.log(value);
    txt.value = value;
  } else{
    value *= 10;
    value += 3;
    txt.value = value;
  }
}
function four() {
  if (isDecimal) {
    value = value + "4";
    // console.log(value);
    txt.value = value;
  } else{
    value *= 10;
    value += 4;
    txt.value = value;
  }
}
function five() {
  if (isDecimal) {
    value = value + "5";
    // console.log(value);
    txt.value = value;
  } else{
    value *= 10;
    value += 5;
    txt.value = value;
  }
}
function six() {
  if (isDecimal) {
    value = value + "6";
    // console.log(value);
    txt.value = value;
  } else{
    value *= 10;
    value += 6;
    txt.value = value;
  }
}
function seven() {
  if (isDecimal) {
    value = value + "7";
    // console.log(value);
    txt.value = value;
  } else{
    value *= 10;
    value += 7;
    txt.value = value;
  }
}
function eight() {
  if (isDecimal) {
    value = value + "8";
    // console.log(value);
    txt.value = value;
  } else{
    value *= 10;
    value += 8;
    txt.value = value;
  }
}
function nine() {
  if (isDecimal) {
    value = value + "9";
    // console.log(value);
    txt.value = value;
  } else{
    value *= 10;
    value += 9;
    txt.value = value;
  }
}
function doubleZero() {
  if (isDecimal) {
    value = value + "00";
    // console.log(value);
    txt.value = value;
  } else{
    value *= 100;
    txt.value = value;
  }
}
let count = 0;
function point() {
  if(count===0){
    count = 1;
    isDecimal = !isDecimal;
    if(isDecimal){
      value = value + ".";
      txt.value = value;
    }
  }
}
