let frase = document.querySelector('.typing')
let text = frase.innerHTML
let index = 0

const write = () => {
  frase.innerHTML = frase.innerHTML.replace('|', '')

  if(text.length > index){
    if(index == 0 ){
      frase.innerHTML = text.charAt(index)
    }else{
      frase.innerHTML += text.charAt(index)
    }

    index++ 
    setTimeout(write, 50)
  }
}
write()


//Botões

const github = document.querySelector('.github')
const linkedin = document.querySelector('.linkedin')

github.addEventListener('click', (e) => {
  window.open('https://github.com/PedroHSiqueira')
})

linkedin.addEventListener('click', (e) => {
  window.open('https://www.linkedin.com/in/phasiqueira/')
})
