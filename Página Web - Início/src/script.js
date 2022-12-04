//typing effect h1


const typing = document.querySelector('[data-js="typing"]') //referência do h1
const message = ["Olá, essa é a minha aplicação!"]

let messageIndex = 0 
let characterIndex = 0
let currentMessage = ''
let currentCharacters = ''

const type = ()=>{
    
    const shouldType = messageIndex === message.length

        if(shouldType){
            messageIndex = 0
        }
         
    currentMessage = message[messageIndex] // está armazendando a primeira string do array

    currentCharacters = currentMessage.slice(0, characterIndex++) // currentMessage irá receber a primeira string do array e a cada execução irá se repetir esse processo

        typing.textContent = currentCharacters // primeiro caracter de message ("O")

            const shouldChangeMessageToBeTyped = currentCharacters.length === currentMessage.length


        if(shouldChangeMessageToBeTyped){
            messageIndex++
            characterIndex = 0
        }
}

setInterval(type, 200) //executar a função type a cada 200 milisegundos