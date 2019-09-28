import { combineReducers } from 'redux';

// App reducers
import coins from '../../../reducers/coinsReducer';

// Shared reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  coins,
  device
});

export default rootReducer;
