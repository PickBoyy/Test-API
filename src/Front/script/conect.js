const url = "http://localhost:3000/personagens"

async function getAllPerson() {
    const response = await fetch(url)
    console.log(response)

    const data = await response.json()
    console.log(data)
}
getAllPerson()