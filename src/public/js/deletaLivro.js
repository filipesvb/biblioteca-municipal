
document.addEventListener("DOMContentLoaded", () => {

    const tabela_livros = document.querySelector(".tabela_livros");
    tabela_livros.addEventListener("click", (event) => {
        const elementoClicado = event.target;

        if(elementoClicado.dataset.type == "remocao") {
            const id = elementoClicado.dataset.ref;
            
            const livro = elementoClicado.closest(`.livro_${id}`);
            livro.remove()

            fetch(`/livros/${id}`, {method: 'delete'})
        }

    })

})


