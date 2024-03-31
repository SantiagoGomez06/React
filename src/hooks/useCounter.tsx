
import {useState} from 'react'

interface Options{
  initValue?: number;
}
const useCounter = ({initValue = 0}: Options) => {
  const [ Count, setCount] = useState(initValue);
  const increaceBy = (value: number) =>{
    const newValue: number = Count + value;
    if(newValue < 0) return;
    
    setCount(Count +value);
  }
  return {
    //properties
    Count,

    //Methods
    increaceBy,
  }
}

export default useCounter

