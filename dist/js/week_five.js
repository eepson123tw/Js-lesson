//抓取input
const inputList = document.querySelectorAll('.js_input');
const inputArea = document.querySelector('.tacket__formSelect');
const inputScript = document.querySelector('.tacket__formArea');
const addBtn = document.querySelector('.tacket__addBtn');
const text = document.querySelector('.search__text');

const search__bar = document.querySelector('.search__bar');

//抓取各自值
const nameText = document.querySelector('#name');
const imgUrl = document.querySelector('#imgUrl');
const area = document.querySelector('#area');
const price = document.querySelector('#price');
const setNum = document.querySelector('#setNum');
const star = document.querySelector('#star');
const script = document.querySelector('#script');
//抓取ul
let ulDom = document.querySelector('.card');
let liDom;

let dataJson = [];
//抓取 json
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json').then((res) => {
    dataJson = res.data;
    renderList(dataJson);
    getData(dataJson);
})



const data = {};
let dataList = [];
let dataCircle = [];
//新增
const addList = () => {
    //提醒 若無空值
    let status = false;
    inputList.forEach((item) => {
        if (item.value == "") {
            let span = item.parentElement.querySelector('span');
            span.classList.add('tacket__waringText-alert');
            status = false;
        } else {
            data['name'] = nameText.value;
            data['imgUrl'] = imgUrl.value
            data['area'] = area.value;
            data['price'] = price.value;
            data['group'] = setNum.value;
            data['rate'] = star.value
            data['description'] = script.value
            status = true;
        }
    });
    if (status) {
        inputList.forEach((item) => {
            item.value = "";
        });
        dataJson.unshift(JSON.parse(JSON.stringify(data)));
        renderList(dataJson);
    }
    getData(dataJson);
};
//render頁面
const renderList = (value) => {
    let defaultLiDom = '';
    value.forEach((item) => {
        defaultLiDom += `<li class="card__core col-4 col-lg-6">
                  <div class="card__img">
                      <img src=${item['imgUrl']}  alt="">
                      <span class="card__area">${item['area']}</span>
                      <span class="card__point">${item['rate']}</span>
                  </div>
                  <div class="card__script">
                      <h2 class="card__scriptTitle">${item['name']}</h2>
                      <p class="card__scriptText">${item['description']}</p>
                  </div>
                  <div class="card__footer">
                      <p class="card__footerText"><i class="fas fa-exclamation-circle"></i> 剩下最後${item['group']}組</p>
                      <p class="card__footerPrice">
                      TWD <span class=" card__footerPrice-big">$ ${item['price']}</span>
                      </p>
                  </div>
              </li>`;
    });
    ulDom.innerHTML = defaultLiDom;
    text.innerText = `本次搜尋共${value.length}筆資料`
};
//搜尋bar
const search = (e) => {

    let search = e.target.value;
    if (search == 'all') {
        renderList(dataJson);
    } else {
        let area = dataJson.filter((item) => {
            return search == item.area;
        })
        renderList(area);
    };

};

const getData = (val) => {

    let obj = {};
    let array = [];
    let num = 1;
    val.forEach((item) => {
        obj[item.area] = (obj[item.area] == undefined) ? 1 : (num += 1);
    })
    for (let num in obj) {
        array.push([num, obj[num]])
    };

    let chart = c3.generate({
        bindto: '#chart', // HTML 元素綁定
        data: {
            columns: array, // 資料存放
            type: "donut", // 圖表種類
            colors: {
                "高雄": "#E68618",
                "台中": "#5151D3",
                "台北": "#26BFC7"
            }
        },
        donut: {
            title: "套票地區比重"
        }
    });

};



addBtn.addEventListener('click', addList);
search__bar.addEventListener('change', search);