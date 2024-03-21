import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = [
    {title:'Test',
    price: 6,
    description :'This is a first product - amazing!'},
    // {title:'Test2',
    // price:3,
    // description :'This is a second product - amazing!'},
    // {title:'Test3',
    // price:8,
    // description :'This is a third product - amazing!'},
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
          {
          products.map(product => (
            <ProductItem 
            key={product.title} 
            title={product.title}
            price={product.price}
            description={product.description}
            />
          ))
          }
      </ul>
    </section>
  );
};

export default Products;
