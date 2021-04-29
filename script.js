        const divContenedor = document.getElementById("contenedor");
        const inpTitulo = document.getElementById("titulo");
        const inpImagen = document.getElementById("imagen");
        botonAgregar.addEventListener("click", function () {
    
            const titulo = inpTitulo.value;
            const imagen = inpImagen.value;
            const divNuevo = document.createElement("div");
            divNuevo.classList.add("divCreado");
          
            const nuevoParrafo = document.createElement("p");
            const nuevaImagen = document.createElement("img");
            nuevoParrafo.textContent = titulo;
            nuevaImagen.src = imagen;
            divNuevo.appendChild(nuevoParrafo);
            divNuevo.appendChild(nuevaImagen);
            divContenedor.appendChild(divNuevo);
            
        })