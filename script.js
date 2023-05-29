let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#slider");

let sizePassword = document.querySelector("#valor");
let Password = document.querySelector("#senhagerada");

let containerpalavrachave = document.querySelector("#container-palavra-chave");

let charset = "abcdefghijklmnopqrstuvwxyz0123456789";
let novaSenha = "";

sizePassword, innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function gerarsenha() {

    let pass = "";

    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));

    }

    containerpalavrachave.classList.remove("hide");
    senhagerada.innerHTML = pass;

}

async function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
}