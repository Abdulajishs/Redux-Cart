import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartAction } from '../../store/cart-slice';

const CartButton = (props) => {
  const quantity = useSelector(state=>  state.manage.quantity)
  const dispatch = useDispatch()
  const cartHandler = () =>{
    dispatch(cartAction.showCart())
  }
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
