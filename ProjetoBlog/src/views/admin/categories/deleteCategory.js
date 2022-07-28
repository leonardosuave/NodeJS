function confirmDelete(event, a) {
    event.preventDefault();
    const decision = confirm('Você quer deletar esta categoria?')
    if(decision) {
        a.submit();
    }
}