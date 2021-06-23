var isgreet = false;
function printData() {
  document.getElementById('date').innerHTML = Date();
}
function printgreet() {
  if(!isgreet){
    document.getElementById('greet').innerHTML = "인사.";
    isgreet = true;
  }else{
    document.getElementById('greet').innerHTML = "";
    isgreet = false;
  }
}
// 변수가 js 파일에 있으면 조건절이 동작하지 않나?
