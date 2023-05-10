

export default function Home() {

  return (
    <div>

      <div className="mainContainer">
        {/* Map the below the div against your books data */}
        <div  className="bookCard" >
          <h5 className = "title" > Title:  </h5>
          <div className = "price" > Price: </div>
          <div className = "author" > Author:</div>
        </div>
      </div>
      
    </div>
  )
}
