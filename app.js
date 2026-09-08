const jokeElement = document.querySelector(".dad-joke")

fetch("https://icanhazdadjoke.com")
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