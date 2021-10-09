import { useState } from 'react'
import CharachterDisplay from './CharacterDisplay'
import './StarWars.css';

function StarWars() {
  const [characterId, setCharacterId] = useState(0)
  const [data, setData] = useState(null)
  const [list, setList] = useState(null)
  const [home, setWorld] = useState(null)

  let loadData;
  if (data === null) {
    loadData = <br></br>;
  } else if(list === null){
    loadData = <div className="display">
      <h3> {data.name}</h3>
      <small>Heigh: {data.height}</small><br></br>
      <small>Mass:{data.mass}</small><br></br>
      <small>Hair: {data.hair_color}</small><br></br>
      <small>Eye Color:{data.eye_color}</small><br></br>
      <form onSubmit={e => {
          e.preventDefault();
          setList([data]);
        }}>
        <button className="save" type='submit'>
          Save
        </button>
      </form>
    </div>;
  }else{
    loadData = <div className="display">
      <h3> {data.name}</h3>
      <small>Heigh: {data.height}</small><br></br>
      <small>Mass:{data.mass}</small><br></br>
      <small>Hair: {data.hair_color}</small><br></br>
      <small>Eye Color:{data.eye_color}</small><br></br>
      <form onSubmit={e => {
          e.preventDefault();
          setList([...list, data]);
        }}>
        <button className="save" type='submit'>
          Save
        </button>
      </form>
    </div>;
  }
  if(list !== null){
  }
  
  
  async function fetchStarWars() {
    const path = `https://swapi.dev/api/people/${characterId}/`
    const res = await fetch(path)
    const json = await res.json()

    const name = json.name
    const height = json.height
    const mass = json.mass
    const hair_color = json.hair_color
    const eye_color = json.eye_color
    const homeworldPath = json.homeworld

    async function fetchHomeworld(){
      const path = homeworldPath
      const res = await fetch(path)
      const json = await res.json()
      const world = json.name
      setWorld(world);
      

      const films  = json.films
      // Get an array of Promises, these are the responses
      const filmsRes = await Promise.all(json.films.map(film => fetch(film)))

      // Resolve the responses to JSON
      const filmsJSON = await Promise.all(filmsRes.map(res => res.json()))

      console.log(filmsJSON)
      // From here you have a list of JSON objects to work with
      const values = await Promise.all(filmsJSON)

      setData({
        name,
        height,
        mass,
        hair_color,
        eye_color,
        world,
        values
      })
    }
    fetchHomeworld()

  }


  return (
    <div className="starwars-container">
      <div class="row">
        
        <div class="col-6 p-2">
          <form onSubmit={e => {
            e.preventDefault();
            fetchStarWars();
          }}>
            <input className="input" type="text" value={characterId}
              onChange={e => setCharacterId(e.target.value)} />
            <button className="button">
              Submit
            </button>
          </form>
          {/* {characterId} */}
          
          {loadData}
        </div>
        {list && <CharachterDisplay {...list} />}
      </div>
    </div>
  )
}

export default StarWars