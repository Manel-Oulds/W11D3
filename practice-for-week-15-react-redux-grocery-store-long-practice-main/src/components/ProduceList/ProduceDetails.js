
import { useDispatch } from 'react-redux';
import { populateProduceToCart } from '../../store/cart';

function ProduceDetails({ produce }) {
  const dispatch = useDispatch();
  const cartItem = {};
function handller(produce){
  return(e)=>{
    // debugger
    e.preventDefault();
  dispatch(populateProduceToCart(produce))
}}
  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
        onClick={handller(produce)}>
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;