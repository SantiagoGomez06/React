export const BasicTypes = () => {

  const name: string = "Santiago";
  const age: number = 32;
  const isActive: boolean = true;
  const skills: string[] = ['C# ', 'React ', 'Flutter ']; 
  skills.push('nest ')
  
  return (
    <>
      <h3>Tipos Basicos</h3>
      {name} <br /> 
      {age} <br /> 
      {isActive ? 'true' : 'false'}
      <br />

      {skills.join(', ')}
    </>
  )
}

export default BasicTypes
