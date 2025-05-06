
import { addToCart } from '../redux/action';
import { useDispatch } from 'react-redux';


function Main() {
  const dishpatch = useDispatch()
  const product={
    name:'I phone',
    type:'mobile',
    price:'10000',
    color:'red'
  }
  return (
    <div >
    
      <button onClick={() => dishpatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default Main;
