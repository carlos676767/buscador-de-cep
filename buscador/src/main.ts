const buscarCep = () => {
  let input = document.querySelector("input") as HTMLInputElement;
  const exibir = document.querySelector(".mensagem") as HTMLParagraphElement;
  if (input.value === "") {
    exibir.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> campo vazio.`;
  } else {
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
        exibir.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> cep não encontrado.`;
        console.error("erro", erro);
      });
  }
};

const botao = document.querySelector("button") as HTMLButtonElement;

botao.addEventListener("click", () => {
  buscarCep();
});
