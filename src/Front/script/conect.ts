import { IPersonagem } from "../../models/personagem"

const url = "http://localhost:3000/personagens/"

async function getAllPerson() {
    const response = await fetch(url)
    console.log(response)

    const personagens = await response.json()
    console.log(personagens)

    personagens.map(() => {
        const espace = document.createElement("div")
        
        espace.innerText = personagens

        .appendChild(espace)
        
    })
}
getAllPerson()