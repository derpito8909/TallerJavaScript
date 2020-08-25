let nombreArtista = document.getElementById('nombre');
let edadArtista = document.getElementById('edad');
let ciudadArtista = document.getElementById('ciudad');
let profesionArtista = document.getElementById('profesion');
let imagenArtista = document.getElementById('imagenArtista');

imagenArtista.addEventListener('click', () => {
    let nombre = prompt("Digite el nombre");
    let edad = prompt("Digite la edad");
    let ciudad = prompt("Digite la ciudad");
    let profesion = prompt("Digite la profesion");

    nombreArtista.textContent = "Nombre: " + nombre;
    edadArtista.textContent = "Edad: " + edad + " años";
    ciudadArtista.textContent = "Ciudad: " + ciudad;
    profesionArtista.textContent = "Profesion: " + profesion;
})