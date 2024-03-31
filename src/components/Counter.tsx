import { useState } from "react"

export const Counter = () => {
  //sin snipet
  const [ Count, setCount] = useState(10);
  //useState //snipet
  const increaceBy = (value: number) =>{
    setCount(Count +value);
  }
  return (
    <>
      <h3>Contador: <small>{ Count }</small></h3>
      <div>
        <button onClick={ () => increaceBy(+1)}>+1</button>
        &nbsp;
        <button onClick={ () => increaceBy(-1)}>-1</button>
      </div>
    </>
  )
}

export default Counter
