import Card from './Card';
import { useState } from 'react';
const InputTags=()=>{
    const [name, setName] = useState("")
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [powerLevel, setPowerLevel] = useState(0)
    const [hero, setHero] = useState([])
    const [display, setDisplay] = useState([])

    const addHero = (e) => {
        e.preventDefault()
        const payload = {
            name, height, weight, powerLevel
        }
        setHero( hero.concat(payload))
    }
    const mostPowerfulHero= () => {
        var list = hero.sort((a,b) => b.powerLevel - a.powerLevel)
        setDisplay([list[0]])
    }
    return(
        <>
        <form>
            <input data-testid="input-name" type="text" value = {name} onChange = {(e) => setName(e.target.value)}/>
            <input data-testid="input-height" type="text" value = {height} onChange = {(e) => setHeight(e.target.value)}/>
            <input data-testid="input-weight" type="text"  value = {weight} onChange = {(e) => setWeight(e.target.value)} />
            <input data-testid="input-power" type="text"value = {powerLevel} onChange = {(e) => setPowerLevel(e.target.value)}/> 
            <button onClick={addHero} disabled = {name.length<1 || height.length<1 || weight.length<1 || powerLevel.length<1 } data-testid="add-button">Add SuperHero</button>
        </form>
        <button onClick= {mostPowerfulHero}data-testid="most-powerfull">Most Powerful Superhero</button>
        <button onClick= {() => setDisplay(hero)}data-testid="all-superheroes">Show All</button>
        <Card data = {display}/>
        </>
    )
}

export default InputTags;
