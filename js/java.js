document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");
  const quantidade = 6; // número total de cards

  // Caminho fixo da imagem (imagem do segundo card)
  const imagem = "imagens/imagem 2.jpg";

  for (let i = 1; i <= quantidade; i++) {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow">
        <img src="${imagem}" class="card-img-top" alt="Produto ${i}">
        <div class="card-body text-center">
          <h5 class="card-title">Produto ${i}</h5>
          <p class="card-text">Descrição rápida.</p>
          <a href="#" class="btn btn-primary">Saiba mais</a>
        </div>
      </div>
    `;

    container.appendChild(col);
  }
});
