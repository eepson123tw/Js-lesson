;
(function() {

    //印出資料
    const print = (val) => {
        return console.log(val);
    }

    print(5);

    //作業一 :比較運算子
    //依序告知以下 console.log 會顯示甚麼值

    let a = 4;
    let b = 4;

    print(a > 0); // true
    print(b > a); //false
    print((a + b) > 1); //true

    let c = 5;
    let d = 6;
    print(c == d); //false
    print(c !== d); //true

    let e = 8;
    let f = 5;
    print(f >= e); //false
    print(f != e); //true
    print(f == e); //false

    print(`-------------我是分界線，上方為第1題---------------`)
        //作業二 :比較運算子+強制轉型
        //依序告知以下 console.log 會顯示甚麼值?


    let g = 8;
    let h = "8";

    print(g * h == 88); //false
    print(g * h == 64); // true
    print(g * h === 64); //true

    let i = "9";
    let j = "9";

    print(i + j == 99); //true
    print(i + j === "99"); //true
    print(i + j === 99) //false

    var k = 2;
    var l = "5";

    print((k * l) >= 5); //true
    //k 型別為 數值 、 l為字串 
    //js 會轉型別 將 l轉成數值 並相乘 創造新的記憶體空間 紀錄為10;
    //故 會印出 true;
    print(`-------------我是分界線，上方為第2題---------------`)

    //作業三 :if 練習
    //最後m、n 的值為?
    //需說明原因

    let m = 1;
    if (2 > 1) {
        m = 3;
    }
    print(m); //宣告變數m後賦值 1， 進入if判斷 2是否大於1
    //，判斷結果為true，記憶體紀錄結果，並進入{}scope，重新賦值m為3;
    // m=3;
    let n = 5;
    if (true) {
        n += 10
    }
    print(n);
    //宣告變數n後賦值 5， 進入if判斷 true是否為true
    //，判斷結果為true，記憶體紀錄結果，並進入{}scope，n重新賦值n為15;
    // n=15;

    print(`-------------我是分界線，上方為第3題---------------`)

    //作業四 :if 練習
    //情境:計算金額

    //媽媽帶小明去火鍋吃到飽吃飯
    //他們看了金額，成人600元、小孩300元
    //未滿120(含)公分就免費
    //於是小明寫了些程式碼，但就做不下去了
    //一起幫小明補程式碼，計算最後他們要付多少錢


    let childHeight = 133;
    let resturantChildHeight = 120;
    let bill = 600;
    if (childHeight > resturantChildHeight) {
        bill += 300
        print(`媽媽和小明共付了${bill}元!`);
    }

    print(`-------------我是分界線，上方為第4題---------------`)

    //作業五 :if、else 練習
    //情境:好寶寶徽章

    //小華目前有三個好寶寶徽章
    //父親請他跑腿買五個東西，
    //並和他說，如果他買對，就再給他三個徽章
    //但最後他買錯了，只買了四個東西
    //請用 if else 語法， 來幫小華看看他得了多少徽章

    let badge = 3;

    const buyItem = 5;
    const huaBuyItem = 4;

    if (buyItem == huaBuyItem) {
        badge += 3;
    } else {
        print(`小華目前有${badge}個徽章`);
    }

    print(`-------------我是分界線，上方為第5題---------------`)

    //作業六 :邏輯運算子
    //請依序回答以下console.log 的值為?

    let o = 200;
    let p = 300;

    print(o == 200 || p == 300); //true o==200判斷為true  因使用||邏輯判斷子 故 之後程式碼不會執行 直接印出 true;
    print(o !== 200 || p !== 300); //false o!==200判斷為false  因使用||邏輯判斷子  前段程式碼false　進入後續程式碼判斷　也為false故印出false
    print(o == 200 && p == 300); //true o==200判斷為true  因使用&&邏輯判斷子 故 程式碼也需要判斷是否為true 因後方程式碼也為true 故印出 true;

    //以下觀察是否有達成折扣條件

    let hamPrice = 50;
    let hamNum = 20;
    let isSale = 3000 <= hamPrice * hamNum || hamNum > 10;

    print(isSale); //true
    //因使用||邏輯判斷子 雖前方程式碼 3000<= 50*20 為false
    // 但程式碼20>10 為true 故會直接印出 true;
    print(`-------------我是分界線，上方為第6題---------------`)
        //作業七:邏輯觀察
        //請試著加上 if 判斷 讓下面三道任務可以正常運作

    //任務一:當weight 在 40以上 小於60時，console.log 顯示過輕
    //任務二:當weight 在 60以上 小於80時，console.log 顯示正常
    //任務三:當weight 在 80以上時 ，console.log 顯示過重

    let weight = 60;


    if (weight >= 40 && weight < 60) {
        print(`過輕`);
    } else if (weight >= 60 && weight < 80) {
        print(`正常`);
    } else if (weight >= 80) {
        print(`過重`);
    } else {
        print(`你是鬼吧?><`);
    }
    print(`-------------我是分界線，上方為第7題---------------`)
        //作業八:邏輯運算子加上if

    //情境:百貨公司贈品
    //百貨公司有200個贈品，只要有達以上條件之一，就送一個贈品
    //1.消費滿399元
    //2.是百貨公司的vip會員

    //Bob 今天來消費了500元，但並非VIP會員
    //請問Bob 是否有獲得贈品，以及贈品剩下多少?請完成以下修改程式碼

    let giftNum = 200;
    let giftPriceRule = 399;
    let BobPrice = 500;
    let BobIsVip = false;

    if (BobPrice > giftPriceRule || BobIsVip == true) {
        giftNum -= 1;
        print('客戶您好，您有符合贈品資格');
    } else {
        print('客戶您好，您沒有符合贈品資格');
    }

    print(`贈品還剩下${giftNum}個`);


    print(`-------------我是分界線，上方為第8題---------------`)

    //作業九: 計算小華的全年所得稅

    let mingMoney = 870000;
    let mingBill = 5000;

    if (mingMoney) {

        if (mingMoney < 540000) {
            mingBill += mingMoney * 0.3;
        } else if (mingMoney >= 540000 && mingMoney <= 1000000) {
            mingBill += mingMoney * 0.5;
        } else if (mingMoney > 1000000) {

            mingBill += mingMoney * 0.8;
        }
        print(`小明總共需支付${mingBill}元帳單`);


    }
    //作業十: 剪刀石頭布

    let playerA = ['剪刀', '石頭', '布'];
    let playerB = ['剪刀', '石頭', '布'];

    //調出各種可能性!!
    for (let aUse in playerA) {
        // console.log(playerA[aUse]);
        for (let bUse in playerB) {
            // console.log(playerB[bUse]);
            // if (playerA[aUse] == playerB[bUse]) {
            //     print('平手');
            // }
            // if (playerA[aUse] == '剪刀' && playerB[bUse] == '石頭') {
            //     print(`playerA 輸了 playerb 贏了`);
            // }
            // if (playerA[aUse] == '石頭' && playerB[bUse] == '剪刀') {
            //     print(`playerA 贏了 playerb 輸了`);
            // }
            // if (playerA[aUse] == '布' && playerB[bUse] == '剪刀') {
            //     print(`playerA 輸了 playerb 贏了`);
            // }
            // if (playerA[aUse] == '剪刀' && playerB[bUse] == '布') {
            //     print(`playerA 贏了 playerb 輸了`);
            // }
            // if (playerA[aUse] == '石頭' && playerB[bUse] == '布') {
            //     print(`playerA 輸了 playerb 贏了`);
            // }
            // if (playerA[aUse] == '布' && playerB[bUse] == '石頭') {
            //     print(`playerA 贏了 playerb 輸了`);
            // }



            // if (playerA[aUse] == "沒出" && playerB[bUse] == "沒出") {
            //     print(`playerA 贏了 playerb 輸了`);
            // } else {
            //     print(`重來`);
            //     //有人胡鬧亂出
            // }


        }
    }

    //猜拳機器人
    let area = document.querySelector('.js__Area__button');
    const raceNum = document.querySelector('.raceNum');

    let btnNum = playerA.length;
    let rceNum = 0;

    raceNum.innerText = rceNum;
    for (let num in playerA) {
        let btn = `<button class="robot__btn" data-btn="${num}">${playerA[num]}</button>`
        area.insertAdjacentHTML('beforeend', btn);
    }

    let btn = document.querySelectorAll('button');
    btn.forEach((item) => {

        item.addEventListener('click', function(e) {

            rceNum++;
            let pcUse = Math.floor(Math.random() * 3);
            let UserUse = parseInt(e.target.dataset.btn);

            if (pcUse == UserUse) {
                alert(`平手`)
            } else if (pcUse > UserUse) {
                alert(`電腦贏了`);
            } else {
                alert(`妳贏了`);
            }

            raceNum.innerText = rceNum;

        })
    })




    // area.insertAdjacentElement('beforeend')












})()