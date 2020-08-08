const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content')

about.addEventListener('click', e => {
  const id = e.target.dataset.id;
  console.log(id)
  if(id){
    //remove active from other buttons
    btns.forEach(btn => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    })
    // hide other articles
    articles.forEach(art => {
      art.classList.remove('active')      
    })
    let element = document.getElementById(id)
    console.log(element)
    element.classList.add('active')
  }
})