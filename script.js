"use strict";

const colores = [
    "#ff1493",
    "#c084fc",
    "#ff4d6d",
    "#ff85a1",
    "#9370db",
    "#e75480"
];

document.querySelectorAll("button").forEach((boton) => {
    boton.addEventListener("click", () => {
        const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        boton.style.backgroundColor = colorAleatorio;

        crearCorazon(boton);

        if (boton.id === "boton-amor") {
            const mensaje = document.getElementById("mensaje");
            mensaje.textContent = "Eres mi presente, mi felicidad y una de las razones por las que sonrío. ¡TE AMO INFINITAMENTE, MI REINA! ❤️🥹";
            mensaje.hidden = false;
        }
    });
});

function crearCorazon(boton) {
    const corazon = document.createElement("span");
    const posicion = boton.getBoundingClientRect();

    corazon.className = "corazon";
    corazon.setAttribute("aria-hidden", "true");
    corazon.textContent = "❤️";
    corazon.style.left = `${posicion.left + posicion.width / 2}px`;
    corazon.style.top = `${posicion.top + posicion.height / 2}px`;

    document.body.appendChild(corazon);
    window.setTimeout(() => corazon.remove(), 1000);
}
