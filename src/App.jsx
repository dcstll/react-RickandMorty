
//PARA PODER CARGAR LOS DATOS APENAS ABRA LA PAGINA: PERMITE EJECUTAR LOS COMPONENTES DE LOGICA AL INICIO

import CharacterList from "./components/CharacterList";


function App() {  // COMPONENTE BASICO DE REACT - ATAJO RFCE
  return <div className='bg-dark text-white'>
    <h1 className='text-center display-1 py-4'>Rick and Morty</h1>
    <CharacterList/>
  </div>;
  
}

export default App