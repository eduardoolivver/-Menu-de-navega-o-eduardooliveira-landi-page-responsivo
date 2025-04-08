// Função para carregar os dados da tabela
function carregarDados() {
  // Simula a carga de dados de uma API ou banco de dados
  const dados = [
    { id: 1, numero: "12345", cliente: "João Silva", processo: "Processo 1", data: "2022-01-01" },
    { id: 2, numero: "67890", cliente: "Maria Oliveira", processo: "Processo 2", data: "2022-02-01" },
    // ...
  ];

  // Cria a tabela com os dados
  const tabela = document.getElementById("tabela");
  tabela.innerHTML = "";
  dados.forEach((dado) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${dado.numero}</td>
      <td>${dado.cliente}</td>
      <td>${dado.processo}</td>
      <td>${dado.data}</td>
      <td>
        <button class="editar">Editar</button>
        <button class="excluir">Excluir</button>
      </td>
    `;
    tabela.appendChild(linha);
  });
}

// Função para editar um registro
function editarRegistro(id) {
  // Simula a edição de um registro
  console.log(`Editar registro ${id}`);
}

// Função para excluir um registro
function excluirRegistro(id) {
  // Simula a exclusão de um registro
  console.log(`Excluir registro ${id}`);
}

// Adiciona eventos aos botões de editar e excluir
document.addEventListener("DOMContentLoaded", () => {
  const botoesEditar = document.querySelectorAll(".editar");
  const botoesExcluir = document.querySelectorAll(".excluir");

  botoesEditar.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const id = e.target.parentNode.parentNode.dataset.id;
      editarRegistro(id);
    });
  });

  botoesExcluir.forEach((botao) => {
    botao.addEventListener("click", (e) => {
      const id = e.target.parentNode.parentNode.dataset.id;
      excluirRegistro(id);
    });
  });
});

// Carrega os dados da tabela
carregarDados();