async function listarPersons() {
    const retorno = await fetch("http://localhost:3000", {
        method: 'GET'
    }).then(response => {
        const personagens =  retorno.json
        console.log(personagens)
    }).catch(error => {
        console.error(403);
    })
}
listarPersons()