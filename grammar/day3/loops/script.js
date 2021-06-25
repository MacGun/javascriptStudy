const sleep = (ms) => {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

const loop_for = () => {
  let start = document.getElementById("start").value;
  let end = document.getElementById("end").value;
  for (let i = start; i < end+1; i++){
    document.getElementById("number").innerHTML = i;
    sleep(3);
  }
}

const get_random_int = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min+1)) + min;
}

const change_random_num = () => {
  min = Number(document.getElementById("start").value);
  max = Number(document.getElementById("end").value);
  document.getElementById("number").innerHTML = get_random_int(min, max);
}
