const Card=({data=[]})=>{
    return (
        <div data-testid="data-list">
            {data.map((item)=>{
                return(
                    <div data-testid="superhero-list">
                        <div> {item.name} </div>
                        <div> {item.weight} </div>
                        <div> {item.height} </div>
                        <div> {item.powerLevel} </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
