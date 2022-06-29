//obtem os elementos da pagina
const frm = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

const erros = [] //vetor de escopo global para numeros ja apostados
const sorteado = Math.floor( Math.random() * 100) + 1 //gera um numero aleatorio entre 1 e 100
const CHANCES = 6

frm.addEventListener('submit', (e) => { //executa o evento click
    e.preventDefault()
    console.log('Botao funcionando') //evita o envio do formulario
const numero = Number(frm.inNumero.value) //obtem o numero digitado

    if (numero == sorteado){ //se acertou
        respDica.innerText = `Parabéns!! Número sorteado: ${sorteado}`
    
    }else {
        if(erros.includes(numero)){
            alert(`Você já apostou o número ${numero} gênio, tente outro`)
        } else {
            erros.push.apply(numero) //adiciona o numero ao vetor de erros
            const numErros = erros.length //obtem o tamnaho do vetor
            const numChances = CHANCES - numErros // calcula o numero de chances restantes
            //exibir o num de errros, conteudo do vetor e num de chances
            respErros.innerText = `${numErros} (${erros.join(',')})`
            respChances.innerText = numChances  
            if (numChances == 0){
                alert('Suas chances acabaram')
                frm.btSubmit.disable = true
                respDica.innerText = `Game Over!! Número sorteados foi ${sorteado}`
            
            }else {
                //usar o operador ternario para mensagem de dica
                const dica = numero < sorteado ? 'maior' : 'menor'
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = ''
    frm.inNumero.focus() 
})

frm.btNovo.addEventListener('click', () => {
    location.reload() //recarrega a página
})