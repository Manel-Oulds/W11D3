const ADDITEM="cart/ADDITEM"
const REMOVE="cart/REMOVE"
export function populateProduceToCart(item) {
    return {
      type: ADDITEM,
      item
    };
  }
  // export function removeFromCart(item) {
  
  //     // type: REMOVE,
  //     delete(item)
      
    
  // }
export default function cartReducer(state = {}, action) {
    switch (action.type) {
      case ADDITEM:
        const newState = {};
       
          newState[action.item.id] = action.item;
       
        return {...state,...newState};
      default:
        return state;
    }
  }
  