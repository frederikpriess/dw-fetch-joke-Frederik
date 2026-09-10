/* Star Wars */
/* const listElement = document.querySelector(".people") */
const url = "https://swapi.dev/api/people"

async function fetchData(url, renderFunction) {
    try {
        const respons = await fetch(url, {
            headers: {
                Accept: "application/json"
            }
        })

        if (!respons.ok) {
            throw new Error("Det virker sgu ikke :(" + respons.status)
        }

        const data = await respons.json()
        /* char(data) */
        renderFunction(data)
    } catch (error) {
        console.error("Hmmm jeg tror noget gik galt ", error)
    }
}

fetchData(url, char)

function char(data) {
    const ulDom = document.createElement("ul")
    const charList = data.results.map((character) => {
        return (
            `
            <li>
                <h2> ${character.name}</h2>
                <a href="${character.url}" class="show-details">Se detaljer</a>
            </li>
            `
        )
    }).join("")

    ulDom.insertAdjacentHTML("afterbegin", charList)
    const wrapperDom = document.querySelector(".wrapper")
    wrapperDom.insertAdjacentElement("afterbegin", ulDom)

    const showDetailsDom = wrapperDom.querySelectorAll(".show-details")

    showDetailsDom.forEach((button) => {
        button.addEventListener("click", async (event) => {
            event.preventDefault()
            const hrefText = button.href
            fetchData(hrefText, (data) => renderDetail(data, button.closest("li")))

        })
    })
}

async function renderDetail(data, targetLi) {
    const existingDetails = targetLi.querySelector(".details-box")
    if (existingDetails) {
        existingDetails.remove()
        return
    }

    const planetResponse = await fetch(data.homeworld)
    const planetData = await planetResponse.json()

    
    const container = document.createElement("div")
    container.classList.add("details-box")
    container.innerHTML =
        `
            <h3>${data.name}</h3> 
            <ul>
            <li>Hair color: ${data.hair_color}</li>
            <li>Gender: ${data.gender}</li>
            <li>Birth year: ${data.birth_year}</li>
            <li>Home world: ${planetData.name}</li>
            </ul>
        `

        targetLi.appendChild(container)

}
 


/*
async function fetchData(url) {
fetch(url,  {
headers: { "Accept": "application/json" }
}
)
.then(response => {
    if (!response.ok) {
        throw new Error("kunne ikke hente data")
    }
    return response.json();
})

.then(data => { console.log(data)
    listElement.innerHTML =
        data.results
            .map(results => `
                <li>${results.name} </li>
                <button> Se detaljer </button>
            `)
            .join("")

})

.catch(error => {
    console.error("Fejl:", error)
})
} */

/* const jokeElement = document.querySelector(".dad-joke")

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
    }) */






/* rick/morty */

/*         const listRickElement = document.querySelector(".people-rick")

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
    }) */