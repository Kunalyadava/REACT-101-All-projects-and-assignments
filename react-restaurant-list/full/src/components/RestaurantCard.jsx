import React from "react";

const RestaurantCard = ({
  id,
  restaurantName,
  image,
  categories,
  min,
  cost_for_one,
  rating,
  reviews,
  votes,
  payment,
  is_favorite,
}) => {
  const newArray = Object.entries(payment).map((item) =>
    item[1] ? item[0] : ""
  );
  // console.log(newArray);
  return (
    <div style={{ border: "2px solid black", margin: "10px" }} data-testid = "card-item">
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <img src={image} alt="rest Image" width="200px" />
        </div>
        <div style={{ flex: 2 }}>
          <h3 data-testid = "card-title">{restaurantName}</h3>
          <p>{categories.join(",")}</p>
          <p>Cost for One :{cost_for_one} </p>
          <p>Accepts:{newArray.join(",")}</p>
        </div>
        <div>
          <div
            style={{
              backgroundColor: "green",
              padding: "10px",
              borderRadius: "5px",
            }}
            data-testid = "card-rating"
          >
            {rating}
          </div>
          <div>{votes} Votes</div>
          <div>{reviews} Reviews</div>
        </div>
      </div>
    </div>
  );
};
export { RestaurantCard };

// [cash,card,upi]
//