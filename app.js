const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content')

about.addEventListener('click', e => {
  const id = e.target.dataset.id;
  console.log(id)
  if(id){
    btns.forEach(btn => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    })

  }
})