const btn = document.querySelector('button')
const log = console.log
const wrongMessage = document.querySelector('.wrong-message')
const wrongIcon = document.querySelector('.wrong-icon')

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

btn.addEventListener('click', e=>{
  log('clicked')
  e.preventDefault()
  const email = document.querySelector('#email').value;
  if (validateEmail(email)){
    alert("Email Valid!!!")
    wrongIcon.classList.add('hidden')
    wrongMessage.classList.add('hidden')
  }else{
    if (wrongIcon.classList.contains('hidden')){
      wrongIcon.classList.remove('hidden')
      wrongMessage.classList.remove('hidden')
      alert('Email Invalid')
    }
  }
  document.querySelector('#email').value = '';
})