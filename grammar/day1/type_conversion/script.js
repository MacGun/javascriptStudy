var strnum = "1";
var int = 1;
const zero = 0;
var float = 3.14;

document.getElementById('num').innerHTML = int;

function changeTime_dateTime() {
  var date = new Date();
  document.getElementById("timetag").innerHTML = date;
}

function changeTime_date() {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDay();
  var str = year+"-"+month+"-"+day;
  document.getElementById('timetag').innerHTML = str;
}

function changeTime_time() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var str = hours + ":" + minutes + ":" + seconds;
  document.getElementById('timetag').innerHTML = str;
}

function changeQuote() {
  var str = new String();
  str = "오늘 할 일을 내일로 미루지 말자.";
  document.getElementById("quote").innerHTML = str;
}

function putInput() {
  var str = new String();
  str = "집가고싶다.";
  document.getElementById('text').value = str;
}

function delInput() {
  document.getElementById('text').value = "";
}

function plus1Num() {
  int += 1;
  document.getElementById('num').innerHTML = int;
}

function minus1Num() {
  int -= 1;
  document.getElementById('num').innerHTML = int;
}

function resetNum() {
  int = zero;
  document.getElementById('num').innerHTML = int;
}
