const input = document.querySelector("input") as HTMLInputElement;
const exibir = document.querySelector(".mensagem") as HTMLParagraphElement;

const validarCep = () => {
  const regex: RegExp = /^0{8}$/;
  return regex.test(input.value);
};

const inputVazio = () => {
  return input.value === "";
};

const buscarInformacoesCEP = () => {
  fetch(`https://viacep.com.br/ws/${input.value}/json/`)
    .then((response) => response.json())
    .then((data) => {
      exibir.innerHTML = `
        <i class="fa-solid fa-location-dot"></i> Bairro: ${data.bairro}<br>
        <i class="fa-solid fa-location-crosshairs"></i> Cep: ${data.cep}<br> 
        <i class="fa-solid fa-location-dot"></i> Comprimento: ${data.complemento} <br>
        <i class="fa-solid fa-phone"></i> Ddd: ${data.ddd} <br>
        <i class="fa-solid fa-location-dot"></i> Localidade: ${data.localidade} <br>
        <i class="fa-solid fa-house"></i> UF: ${data.uf}`;
    })

    .catch((erro) => {
      exibir.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> CEP não encontrado.`;
      console.error("Erro:", erro);
    });
};


const realizarValidacoes = () => {
  if (inputVazio()) {
    exibir.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Campo vazio.`;
  } else if (validarCep()) {
    exibir.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Entrada inválida.`;
  } else {
    buscarInformacoesCEP()
  }
};


const botao = document.querySelector("button") as HTMLButtonElement;
botao.addEventListener("click", () => {
  realizarValidacoes();
});
