const entrada = document.querySelector("#entrada");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");
btn.onclick = () => {
  if (entrada.value != "") {
    alertify.confirm("" + entrada.value,
  
      function () {
        let itemLista = document.createElement("li");
        let texto = document.createTextNode(entrada.value);
        let iconeOk = document.createElement("ion-icon");
        let iconeRemover = document.createElement("ion-icon");
        iconeOk.classList.add("icone");
        iconeOk.setAttribute("name", "checkmark-circle-outline");
        // Exercicio
        iconeRemover.classList.add("icone2");
        iconeRemover.setAttribute("name", "close-circle-outline");
        iconeRemover.addEventListener("click", function () {
          alertify.confirm("Você deseja remover o item da lista ?.",
            function(){
              alertify.success('Item da lista removido com sucesso !');
              lista.removeChild(itemLista);
            },
            function(){
              alertify.error('Remoção cancelada');
            });
        });
        // Fim Exercicio

        itemLista.append(texto);
        itemLista.append(iconeOk);
        itemLista.append(iconeRemover);
        lista.append(itemLista);
        alertify.success("Item adicionado.");
        entrada.value = "";
      },
      //* O que será executado com o botão Cancel
      function () {
        alertify.error("Item não inserido");
        entrada.value = "";
      }
    );
  } else {
    alertify.alert(
      "Erro ao adicionar",
      "Você precisa preencher o campo de texto."
    );
  }
};