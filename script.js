

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '&apikey=c166e92d';
const API = 'http://localhost:3000';


const btnSearch = document.getElementById("buscar");
const inputSearch = document.getElementById("inputbuscador");
const formSearch = document.getElementById("buscador");
const contenedorBusqueda = document.getElementById("contenedorBusqueda");
const contenedorBd = document.getElementById("contenedorBd");
const paginationContainer = document.getElementById("paginationContainer");
const contenedorPeliculas = document.getElementById("contenedorPeliculas");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let prevPage = 0;




const handlePage = (value) => { 
    fetch(`${API}/getall`,
    { method: 'GET',
    cache: 'default',
    headers:{
        page:value
    },
})
.then(response => response.json())
.then(data => {
    prevPage = data.prevPage
    contenedorPeliculas.innerHTML = "";
    for (let i = 0; i < data.limit; i++) {
        
        contenedorPeliculas.innerHTML += 
            `
                <div class="card text-black" >
                    <div class="card-body">
                        <h5 class="card-title">${data.docs[i].Title}</h5>
                        <p class="card-text">${data.docs[i].Plot}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Estreno: ${data.docs[i].Released}</li>
                        <li class="list-group-item">Genero: ${data.docs[i].Genre}</li>
                        <li class="list-group-item">Director: ${data.docs[i].Director}</li>
                    </ul>
                    
                </div>  
            
            `
    }
})
};


fetch(`${API}/getall`,
    { method: 'GET',
    cache: 'default',
    headers:{
        page:1
    },
})
.then(response => response.json())
.then(data => {
    for (let i = 0; i < data.limit; i++) {
        
        contenedorPeliculas.innerHTML += 
            `
                <div class="card text-black" >
                    <div class="card-body">
                        <h5 class="card-title">${data.docs[i].Title}</h5>
                        <p class="card-text">${data.docs[i].Plot}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Estreno: ${data.docs[i].Released}</li>
                        <li class="list-group-item">Genero: ${data.docs[i].Genre}</li>
                        <li class="list-group-item">Director: ${data.docs[i].Director}</li>
                    </ul>
                    
                </div>  
            
            `
    }
    for (let i = 0; i < data.totalPages; i++) {
        paginationContainer.innerHTML += `
        <li class="page-item">
            <a class="page-link" id="n${i}" onClick="handlePage(${i+1})">${i+1}</a>
        </li>
    `
    }
})


const handleClick = async () => {
     fetch(`${API}/addTodb`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(dataToSend),
    })
    .then(response => {
        if(response.status == 404)
        {
            alert("Esta pelicula ya se encuentra en la bd");
        }else{
            alert("Pelicula agregada")
        }
});
}


formSearch.onsubmit = (e) => {
    e.preventDefault();
    fetch(`${API_URL}?t=${inputSearch.value}${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            dataToSend = {
                Title: data.Title,
                Year: data.Year,
                Released: data.Released,
                Genre: data.Genre,
                Director: data.Director,
                Actors: data.Actors,
                Plot: data.Plot,
                Ratings: data.Ratings
            };

            contenedorBusqueda.innerHTML = `
    <h4>Resultado de busqueda</h4>
    <div class="card text-black" >
        <div class="card-body">
            <h5 class="card-title">${data.Title}</h5>
            <p class="card-text">${data.Plot}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Estreno: ${data.Released}</li>
            <li class="list-group-item">Genero: ${data.Genre}</li>
            <li class="list-group-item">Director: ${data.Director}</li>
        </ul>
        <button onClick="handleClick()" >Enviar a la bd</button>
    </div>                     
    `;
            console.log(dataToSend);



        });

}
let dataToSend = {};





