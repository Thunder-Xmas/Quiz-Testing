

const prefecturalCapital = [
    {
      id: "01",
      question: "北海道の県庁所在地は？",
      answer01: "札幌",/*正解の選択肢"*/
      answer02: "福島",
      answer03: "前橋",
      answer04: "秋田",
      answer05: "秋田",
    },
    {
      id: "02",
      question: "青森県の県庁所在地は？",
      answer01: "青森",
      answer02: "前橋",
      answer03: "秋田",
      answer04: "札幌",
      answer05: "秋田",
    },
    {
      id: "03",
      question: "岩手県の県庁所在地は？",
      answer01: "盛岡",
      answer02: "福島",
      answer03: "仙台",
      answer04: "山形",
      answer05: "秋田",
    },
    {
      id: "04",
      question: "宮城県の県庁所在地は？",
      answer01: "仙台",
      answer02: "札幌",
      answer03: "前橋",
      answer04: "水戸",
      answer05: "秋田",
    },
    {
      id: "05",
      question: "秋田県の県庁所在地は？",
      answer01: "秋田",
      answer02: "盛岡",
      answer03: "青森",
      answer04: "札幌",
      answer05: "秋田",
    },
  ];

import java.util.*;

let CurrentQuestionNo = 0;
let point = 0;


function button1(){
  /*
  alert("Check A");*/
  
  ArrayList<Integer> list = new ArrayList<Integer>(0,1,2,3,4,5,6,7,8,9);
  // listに値を入れる。この段階では昇順
  // シャッフルして、順番を変える
  Collections.shuffle(list);*/

  
  
  let buf = document.getElementById("IDquiz-question-number");
  buf.innerHTML = "問題" + prefecturalCapital[2].id;
  CurrentQuestionNo = prefecturalCapital[2].id;
  
  buf = document.getElementById("IDquiz-question");
  buf.innerHTML = prefecturalCapital[2].question;
  
  buf = document.getElementById("quiz-text01");
  buf.innerHTML = prefecturalCapital[2].answer01;
  
  buf = document.getElementById("quiz-text02");
  buf.innerHTML = prefecturalCapital[2].answer02;
  
  buf = document.getElementById("quiz-text03");
  buf.innerHTML = prefecturalCapital[2].answer03;
  
  buf = document.getElementById("quiz-text04");
  buf.innerHTML = prefecturalCapital[2].answer04;
  

  

  
}