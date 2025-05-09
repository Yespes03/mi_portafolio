import PerfilLogo from '/perfil1.jpg'
import './index.css'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">

      <div className="p-6 flex-grow">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-22">
          Hola, bienvenidos Soy Alejandro Vargas, desarrollador web
        </h1>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src={PerfilLogo}
            alt="perfil1"
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />

          <div>
            <h1 className="text-4xl font-bold mb-2">Alejandro Vargas Cardoso</h1>
            <h2 className="text-xl text-gray-400 mb-4">Desarrollador de Software</h2>
            <p className="text-gray-300 mb-6">
              Hola, mi nombre es Alejandro. Tengo 19 años y estudio Análisis y Desarrollo de Software en el SENA.
              Me apasiona crear soluciones digitales, aprender nuevas tecnologías y trabajar en equipo.
            </p>

            <a
              href="/mi_cv.pdf"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
              download
            >
              Descargar CV
            </a>

            <div className="mt-18 max-w-5xl mx-auto px-0">
              <h2 className="text-3xl font-bold text-left mb-10 text-white">Habilidades</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
                {[
                  { name: 'HTML', img: '/html.webp' },
                  { name: 'CSS', img: '/csss.svg' },
                  { name: 'JavaScript', img: '/java.webp' },
                  { name: 'React', img: 'react.png' },
                  { name: 'PHP', img: '/phpp.png' },
                  { name: 'MAMP', img: 'mampp.png' },
                  { name: 'XAMPP', img: 'xampp.svg' },
                  { name: 'Node.js', img: 'nodeee.png' },
                  { name: 'MySQL', img: 'mylqq.png' },
                  { name: 'Tailwind', img: '/tailwind.png' },
                ].map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center">
                    <img src={skill.img} alt={skill.name} className="w-16 h-16 object-contain mb-2" />
                    <span className="text-white text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Proyectos */}
<div className="mt-11 max-w-6xl mx-auto px-6">
  <h2 className="text-3xl font-bold text-center mb-10">Mis Proyectos</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      {
        nombre: "Alejandro Vargas",
        titulo: "Proyecto Carrusel",
        descripcion: "Es una página web con un carrusel de imagenes.",
        imagen: '/pro.png',
        github: "https://github.com/Yespes03/Carrusel"
      },
      {
        nombre: "Alejandro Vargas",
        titulo: "Proyecto Portafolio",
        descripcion: "Es una página web completa de un portafolio con muchos elementos y diseños.",
        imagen: "/porta.png",
        github: "https://github.com/Yespes03/Portafolio_2"
      },
      {
        nombre: "Alejandro Vargas",
        titulo: "Proyecto Juego De Memoria",
        descripcion: "Es un juego donde toca encontrar la pareja de cada número ",
        imagen: "/juego.png",
        github: "https://github.com/Yespes03/Juego_memoria"
      }
    ].map((proyecto, index) => (
      <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
        <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-white">{proyecto.titulo}</h3>
          <p className="text-sm text-gray-300 mb-2">{proyecto.descripcion}</p>
          <p className="text-xs text-gray-400 mb-4">Creado por: {proyecto.nombre}</p>
          <a href={proyecto.github} target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
            Ver en GitHub
          </a>
        </div>
      </div>
    ))}
  </div>
</div>


      <footer className="bg-gray-900 text-white py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Alejandro Vargas Cardoso</h2>
          <p className="text-sm mb-4">alejandrovargas@email.com</p>
          

          <div className="flex justify-center gap-6 mb-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="https://wa.me/+573051934567" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
          </div>

          <p className="text-xs text-gray-400">&copy; 2025 Alejandro Vargas. Todos los derechos reservados.</p>
        </div>
        <div className="flex justify-center gap-4 mt-2">
                <a href="https://github.com/Yespes03/mi_portafolio" className="text-gray-600 hover:text-blue-500">
                  <span role="img" aria-label="github">⚡</span> GitHub
                </a>
              </div>
      </footer>

      
    </div>
    
  )
}

export default App
