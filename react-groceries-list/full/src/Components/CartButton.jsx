
const CartButton = ({handleCount,count}) => {   
  return <>

  <div className="change_quantity_container">
      <button data-cy="dec_btn" onClick={()=>handleCount(-1)}>-</button>
      <p className="quantity">{count}</p>
      <button data-cy = "inc_btn" onClick={()=>handleCount(+1)}>+</button>
  </div>
  </>;
};
export default CartButton
