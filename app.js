const jokeElement = document.querySelector(".dad-joke")

fetch("https://icanhazdadjoke.com", {
    headers: { "Accept": "application/json" }
})
    .then(response => {
        if (!response.ok) {
            throw new Error("kunne ikke hente joke")
        }
        return response.json();
    })

    .then(data => {
        jokeElement.textContent = data.joke               
    })

    .catch(error => {
        console.error("Fejl:", error)
    })

const listElement = document.querySelector(".people")

fetch("https://swapi.dev/api/people", {
    headers: { "Accept": "application/json" }
}
)
    .then(response => {
        if (!response.ok) {
            throw new Error("kunne ikke hente data")
        }
        return response.json();
    })

    .then(data => {
        listElement.innerHTML =
            data.results
                .map(results => `
                    <li>${results.name} (${results.height}: høj) hudfarve: ${results.skin_color}. hår farve: ${results.hair_color} </li>
                `)
                .join("")
    })

    .catch(error => {
        console.error("Fejl:", error)
    })

    /* rick/morty */

        const listRickElement = document.querySelector(".people-rick")

fetch("https://rickandmortyapi.com/api/character", {
    headers: { "Accept": "application/json" }
}
)
    .then(response => {
        if (!response.ok) {
            throw new Error("kunne ikke hente data")
        }
        return response.json();
    })

    .then(data => {
        listRickElement.innerHTML = 
            data.results
                .map(results => `
                    <li>${results.name} (${results.gender}: <img src="${results.image}" alt=""> )  </li>
                `)
                .join("")
    })

    .catch(error => {
        console.error("Fejl:", error)
    })