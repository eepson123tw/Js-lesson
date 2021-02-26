;
(function() {

  const pageName = document.title;

  console.log(`目前頁面為:${pageName}`);



  let navbar = document.querySelectorAll(".title__text");



  navbar.forEach((item) => {

    item.addEventListener('click', barClick);


  })

  function barClick(e) {

    let target = e.target;

    target.classList.toggle('title__text--active')


  }
  //在本頁時加上標籤顏色
  const checkPage = function() {

    let pageData = document.querySelectorAll('[data-page]');


    pageData.forEach((page) => {

      let target = page.dataset.page;

      if (page.dataset.page == pageName) {


        page.classList.add('title__text--active');

      }

    })


  }
  checkPage();

})()