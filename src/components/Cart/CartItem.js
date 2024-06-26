import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { manageAction } from '../../store/manageCart-slice';

const CartItem = (props) => {
  const {id, name, quantity, totalPrice, price } = props.item;
  const dispatch = useDispatch()
  const addToCart = () =>{
    dispatch(manageAction.addItemToCart(props.item))
  }
  const removeFromCart = () =>{
    dispatch(manageAction.removeItemFromCart(id))
  }
  return (
    <li className={classes.item} >
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${Number(totalPrice).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${Number(price).toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button  onClick={removeFromCart}>-</button>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </li>
  )
};

export default CartItem;
