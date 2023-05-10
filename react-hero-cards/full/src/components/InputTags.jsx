import { useState } from 'react';
import Card from './Card';
const InputTags=()=>{
    const [name, setName] = useState("")
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [powerLevel, setPowerLevel] = useState(0)
    const [heroData, setHeroData] = useState([])
    const [displayData, setDisplayData] = useState(heroData)

    const addHero = (event) => {
        event.preventDefault()
        const payload = {
            name, height, weight, powerLevel
        }
        setHeroData([ ...heroData, payload])
    }

    const mostPowerfulHero= () => {
        var list = heroData.sort((a,b) => b.powerLevel - a.powerLevel)
        setDisplayData([list[0]])
    }

    return(
        <>
        <form>
            <input data-testid="input-name" type="text" value = {name} onChange = {(e) => setName(e.target.value)} />
            <input data-testid="input-height" type="text" value = {height} onChange = {(e) => setHeight(e.target.value)} />
            <input data-testid="input-weight" type="text" value = {weight} onChange = {(e) => setWeight(e.target.value)} />
            <input data-testid="input-power" type="text" value = {powerLevel} onChange = {(e) => setPowerLevel(e.target.value)} /> 
            <button onClick = {addHero} disabled = {!name || !height || !weight || !powerLevel } data-testid="add-button">Add SuperHero</button>
        </form>
        <button onClick = {mostPowerfulHero} data-testid="most-powerfull">Most Powerful Superhero</button>
        <button onClick = {() => setDisplayData(heroData)} data-testid="all-superheroes">Show All</button>
        <Card data = {displayData} />
        </>
    )
}

export default InputTags;
