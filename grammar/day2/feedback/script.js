let red = 255;
let green = 255;
let blue = 255;


const datetime_ymd = () => {
  let date = new Date();
  str = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
  document.getElementById('date').innerHTML = str;
}

const datetime_hms = () => {
  let date = new Date();
  str = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  document.getElementById('date').innerHTML = str;
}

const refresh_variable = () => {
  let input = document.getElementById('variable_input').value;
  document.getElementById('variable').innerHTML = input;
}

const random_color = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const random_backgroundcolor = () => {
  red = random_color(0,255);
  green = random_color(0,255);
  blue = random_color(0,255);
  colorvalue = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  document.getElementById('colorCode').innerHTML = colorvalue.toUpperCase();
  document.body.style.backgroundColor = colorvalue;
}

const reset_backgroundcolor = () => {
  red = 255, green = 255, blue = 255;
  colorvalue = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
  document.getElementById('colorCode').innerHTML = colorvalue.toUpperCase();
  document.body.style.backgroundColor = colorvalue;
}
