window.onload = function () {
  //获取section
  var sections = document.querySelectorAll('#app #content section')
  //获取所有的footerItem
  var footerItems = document.querySelectorAll('#app #footer .footerItem')
  //循环遍历footerItems
  for (let i = 0; i < footerItems.length; i++) {
    footerItems[i].addEventListener('click',function () {
      for (let j = 0; j < footerItems.length; j++) {
        footerItems[j].className = 'footerItem'
        sections[j].className = ''
      }
      this.className = 'footerItem active'
      sections[i].className = 'on'
    },false)
    
  }
  new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true
  });
}