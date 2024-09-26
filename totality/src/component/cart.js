import { useSelector, useDispatch } from 'react-redux'
import { clearCart, removeItems } from '../utils/cartSlice'
function Cart () {
  const dispatch = useDispatch()
  const CartItem = useSelector(store => store.cart.items)
  console.log(CartItem)
  const remove=()=>{
    dispatch(removeItems());
  }
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  const Cart = ({ id,title,location,type,price }) => {
    return (
      <>
      <div className='cart'>
      <h3>{'Name of the person'}</h3>
        {/* <img src={sourceImagePath} alt="scr"></img>  */}
        <br></br>
        {/* Completing */}

        <h3 className='pink'>{title}</h3>
        <h3 className='pink'>{'24/11/2024'}</h3>
         <h3 className='pink'>{location}</h3>
        <h3 className='pink'>{type}</h3>
        <h3 className='pink'>{price}</h3>
        <button className='remove' onClick={remove}>🗑️</button>
        {/* <button className='remove' onClick={remove}>🗑️</button> */}
       

      </div>
      </> 
    )
  }
  return (
    <div>
      {CartItem.map(res => {
        return <Cart {...res} />
      })}
      <button className='buttonclear' onClick={handleClearCart}>
        clear-Cart
      </button>
    </div>
  )
}
export default Cart