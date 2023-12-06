const url = "https://striveschool-api.herokuapp.com/books"

fetch(url)
    .then(result => result.json())  //gestisco la promessa della risposta ottenendo i dati in formato json
    .then(data => {    //ho un array di oggetti
        data.forEach(item => {  //estraggo ogni proprietà di ogni elemento
            const bookTitle = item.title
            const bookCover = item.img
            const bookPrice = item.price
            const bookCategory = item.category
            //creo un template a cui sostituisco i valori ottenuti
            const template = `
     <div class="col-4">
     <div class="card">
       <img src="${bookCover}" class="card-img-top">
      <div class="card-body">
        <h2 class="card-title">${bookTitle}</h2>
        <p class="card-text">${bookPrice} &euro;</p>
        <a href="#" class="bg-black link-underline link-underline-opacity-0 text-white">${bookCategory}</a>
        <button class="btn btn-primary removeButtons">Remove</button>
      </div>
    </div>
    </div>`
            //inserisco il template nel container
            document.querySelector(".row").innerHTML += template
        })
        const buttons = document.querySelectorAll(".removeButtons")
        console.log(buttons)
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                const bookCard = button.closest('.col-4')
                bookCard.remove()
            })
        })
    })
    .catch(error => console.log(`Errore durante la richiesta dati: ${error}`))

