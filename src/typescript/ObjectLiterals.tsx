interface Person {
    fullName: string;
    age: number;
    lastName: string;

    address: Address;
}
interface Address{
    country: string;
    town: string;
}

export const ObjectLiterals = () => {
    const person: Person = {
        fullName: 'Santiago ',
        lastName: "Gómez",
        age: 32,
        address: {
            country: "Colombia",
            town: "La Estrella"
        }
    }

  return (
    <>
        <h3>Objetos Literales</h3>
        <pre>
        {JSON.stringify(person, null, 2)}
        </pre>
    </>
  )
}

export default ObjectLiterals
