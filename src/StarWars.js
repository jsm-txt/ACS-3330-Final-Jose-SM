import { useState } from 'react'

function StarWars() {
  const [characterId, setCharacterId] = useState(0)
  const [data, setData] = useState(null)

  let loadData;
  if (data === null) {
    loadData = <br></br>;
  } else {
    loadData = data.name;
  }

  async function fetchStarWars() {
    const path = `https://swapi.dev/api/people/${characterId}/`
    const res = await fetch(path)
    const json = await res.json()
    console.log(json)

    const name = json.name
    const birth_year  = json.birth_year


    setData({
      name,
      birth_year

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