var red = 255;
var green = 255;
var blue = 255;
var colorTag;

function refresh(color) {
  document.getElementById("colorValue").innerHTML = color;
  void(document.body.style.backgroundColor=color);
}

function more5red(){
  if(red >= 255){
    red = 255;
  }else{
    red += 5;
    colorTag = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
    refresh(colorTag);
  }
}

function more5green(){
  if(green >= 255){
    green = 255;
  }else{
    green += 5;
    colorTag = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
    refresh(colorTag);
  }
}

function more5blue(){
  if(blue >= 255){
    blue = 255;
  }else{
    blue += 255;
    colorTag = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
    refresh(colorTag);
  }
}

function less5red(){
  if (red <= 0){
    red = 0;
  }else{
    red -= 5;
    colorTag = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
    refresh(colorTag);
  }
}

function less5green(){
  if (green <= 0){
    green = 0;
  }else{
    green -= 5;
    colorTag = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
    refresh(colorTag);
  }
}

function less5blue(){
  if(blue <= 0){
    blue = 0;
  }else{
    blue -= 5;
    colorTag = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
    refresh(colorTag);
  }
}

function resetWhite() {
  red = 255, green = 255, blue = 255;
  colorTag = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
  refresh(colorTag);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
}

function randomColor(){
  red = getRandomIntInclusive(0, 255);
  green = getRandomIntInclusive(0, 255);
  blue = getRandomIntInclusive(0, 255);
  colorTag = "#"+red.toString(16)+green.toString(16)+blue.toString(16);
  refresh(colorTag);
}
