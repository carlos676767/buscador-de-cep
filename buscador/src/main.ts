const buscarCep = () => {
  let input = document.querySelector("input") as HTMLInputElement
  const exibir = document.querySelector("p") as HTMLParagraphElement
  fetch(`https://viacep.com.br/ws/${input.value}/json/`)
  .then(response => response.json())
  .then(data => {
 
  exibir.innerHTML = `
  Bairro: ${data.bairro}<br>
  cep: ${data.cep}<br> 
  comprimento:  ${data.complemento} <br>
  ddd: ${data.ddd} <br>
  localidade: ${data.localidade}`;
  })
  .catch(erro=> {
    console.error("erro", erro)
  })
}

const botao = document.querySelector("button") as HTMLButtonElement

botao.addEventListener("click", () => {
  buscarCep()
})

