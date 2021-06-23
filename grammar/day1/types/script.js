var num=10;
var myName="이정건";
var str;
var firstNum = 10;
var secondNum = 10.00;
var thirdNum = 10e6;
var fourthNum = 10e-6
var obj = {name: "이정건", age: 27, major: {first: "Business Administration", second: "Computer Engineering"}};

function changeElements() {
  document.title = "바뀐 타이틀";
  document.getElementById('head').innerHTML = "이것은 제목이여";
  document.getElementById('p_tag').innerHTML = "이것은 p 태그여";
  document.getElementById('Name').innerHTML = myName;
  document.getElementById('Number').innerHTML = firstNum;
}

function selfPr(){
  var str;
  str = "내 이름은 "+obj.name + ", 나이는 "+obj.age +"살, 전공은 " +obj.major.first+"과, "+obj.major.second+" 입니다.";
  document.getElementById('pr').innerHTML = str;
}
