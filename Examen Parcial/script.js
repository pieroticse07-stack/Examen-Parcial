// CAMBIAR MODALIDAD
function seleccionarModalidad(elemento) {
  document.querySelectorAll(".modalidad").forEach(el => el.classList.remove("active"));
  elemento.classList.add("active");
}

// PASO 1 → PASO 2
function siguientePaso() {
  let inputs = document.querySelectorAll("#paso1 input");
  let valido = true;

  inputs.forEach(input => {
    if (input.value === "") {
      input.style.border = "2px solid red";
      valido = false;
    } else {
      input.style.border = "";
    }
  });

  if (valido) {
    document.getElementById("paso1").style.display = "none";
    document.getElementById("paso2").style.display = "block";
    document.getElementById("pasoTexto").innerText = "2 de 2";
  }
}

// ENVÍO FINAL
document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("mensaje").innerText = "✅ Datos enviados correctamente";
});

// ANIMACIÓN AL HACER SCROLL
window.addEventListener("scroll", function() {
  let items = document.querySelectorAll("#listaRazones li");

  items.forEach((item, index) => {
    let posicion = item.getBoundingClientRect().top;

    if (posicion < window.innerHeight - 50) {
      setTimeout(() => {
        item.classList.add("visible");
      }, index * 200);
    }
  });
});

// BOTÓN MÁS INFORMACIÓN (ABRE MODAL)
function mostrarMas() {
  let modal = new bootstrap.Modal(document.getElementById('modalInfo'));
  modal.show();
}

// CLICK EN TARJETAS
document.querySelectorAll(".card-hover").forEach(card => {
  card.addEventListener("click", () => {
    alert("Has seleccionado esta sección");
  });
});

let slides = [
  {
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    texto: "He aprendido nuevas habilidades gracias a los laboratorios modernos.",
    nombre: "Abigail Acosta",
    carrera: "Medicina - Huancayo"
  },
  {
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    texto: "La universidad me preparó para el mundo laboral.",
    nombre: "Carlos Pérez",
    carrera: "Ingeniería - Lima"
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    texto: "Experiencia internacional y grandes docentes.",
    nombre: "María López",
    carrera: "Administración - Arequipa"
  }
];

let index = 0;

// MOSTRAR SLIDE
function mostrarSlide(i) {
  document.getElementById("imagen").src = slides[i].img;
  document.getElementById("texto").innerText = slides[i].texto;
  document.getElementById("nombre").innerText = slides[i].nombre;
  document.getElementById("carrera").innerText = slides[i].carrera;

  document.querySelectorAll(".punto").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".punto")[i].classList.add("active");
}

// BOTONES
function next() {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}

function prev() {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
}

function irSlide(i) {
  index = i;
  mostrarSlide(index);
}

// AUTO SLIDE
setInterval(() => {
  next();
}, 4000);

// INICIAR
mostrarSlide(index);

// Arreglo de datos que simula la base de datos de los testimonios
const testimonials = [
    {
        image: "https://via.placeholder.com/600x400/D3D3D3/666666?text=Foto+Estudiante+Medicina",
        quote: "He descubierto nuevas formas de aprendizaje gracias a salones y laboratorios de última generación que me permitieron explorar y prepararme para mi futura carrera en salud. Los docentes nos inspiran a esforzarnos para lograr nuestros objetivos académicos y humanitarios.",
        name: "Abigail Acosta",
        career: "Estudiante de Medicina Humana",
        campus: "Campus Huancayo"
    },
    {
        image: "https://via.placeholder.com/600x400/A9A9A9/FFFFFF?text=Foto+Estudiante+Ingenieria",
        quote: "La metodología práctica desde el primer día me dio la confianza para enfrentar los retos del mundo laboral actual. La universidad me brindó el soporte tecnológico que necesitaba.",
        name: "Carlos Mendoza",
        career: "Estudiante de Ingeniería Civil",
        campus: "Campus Lima"
    }
];

let currentIndex = 0;

// Seleccionamos los elementos del DOM que vamos a modificar
const imageEl = document.querySelector('.image-section img');
const quoteEl = document.querySelector('.quote-card p');
const nameEl = document.querySelector('.author-card h4');
const careerEl = document.querySelector('.career');
const campusEl = document.querySelector('.campus');
const dots = document.querySelectorAll('.dot');
const slide = document.querySelector('.slide');

// Función principal para cambiar de testimonio
function updateCarousel(index) {
    // 1. Ocultar momentáneamente para reiniciar la animación CSS
    slide.classList.remove('active');
    
    // 2. Usar un pequeño timeout para que el DOM registre el cambio de clase
    setTimeout(() => {
        // Reemplazar textos e imágenes con los datos del arreglo
        imageEl.src = testimonials[index].image;
        quoteEl.textContent = testimonials[index].quote;
        nameEl.textContent = testimonials[index].name;
        careerEl.textContent = testimonials[index].career;
        campusEl.textContent = testimonials[index].campus;

        // Actualizar el estado visual de los "puntos" (dots)
        dots.forEach(dot => dot.classList.remove('active'));
        if(dots[index]) dots[index].classList.add('active');

        // Volver a mostrar activando la animación
        slide.classList.add('active');
    }, 150); 
}

// Funciones asignadas a los botones en el HTML (onclick)
function nextSlide() {
    currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateCarousel(currentIndex);
}

function currentSlide(index) {
    currentIndex = index;
    updateCarousel(currentIndex);
}

// Funcionalidad para los botones flotantes del Footer

function toggleAccessibility() {
    alert("Activando panel de accesibilidad visual y de lectura.");
}

function openChat() {
    alert("Abriendo el chat en vivo con un asesor de la Universidad Continental.");
}

function openWhatsApp() {
    // Redirige a un API de WhatsApp
    let numero = "51999999999"; 
    let mensaje = "Hola, necesito información.";
    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensaje);
    
    window.open(url, '_blank');
}