var doc={
  write:function(string1, string2){
    document.querySelector(string1).innerHTML = string2;
  },
  display:function(string1, string2){
    document.querySelector(string1).style.display=string2;
  }
}

var setting={
  min:1,
  max:100,
  attempts:6,
  now_attempts:6
}

var answer = Math.floor(Math.random() * (setting.max - setting.min + + 1)) + setting.min;

function showDiscription(){
  doc.display('.game', 'none');
  doc.display('.instruction', 'block');
}

function gameStart(){
  doc.display('.game', 'block');
  doc.display('.instruction', 'none');
}

function reset(){
  answer = Math.floor(Math.random() * (setting.max - setting.min + + 1)) + setting.min;
  doc.write('.counting',String(setting.attempts) + '회 남았습니다.');
  setting.now_attempts = setting.attempts;
}

function process(num){

  if(answer < num){
    doc.write('.message', '숫자를 낮춰주세요');
    return;
  } else if(answer > num) {
    doc.write('.message', '숫자를 높여주세요');
    return;
  } else if(answer == num) {
    doc.write('.message', '정답입니다!');
    reset();
  }

  if(setting.now_attempts == 0){
    doc.write('.message', '정답은 ' + String(answer) + '입니다..');
    reset();
    return;
  }
}

function submit(){
  num = document.querySelector('.inputNum').value;
  if(num < setting.min || num > setting.max){
    alert("범위에 맞게 숫자를 입력해주세요");
    return;
  }
  setting.now_attempts-=1;
  doc.write('.counting',String(setting.now_attempts) + '회 남았습니다.');

  process(num);
}
