import PerfilLogo from '/perfil1.jpg'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">


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
        </div>
      </div>
    </div>
  )
}

export default App
