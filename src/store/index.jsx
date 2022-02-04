import { createStore, applyMiddleware,} from 'redux'
import reducer from '../store/reducer/cartReducer.jsx'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import ShoppingCart from '../components/ShoppingCart.jsx';

const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(thunk))
); 
export default store ;