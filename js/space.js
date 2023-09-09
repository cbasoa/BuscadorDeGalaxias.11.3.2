
document.addEventListener("DOMContentLoaded", function(){
    
let btnBuscar = document.getElementById("btnBuscar");
let container = document.getElementById("container");
let url = `http://images-api.nasa.gov/`;
let item = [];

// Evento del click 
btnBuscar.addEventListener("click", function () {
    let search = document.getElementById("inputBuscar").value;
    fetch(url + `search?q=` + search)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        }
        )
        .then(data => {
            item = data.collection.items;
            showGalaxy(item)
            
        }
        )
        .catch((error) => {
            console.log(error)
        })

})

//Muestro la Galaxia
function showGalaxy(){
    console.log(item)
    container.innerHTML = "";

    for (let i = 0; i < item.length; i++) {

        container.innerHTML += `
           
                <div class="block">
                <img  src=${item[i].links[0].href} style= max-width:50%>
                <h3> ${item[i].data[0].title}</h3>
                 <p>${item[i].data[0].keywords}
                ${item[i].data[0].description}</p>
                </div>
                </div>
                <div> 
            `;
    }

}


})