import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector(state => state.manage.items)
  // const price = useSelector(state => state.manage.price)
  // const total = quantity * price
  console.log(items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item)=>(
        <CartItem
          // item={{ title: 'Test Item', quantity: quantity, total: total, price: price }}
          item = {item}
        />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
