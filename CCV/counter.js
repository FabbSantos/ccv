setInterval(isCheck, 4000) 
  function isCheck() {
    const s1 = document.querySelector('#Slide1')
    const s2 = document.querySelector('#Slide2')


    s2.checked = !s2.checked
    s1.checked = !s2.checked
  }





