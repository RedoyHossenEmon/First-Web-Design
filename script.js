let menuItem = document.querySelectorAll('.menusA');


menuItem.forEach(menus => {

  menus.addEventListener('click', function () {
    menuItem.forEach(items => {
      items.classList.remove('fontColor');

    })

    this.classList.add('fontColor');
  })

});

// document.addEventListener('scroll', function(){
//   console.log('hi')

//  if(document.body.scrollTop >200 ){
//    console.log('helo')
//      menuItem.forEach(items=>{
//   items.classList.remove('fontColor');

// } )
//  }
// })



let allans = document.querySelectorAll('.faqAnswer');
let allqus = document.querySelectorAll('.faqQuestion');

allqus.forEach(ques => {
  ques.addEventListener('click', function () {

    var getKeys = ques.getAttribute('data-keys')


    console.log(getKeys)
    allans.forEach(ans => {
      ans.classList.remove('faqAnsActive')
    })

    document.querySelector('.ans'+getKeys).classList.toggle('faqAnsActive')
  })

})