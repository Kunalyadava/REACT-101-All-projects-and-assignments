const Card=({data=[]})=>{
    return (
        <div data-testid="data-list">
            {data.map((i)=>{
                return(
                    <div data-testid="superhero-list">
                        {/*All the content of the card has to be added over here*/}
                        <div> {i.name} </div>
                        <div> {i.weight} </div>
                        <div> {i.height} </div>
                        <div> {i.powerLevel} </div>
                        {/* <div> {i.hero} </div>
                        <div> {i.display} </div> */}
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
