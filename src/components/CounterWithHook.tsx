import useCounter from "../hooks/useCounter"


export const CounterWithHook = () => {
  const {Count, increaceBy  } = useCounter({
    
  });
  
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

export default CounterWithHook
