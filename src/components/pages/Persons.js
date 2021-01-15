import Person from '../Person'

function Persons({ image ,name , desc}) {
    return (
        <div>
            <Person name={name} desc={desc} image={image}/>
        </div>
    )
}

export default Persons
