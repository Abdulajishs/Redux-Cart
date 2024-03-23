import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './store/manageCart-actions';

let isIntial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.cart.show);
  const cart = useSelector(state => state.manage);
  const notification = useSelector(state => state.cart.notification)

  useEffect(() => {
    if (isIntial) {
      isIntial = false;
      return
    }
    if (cart.changed) {
      dispatch(sendCartData(cart))
    }
  },[cart, dispatch])

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  return (
    <Fragment>
      {notification && <Notification status={notification.status} message={notification.message} title={notification.title} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
