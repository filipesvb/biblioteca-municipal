
document.addEventListener("DOMContentLoaded", () => {

    const tabela_livros = document.querySelector(".tabela_livros");
    tabela_livros.addEventListener("click", (event) => {
        const elementoClicado = event.target;
        
        if(elementoClicado.dataset.type == "remocao") {
            event.preventDefault();
            const id = elementoClicado.dataset.ref;
            
            const livro = elementoClicado.closest(`.livro_${id}`);
            livro.remove()
            console.log("procurando livro " + id)
            fetch(`/livros/${id}`, {method: 'delete'})
        }

    })

})


