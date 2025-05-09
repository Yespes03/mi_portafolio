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

          <div className="mt-16 px-6">
  <h2 className="text-3xl font-bold text-left mb-10 text-white">Habilidades</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
    {[
      { name: 'HTML', img: '/htmll.png' },
      { name: 'CSS', img: '/css.png' },
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
  )
}

export default App
