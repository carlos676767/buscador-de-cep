const buscarCep = () => {
  let input = document.querySelector("input") as HTMLInputElement
  const exibir = document.querySelector("p") as HTMLParagraphElement
  fetch(`https://viacep.com.br/ws/${input.value}/json/`)
  .then(response => response.json())
  .then(data => {
 
  exibir.innerHTML = `
  Bairro: ${data.bairro}<br>
  Cep: ${data.cep}<br> 
  Comprimento:  ${data.complemento} <br>
  Ddd: ${data.ddd} <br>
  Localidade: ${data.localidade} <br>
  Uf: ${data.uf}`;
  })
  .catch(erro=> {
    exibir.textContent = `Cep nao encontrado`
    console.error("erro", erro)
  })
}

const botao = document.querySelector("button") as HTMLButtonElement

botao.addEventListener("click", () => {
  buscarCep()
})

