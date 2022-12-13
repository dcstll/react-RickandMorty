import { useEffect, useState } from "react"; //USESTATE = VARIABLES DE REACT
import Character from "./Character";

function NavPage(props){
  return(
    <div className="d-flex justify-content-between align-items-center">
      <p>Page: {props.page}</p>
      <button className="btn btn-primary btn-sm "
        onClick={() => props.setPage(props.page + 1)}
      >
        Page {props.page + 1}
      </button>
    </div>
  )
}

function CharacterList() {
    const [characters, setcharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)

  useEffect(()=> { // console.log('cargo') PARA VERIFICAR SI SE CONECTA A LA CONSOLA
    async function fetchData() { //SE LE COLOCA ASYNC A LA FUNCION PARA PODER AGREGAR EL AWAIT DE LA PROMESA
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`); // PETICION A OTRO SERVIDOR - BACKEND DE LA API (ES ASINCRONO)
      const data = await response.json();
      setLoading(false)
      setcharacters(data.results);
    }
    
    fetchData()
  }, [page]);//AL DEJAR EL ARREGLO VACIO NO VA A CAMBIAR, SOLO SE EJECUTA UNA VEZ

  if (loading){
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div className="container">

      <NavPage page={page} setPage={setPage}/>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="row">
        {characters.map((character) =>{
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
          );
        })}
      </div>
      )}

      <NavPage page={page} setPage={setPage}/>
    </div>
  )
}

export default CharacterList