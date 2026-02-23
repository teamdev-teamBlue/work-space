// Utility functions
function displayNone(ele){
    ele.classList.remove("d-block");
    ele.classList.add("d-none");
}

function displayBlock(ele){
    ele.classList.remove("d-none");
    ele.classList.add("d-block");
}

// DOM elements
const pages = {
    topPage:document.getElementById("topPage"),
    fortuneResultPage:document.getElementById("fortuneResult")
}

// Data
const comments = [
    "きちが、とても大きくなりました。頭を雲の上に出し、雷さまを下に聞くサイズ感です。",
    "きちが、やや大きくなりました。もっと大きくなれると主張しています。",
    "普通のサイズのきちです。やや小柄でふわふわしていてかわいいですね。",
    "きちが、とても小さくなりました。胸ポケットに入れられるサイズ感です。",    
    "きちが、末っ子のきちょうだいを紹介してくれました。どうやら照れ屋さんのようです。"
  ]; 

const typesOfFortunes = [
    {fortune:"大吉", fortuneImage:"./img/daikichi.png", fortuneComment: comments[0]}, 
    {fortune:"中吉", fortuneImage:"./img/chukichi.png", fortuneComment: comments[1]}, 
    {fortune:"吉", fortuneImage:"./img/kichi.png", fortuneComment: comments[2]},
    {fortune:"小吉", fortuneImage:"./img/shokichi.png", fortuneComment: comments[3]}, 
    {fortune:"末吉", fortuneImage:"./img/suekichi.png", fortuneComment: comments[4]}
];

const fortuneluckyColor = [
  "赤色",
  "青色",
  "黄色",
  "緑色",
  "ピンク色",
  "白色",
  "黒色",
  "紫色",
  "無彩色"
];
const fortuneluckyDrink = [
  "ジンジャーティー",
  "カモミールティー",
  "ホットココア",
  "レモンスカッシュ",
  "アイス抹茶ラテ",
  "ベリーソーダ",
  "ハーブウォーター",
  "黒豆茶",
  "シナモンミルク",
  "緑茶",
  "麦茶",
  "甘酒",
  "コーヒー",
  "水"
];
const fortuneluckyAction = [
  "深呼吸する",
  "笑顔をつくる",
  "早歩きする",
  "手を洗う",
  "背伸びをする",
  "メモを書く",
  "水を飲む",
  "窓を開ける",
  "散歩",
  "買い物",
  "お昼寝",
  "読書",
  "おしゃべり"
];

// FortuneSlip
class FortuneSlip {
    constructor(fortuneResult){
        this.fortune = fortuneResult.fortune;
        this.fortuneImage = fortuneResult.fortuneImage;
        this.fortuneComment = fortuneResult.fortuneComment;
        this.fortuneluckyColor = FortuneSlip.randomSelect(fortuneluckyColor);
        this.fortuneluckyDrink = FortuneSlip.randomSelect(fortuneluckyDrink);
        this.fortuneluckyAction = FortuneSlip.randomSelect(fortuneluckyAction);
    }

    static randomSelect(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    }

    toString(){
        return[
            `【${this.fortune}】`,
            `画像: ${this.fortuneImage}`,
            `コメント: ${this.fortuneComment}`,
            `ラッキーカラー: ${this.fortuneluckyColor}`,
            `ラッキードリンク: ${this.fortuneluckyDrink}`,
            `ラッキーアクション: ${this.fortuneluckyAction}`
        ].join("\n");
    }
}

function createFortuneSlip(){
    const fortuneResult = FortuneSlip.randomSelect(typesOfFortunes);
    return new FortuneSlip(fortuneResult)
}

// DOM update helpers
function setText(id, text){
    document.getElementById(id).textContent = text;
}

function setImage(id, src){
    document.getElementById(id).src = src;
}

function createFortuneSlipPage(fortuneSlip){
    setText("fortune", fortuneSlip.fortune);
    setText("fortuneComment", fortuneSlip.fortuneComment);
    setImage("resultImg", fortuneSlip.fortuneImage);
    setText("luckyColor", fortuneSlip.fortuneluckyColor);
    setText("luckyDrink", fortuneSlip.fortuneluckyDrink);
    setText("luckyAction", fortuneSlip.fortuneluckyAction);
}

// Page navigation
function gotoTopPage(){
    displayNone(pages.topPage);
    displayBlock(pages.fortuneResultPage);
}

function backToTopPage(){
    displayNone(pages.fortuneResultPage);
    displayBlock(pages.topPage);
}

// --------------
// Main
// --------------
function drawFortuneSlip(){    
    const fortuneSlip = createFortuneSlip();
    console.log(fortuneSlip.toString());
    createFortuneSlipPage(fortuneSlip);
    gotoTopPage()    
}