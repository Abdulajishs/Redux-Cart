import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { cartAction } from './store/cart-slice';

let isIntial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector(state => state.cart.show);
  const cart = useSelector(state => state.manage);
  const notification = useSelector(state=> state.cart.notification)
 
  useEffect(() => {
    const sendCartData = async () => {
      dispatch(cartAction.showNotification({
        status : "pending",
        title : "Sending...",
        message : "Sending cart data!"
      }))
      try {
        const response = await fetch("https://react-http-4b164-default-rtdb.firebaseio.com/cart.json", {
          method: "PUT",
          body: JSON.stringify(cart),
        })
        // const data = await response.data
        if (response.ok) {
          dispatch(cartAction.showNotification({
            status : "success",
            title : "Success!",
            message : "Sending cart  data successfully!"
          }))
        }else{
          throw new Error("Sending cart  data failed!")
        }
      }
      catch (error) {
        console.log(error.message);
        dispatch(cartAction.showNotification({
          status : "error",
          title : "Error",
          message : "Sending cart  data failed!"
        }))
      }
    }
    if (isIntial) {
      isIntial = false;
      return
    }
    sendCartData()
  }
    , [cart,dispatch])

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
