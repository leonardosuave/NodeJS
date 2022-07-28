function confirmDelete(form) {
    document.addEventListener('click', (e) => {
        e.preventDefault();
        const del = e.target
        if(del.classList.contains('btnDel')) {
            const decision = confirm('Você quer deletar esta categoria?')
            if(decision) {
                form.submit();
            }
        }
    })
}
