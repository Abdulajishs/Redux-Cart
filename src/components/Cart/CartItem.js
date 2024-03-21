import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { manageAction } from '../../store/manageCart';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch()
  const decrementHandler = () =>{
    dispatch(manageAction.addItemToCart())
  }
  const incrementHandler = () =>{
    dispatch(manageAction.removeItemToCart())
  }
  return (
    <>
    {quantity >  0 && 
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${Number(total).toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button  onClick={decrementHandler}>-</button>
          <button onClick={incrementHandler}>+</button>
        </div>
      </div>
    </li>
    }
    </>
  );
};

export default CartItem;
