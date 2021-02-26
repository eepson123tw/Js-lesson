console.log(`-------第一題開始-------`);

let obj = {

  myName: "Tom",
  age: 18,
  pets: ["john", "Mike"],
  isWakeUp: false

}

console.log(obj);

console.log(`-------第二題開始-------`);

let colors = ["red", "black", "yellow"];

colors.push("black");
console.log(colors, `陣列長度為${colors.length}`);
console.log(`-------第三題開始-------`);

let motherStatus = [

  {
    name: "mary",
    age: 31,
    sons: ["Tom", "Bob"],
  }

];
motherStatus[0].age += 1;
motherStatus[0].sons.unshift("John");

console.log(motherStatus);

console.log(`-------第四題開始-------`);


let data = {};

fetch('https://api.kcg.gov.tw/api/service/get/9c8e1450-e833-499c-8320-29b36b7ace5c', { method: 'get' }).then((res) => {

  console.log(res);
  if (!res.data) {
    console.log(`第四題：data 去哪裡拉～`);
    console.log(`因為ajax的關係我會等程式碼都跑完，才執行`)
  }
});


console.log(`-------第五題開始-------`);

const familyPhoto = {

  motherName: "Jane",
  fatherName: "Bill",
  daughterName: "Rosa",
  sanName: "Howard",
  dogsName: ["Bobo", "Koko"]

};
console.log(familyPhoto);
console.log(`-------第六題開始-------`);

const sellVilla = {
  villaName: "六角大別墅",
  position: "高雄市",
  villaDataList: [{
    sellPrice: "2億8千萬",
    squareFeet: 900,
    hasPowl: false,
    hasBasement: true,
    floors: 5,
    bathroom: 3,
    hasHousekeeper: false,
    villaSold: true,
  }, {
    sellPrice: "3億2千萬",
    squareFeet: 1200,
    hasPowl: true,
    hasBasement: true,
    floors: 7,
    bathroom: 4,
    hasHousekeeper: true,
    villaSold: false,
  }],


};
console.log(sellVilla, `好想買喔！`);
console.log(`-------第7題開始-------`);

let roomDetail = {
  "success": true,
  "items": [{
      "id": "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 1380,
      "holidayPrice": 1500,
      "name": "Single Room"
    },
    {
      "id": "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
      "normalDayPrice": 1899,
      "holidayPrice": 2000,
      "name": "Deluxe Single Room"
    },
    {
      "id": "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "normalDayPrice": 2460,
      "holidayPrice": 2500,
      "name": "Double Room"
    },
    {
      "id": "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 2888,
      "holidayPrice": 3000,
      "name": "Deluxe Double Room"
    },
    {
      "id": "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "normalDayPrice": 3350,
      "holidayPrice": 3500,
      "name": "Twin Room"
    },
    {
      "id": "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 3899,
      "holidayPrice": 4000,
      "name": "Deluxe Twin Room"
    }
  ]
}
const arrayhander = (array) => {

  let { items } = array;

  //one
  console.log(items);
  let price = 0;
  for (let dataList in items) {
    price += items[dataList]['normalDayPrice'];
  }
  console.log(price);

  //two
  let totalPrice = items.reduce((total, inventor) => {
    return total + inventor['normalDayPrice'];
  }, 0)
  console.log(totalPrice);

};
arrayhander(roomDetail);

console.log(`-------第8題開始-------`);

let salaryData = {
  company: 'circle center',
  bossName: 'casper',
  staff: [{
      name: "Bob",
      salary: 32000,
      staffWorkHard: true,
    },
    {
      name: "Jack",
      salary: 28000,
      staffWorkHard: true,
    }
  ],


}

let stafflist = salaryData['staff'];

for (let staffNum in stafflist) {
  // 第一位員工加薪邏輯
  if (stafflist[staffNum].staffWorkHard) {

    stafflist[staffNum].salary = 40000;
    // 請填寫第一位員工加薪程式碼

  }
  // // 第二位員工加薪邏輯
  // if (true /* 此處邏輯請自行調整 */ ) {

  //   // 請填寫第二位員工加薪程式碼
  // }
}

console.log(salaryData);


console.log(`-------第9題開始-------`);

console.log(`我選擇高雄市文化局演出活動，這是一個陣列包著多個物件，裡面有13個屬性跟各自的值`);


axios.get('./dataJson.json').then((res) => {
  console.log(res);
})






console.log(`-------第10題開始+自定義-------`);

let input = document.querySelectorAll('input');

const senBtn = document.querySelector('.js__send');
const bmiArea = document.querySelector('.js__bmi');
const status = document.querySelector('.js__status');


let bmiDefault = 0;


senBtn.addEventListener('click', bmiCount);


function bmiCount() {
  let personHeight = parseInt(document.querySelector('.js__height').value) / 100;

  let personWeight = parseInt(document.querySelector('.js__weight').value);

  let bmi = personWeight / Math.pow(personHeight, 2);

  if (personHeight && personWeight) {
    if (bmi < 18.5) {
      status.innerText = "過輕"
    } else if (18.5 <= bmi && bmi < 24) {
      status.innerText = "正常"
    } else if (24 <= bmi && bmi < 27) {
      status.innerText = "過重"
    } else if (27 <= bmi && bmi < 30) {
      status.innerText = "輕度肥胖"
    } else if (30 <= bmi && bmi < 35) {
      status.innerText = "中度肥胖"
    } else if (bmi >= 35) {
      status.innerText = "重度肥胖"
    } else {
      status.innerText = "鼻要鬧了拉"
    }

  } else {
    alert(`麻煩都要輸入正常值，不能為0｜｜字串`);
  }


}

const renderPage = () => {
  bmiArea.innerText = bmiDefault
  status.innerText = `未知圖騰`

};

renderPage();