import "./style.css";

console.log("Entorno TypeScript listo y corriendo");

interface Enlace {
  titulo: string; //Oblicatorio
  url?: string; //Opcional
  color: string; //Obligatorio
  icono?: string; // El signo de interrogración significa que el dato es opcional
  texto?: string; // Caso opcional para poner texto en vez de una url
}

// Creación de los datos reales (Array de objetos)
const misEnlaces: Enlace[] = [
  {
    titulo: "Mi GitHub",
    url: "https://github.com/YED-1",
    color: "bg-gray-800",
  },
  {
    titulo: "LinkedIn",
    url: "",
    color: "bg-blue-600",
  },
  {
    titulo: "Portafolio",
    url: "https://mifolio.com", //Link sin uso
    color: "bg-green-600",
  },
  {
    titulo: "Email Profesional",
    color: "bg-pink-600",
    texto: "joshyja56@gmail.com",
  },
  {
    titulo: "TikTok",
    url: "",
    color: "bg-green-600",
  },
];

console.log(misEnlaces);

// Esta constante busca el elemento <div id='app'> en el html
const app = document.querySelector<HTMLDivElement>("#app");

// Este if verifica que la existencia del elemento
if (app) {
  // Se recorre el arreglo de enlaces y se crea HTML por cada uno
  // En este caso se usa ".map()" para transformar los datos en strings de html
  const contenidohtml = misEnlaces
    .map((link) => {
      return `
    <a href="${link.url}" target="_blank" class="enlace-card"><span>${
        link.titulo
      }</span>${link.texto ? `<small>(${link.texto})</small>` : ""}`;
    })
    .join("");

  //Se inyecta el html dentro de div
  app.innerHTML = `
    <div class="contenedor">
      <img src="https://ui-avatars.com/api/?name=Joshua+Yedreick&background=random" class="avatar" />
      <h1>Joshua Yedreick</h1>
      <p>Full Stack Developer en proceso</p>

      <div class="lista-enlaces">
        ${contenidohtml}
      </div>
    </div>
    `;
}
