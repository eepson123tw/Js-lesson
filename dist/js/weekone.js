console.log(`Hello js`);
// 第一題  變數練習
const target = {
    name: "Jane",
    janeold: 14,
    phoneNumber: "0955713484",
    isWakeUp: false,
}


console.log(target);
console.log(target.name, target.janeold, target.phoneNumber, target.isWakeUp);


// 第二題 ~第三題 變數命名

const min = "小明";
const store = "六角飯館";

const steakPrice = 50;
const ricePrice = 10;

let walletTotal = 200;
let cost = 0;
cost = ricePrice * 2 + steakPrice * 10;

if (walletTotal - cost >= 0) {
    console.log(`${min}買完飯了,一共剩下${walletTotal - cost}元`);
} else {
    console.log(`${min}買完飯了,錢不夠要在${store}洗碗了`);
}

//第四題  布林值 變數定義

let trafficLightStatus = false;
let people = 10;
const sun = 1;
let cloud = 3;

if (!trafficLightStatus) {
    console.log(`現在是紅燈,馬路上有${people}個人,天上有${sun}個太陽,${cloud}朵雲!`)
};

//第五題 看圖宣告變數

let point = 50;
const taskTitle = "【最終試煉】 使用jQuery 打造互動性網頁動畫效果";
let passPeopleNum = 62;
let passCurrentDay = 16;
let passCurrentTime = 9;
const cardImg = "./img/*.png";

console.log(point, taskTitle, passPeopleNum, passCurrentDay, passCurrentTime, cardImg);


//第六題 變數重新賦值

let a = 1; //宣告 a 變數 賦值1
let b = 0; //宣告 b 變數 賦值0
a = 3; //a 變數重新賦值為 3 
a = b + 2; // a變數 賦值 0 + 2 目前 a重新賦值為2 
a - b; // 2 - 0 
b += 1; // b賦值 為 1  b= 0+1; 目前 b重新賦值為 1
console.log(a, b);


//第八題 愛吃的 mary

let maryAppleNum = 20;

maryAppleNum -= 5;
maryAppleNum -= 12;
maryAppleNum += 4;

console.log(`Mary還有${maryAppleNum}顆蘋果`);

//第九題 餐點庫存計算

const person = "Nick";
let bill = 0;
const hamburgerPrice = 30;
const milkPrice = 15;


bill = hamburgerPrice * 3 + milkPrice * 32;

console.log(`${person}的帳單總共${bill}元`);


//第十題
//g 字串  h 數值  i字串　ｊ　布林值　ｋ　數值  l 數值



//第十一題

let btn = document.querySelectorAll('.js__btnadd');
const span = document.querySelector('.js__cost');
let mincost = 0;

console.log(btn);
btn.forEach((item) => {

    item.addEventListener('click', function(e) {

        let cost = e.target.dataset['cost'] * 1;
        mincost += cost;

        span.innerText = mincost;

        if (mincost >= 2000) {

            alert('你也買太多了吧~~~')
            return;

        } else {
            console.log(`小明還能買!!!`)
        }

    })


})