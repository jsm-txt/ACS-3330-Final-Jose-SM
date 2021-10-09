import './StarWars.css'
function CharachterDisplay(props){
  // const example = [{name:"omg"},{name:"lol"}]
  const list = props
  const display = [ ]
  const films = [<div> Films: </div>]
  console.log(list)
  // for(let x in list){
  //   display += list[x].name + " "
  // }
  

  
  for (let x in list) {
    display.push(<div><header>{list[x].name}</header>
    <small>Heigh: {list[x].height}</small><br></br>
      <small>Mass:{list[x].mass}</small><br></br>
      <small>Hair: {list[x].hair_color}</small><br></br>
      <small>Eye Color:{list[x].eye_color}</small><br></br>
      <small>Homeworld:{list[x].world}</small><br></br>
    </div>)
    for (let y in list[x].values ){
      films.push(
      <small> {list[x].values[y].title}, </small>
      )
    }

  }
  return (
    <div class = "col-6">
      <h4>Save List</h4>
      {display}
      {films}
    </div>
  )
}
export default CharachterDisplay