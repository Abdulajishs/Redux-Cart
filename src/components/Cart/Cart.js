import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const quantity = useSelector(state => state.manage.quantity)
  const price = useSelector(state => state.manage.price)
  const total = quantity * price
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: quantity, total: total, price: price }}
        />
      </ul>
    </Card>
  );
};

export default Cart;
