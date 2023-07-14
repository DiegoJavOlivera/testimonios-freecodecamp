import './App.css';
import Testimonio from './Componentes/Testimonio';



function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto dicen nuestros alumnos sobre nosotros</h1>
        <Testimonio 
        nombre = 'Micaela Kloker'
        pais = 'Alemania'
        imagen = 'mica'
        cargo = 'Ingeniera de software'
        empresa = 'Spotify' 
        testimonio = 'El bootcamp de JavaScript superó mis expectativas. Los instructores son profesionales de primer nivel y el enfoque práctico me permitió adquirir habilidades rápidamente. Recomiendo este programa a cualquiera que quiera acelerar su carrera en desarrollo web.' />
        <Testimonio
        nombre = 'Noelia Linda'
        pais = 'Argelia'
        imagen = 'noe'
        cargo = 'Tecnica en Programacion'
        empresa = 'Conicet' 
        testimonio = 'El bootcamp de JS fue una experiencia transformadora. Aprendí los fundamentos de JavaScript y su aplicación en el desarrollo web. Los instructores expertos y el enfoque práctico me permitieron adquirir habilidades técnicas sólidas y trabajar en proyectos reales. Recomiendo este bootcamp a aquellos que buscan una formación de calidad en JavaScript.' />
        <Testimonio
        nombre = 'Sebastian Basses'
        pais = 'England'
        imagen = 'sebas'
        cargo = 'Analista en Sistemas'
        empresa = 'Netflix' 
        testimonio = 'El bootcamp de JavaScript superó mis expectativas. Los profesores altamente capacitados y su enfoque práctico hicieron que el aprendizaje fuera efectivo y gratificante. Agradezco a los instructores por su dedicación y paciencia. Recomiendo este bootcamp a todos los apasionados del desarrollo web que deseen mejorar sus habilidades en JavaScript.' />
      </div>
    </div>
  );
}

export default App;
