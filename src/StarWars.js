import { useState } from 'react'

function StarWars() {
  const [characterId, setCharacterId] = useState(0)
  const [data, setData] = useState(null)

  let loadData;
  if (data === null) {
    loadData = <br></br>;
  } else {
    loadData = <div className="display">
      <h3> {data.name}</h3>
      <small>Heigh: {data.height}</small><br></br>
      <small>Mass:{data.mass}</small><br></br>
      <small>Hair: {data.hair_color}</small><br></br>
      <small>Eyes Color:{data.eye_color}</small><br></br>

    </div>;
  }

  async function fetchStarWars() {
    const path = `https://swapi.dev/api/people/${characterId}/`
    const res = await fetch(path)
    const json = await res.json()
    console.log(json)

    const name = json.name
    const height = json.height
    const mass = json.mass
    const hair_color = json.hair_color
    const eye_color = json.eye_color

    setData({
      name,
      height,
      mass,
      hair_color,
      eye_color
    })
  }

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        fetchStarWars();
      }}>
        <input type="text" value={characterId}
          onChange={e => setCharacterId(e.target.value)} />
        <button>
          Submit
        </button>
      </form>
      {/* {characterId} */}
      <br></br>
      {loadData}
      
    </div>
  )
}

export default StarWars