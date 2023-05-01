import { useState } from "react";
import data from "../data.json"
import { RestaurantCard } from "./RestaurantCard";

// const initState = {};
let res = []

const RestaurantDetails = () => {
  const [restData, setRestData] = useState(data);
  const [filterRating, setFilterRating] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("all");
  const [sortMethod, setSortMethod] = useState(null);

  const handleRating = (rating) => {
    setFilterRating(rating);
  };
  const handlePayment = (paymentMethod) => {
    setPaymentMethod(paymentMethod);
  };
  const handleSort = (order) => {
    setSortMethod(order);
  };
  const filterLogic = ({ rating, payment }) => {
    const { cash, card, upi } = payment;
    let paymentCondition = true;
    if (paymentMethod === "cash") {
      paymentCondition = cash; ///true/false
    } else if (paymentMethod === "card") {
      paymentCondition = card; //true/false
    } else if (paymentMethod == "upi") {
      paymentCondition = upi;
    }

    return rating >= filterRating && paymentCondition;
    // && paymentMethod;
  };
  return (
    <>
      <h1>RestaurantDetails</h1>
      {/* rating buttons */}
      {[4, 3, 2, 1, 0].map((item) => {
        return (
          <button
            data-testid={`rating-${item}`}
            key={item}
            onClick={() => handleRating(item)}
          >
            {item == 0 ? "All" : `${item} and above`}
          </button>
        );
      })}
      {["card", "cash", "upi", "all"].map((item) => {
        return (
          <button
            data-testid={`filter-${item}`}
            key={item}
            onClick={() => handlePayment(item)}
          >
            {item}
          </button>
        );
      })}
      {["asc", "desc"].map((item) => {
        return (
          <button
          key={item}
            data-testid={`sortBy-${item}`}
            onClick={() => handleSort(item)}
          >
            {item}
          </button>
        );
      })}
      {restData &&
        restData
          ?.filter(filterLogic)
          .sort((a, b) => {
            if (sortMethod == null) {
              return 0;
            } else if (sortMethod == "asc") {
              return a.rating - b.rating;
            } else if (sortMethod == "desc") {
              return b.rating - a.rating;
            }
          })
          .map((item, index) => {
            return (
              <div key={item.id}>
                <RestaurantCard  {...item} />;
              </div>
            );
          })}
    </>
  );
};
export { RestaurantDetails };