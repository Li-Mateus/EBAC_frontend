const form = document.getElementById('form-AB')

function valida(a, b) {
    return b > a
}

form.addEventListener('submit', function(e){
    let formEValido = false
    e.preventDefault();

    let numeroA = document.getElementById('numero-A')
    let numeroB = document.getElementById('numero-B')
    const mensagemSucesso = `Sim, <b>${numeroB.value}</b> é maior que <b>${numeroA.value}</b> :)`
    const mensagemFracasso = `<b>${numeroB.value}</b> não é maior que <b>${numeroA.value}</b> :(`

    formEValido = valida(Number(numeroA.value), Number(numeroB.value))

    if(formEValido) {
        const containerSucesso = document.querySelector('.success')
        containerSucesso.innerHTML = mensagemSucesso
        containerSucesso.style.display = 'block'
        document.querySelector('.failure').style.display = 'none'
    }
    else{
        const containerFracasso = document.querySelector('.failure')
        containerFracasso.innerHTML  = mensagemFracasso
        containerFracasso.style.display = 'block'
        document.querySelector('.success').style.display = 'none'
    }
})