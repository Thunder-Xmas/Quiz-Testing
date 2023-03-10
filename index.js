

const prefecturalCapital = [
    {
      id: "01",
      question: "北海道の県庁所在地は？",
      answer01: "札幌",/*正解の選択肢"*/
      answer02: "福島",
      answer03: "前橋",
      answer04: "秋田",
      answer05: "坂戸",
    },
    {
      id: "02",
      question: "青森県の県庁所在地は？",
      answer01: "青森",
      answer02: "前橋",
      answer03: "秋田",
      answer04: "札幌",
      answer05: "坂戸",
    },
    {
      id: "03",
      question: "岩手県の県庁所在地は？",
      answer01: "盛岡",
      answer02: "福島",
      answer03: "仙台",
      answer04: "山形",
      answer05: "坂戸",
    },
    {
      id: "04",
      question: "宮城県の県庁所在地は？",
      answer01: "仙台",
      answer02: "札幌",
      answer03: "前橋",
      answer04: "水戸",
      answer05: "坂戸",
    },
    {
      id: "05",
      question: "秋田県の県庁所在地は？",
      answer01: "秋田",
      answer02: "盛岡",
      answer03: "青森",
      answer04: "札幌",
      answer05: "坂戸",
    },
  ];

let quiz_number = 5;

let CurrentQuestionNo = 0;
let point = 0;
let step = 0; //0:start 1:quiz_now
let quiz_shuffle = [0,1,2,3,4];
let answer_shuffle = [0,1,2,3,4];
let n2h;
let buf;
let last_answer = 0;

function button1(){
  if(step<(quiz_number+3) && step>1){
    if(document.getElementById("quiz-text01").innerHTML == last_answer){
      alert("正解！　「 "+ last_answer +" 」");
      point+=1;
    } 
    if(document.getElementById("quiz-text01").innerHTML != last_answer){
      alert("はずれ！　正解は 「 "+ last_answer +" 」");
    } 
  }
  quizClicked();
}
function button2(){
  if(step<(quiz_number+3) && step>1){
    if(document.getElementById("quiz-text02").innerHTML == last_answer){
      alert("正解！　「 "+ last_answer +" 」");
      point+=1;
    } 
    if(document.getElementById("quiz-text02").innerHTML != last_answer){
      alert("はずれ！　正解は 「 "+ last_answer +" 」");
    } 
  }
  quizClicked();
}
function button3(){
  if(step<(quiz_number+3) && step>1){
    if(document.getElementById("quiz-text03").innerHTML == last_answer){
      alert("正解！　「 "+ last_answer +" 」");
      point+=1;
    } 
    if(document.getElementById("quiz-text03").innerHTML != last_answer){
      alert("はずれ！　正解は 「 "+ last_answer +" 」");
    } 
  }
  quizClicked();
}
function button4(){
  if(step<(quiz_number+3) && step>1){
    if(document.getElementById("quiz-text04").innerHTML == last_answer){
      alert("正解！　「 "+ last_answer +" 」");
      point+=1;
    } 
    if(document.getElementById("quiz-text04").innerHTML != last_answer){
      alert("はずれ！　正解は 「 "+ last_answer +" 」");
    } 
  }
  quizClicked();
}
function button5(){
  if(step<(quiz_number+3) && step>1){
    if(document.getElementById("quiz-text05").innerHTML == last_answer){
      alert("正解！　「 "+ last_answer +" 」");
      point+=1;
    } 
    if(document.getElementById("quiz-text05").innerHTML != last_answer){
      alert("はずれ！　正解は 「 "+ last_answer +" 」");
    } 
  }
  quizClicked();
}

function quizClicked(){
  
  //alert("Check A");
  
  if(step==0){
    
    for(let i=0; i<quiz_number; i++){
      let random = Math.floor(Math.random() * (quiz_number));
      let shuf_buf = 0;
      shuf_buf = quiz_shuffle[random];
      quiz_shuffle[random] = quiz_shuffle[i];
      quiz_shuffle[i] = shuf_buf;
    }
    for(let i=0; i<5; i++){
      let random = Math.floor(Math.random() * (5));
      let shuf_buf = 0;
      shuf_buf = answer_shuffle[random];
      answer_shuffle[random] = answer_shuffle[i];
      answer_shuffle[i] = shuf_buf;
    }

    step += 1;
  }
  

  if(step>quiz_number){
    
    buf = document.getElementById("IDquiz-question-number");
    buf.innerHTML = "結果発表";

    buf = document.getElementById("IDquiz-question");
    if(point<quiz_number)buf.innerHTML = point+"問正解！";
    if(point==quiz_number)buf.innerHTML = "全問正解！　おめでとう";
    
    
    buf = document.getElementById("quiz-text01");
    buf.innerHTML = "---";
    buf = document.getElementById("quiz-text02");
    buf.innerHTML = "---";
    buf = document.getElementById("quiz-text03");
    buf.innerHTML = "---";
    buf = document.getElementById("quiz-text04");
    buf.innerHTML = "---";
    buf = document.getElementById("quiz-text05");
    buf.innerHTML = "---";
      
    buf = document.getElementById("quiz-rw");
    buf.innerHTML = "リロードしてもう一度挑戦！";

    step+=1;
    
  }

  if(step<=quiz_number){

    for(let i=0; i<5; i++){
      let random = Math.floor(Math.random() * (5));
      let shuf_buf = 0;
      shuf_buf = answer_shuffle[random];
      answer_shuffle[random] = answer_shuffle[i];
      answer_shuffle[i] = shuf_buf;
    }
    
    buf = document.getElementById("IDquiz-question-number");
    buf.innerHTML = "問題" + step;
    CurrentQuestionNo = prefecturalCapital[quiz_shuffle[step-1]].id;
    
    buf = document.getElementById("IDquiz-question");
    buf.innerHTML = prefecturalCapital[quiz_shuffle[step-1]].question;
    
    buf = document.getElementById("quiz-text01");
    n2h=answer_shuffle[0];
    numToHTML();
    
    buf = document.getElementById("quiz-text02");
    n2h=answer_shuffle[1];
    numToHTML();
    
    buf = document.getElementById("quiz-text03");
    n2h=answer_shuffle[2];
    numToHTML();
    
    buf = document.getElementById("quiz-text04");
    n2h=answer_shuffle[3];
    numToHTML();
    
    buf = document.getElementById("quiz-text05");
    n2h=answer_shuffle[4];
    numToHTML();
    
    buf = document.getElementById("quiz-rw");
    buf.innerHTML = quiz_shuffle[0]+", "+quiz_shuffle[1]+", "+quiz_shuffle[2]+", "+quiz_shuffle[3]+", "+quiz_shuffle[4];

    last_answer = prefecturalCapital[quiz_shuffle[step-1]].answer01
    
    step+=1;
    
  }
  
}

function numToHTML(){
  if(n2h==0)  buf.innerHTML = prefecturalCapital[quiz_shuffle[step-1]].answer01;
  if(n2h==1)  buf.innerHTML = prefecturalCapital[quiz_shuffle[step-1]].answer02;
  if(n2h==2)  buf.innerHTML = prefecturalCapital[quiz_shuffle[step-1]].answer03;
  if(n2h==3)  buf.innerHTML = prefecturalCapital[quiz_shuffle[step-1]].answer04;
  if(n2h==4)  buf.innerHTML = prefecturalCapital[quiz_shuffle[step-1]].answer05;

  
}
