function CharachterDisplay(props){
  const example = [{name:"omg"},{name:"lol"}]
  const list = props
  let display= '';
  console.log(list)
  for(let x in list){
    display += list[x].name + " "
  }
  // {list.map(item => (
  //         <li>{item.name}</li>
  //       ))}
  return (
    <div>
      <ul>
        {display}
        
      </ul>
    </div>
  )
}
export default CharachterDisplay